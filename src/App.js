import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';
import OtpPage from './Pages/OtpPage';
import { CssBaseline } from '@mui/material';
import Header from './Components/Header';
import DashBord from './Pages/DashBord';
import UserAdd from './Pages/UserAdd';
import UserUpdation from './Pages/UserUpdation';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  const AppLayOut = () => {
    return (
      <>
        <CssBaseline />
        <div className="main-headers">
          <Header />
        </div>
        <div className="main-content">
          <Outlet />
        </div>

      </>
    )
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/otp-navigate' element={<OtpPage />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/' element={<AppLayOut/>}>
            <Route path='/main' element={<DashBord/>}/>
            <Route path='/add-user' element={<UserAdd/>}/>
            <Route path='/update-user' element={<UserUpdation/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
