import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid-aphrodite';
import * as e from './elements'
import SodiLogo from '../../assets/icons/logo-sodi-v-2@3x.png'
import GitHubLogo from '../../assets/icons/github-icon-1.svg'
import SlackLogo from '../../assets/icons/Slack_Mark_Monochrome_White.svg'
import TwitterLogo from '../../assets/icons/twitter.svg'
import FacebookLogo from '../../assets/icons/facebook-icon-white.svg'
import {Link} from 'react-router-dom'

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
                                                <img src={SlackLogo} alt='Slack'/>
                                            </Col>
                                            <Col>
                                                <p>Build the network</p>
                                                <img src={GitHubLogo} alt='GitHub'/>
                                            </Col>
                                        </Row>
                                    </e.Oval>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
                <e.SocialMedia>
                    <img src={TwitterLogo} alt='Twitter'/>
                    <img src={FacebookLogo} alt='Facebook'/>
                </e.SocialMedia>
                <e.Button>
                    About
                </e.Button>
            </div>
        )
    }

}

export default Home