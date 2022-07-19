// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }

class App extends React.Component {
  compromissos = ['fazer exercicio','trocar de maquina','rezar'];

  render() { 
    return (
      <div className="App">
        <Header />
        <Content />
        <Button color="danger">Danger!</Button>
        <Footer />
        {/* <ul>
          {this.compromissos.map((item) => Task(item))}
        </ul>  */}
      </div>
    );
}
}

export default App;
