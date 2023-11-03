import './App.css';
import InfoCard from './components/InfoCard';
import Selector from './components/Selector.js'
import ErrorBoundry from './components/ErrorBoundry'
import { Component } from 'react';
import FactBox from './containers/FactBox.js';
import FactLine from './containers/FactLine.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      factologist: '',
      factologists: [],
      messages: []
    };
  }


  componentDidMount() {
    fetch("https://swapi.py4e.com/api/people/")
      .then(res => res.json())
      .then(res => this.setState({factologists: res.results}));
  }

  onFactologistChange = (Event) => {
    this.setState({ factologist: Event.target.value });
  }

  onFactAdd = () => {
    this.setState({messages: [...this.state.messages, "new message"]});
    console.log(this.getNewFact().value);
  }

  getNewFact = () => {
    return fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json());
  }

  render() {
    if (this.state.factologists.length === 0) {
      return <div>Loading</div>
    } else {
      if (this.state.factologist === '') {
        this.setState({ factologist: this.state.factologists[0].name });
      }
      const currentFactologist = this.state.factologists.filter(factologist => factologist.name === this.state.factologist)[0];
      return (
        <div className="tc">
          <div class="f1">Factology</div>
            <Selector factologistChange={this.onFactologistChange} text='Pick your factologist: ' items={this.state.factologists
              .map(factologist => [factologist.url.split('/').at(-2), factologist.name])} />
            <ErrorBoundry>
              <FactBox>
                <InfoCard factologist={currentFactologist} />
                <FactLine messages={this.state.messages}/>
                <button onClick={this.onFactAdd}>Go to the new Fact!</button>
              </FactBox>
            </ErrorBoundry>
        </div>
      );
    }
  }
}

export default App;
