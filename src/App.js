import { Fragment } from 'react';
import './App.css';
import Border from './components/Border'
import CardIcons from './components/CardIcons';
import Card from './components/Card';

function App() {
  return (
    <Fragment>
      <Card />
      <CardIcons />
      <Border />
    </Fragment>
  );
}

export default App;
