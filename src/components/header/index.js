import React,{Component} from 'react'
import SodiLogo from '../../assets/icons/logo-sodi-v-2@3x.png'
import GitHubLogo from '../../assets/icons/github-icon-1.svg'
import SlackLogo from '../../assets/icons/Slack_Mark_Monochrome_White.svg'
import MenuIcon from '../../assets/icons/menu.svg'
import CloseIcon  from '../../assets/icons/error.svg'
import TwitterLogo from '../../assets/icons/twitter.svg'
// import FacebookLogo from '../../assets/icons/facebook-icon-white.svg'
import * as e from './elements'
import {Link} from 'react-router-dom'
import {GITHUB_LINK, SLACK_LINK, TW_LINK} from '../../actions/constants'
class Header extends Component{
    constructor(){
        super()
        this.state={
            showMenu:false
        }

        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu(){
        this.setState({showMenu:!this.state.showMenu})
    }
    render(){        
        return (
            <div>
                <e.Logo>
                    <Link to='/' replace>
                        <h1><img src={SodiLogo} alt='Logo'/>SODI</h1>
                    </Link>
                </e.Logo>
                
                <e.Nav show={this.state.showMenu}>
                <button onClick={this.toggleMenu}>
                        <img src={this.state.showMenu?CloseIcon:MenuIcon} alt='menu'/>
                    </button>
                    <div>
                        <Link to='/about' replace>
                            <h1>About</h1>
                        </Link>
                        <Link to='/about/openData'>
                            <h1>Open access</h1>
                        </Link>
                        <Link to='/about/faq'>
                            <h1>FAQ</h1>
                        </Link>
                        <Link to='/donations'>
                            <h1>Donate</h1>
                        </Link>
                    </div>
                </e.Nav>
                <e.SocialMedia top>
                    <a href={SLACK_LINK} target='_blank'>
                        <img src={SlackLogo} alt='Slack'/>
                    </a>
                    <a href={GITHUB_LINK} target='_blank'>
                        <img src={GitHubLogo} alt='Github'/>
                    </a>
                </e.SocialMedia>
                <e.SocialMedia>
                    <a href={TW_LINK} target='_blank'>
                        <img src={TwitterLogo} alt='Twitter'/>
                    </a>
                    {/* <a href={FB_LINK} target='_blank'>
                        <img src={FacebookLogo} alt='Facebook'/>
                    </a> */}
                </e.SocialMedia>
            </div>
        )
    }
}

export default Header