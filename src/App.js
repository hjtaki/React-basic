import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC"
import Content from "./components/Content"
import Subject from "./components/Subject"


class App extends Component {
  constructor(props) {
    super(props);
    //initialize
    this.state = {
      mode: 'read',
      Subject: { title: 'WEB', subtitle: 'WWW' },
      welcome: { title: 'welcome', desc: 'Hello, React' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is Hypertext' },
        { id: 2, title: 'CSS', desc: 'CSS is Design' },
        { id: 3, title: 'JS', desc: 'JS is interactive' }
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject
          title={this.state.Subject.title}
          subtitle={this.state.Subject.subtitle}>
        </Subject> */}
        <header>
          <h1><a href='/' onClick={function (e) {
            console.log(e);
            e.preventDefault();
          }}>{this.state.Subject.title}</a></h1>
          {this.state.Subject.subtitle}
        </header>

        <TOC data={this.state.contents}></TOC>
        <Content title={_title} subtitle={_desc}></Content>
      </div>
    );
  }
}


export default App;
