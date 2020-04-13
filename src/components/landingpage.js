import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}> 
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={require("../img/archanababu.jpg")}
                            alt="archana"
                            className="archana-img"
                        />
                        <div className="banner-text">
                            <h1>Automation Test Engineer</h1>
                        <hr/>
                        <p>
                            HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJs | Express | MongoDB
                        </p>
                        <div className="social-links">
                            {/*LinkedIn*/}
                            <a href="https://www.linkedin.com/in/ms-archana-babu/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a> 
                            {/*GitHub*/}
                            <a href="https://github.com/arcbabu" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>
                            {/*Instagram*/}
                            <a href="https://www.instagram.com/mytravelexploragram/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true"/>
                            </a>
                            {/*GitHub*/}
                            <a href="https://www.facebook.com/Aishu5891" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook" aria-hidden="true"/>
                            </a> 
                        </div>

                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
} 

export default LandingPage;