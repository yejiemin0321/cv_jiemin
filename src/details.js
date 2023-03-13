import React from 'react';
import About from './about.js';
import Education from './education.js';
import Hobby from './hobby';
import './assets/details.css'

class DetailContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          tabClicked: null
        };
      }
    renderTabs() {
        const result = [];
        for (let i = 0; i < this.props.tabs.length; i++) {
            let id = 'btn'+i
            result.push(<li className='detail-btn'><button className='btn-no-clicked' onClick={() => { this.handleClick(i) }} id={id} ><img src={this.props.tabs[i].img}></img><span>{this.props.tabs[i].name}</span></button></li>);
        }

        return result;
    };
    handleClick(i){
        console.log(this.state.tabClicked)
        if(this.state.tabClicked != null){
            console.log('ddd')
            const oldId = 'btn'+this.state.tabClicked
            const oldElem = document.getElementById(oldId)
            oldElem.classList.remove("btn-clicked")
            oldElem.classList.add('btn-no-clicked')
        }
        this.setState({tabClicked:i})
        const id = 'btn'+i;
        const elem = document.getElementById(id);
        elem.classList.add("btn-clicked")
        elem.classList.remove('btn-no-clicked')
    }
    render(){
        return (
            <div className='DdetailContainer'>
                <ul className='detail-btns'>
                    {this.renderTabs()}
                </ul>
                <div className='detail-block'>
                    <DetailBlock value={this.state.tabClicked}/>
                </div>
            </div>
        );
    }
}

function DetailBlock(props) {
   switch (props.value) {
        case 0:
            return <About/>
        case 1:
            return <Education/>
        case 3:
            return <Hobby/>
        default:
            return null
   }
}


export default DetailContainer;