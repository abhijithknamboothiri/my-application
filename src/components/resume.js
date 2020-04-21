import React, { Component  } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={require('./avatarpic.png')}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Abhijith.K.Namboothiry</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p> Hello there , Myself Abhijith.K.Namboothiry</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Sreedevi Sadanam ,</p>
               <p>Sasthamkotta , Kollam ,</p> 
               <p>Kerala ,</p>
               <p>ZIP-690521</p>
            <h5>Phone</h5>
            <p>(+91) 9447159929</p>
            <h5>Email</h5>
            <p>namboothiri9@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2009}
              endYear={2010}
              schoolName="CBSE, 10th Grade"
              schoolDescription="Kendriya Vidyalaya Adoor , Pathanamthitta , Kerala "
               />

               <Education
                 startYear={2010}
                 endYear={2013}
                 schoolName="HSE , 12th Grade"
                 schoolDescription="K.V.S.H.S.S , Muthukulam , Alapuzha"
                  />
                  <Education
                 startYear={2013}
                 endYear={2016}
                 schoolName="Kerala University , Bachelors Degree"
                 schoolDescription="College Of Applied Sciences IHRD , Karthikapally , Alapuzha"
                  />
                  <Education
                 startYear={2017}
                 endYear={2020}
                 schoolName="Kerala University , Masters Degree"
                 schoolDescription="SNIT  , Vadakkevila ,Kollam"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Internship ,Visualyze VABI Pvt ltd."
              jobDescription="Worked as an Intern for developing academic project"
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Android"
                progress={100}
                />
                <Skills
                  skill="Java"
                  progress={80}
                  />
                  <Skills
                    skill="Php"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;