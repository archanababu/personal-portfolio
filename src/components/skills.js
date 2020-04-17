import React, {Component} from 'react';
import {Grid, Cell, ProgressBar} from 'react-mdl';


class Skills extends Component {
    render(){
        return(
                <Grid>
                    <Cell col={4}>
                        <div style={{display: 'flex'}}>{this.props.skill}</div>
                    </Cell>    
                    <Cell col={8}>
                        <div style={{display: 'flex'}}><ProgressBar style={{margin:'auto', width:'75%'}} 
                        progress={this.props.progress} /></div>
                    </Cell>                
                </Grid>
        )
    }
}

export default Skills;