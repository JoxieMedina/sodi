import styled from 'styled-components'

export const GoalContainer = styled.div `
    width: 100%;    
    height: auto;
    background-color: rgba(80,116,156,0.9);
    margin: 0 auto;
    top: 30%;
    padding:50px 0;
    left: 0;
    right: 0;
    color:white;
    text-align:center;
    h2{
        padding: 61px 0px 0px 0px;
        font-size: 2em;
    }
    span{
        width: 76px;
        display: block;
        height: 0px;
        border: solid 2px #fcfafa;
        margin: 0 auto;        
    }

    button{
        color: #ffffff;
        cursor: pointer;
        width: auto;
        font-size: 1.2em;
        border: solid #fff 1px;
        border-radius: 5px;
        background: transparent;
        font-weight: 100;
        padding: 5px 15px 5px 15px;
        position: relative;
        margin-top: 27px;
        a{
            text-decoration: none;
            color: white;
        }
    }
    
    p{
        width: 784px;
        margin: 0 auto;
        font-size: 1.5em;
    }
    @media (max-width: 800px) {
        p{
            width: 600px;
            margin: 0 auto;
            font-size: 1.5em;
        }
    }
    @media (max-width: 580px) {
        p{
            width: 100%;
            margin: 0 auto;
            font-size: 1.1em;
        }
    }
  
`

export const Title = styled.h1 `
    text-align: center;
    color: white;
    font-size: 4em;
    padding-top: 6%;
    @media (max-width: 800px) {
        padding-top: 20%;
        font-size: 3em;      
    }
    @media (max-width: 580px) {
        
        font-size: 2em;      
    }
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
    @media (max-width: 580px) {
        
        left: 46%;  
    }
    ${props => props.top && `
    top: 5%;
    `}
    ${props => props.bottom && `
    bottom: 5%;
    @media (max-width: 580px) {
        bottom: -9%;
    }
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
        @media (max-width: 580px) {
            padding-top: 50px;
            height: 800px;
            img{
                padding-top: 0px !important;
            }
            p{
                background: white;
                text-align: left;
                font-size: 1em;
                padding: 10px;
            }
          
        }
        
 `

export const FaqContainer = styled.div `
        overflow-y: scroll;
        width: 100%;
        padding-left: 5%;
        height: 616px;
        background-color: rgba(80,116,156,0.9);
        margin: 0 auto;
        top: 15%;
        position: absolute;
        left: 0;
        right: 0;
        color:white;
        text-align:left;
        padding-top: 61px;
        h1{
            text-align: left;
            color: white;
            font-size: 4em;                
        }
        h2{
            
            font-size: 1.8em;
        }
        span{
            width: 76px;
            display: block;
            height: 0px;
            border: solid 2px #fcfafa;
            margin: 0 auto;        
        }
        @media (max-width: 580px) {
       
            
                h1{
                    font-size: 2.3em;   
                }
                
            
        }

       
 `

export const CollapseItem = styled.div `
        h5{
            font-size: 1.2em;
            margin: 0;
            padding-top: 13px;
            cursor:pointer;
        }



        p{
            font-size: 1em;
            
            padding-left: 25px;
            margin-top: 10px;
            height:auto;
            width:80%;
            // max-height: 250px;
            transition: 0.5s all;
            ${props => props.expanded === false && `
            max-height: 0;
            color: transparent;
            `}

        }      
        @media (max-width: 580px) {
                p{
                    padding-left: 5px;   
                }
             }
 `

export const IniContainer = styled.div `
        overflow-y: scroll;
        width: 100%;
        padding-left: 20px;
        height: 100%;
        background-color: rgba(80,116,156,0.9);
        margin: 0 auto;
        top: 10%;
        position: absolute;
        left: 0;
        right: 0;
        color:white;
        text-align:left;
        padding-top: 61px;

        section{
            max-width:700px;
            margin:0 auto;
            text-align:left;
                h1{
                    padding-right: 60px;
                    text-align: left;
                    color: white;
                    font-size: 3.2em;                
                }
                p{

                    padding-right: 60px;
                    font-size: 21px;
                    font-weight: 100;
                }
            
        }

        @media (max-width: 580px) {            
            top: 16%;
            padding-top:0px;
            padding-left: 0px;
            
            section{
                padding-left: 10px;
                padding-right: 10px;
                    padding-bottom: 60px;
            
                h1{
                    font-size:2em;
                }
                p{
                    font-size:15px;
                }
            }
        }
 
 `