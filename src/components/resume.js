import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div> 
                <Grid>
                    <Cell Col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={require("../img/archanababu.png")}
                                alt="archana"
                                style={{height:'250px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Archana Babu</h2>
                        <h4 style={{color:'grey'}}>Software Engineer</h4>
                        <hr style={{borderTop:'3px solid grey', width:'50%'}}/>
                        <p>
                            Result-oriented professional with 6 years and 7 months of experience as a Technology Consultant. Proven ability and effectiveness to timely deliver projects through active engagement with business stakeholders. Experience accompanied by graduate degree, professional association leadership and community development.
                        </p>
                        <hr style={{borderTop:'3px solid grey', width:'50%'}}/>
                        <h5>Address</h5>
                        <p>
                            3400 N Central Expy, Richardson, TX 75082
                        </p>
                        <h5>Phone</h5>
                        <p>+1 (469)-388-7321</p>
                        <h5>Email</h5>
                        <p>ms.archanababu@gmail.com</p>
                        <h5>Web</h5>
                        <p>ms-archanababu.com</p>
                        <hr style={{borderTop:'3px solid grey', width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                                                
                        <Education
                            startYear={2009}
                            endYear={2013}
                            schoolName="Anna University"
                            schoolDescription="Bachelor of Engineering (BE) in Computer Science, 3.4/4"
                        />

                        <Education
                            startYear={2008}
                            endYear={2009}
                            schoolName="Kendriya Vidyalaya"
                            schoolDescription="Higher Secondary (12th) in Computer Science, 70%"
                        />  

                        <Education
                            startYear={2006}
                            endYear={2007}
                            schoolName="Kendriya Vidyalaya"
                            schoolDescription="SSC, 75%"
                        />

                        <hr style={{borderTop:'3px solid grey'}}/>
                        <h2>Experience</h2>

                        <Experience
                            startYear={2017}
                            endYear="Present"
                            jobTitle="DXC Technology, Quality Assurance Automation Lead"
                            jobDescription="•	Design and develop of REST APIs service validation scenarios from business and functional requirements.
                                            •	Collaborated with developers, testers and/or end users to determine appropriate solutions and ensure test planning adheres to the proper requirements.
                                            •	Performed analysis of business and user needs, determining of new requirements, or revising existing requirements as necessary.
                                            •	Developed automated scripts in Selenium C# for GUI and REST APIs based on the requirement documents using BDD framework (SpecFlow).
                                            •	Responsible for development of new tools using UFT and VB scripts required for business needs.
                                            •	Performed self and peer review of the test artifacts and attended defect prevention meetings to perform root cause analysis of defects using Application Lifecycle Management (ALM).                            
                                            "
                        />


                        <Experience
                            startYear={2016}
                            endYear={2017}
                            jobTitle="Hewlett Packard Enterprise, Quality Assurance Automation Engineer"
                            jobDescription="•	Design quality assurance strategy for the client’s AOI integration program. 
                                            •	Implement solution in migration data’s from US Airways (CATS and Maestro) to the FOS system (America Airlines) by automating the process using UFT. 
                                            •	Implementation and modification of automation scripts for a new test environment platform.
                                            •	Performed analysis of business and user needs, determining of new requirements, or revising existing requirements as necessary using ALM.
                                            "
                        />

                        <Experience
                            startYear={2013}
                            endYear={2015}
                            jobTitle="Hewlett Packard, Technology Consultant"
                            jobDescription="•	Administration and Maintenance of Siebel Enterprise.
                                            •	Siebel installations, Siebel Upgrades, applying patches, Siebel server management, local database extracts, Workflow and Assignment Administration, executing EIM.
                                            •	Monitor the server and component statuses in HP Site scope. 
                                            •	Mapping Siebel OLTP data with OBIEE in one of the client’s crucial data using Connect-it tool.
                                            •	Code Migration like Repository Migration, SRF Deployment and other special deployment activities required for AA.
                                            •	Database related tasks including Backup of DB, monitoring DB performance and server space/performance, etc.
                                            "
                        />
                        <hr style={{borderTop:'3px solid grey'}}/>
                        <h2>Skills</h2>
                        <Skills
                            skill=".Net Selenium-C#,Java"
                            progress={100}
                        />
                        <Skills
                            skill="UFT-VBScript"
                            progress={100}
                        />
                        <Skills
                            skill="Framework-BDD,TDD,DDT"
                            progress={100}
                        />
                        <Skills
                            skill="Python"
                            progress={40}
                        />
                        <Skills
                            skill="React"
                            progress={30}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
} 

export default Resume;