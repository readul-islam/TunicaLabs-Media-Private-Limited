import './App.css';

import Navbar from './components/Shared/Navbar';
import SignUp from './components/SignUp/SignUp';
import TosterContainer from './TosterContainer';
import {
  Routes, Route
} from "react-router-dom";
import SignIn from './components/Login/SignIn';
import Management from './components/Management/Management';
import ViewStudents from './components/Management/ViewStudents';
import AddStudent from './components/Management/AddStudent';

function App() {
  return (
    <>
      <Navbar />
     

      <Routes>
       
        <Route path='/' element={<SignUp />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/management' element={ <Management /> } >
    <Route index element={<ViewStudents />} />
    <Route path='students' element={<ViewStudents />} />
    <Route path='add-student' element={<AddStudent />} />



        </Route>



      </Routes>


      <TosterContainer />
    </>
  );
}

export default App;
