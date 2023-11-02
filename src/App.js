import './App.css';
import InfoCard from './components/InfoCard';
import InstructorPick from './components/InstructorPick.js'
import ErrorBoundry from './components/ErrorBoundry'
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      instructorPicked: '',
      instructorList: []
    };
  }


  componentDidMount() {
    fetch("https://swapi.py4e.com/api/people/")
      .then(res => res.json())
      .then(res => this.setState({instructorList: res.results}));
}

  render() {
    return (
      <div className="header">
          <InstructorPick instructors={this.state.instructorList} />
          <ErrorBoundry>
            <InfoCard instructor={this.state.instructorList[0]} />
          </ErrorBoundry>
      </div>
    );
  }
}

export default App;
