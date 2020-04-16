import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={activeTab:0};
    }

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                    {/*Project 1*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px', background: 'url(data:image/png;base64,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) center / cover'}}>React Project #1</CardTitle>
                        <CardText>
                        React is a JavaScript library for building user interfaces.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>Medium</Button>
                        </CardActions>
                        <CardMenu style={{colo:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*Project 2*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px', background: 'url(data:image/png;base64,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) center / cover'}}>React Project #2</CardTitle>
                        <CardText>
                        React is a JavaScript library for building user interfaces.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>Medium</Button>
                        </CardActions>
                        <CardMenu style={{colo:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/*Project 3*/}
                    <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                        <CardTitle style={{color:'#fff', height:'176px', background: 'url(data:image/png;base64,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) center / cover'}}>React Project #3</CardTitle>
                        <CardText>
                        React is a JavaScript library for building user interfaces.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>Medium</Button>
                        </CardActions>
                        <CardMenu style={{colo:'#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                </div>
                
                
            )
        } else if(this.state.activeTab===1){
            return(
                <div><h1>This is Python</h1></div>
            )
        } else if(this.state.activeTab===2){
            return(
                <div><h1>This is MongoDb</h1></div>
            )
        } else if(this.state.activeTab===3){
            return(
                <div><h1>This is Machine Learning</h1></div>
            )
        } 
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Python</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>MachineLearning</Tab>
                </Tabs> 
                
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>

                        </Cell>
                    </Grid>                    
                          
            </div>
        )
    }
} 

export default Projects;