import './App.css';
import { Component } from 'react';

//code 01
import React, { FC } from 'react';

// Définir un type pour les props
type GreetingProps = {
  name: string;
};

// Déclarer le composant avec un type FC et le type des props
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};



//code 02
// Interface pour l'état du composant
interface CounterState {
  count: number;
}

// Composant de classe avec props `{}` et état `CounterState`
class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  //Méthode pour incrémenter le compteur
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="React" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
