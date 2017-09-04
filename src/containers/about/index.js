import React, {Component} from 'react'
import Header from '../../components/header'
import * as e from './elements'
import {Link} from 'react-router-dom'
import OpenAccessLogo from '../../assets/icons/Open_Access_logo_PLoS_transparent.svg'
import {Grid, Row, Col} from 'react-flexbox-grid-aphrodite';
import {connect} from 'react-redux'

class AboutPage extends Component {

    constructor(){
        super()
        this.state={
            expandedItem:-1
        }

        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    getExpandedState(key) {
        return this.state.expandedItem === -1
            ? false
            : this.state.expandedItem === key
    }
    setExpandedState(key){
        this.state.expandedItem === key
        ?this.setState({expandedItem:-1})   
        :
        this.setState({expandedItem:key})        
    }
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
      }
    
      /**
       * left = 37
            up = 38
            right = 39
            down = 40
       * @param {*} e 
       */
      handleKeyDown(e) {
        console.log('Key',e)
      }

    render() {
       
        const {match, history,faqs} = this.props
        return (
            <div>
                {match.url === '/about' && <div style={{marginTop: '10%'}} >
                    <e.Title>Our Goal</e.Title>
                    <e.GoalContainer>                        
                        <p>Our goal is to bring all scientific data under one open repository, to build
                            the science dataweb and solve the world's greatest interdisciplinary challenges</p>
                            <button>
                            <Link to='/about/initiative'>
                                Learn More
                            </Link>
                            </button>
                    </e.GoalContainer>
                    <Link to='/about/openData'>
                        <e.Arrow bottom color={'ffffff'} angle={45}></e.Arrow>
                    </Link>
                    <Header/>
                </div>
            }
            {match.params.section  === 'initiative' && <div style={{marginTop: '11%'}} >
                    
                    <e.IniContainer>                        
                        <section>
                            <h1>About the initiative</h1>
                            <p>Scientific data is locked in knowledge silos, spread across countless disconnected databases on the web. Creating a high-level layer of interconnected concepts would build a bridge between these fragmented databases and dissolve knowledge silos. But there’s so much data out there that one team cannot build such a layer alone.
                            <br/><br/>
                            Founded by The Brane, SODI seeks to build a concept layer of high-level index terms and make it available to the whole world as the first-ever general purpose science dataweb. To do so, your help is needed. Which is why this project will be an entirely open-source collaborative effort, and the data will stay open to everyone.
                            </p> 
                        </section>                          
                    </e.IniContainer>
                    <Link to='/about/openData'>
                        <e.Arrow bottom color={'ffffff'} angle={45}></e.Arrow>
                    </Link>
                    <Header/>
                </div>
            }
            {
                match.params.section === 'openData' && <e.WhiteWrapper>
                    <e.Arrow onClick={() => history.goBack()} color={'50749c'} top angle={-135}></e.Arrow>

                    <Grid>
                        <Row center="xs">
                            <Col xs={12}>
                                <h2>Why Open Science Data Access?</h2>
                                <span/>
                            </Col>
                        </Row>
                        <Row
                            style={{
                            paddingTop: '31px'
                        }}
                            center="xs">
                            <Col xs={12} md={5}>
                                <img width={'40%'} src={OpenAccessLogo} alt='OpenAccessLogo'/>
                            </Col>
                            <Col xs={12} md={4}>
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
                        </Row>
                    </Grid>

                    <Link to='/about/faq'>
                        <e.Arrow
                            style={{
                            marginTop: '45px'
                        }}
                            color={'50749c'}
                            angle={45}></e.Arrow>
                    </Link>
                </e.WhiteWrapper>
            }

            {
                match.params.section === 'faq' && <div>                    
                <e.Arrow onClick={() => history.goBack()} style={{top: '100px',zIndex: 2}} color={'fff'} top angle={-135}></e.Arrow>
                    <e.FaqContainer>
                        
                        <h1>FAQ</h1>
                        {faqs.map(faq=>{
                        return(
                            <div key={faq.id} >
                                <h2>
                                    {faq.section}
                                </h2>
                                {faq.questions.map(question=>{
                                    return(
                                        <div key={question.id} >
                                            <e.CollapseItem expanded={this.getExpandedState(question.id)||false} onClick={()=>this.setExpandedState(question.id)} >
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

                    <Header/>
                </div>}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {faqs: state.faqs.faq}
}

export default connect(mapStateToProps)(AboutPage)