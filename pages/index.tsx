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
        <meta name="viewport" content="width=device-width, initial-scale=1 , maximum-scale=1" />

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