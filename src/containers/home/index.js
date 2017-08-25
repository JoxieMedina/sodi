import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid-aphrodite';
import * as e from './elements'
import SodiLogo from '../../assets/icons/logo-sodi-v-2@3x.png'
import GitHubLogo from '../../assets/icons/github-icon-1.svg'
import SlackLogo from '../../assets/icons/Slack_Mark_Monochrome_White.svg'
import TwitterLogo from '../../assets/icons/twitter.svg'
import FacebookLogo from '../../assets/icons/facebook-icon-white.svg'
import {Link} from 'react-router-dom'
import {GITHUB_LINK, SLACK_LINK, FB_LINK, TW_LINK} from '../../actions/constants'

class Home extends Component {

    render() {
        return (
            <div>
                <e.Button top>
                    <Link to='/donations'>Donate</Link>
                </e.Button>
                <Grid fluid>
                    <Row>
                        <Col xs={12}>
                            <Row center="xs">
                                <Col xs={9}>
                                    <e.HeaderTitle>
                                        <img src={SodiLogo} alt='SODI'/>
                                        <div>
                                            <h1>Science Open Data Initiative
                                            </h1>
                                            <p>One open repo. For all of science.</p>
                                        </div>
                                    </e.HeaderTitle>
                                    <e.Oval>
                                        <h6>
                                            Contribute to the largest
                                            <br/>interdisciplinary network of scientific data
                                        </h6>
                                        <Row center="xs">
                                            <Col>
                                                <p>Join the conversation</p>
                                                <a href={SLACK_LINK} target='_blank'>
                                                    <img src={SlackLogo} alt='Slack'/>
                                                </a>
                                            </Col>
                                            <Col>
                                                <p>Build the network</p>
                                                <a href={GITHUB_LINK} target='_blank'>
                                                    <img src={GitHubLogo} alt='GitHub'/>
                                                </a>
                                            </Col>
                                        </Row>
                                    </e.Oval>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <e.SocialMedia>
                    <a href={TW_LINK} target='_blank'>
                        <img src={TwitterLogo} alt='Twitter'/>
                    </a>
                    <a href={FB_LINK} target='_blank'>
                        <img src={FacebookLogo} alt='Facebook'/>
                    </a>
                </e.SocialMedia>
                <e.Button>
                <Link to='/about'>About</Link>
                </e.Button>
            </div>
        )
    }

}

export default Home