import './App.css';
import EntryBox from './pages/EntryBox';
import EmailProvider from './context/EmailProvider'

function App() {
  return (
    <div className="App">
      <EmailProvider>
        <EntryBox />
      </EmailProvider>
    </div>
  );
}

export default App;
