import React from 'react'
import SodiLogo from '../../assets/icons/logo-sodi-v-2@3x.png'
import GitHubLogo from '../../assets/icons/github-icon-1.svg'
import SlackLogo from '../../assets/icons/Slack_Mark_Monochrome_White.svg'
import TwitterLogo from '../../assets/icons/twitter.svg'
import FacebookLogo from '../../assets/icons/facebook-icon-white.svg'
import * as e from './elements'

const Header = () => {
    return (
        <div>
            <e.Logo>
            <h1><img src={SodiLogo} alt='Logo'/>SODI</h1>
            </e.Logo>
            <e.SocialMedia top>
                <img src={SlackLogo} alt='Slack'/>
                <img src={GitHubLogo} alt='Github'/>
            </e.SocialMedia>
            <e.SocialMedia>
                <img src={TwitterLogo} alt='Twitter'/>
                <img src={FacebookLogo} alt='Facebook'/>
            </e.SocialMedia>
        </div>
    )
}

export default Header