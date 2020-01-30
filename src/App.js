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
      selected_contect_id: 2,
      Subject: { title: 'WEB ', subtitle: 'WWW' },
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
      // _title = this.state.contents[0].title;
      // _desc = this.state.contents[0].desc;
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_contect_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }

    console.log('render is', this)
    return (
      <div className="App" >
        <Subject
          title={this.state.Subject.title}
          subtitle={this.state.Subject.subtitle}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        >
        </Subject>

        <TOC
          onChangePage={function () {
            this.setState({
              mode: 'read',
              selected_contect_id: 0
            })
          }.bind(this)}
          data={this.state.content}></TOC>
        <Content title={_title} subtitle={_desc}></Content>
      </div >
    );
  }
}


export default App;
