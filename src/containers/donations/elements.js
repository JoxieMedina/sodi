import styled from 'styled-components'

export const Container = styled.div `


`

export const LeftPanel = styled.div `
    padding: 70px;
    width: 500px;
    height: 100%;
    background-color: rgba(80, 116, 156, 0.9);
    position: absolute;
    p{
        font-size: 2.4em;
        font-weight: 100;
        padding: 0px 60px 0px 59px;
        text-align: justify;
        color: white;
        
    }
`

export const Circle = styled.div `
        width: 100%;
        max-width: 450px;
        height: 450px;
        top: 22%;
        border: solid 2px rgb(255,255,255);
        border-radius: 50%;
        position: absolute;
        float: right;
        right: 20px;
        h6{
            font-size: 27px;
            font-weight: 100;
            text-align: center;
            color: #ffffff;
            margin: 0 auto;
            width: auto;
            padding-top: 132px;
        }
        p{
            padding: 70px 56px 10px 56px;
            margin: 0;
            font-size: 14px;
            font-weight: 100;
            text-align: center;
            color: #ffffff;
        }
`
