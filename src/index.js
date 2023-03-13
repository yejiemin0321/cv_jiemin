import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/main.css';
import Navbar from './navbar';
import PersonneInfo from './personneInfo';
import DetailContainer from './details';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';
import hobby from "./img/crochet.png";
import experience from "./img/education.png";
import about from "./img/info.png";
import education from "./img/experience.png";


const tabs = [{ name: 'about', img: about }, { name: 'education', img: education }, { name: 'experience', img: experience }, { name: 'hobby', img: hobby }];


class Home extends React.Component {
  render() {
    return (
      <div className="Home" >
        <div className="navbar">
          <Navbar/>
        </div>
        <div className="personne-info">
          <PersonneInfo/>
        </div>
        <div className="detail-container">
          <DetailContainer tabs={tabs}/>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
