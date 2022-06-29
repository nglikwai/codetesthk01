import React, { useEffect } from 'react'
import styled from 'styled-components'
import app from '../../redux/app'
import { App } from '../../type'
import * as R from 'ramda'



const Loader = () => {

    const direction = 'vertical'


    return (

        <Wrapper direction={direction}>
            {direction === 'vertical' && <Index></Index>}
            <Image />
            <Detail>
                <Name></Name>
                <Category></Category>
                {direction === 'vertical' &&
                    <Score>

                    </Score>
                }
            </Detail>
        </Wrapper>
    )
}

export default Loader


const Wrapper = styled(props => <div {...props} />)`
    display: flex;
    flex-direction: ${props => props.direction === 'vertical' ? 'row' : 'column'};
    >:not(:last-child){margin-bottom:${props => props.direction === 'vertical' ? '0px' : '8px'};};
    align-items: ${props => props.direction === 'vertical' ? 'center' : 'flex-start'};;
    padding: 10px 0;
    border-bottom:${props => props.direction === 'vertical' ? '1px' : '0px'} solid #ccc;
`
const Image = styled(props => <div {...props} />)`
    background: #ddd;
    border-radius: 1rem;
    width:70px;
    height: 70px;
    margin-right: ${props => props.direction === 'vertical' ? '8px' : '0px'};
`

const Name = styled.span`
    font-size: 0.8rem;
`

const Category = styled.span`
    color:#aaa;
    font-size: 0.8rem;

`

const Index = styled.span`
    color:#aaa;
    font-size: 1.4rem;
    padding-right:1rem;
    width:20px;
`

const Detail = styled.div`
display: flex;
flex-direction: column;
`

const Score = styled.div`
    font-size: 0.7rem;
    color:orange;
`