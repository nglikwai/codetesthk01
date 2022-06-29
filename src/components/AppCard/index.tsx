import React from 'react'
import styled, { keyframes } from 'styled-components'
import { App, Direction } from '../../type'
import * as R from 'ramda'
type Props = {
    app: App
    direction?: string
    index: number
}

const AppCard = ({ app, direction = Direction.horizontal, index }: Props) => {




    return (

        <Wrapper direction={direction}>
            {direction === Direction.vertical && <Index>{index}</Index>}
            <Image src={app.artworkUrl100} direction={direction} y={index % 10} index={index} />
            <Detail y={index % 10} direction={direction}>
                <Name>{app.name}</Name>
                <Category>{app.kind}</Category>
                {direction === Direction.vertical &&
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
    0% {    transform:  translateX(${direction === Direction.vertical ? '-90px' : '0'}) 
                        translateY(${direction === Direction.vertical ? '0' : '-20px'})
                    }
    100% {  transform: translateX(0px) translateY(0px) 
            height
    }
`

const Wrapper = styled(props => <div {...props} />)`
    display: flex;
    flex-direction: ${props => props.direction === Direction.vertical ? 'row' : 'column'};
    >:not(:last-child){margin-bottom:${props => props.direction === Direction.vertical ? '0px' : '8px'};};
    align-items: ${props => props.direction === Direction.vertical ? 'center' : 'flex-start'};;
    padding: 10px 0;
    border-bottom:${props => props.direction === Direction.vertical ? '1px' : '0px'} solid #ccc;

`
const Image = styled(props => <img {...props} />)`
    border-radius: ${props => props.direction === Direction.vertical && props.index % 2 === 0 ? '50%' : '1rem'};
    width:${props => props.direction === Direction.vertical ? '70px' : '80px'};
    margin-right: ${props => props.direction === Direction.vertical ? '8px' : '0px'};
    animation: ${props => slideIn(props.direction)} ${props => props.y / 9}s ease-in;

`

const Name = styled.span`
    font-size: 0.8rem;
    color:${({ theme }) => theme.primaryColor}
    
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
