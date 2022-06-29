import type { NextPage } from 'next'
import styled from 'styled-components'
import SearchBox from '../src/components/SearchBox'
import Recommandation from '../src/components/Recommandation'
import { useTheme, useUpdateTheme } from '../src/ThemeProvider'
import { useEffect } from 'react'
import { fetchAppRequest } from '../src/redux/app'
import { useDispatch, useSelector } from 'react-redux'
import * as R from 'ramda'
import { State } from '../src/type'
import { fetchAppSuccess } from '../src/redux/app'
import Head from 'next/head'

type Props = {
  recommandation: []
}

const Home: NextPage<Props> = ({ recommandation = [] }) => {

  const { filter } = useSelector((state: State) => state.app)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAppSuccess({ apps: recommandation }))
  }, [recommandation])
  const theme = useTheme()
  const toggleDark = useUpdateTheme()

  return (
    <>
      <Head>
        <title>
          HK01
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1 , maximum-scale=1, user-scale=no" />
        <meta name='application-name' content='hk01' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='hk01 App' />
        <meta name='description' content='Best hk01 App in the world' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-config' content='/icons/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <link rel='apple-touch-icon' href='images/icon.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='images/icon.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='images/icon.png' />
        <link rel='apple-touch-icon' sizes='167x167' href='images/icon.png' />

        <link rel='icon' type='image/png' sizes='32x32' href='images/icon.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='images/icon.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/icons/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='images/icon.png' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:url' content='https://hk01.vercel.app' />
        <meta name='twitter:title' content='hk01 App' />
        <meta name='twitter:description' content='Best Memo App in the world' />
        <meta name='twitter:image' content='https://hk01.vercel.app' />
        <meta name='twitter:creator' content='@Likwai' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='HK01' />
        <meta property='og:description' content='Best Memo App in the world' />
        <meta property='og:site_name' content='Memo App' />
        <meta property='og:url' content='https://hk01.vercel.app' />
        <meta property='og:image' content='https://hk01.vercel.app/images/icon.png' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageWrapper theme={theme}>
        <SearchBox />
        <Recommandation app={recommandation} />
        <Recommandation
          app={R.isEmpty(filter) ? recommandation : filter}
          direction='vertical'
          pagnate={true} />
        {/* <button onClick={toggleDark}>Dark mode</button> */}
      </PageWrapper>
    </>
  )
}

export default Home

const PageWrapper = styled(props => <div {...props} />)`
  background-color: ${props => props.theme.backgroundColor};
  height:1000px;
`

export async function getServerSideProps() {
  const res = await fetch('https://rss.applemarketingtools.com/api/v2/us/apps/top-free/10/apps.json')
  const recommandation = await res.json()
  return { props: { recommandation: recommandation.feed.results } }
}