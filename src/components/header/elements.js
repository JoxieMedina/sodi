import styled from 'styled-components'

export const SocialMedia = styled.div `
${props => props.top
    ? `
    top: 0;
    right: 0;
    padding: 30px 20px;
    padding-right: 0;
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

width: auto;
position: fixed;

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
position: fixed;
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
`

export const Nav = styled.div `
    top: 7px;
    width: auto;
    position: absolute;
    padding: 20px;
    left: 99px;
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
        padding-left: 50px;
        :hover{
            opacity:0.8;
        }
    }
    img{
        max-width:50px;
    }
    a + a + a + a{
        padding-left: 250px;
    }

    @media (max-width: 940px) {
        a + a + a + a{
            padding-left: 50px;
        }
    }
    @media (max-width: 750px) {
        right: 0;
        left: auto;
        padding:0;
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
        display:${props=>props.show===true?`block`:`none`};
        left: auto;
        right: 0px;
        padding: 20px;
        top: 50px;
        background: rgba(80,116,156,0.9);
        h1{
         text-align:right;
        }
        a{
             display:block;
             padding-left: 0px;
         }
      }
       
    }

`