import React from 'react';
import './Portfolio.css';
import Info from './Info.js';
import profImage from './avatar.png';
import skillImage from './skills.png';
import pythonLogo from './Logos/Python-logo.png';
import javaLogo from './Logos/java.png';
import cLogo from './Logos/c++.png';
import cnLogo from './Logos/cn.png';
import dsaLogo from './Logos/data_struct.png';
import dbmsLogo from './Logos/dbms.png';
import osLogo from './Logos/os.png';
import jsLogo from './Logos/js.png';
import aiLogo from './Logos/ai.png';
import mlLogo from './Logos/ml.png';
import htmlLogo from './Logos/html1.png';
import cssLogo from './Logos/css.png';
import GoP from './gophish.png';
import Fl from './blog.png';




function Portfolio() {
    return (
      <div id="root">
      <header class="flex justify-between px-5 py-2 bg-primary text-white fixed w-full z-10">

      <nav class="navbar">
    <ul class="nav-items">
        <li><a href="/#about">About</a></li>
        <li><a href="/#skills">Skills</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a href="https://drive.google.com/file/d/1Rd4NgMKq3HI_aRvXji-7XjmvNKjOoYDL/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a></li>
    </ul>
</nav>
      </header>

      <section class="bg-primary px-5 text-white pt-100 pb-32" style={{ height: '650px' }}>
    <div class="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div class="hero-info pb-5 md:pb-0" style={{ marginLeft: '10%', marginTop: '90px', display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginRight: '450px', fontSize: '2em' }}>
            <h1 class="text-4xl lg:text-6xl" style={{ fontSize: '2em' }}>Hello, <br/>I am <span style={{ color: '#6c63ff' }}>Anushka Singh</span></h1>
                <Info />
                
            </div>
            <img src={skillImage} alt="home" style={{ width: '40%' }} />
        </div>
    </div>
</section>




<section class="bg-primary  text-white " style={{ height: '750px' }} id = "about">
    <div class="container">
        <div class="about-info " style={{ marginLeft: '10%', marginTop: '10px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px' }}>
                <div style={{ fontSize: '1.2em' }}>
                    <h2 class="text-4xl font-bold mb-5 border-b-[5px]" style={{ color: '#6c63ff' }}>About Me</h2>
                    <p>Driven, responsible and enthusiastic third year student studying in Computer Science Engineering 
                    . Friendly, and considered hardworking, punctual and driven with task 
                        prioritization skills.</p>
                    
                    <h4 style={{ color: '#6c63ff' }}>EDUCATION</h4>
                    <p><strong>UG</strong>
                    <br/>
                    2025<br/>
                    Currently pursuing 3rd Year B. Tech in Computer Science Engineering from Vellore Institute of Technology, Chennai having secured 9.51 CGPA till the fifth semester of college.
                    <br/><br/>
                    <strong>10th &12th</strong><br/>
                    2021<br/>
                    Completed 12th standard with 95% from Maharashtra HSC<br/>
                    2019<br/>
                    Secured an 98.8% score in CBSE 10th grade examinations coming first in my school, which placed me in the prestigious top 5% merit list of Kendriya Vidyalaya
                    </p>
                </div>
                <img src={profImage} alt="profile" style={{ width: '70%', marginTop: '120px', marginRight: '0px' }} />
            </div>
        </div>
    </div>
</section>


<section class="bg-primary px-5 text-white pt-100 pb-32" style={{ height: '750px' }} id = "skills">
    <div class="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div class="skills-info pb-5 md:pb-0" style={{ marginLeft: '0%', marginTop: '10px' }}>
        
            <h2 class="text-4xl font-bold mb-5 border-b-[6px] w-[180px] pb-2" style={{ color: '#6c63ff', gridColumn: '2 / span 1', justifySelf: 'center' }}>Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '80px', marginLeft: '20%' }}>
                <img src={pythonLogo} alt="python" width="120" height="120" />
                <img src={javaLogo} alt="java" width="120" height="120" />
                <img src={cLogo} alt="c" width="120" height="120" />
                <img src={htmlLogo} alt="html" width="120" height="120" />
                <img src={cssLogo} alt="css" width="120" height="120" />
                <img src={jsLogo} alt="javascript" width="120" height="120" />
                <img src={dsaLogo} alt="dsa" width="120" height="120" />
                <img src={aiLogo} alt="ai" width="120" height="120" />
                <img src={mlLogo} alt="ml" width="120" height="120" />
                <img src={cnLogo} alt="cn" width="120" height="120" />
                <img src={osLogo} alt="os" width="120" height="120" />
                <img src={dbmsLogo} alt="dbms" width="120" height="120"/>
            </div>
        </div>
        <div>
        </div>
    </div>
</section>


<section class="bg-primary px-5 text-white " style={{ height: '650px' }} id = "projects">
    <div class="container ">
        <div class="project-info" style={{ marginLeft: '0%', marginTop: '5px' }}>
            <h2 class="text-4xl font-bold mb-5 border-b-[5px]" style={{ color: '#6c63ff' }}>Projects</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-image">
                            <img src={GoP} alt="GoPhish" />
                        </div>
                        <div class="card-content">
                            <p><strong>Phishing Attack using the GoPhish tool</strong><br/>
                            - Simulated a real-world phishing attack using the open source GoPhish framework.<br/>
                            - Skills: Information Security, Cyber Security
                            </p>
                        </div>
                        <div class="card-action">
                            <a href="./">Code</a>
                            <a href="./">Demo</a>
                        </div>
                    </div>
                </div>

                <div class="col-sm-3">
                    <div class="card">
                        <div class="card-image">
                            <img src={Fl} alt="Flask" />
                        </div>
                        <div class="card-content">
                            <p><strong>BlogTales -- Blogging website</strong><br/>
                            - Developed a blogging website named BlogTales where a user can register, login, add posts and view posts using Flask framework<br/>
                            - Skills: Python, HTML, CSS, Bootstrap, Flask, MySQL
                            </p>
                        </div>
                        <div class="card-action">
                            <a href="./">Code</a>
                            <a href="./">Demo</a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div> 
</section>



            
<section class="bg-primary px-5 text-white" id="contact">
    <div class="contact-info" style={{ marginLeft: '0%', marginTop: '5px' }}>
    <h2 class="text-4xl font-bold mb-5 border-b-[5px]" style={{ color: '#6c63ff' }}>Contact Me</h2>
    <div style={{fontSize:"1.2em"}}>
            <p ><strong>Email:</strong> tiya.singh1509@gmail.com</p>
            <p ><strong>Phone:</strong> 6206XXXXXX</p>
            <br/>
            </div>
            </div>
            </section>

            <section class="bg-primary px-5 text-white" id="c">     
            <div class="py-4 text-center bg-primary text-white " style={{ marginLeft: '0%', marginTop: '5px' }}> © 2023 Anushka
</div>
</section>
</div>
);
} 
  
export default Portfolio;
