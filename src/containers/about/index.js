import React, {Component} from 'react'
import Header from '../../components/header'
import * as e from './elements'

class AboutPage extends Component {

    render() {
        return (
            <div>
                <e.Title>About the initiative</e.Title>
                <e.GoalContainer>
                    <h2>Our Goal</h2>
                    <span />
                    <p>Our goal is to bring all scientific data under one open repository, to build
                        the science dataweb and solve the world's greatest interdisciplinary challenges</p>
                </e.GoalContainer>
                <Header/>
            </div>
        )
    }

}

export default AboutPage