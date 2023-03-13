import React from 'react';
import linkedin from './img/linkedin-circled.svg';
import cv from './CV_Jiemin_YE.pdf'
import './assets/navbar.css';

function Navbar(props){
    return (
        <div className='Navbar'>
                <div className='download'>
                    <a href={cv} download>
                        <button className='primary'>Télécharger mon CV</button>
                    </a>
                </div>
                <div className='social'>
                    <span className='socialItem'>
                        <a href='https://www.linkedin.com/in/%E6%B4%81%E7%8F%89-%E5%8F%B6-466a361b9/'>
                        <img src={linkedin} alt='linkedin'/>
                        </a>
                    </span>  
                </div>   
            </div>
    );
}

export default Navbar