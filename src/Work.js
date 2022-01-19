import React from 'react'
import './styles.scss';



export default function Work() {
   
    return (
        <div class='page'>
        <h2 class='al'>Work I have done</h2>
        <div class="r container">
        
<div style={{marginLeft:'10%'}} class="row">
    
    <div class="col col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                <div class="content">
                    <h6 class="category">Web dev Intern</h6>
                    <h4 class="title"><a>Celedonsoft, Dubai</a></h4>
                    <p class="description"><li>Developed frontend of client website using React JS.</li> 
                                            <li>Fixing bugs for testing for usability.</li>
                                            <li>API intergration.</li>
                                           <li><a href='https://www.praguecoolpass.com/'>praguecoolpass.com</a></li>
                                            </p>
                </div>
            </div> 
        </div>
    </div>
    
    <div class="col col-sm-6 content-card">
        <div class="card-big-shadow">
            <div class="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                <div class="content">
                    <h6 class="category">Web dev intern</h6>
                    <h4 class="title"><a href="https://www.praguecoolpass.com/">Desert Link Tours, Dubai</a></h4>
                    <p class="description"><li>Developed comapany website using Vue</li>
                                           <li>API development, testing and integration</li>
                                           <li>Backend setup using express</li>
                                           <li><a href='https://www.desertlinktours.com/'>desertlinktours.com</a></li></p>
                </div>
            </div> 
        </div>
    </div>
     
</div>
</div>
</div>
    )
}
