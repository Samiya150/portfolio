import React, { Component } from 'react';
import avatar from './images/avatar.JPG';
import Particles from "react-tsparticles";
import './styles.scss';



export default function Introduction() {
    return (
        <div class="page">
          
            <div class="nameBox">
                <div>
                    <div class="content">
                        <h1>Hi,</h1> 
                        <h1>I'm Samiya Samreen</h1>
                        <h1><mark>A Front-end Developer</mark></h1>
                    </div>
                       
                    <img class="avatar" src={avatar} alt='avatar'/>
                    
                   
                </div>
                </div>
            
        </div>
    )
}

