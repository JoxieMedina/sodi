import styled from 'styled-components'

export const HeaderTitle = styled.div `
padding-top: 130px;
    img{
        width: 64px;
        display: inline-block;
        padding: 9px 25px 13px 0px;
    }

   div{
    display: inline-block;
    h1{
        margin:0;
        font-size: 50px;
        font-weight: 100;
        text-align: left;
        color: #ffffff;
    }
    p{
        margin:0;
        font-size: 20px;
        font-weight: 100;
        text-align: left;
        color: #ffffff;
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
            background: transparent;
            font-weight: 100;
            padding: 5px 15px 5px 15px;
            position: absolute;
            right: 40px;
            ${props => props.top
    ? `
                top: 50px;
                `
    : `bottom: 50px;`}

    a{
        text-decoration: none;
        color: white;
    }
            
`

export const Oval = styled.div `
        width: 100%;
        max-width: 663px;
        height: 663px;
        margin: 0 auto;
        bottom: -300px;
        left: 0;
        right: 0;
        border: solid 2px rgb(255, 255, 255);
        border-radius: 50%;
        position: absolute;
        h6{
            font-size: 27px;
            font-weight: 100;
            text-align: center;
            color: #ffffff;
            margin: 0 auto;
            width: auto;
            padding-top: 132px;
        }
        img{
            max-width: 50px;
            cursor:pointer;
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

export const SocialMedia = styled.div `
        bottom: 0;
        width: 100px;
        position: absolute;
        padding: 20px;
        left: 0;
        img{            
            padding-right: 12px;
            max-height: 18px;
            width: 18px;
            cursor:pointer;
        }

`