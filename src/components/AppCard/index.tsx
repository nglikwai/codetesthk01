import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import app from '../../redux/app'
import { App } from '../../type'
import * as R from 'ramda'

type Props = {
    app: App
    direction?: string
    index: number
}

const AppCard = ({ app, direction = 'horizontal', index }: Props) => {




    return (

        <Wrapper direction={direction}>
            {direction === 'vertical' && <Index>{index}</Index>}
            <Image src={app.artworkUrl100} direction={direction} y={index % 10} />
            <Detail y={index % 10} direction={direction}>
                <Name>{app.name}</Name>
                <Category>{app.kind}</Category>
                {direction === 'vertical' &&
                    <Score>
                        {R.times(index => (<span key={index}>★</span>), 3)}
                        {R.times(index => (<span key={index}>☆</span>), 2)}
                        <span style={{ color: '#aaa', paddingLeft: '4px' }}>{`(${72})`}</span>
                    </Score>
                }
            </Detail>
        </Wrapper>
    )
}

export default AppCard

const slideIn = (direction: string) => keyframes`
    0% {transform: translateX(${direction === 'vertical' ? '-90px' : '0'}) translateY(${direction === 'vertical' ? '0' : '-20px'})}
    100% {transform: translateX(0px) translateY(0px)}
`

const Wrapper = styled(props => <div {...props} />)`
    display: flex;
    flex-direction: ${props => props.direction === 'vertical' ? 'row' : 'column'};
    >:not(:last-child){margin-bottom:${props => props.direction === 'vertical' ? '0px' : '8px'};};
    align-items: ${props => props.direction === 'vertical' ? 'center' : 'flex-start'};;
    padding: 10px 0;
    border-bottom:${props => props.direction === 'vertical' ? '1px' : '0px'} solid #ccc;

`
const Image = styled(props => <img {...props} />)`
    border-radius: 1rem;
    width:${props => props.direction === 'vertical' ? '70px' : '80px'};
    margin-right: ${props => props.direction === 'vertical' ? '8px' : '0px'};
    animation: ${props => slideIn(props.direction)} ${props => props.y / 9}s ease-in;

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

const Detail = styled(props => <div {...props} />)`
display: flex;
flex-direction: column;
animation: ${props => slideIn(props.direction)} ${props => props.y / 9}s ease-in;

`

const Score = styled.div`
    font-size: 0.7rem;
    color:orange;
`
