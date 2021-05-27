import AuthProvider from './context/auth'
import {BrowserRouter, Route} from 'react-router-dom';
import Routes from './Routes'
function App() {
  return (
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <Routes/>
          </BrowserRouter>
        </AuthProvider>
      </div>
  );
}

export default App;
