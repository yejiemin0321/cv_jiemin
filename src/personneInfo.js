import React from 'react';
import profile from './img/profile.jpg';
import docker from './img/docker.svg';
import drupal from './img/drupal.svg';
import utc from './img/utc.png'
import './assets/personneInfo.css';



function PersonneInfo(props) {
      return (
        <div className="PersonneInfo" >
            <div className='left'>
              <div>
                <div className='greet-block'>
                  Hello, I'm
                </div>
                <div className='name-block'>
                  Jiemin YE
                </div>
              </div>
              <div className='profile-block'>
                A junior passionate web developer graduated from UTC this year
              </div>
              <div className='stack-block'>
                <a href='https://www.utc.fr/en/'>
                  <img src={utc} alt='utc' className='utc'/>
                </a>
                <a href='https://www.drupal.org/'>
                  <img src={drupal} alt='drupal'/>
                </a>
                <a href='https://fr.wikipedia.org/wiki/Docker_(logiciel)'>
                  <img src={docker} alt='docker'/>
                </a>
                <span className='and-more-block'>
                  &nbsp; &nbsp; & more
                </span>
              </div>
            </div>
            <div className='right'>
              <div className='image-block'>
                <img src={profile} alt='profile'></img>
              </div>
            </div>
        </div>
      );
}

export default PersonneInfo
  