import React, { Component } from 'react';
import avatar from './images/avatar.JPG';
import './styles.scss';



export default function Introduction() {
    const images=process.env.REACT_APP_FOR_PATH;
    return (
        <div class="page">
          
            <div class="nameBox">
                <div>
                    <div class="content">
                        <h1>Hi,</h1> 
                        <h1>I'm Samiya Samreen</h1>
                        <h1><mark>A Front-end Developer</mark></h1>
                    </div>
                       
                    <img class="avatar" src={images+"/images/avatar"} alt='avatar'/>
                    
                   
                </div>
                </div>
            
        </div>
    )
}

