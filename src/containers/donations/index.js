import React, {Component} from 'react'
import Header from '../../components/header'
import * as e from './elements'

class Donations extends Component {

    render() {
        return (
            <e.Container>
                <e.LeftPanel>
                    <p>
                        With your <strong>donation</strong>, the critical back-end infrastructure may be scaled to
                        unite the world’s scientific data repos in one open access database, to help
                        scientists push the boundaries of human knowledge, and solve the most urgent
                        problems of our age.
                    </p>
                </e.LeftPanel>
                <e.Circle />

                <Header/>
            </e.Container>
        )
    }

}

export default Donations