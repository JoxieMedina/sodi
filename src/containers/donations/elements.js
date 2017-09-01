import styled from 'styled-components'

export const Container = styled.div `


`

export const LeftPanel = styled.div `
    width: 100%;
    max-width: 550px;
    height: 550px;
    top: 16%;
    background-color: rgba(80, 116, 156, 0.9);
    border-radius: 50%;
    position: absolute;
    float: right;
    left: 5%;
    p{
        font-size: 2em;
        font-weight: 100;
        padding: 64px 73px 0px 60px;
        text-align: center;
        color: white;
        
    }
`

export const Circle = styled.div `
        width: 100%;
        max-width: 550px;
        height: 550px;
        top: 16%;
        border: solid 2px rgb(255,255,255);
        border-radius: 50%;
        position: absolute;
        float: right;
        right: 5%;
        h2{
            text-align: center;
            padding: 18px;
            color: white;
        }
        p{            
            text-align: left;
            font-size: 20px;                       
            color: #ffffff;
        }
        input{
            padding: 9px;
            border-radius: 5px;
            border: 0;
            font-size: 1em;
            :focus {
                outline: none;
            }
        }
       
`

export const Button = styled.button `
        color: #ffffff;
        cursor:pointer;
        width: auto;
        font-size: 1.2em;
        border: solid #fff 1px;
        border-radius: 5px;
        background: ${props => props.selected
    ? '#50749c'
    : 'transparent'};
        font-weight: 100;
        padding: 5px 15px 5px 15px;        
        right: 40px;
        :focus {
            outline: none;
        }
        ${props => props.center && `
        margin: 0px 15px 0px 15px;
        `}
`

export const nav = styled.div `
    padding-top:18px;
    padding-left:80px;
    button{
        padding: 7px;
        margin-right:16px;
        width: 28px;
        font-size: 0.5em;
        border-radius: 50%;
        font-weight: 100;                     
    }
    span{
        color:white;
        display:inline-block;
        font-size:10px;
    }
    li{
        width: 19px;
        display: block;
        height: 0px;
        border: solid 1px #fcfafa;
        position: absolute;
        margin: -6px 0px 0px 19px;
    }
    
`
