import styled from 'styled-components'

export const GoalContainer = styled.div `
    width: 100%;
    max-width: 850px;
    height: 427px;
    background-color: rgba(80,116,156,0.9);
    margin: 0 auto;
    top: 25%;
    position: absolute;
    left: 0;
    right: 0;
    color:white;
    text-align:center;
    h2{
        padding: 61px 0px 0px 0px;
        font-size: 1.3em;
    }
    span{
        width: 76px;
        display: block;
        height: 0px;
        border: solid 2px #fcfafa;
        margin: 0 auto;        
    }
    
    
    
    p{
        padding:50px;
        font-size: 1.2em;
    }
  
`

export const Title = styled.h1 `
    text-align: center;
    color: white;
    font-size: 3em;
    padding-top: 6%;
`

export const Arrow = styled.i `
    border: solid ${props => `#${props.color}`};
    box-sizing: border-box;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 0px;
    outline: none;
    cursor: pointer;
    height: 30px;
    width: 30px;
    left: 50%;
    ${props => props.top && `
    top: 5%;
    `}
    ${props => props.bottom && `
    bottom: 5%;
    `}
    
    position: absolute;
    transform: ${props => `rotate(${props.angle}deg)`}
`

/**
 * Open Data Styles
 */

export const WhiteWrapper = styled.div `
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #ffffff;
        color: #50749c;
        padding-top: 150px;
        span{
            width: 76px;
            display: block;
            height: 0px;
            border: solid 2px #50749c;
            margin: 0 auto;        
        }
        p{
            text-align: left;
            font-size: 1.2em;
        }
        img{
            padding-top: 66px;
        }
 `

export const FaqContainer = styled.div `
        overflow-y: scroll;
        width: 100%;
        padding-left: 20px;
        height: 616px;
        background-color: rgba(80,116,156,0.9);
        margin: 0 auto;
        top: 10%;
        position: absolute;
        left: 0;
        right: 0;
        color:white;
        text-align:left;
        padding-top: 61px;
        h2{
            
            font-size: 1.5em;
        }
        span{
            width: 76px;
            display: block;
            height: 0px;
            border: solid 2px #fcfafa;
            margin: 0 auto;        
        }

       
 `

 export const CollapseItem = styled.div`
        h5{
            font-size: 1.2em;
            margin: 0;
            padding-top: 13px;
            cursor:pointer;
        }



        p{
            font-size: 1em;
            padding-right: 50px;
            padding-left: 25px;
            margin: 10px;
            height:auto;
            max-height: 250px;
            transition: 0.5s all;
            ${props=>props.expanded === false &&
            `
            max-height: 0;
            color: transparent;
            `}

        }      
 `