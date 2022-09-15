import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>Teste</p>
        <switch>
          <Route exact path="/" component={Login} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
