import 'react-toastify/dist/ReactToastify.css'
import AuthProvider from './context/auth'
import {BrowserRouter, Route} from 'react-router-dom';
import Routes from './Routes'
import {ToastContainer} from 'react-toastify'
function App() {
  return (
      <div className="App">
        <AuthProvider>
          <BrowserRouter>
            <Routes/>
            <ToastContainer autoClose={3000}/>
          </BrowserRouter>
        </AuthProvider>
      </div>
  );
}

export default App;
