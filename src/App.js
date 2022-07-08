import './App.css';

import Navbar from './components/Shared/Navbar';
import SignUp from './components/SignUp/SignUp';
import TosterContainer from './TosterContainer';
import {
  Routes, Route
} from "react-router-dom";
import SignIn from './components/Login/SignIn';

function App() {
  return (
    <>
    <Navbar />
        
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

        

      </Routes>


      <TosterContainer />
    </>
  );
}

export default App;
