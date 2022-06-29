import React, { useState } from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useTheme } from '../../ThemeProvider'
import { App } from '../../type'
import AppCard from '../AppCard'
import { fetchAppRequest } from '../../redux/app'
import { useDispatch, useSelector } from 'react-redux'
import { State } from '../../type'
import Loader from '../Loader'
type Props = {
    app: App[]
    direction?: string
    pagnate?: boolean
}
const Recommandation = ({ app, direction = 'horizontal', pagnate = false }: Props) => {
    const theme = useTheme()
    const [currentPage, setCurrentPage] = useState(2)
    const dispatch = useDispatch()
    const { result, filter } = useSelector((state: State) => state.app)

    const fetchMoreData = () => {
        dispatch(fetchAppRequest(currentPage))
        setCurrentPage(currentPage + 1)
    }
    return (
        <Wrapper>
            {direction === 'horizontal' && <Title>推介</Title>}

            <AppWrapper direction={direction}>
                {app.map((item, index) => <AppCard key={item.id} app={item} direction={direction} index={index + 1} />)}
            </AppWrapper>
            {pagnate && <InfiniteScroll
                dataLength={app.length}
                next={fetchMoreData}
                hasMore={((result.length === filter.length || filter.length === 0) && result.length < 99) ? true : false}
                loader={<Loader />}
                endMessage={
                    <p style={{ textAlign: 'center', color: '#ccc' }}>
                        All
                    </p>
                }
            >
                <></>
            </InfiniteScroll>}

        </Wrapper>
    )
}

export default Recommandation

const Wrapper = styled.div`
    padding: 0 12px;
    border-bottom: 1px solid #ccc;

`

const AppWrapper = styled(props => <div {...props} />)`
    display: flex;
    flex-direction:${props => props.direction === 'vertical' ? 'column' : 'row'};
    >:not(:last-child){margin-right:1rem}
    overflow: scroll;
    
`

const Title = styled.h2`
    margin:12px 0;
`