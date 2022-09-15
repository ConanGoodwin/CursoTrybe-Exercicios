import { Route } from 'react-router-dom';
import './App.css';
import { Login } from './pages/login';

function App() {
  return (
    <div className="App">
      <p>teste</p>
      <Route path="/" component={Login} />
    </div>
  );
}

export default App;
