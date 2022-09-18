import FormStudent from './components/FormStudent';
import './App.css';
import StudentProvider from './APIContext/StudentProvide';

function App() {
  return (
    <div className="App">
      <StudentProvider>
        <FormStudent />
      </StudentProvider>
    </div>
  );
}

export default App;
