import React, {Component} from 'react'
import Header from '../../components/header'
import * as e from './elements'
import {Link} from 'react-router-dom'
import OpenAccessLogo from '../../assets/icons/Open_Access_logo_PLoS_transparent.svg'
import {Grid, Row, Col} from 'react-flexbox-grid-aphrodite';
import {connect} from 'react-redux'

class AboutPage extends Component {

    state={
        expandedItem:-1
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

    render() {
       
        const {match, history,faqs} = this.props
        return (
            <div>
                {match.url === '/about' && <div>
                    <e.Title>About the initiative</e.Title>
                    <e.GoalContainer>
                        <h2>Our Goal</h2>
                        <span/>
                        <p>Our goal is to bring all scientific data under one open repository, to build
                            the science dataweb and solve the world's greatest interdisciplinary challenges</p>
                    </e.GoalContainer>
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
                            <Col xs={5}>
                                <h2>Why Open Science Data Access?</h2>
                                <span/>
                            </Col>
                        </Row>
                        <Row
                            style={{
                            paddingTop: '31px'
                        }}
                            center="xs">
                            <Col xs={5}>
                                <img width={'40%'} src={OpenAccessLogo} alt='OpenAccessLogo'/>
                            </Col>
                            <Col xs={4}>
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
                    <e.FaqContainer>
                        <e.Arrow onClick={() => history.goBack()} color={'fff'} top angle={-135}></e.Arrow>
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