import Main from './pages/Main'
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
