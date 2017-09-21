import styled from 'styled-components'

export const Container = styled.div `
   section{
    background: rgba(47, 82, 127, 0.6);
    width: 100%;
    height: 75px;
    position: fixed;
    top: ${props=>props.show?'0px':'-93px'};
    transition: all .7s;
   }
`

export const SocialMedia = styled.div `

width: auto;
position: fixed;
${props => props.top
    ? `
    top: 0;
    right: 0;
    padding: 30px 20px;
    position: relative;
    display:inline-block;
    @media (max-width: 750px) {
        top:auto;
        bottom: 0;
     }
`
    : `
    padding: 20px;
    bottom: 0;
    left: 0;
`}


img{    
    
    ${props => props.top
        ? `
        padding-left: 12px;        
    `
        : `
        padding-right: 12px;
    `}
    max-height: 18px;
    width: 18px;
    cursor:pointer;
}
`

export const Logo = styled.div `
top: 0;
width: auto;
position: relative;
display:inline-block;
padding: 20px;
left: 0;
h1{
    margin: 0;
    font-size: 25px;
	font-weight: 100;
	text-align: left;
	color: #ffffff;
}
img{    
    margin: 0px 10px -10px 0px;
    max-height: 37px;
    width: auto;
    cursor:pointer;
}
a{
    text-decoration: none;
    color: white;
}

@media(max-width:570px){
    img{
        margin: 0px 10px -9px 0px;
        max-height: 30px;
    }
    h1{
        font-size:17px;
    }
}
`

export const Nav = styled.div `
    top: 0px;
    width: auto;
    position: relative;
    display:inline-block;
    padding-top: 0px;    
    button{
        display:none;
    }
    h1{
        margin: 0;
        font-size: 25px;
        font-weight: 100;
        text-align: left;
        color: #ffffff;
    }
    a{
        display:inline-block;
        text-decoration: none;
        color: white;
        cursor:pointer;
        padding-left: 50px;
        :hover{
            opacity:0.8;
        }
    }
    img{
        max-width:30px;
    }
    a + a + a + a{
        margin-left: 250px;
    }

    @media (max-width: 940px) {
        a + a + a + a{
            margin-left: 50px;
        }
    }
    @media (max-width: 750px) {
        right: 0;
        left: auto;
        padding:0;
        position: fixed;
        text-align:right;
    button{
        display:inline;
        padding: 10px 10px 0px 0px;
        border: none;
        background: transparent;
        cursor:pointer;
        :focus{
            outline:none;
        }
    }
      div{
        display:${props => props.show === true
    ? `block`
    : `none`};
        left: auto;
        right: 0px;
        padding: 20px;
        top: 50px;
        background: rgba(80,116,156,0.9);
        h1{
         text-align:right;
         font-size: 17px;
        }
        a{
             display:block;
             padding-left: 0px;
         }
      }
       
    }

`

export const Arrow = styled.a `
position: absolute;
margin: 0 auto;
left: 0;
right: 0;
top: 80px;
height: 30px;
width: 30px;
i{
    border: solid ${props => `#${props.color}`};
    box-sizing: border-box;
    border-width: 0 2px 2px 0;
    display: inline-block;    
    outline: none;
    cursor: pointer;
    height: 30px;
    width: 30px;    
    transform: ${props=>props.show?'rotate(225deg)':'rotate(45deg)'};
    transition:transform 1s;
}
`