import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Archana Babu</h2>
                        <img 
                            src={require("../img/archanababu.png")}
                            alt="archana"
                            style={{height:'250px'}}
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>
                            Result-oriented professional with 6 years and 7 months of experience as a Technology Consultant. Proven ability and effectiveness to timely deliver projects through active engagement with business stakeholders. Experience accompanied by graduate degree, professional association leadership and community development.
                        </p>
                        
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                        +1 (469)-388-7321
                                    </ListItemContent>
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-fax" aria-hidden="true"></i>
                                        +1 (469)-388-7321                                        
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        ms.archanababu@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                        <i className="fa fa-skype" aria-hidden="true"></i>
                                        Aishu5891
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>                
            </div>
        )
    }
} 

export default Contact;