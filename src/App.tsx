import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import CreateAcct from './pages/signupPage/CreateAcct';
import Login from './pages/loginPage/Login';
import CreatePwd from './pages/signupPage/CreatePwd';
import CategoryPage from './pages/categoryPage/CategoryPage';
import ConfirmEmail from './pages/signupPage/ConfirmEmail';
import Dashboard from './dashboard/dashMain/Dashboard';
import Overview from './dashboard/overview/Overview';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/categories' element={<CategoryPage />} />
          <Route path='/signup' element={<CreateAcct />} />
          <Route path='/create_pwd' element={<CreatePwd />} />
          <Route path='/confirmEmail' element={<ConfirmEmail />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<Overview />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
