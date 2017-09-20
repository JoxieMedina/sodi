import React, {Component} from 'react'
import Header from '../../components/header'
import * as e from './elements'
import OpenAccessLogo from '../../assets/icons/Open_Access_logo_PLoS_transparent.svg'
import {Grid, Row, Col} from 'react-flexbox-grid-aphrodite';
import {connect} from 'react-redux'
import SScroll from './SScroll'

class AboutPage extends Component {
    constructor() {
        super()
        this.state = {
            expandedItem: -1
        }
        this.scrollMan = new SScroll({})

        this.handleKeyDown = this
            .handleKeyDown
            .bind(this)
        this.goTo = this
            .goTo
            .bind(this)
    }

    getExpandedState(key) {
        return this.state.expandedItem === -1
            ? false
            : this.state.expandedItem === key
    }
    setExpandedState(key) {
        this.state.expandedItem === key
            ? this.setState({expandedItem: -1})
            : this.setState({expandedItem: key})
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    goTo(id) {
        this
            .scrollMan
            .scrollTo(id)
    }

    /**
       * left = 37
            up = 38
            right = 39
            down = 40
       * @param {*} e
       */
    handleKeyDown(e) {
        console.log('Key', e)
    }

    render() {

        const {faqs} = this.props
        return (
            <e.Container id='main'>
                <div id='about'>
                    <e.Title>Our Goal</e.Title>
                    <e.GoalContainer>
                        <p>Our goal is to bring all scientific data under one open repository, to build
                            the science dataweb and solve the world's greatest interdisciplinary challenges</p>
                        <button>
                            <a onClick={() => this.goTo('initiative')}>
                                Learn More
                            </a>
                        </button>
                    </e.GoalContainer>
                    {/* <a onClick={() => this.goTo('openData')}>
                        <e.Arrow bottom color={'ffffff'} angle={45}></e.Arrow>
                    </a> */}

                </div>

                <div id='initiative'>

                    <e.IniContainer>
                        {/* <a onClick={() => this.goTo('about')}>
                            <e.Arrow color={'fff'} top angle={-135}></e.Arrow>
                        </a> */}
                        <section>
                            <h1>About the initiative</h1>
                            <p>Scientific data is locked in knowledge silos, spread across countless
                                disconnected databases on the web. Creating a high-level layer of interconnected
                                concepts would build a bridge between these fragmented databases and dissolve
                                knowledge silos. But there’s so much data out there that one team cannot build
                                such a layer alone.
                                <br/><br/>
                                Founded by The Brane, SODI seeks to build a concept layer of high-level index
                                terms and make it available to the whole world as the first-ever general purpose
                                science dataweb. To do so, your help is needed. Which is why this project will
                                be an entirely open-source collaborative effort, and the data will stay open to
                                everyone.
                            </p>
                            {/* <a onClick={() => this.goTo('openData')}>
                                <e.Arrow bottom color={'ffffff'} angle={45}></e.Arrow>
                            </a> */}
                        </section>

                    </e.IniContainer>

                </div>

                <div id='openData'>
                    <e.WhiteWrapper>
                        <e.White >
                            {/* <a onClick={() => this.goTo('initiative')}>
                                <e.Arrow color={'50749c'} top angle={-135}></e.Arrow>
                            </a> */}

                            <Grid >
                                <Row center="xs" style={{    margin: 0}} >
                                    <Col xs={12}>
                                        <h2>Why Open Science Data Access?</h2>
                                        <span/>
                                    </Col>
                                </Row>
                                <Row
                                    center="xs"
                                    style={{
                                    marginRight: '0',
                                    marginLeft: '0'
                                }}>
                                    <Col xs={12} md={6} sm={6} lg={6}>
                                        <img
                                            style={{
                                            maxWidth: '200px'
                                        }}
                                            width={'40%'}
                                            src={OpenAccessLogo}
                                            alt='OpenAccessLogo'/>
                                    </Col>
                                    <Col style={{
                                    paddingRight: '0',
                                    paddingLeft: '0'
                                }} xs={12} md={6} sm={6} lg={6}>
                                        <p>
                                            With datasets growing larger and larger, researchers are finding that the
                                            bottleneck to discovery is no longer a lack of data but an inability to manage,
                                            analyze, and share their large datasets. Individual researchers can no longer
                                            download and analyze the important datasets in their scientific fields on their
                                            own computers.<br/>
                                            <br/>
                                            Cross-disciplinary analysis is even more difficult. The goal of the Science Open
                                            Data Initiative is to remove the bottleneck to discovery by providing
                                            researchers with access to a variety of key datasets across scientific
                                            disciplines and the computing infrastructure to allow scientists to easily
                                            manage and share their data and analysis.
                                        </p>
                                    </Col>

                                    {/* <a onClick={() => this.goTo('faq')}>
                                        <e.Arrow
                                            color={'50749c'}
                                            angle={45}></e.Arrow>
                                    </a> */}
                                </Row>
                            </Grid>

                        </e.White>
                    </e.WhiteWrapper>
                </div>

                <div id='faq'>
                    <e.Pre>
                        {/* <a onClick={() => this.goTo('openData')}>
                            <e.Arrow
                                style={{
                                top: '100px',
                                zIndex: 2
                            }}
                                color={'fff'}
                                top
                                angle={-135}></e.Arrow>
                        </a> */}
                        <e.FaqContainer>

                            <h1>FAQ</h1>
                            {faqs.map(faq => {
                                return (
                                    <div key={faq.id}>
                                        <h2>
                                            {faq.section}
                                        </h2>
                                        {faq
                                            .questions
                                            .map(question => {
                                                return (
                                                    <div key={question.id}>
                                                        <e.CollapseItem
                                                            expanded={this.getExpandedState(question.id) || false}
                                                            onClick={() => this.setExpandedState(question.id)}>
                                                            <h5>{question.title}</h5>
                                                            <p>
                                                                {question.content}
                                                            </p>
                                                        </e.CollapseItem>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                )
                            })}
                        </e.FaqContainer>
                    </e.Pre>
                </div>
                <Header/>
            </e.Container>

        )
    }

}

function mapStateToProps(state) {
    return {faqs: state.faqs.faq}
}

export default connect(mapStateToProps)(AboutPage)