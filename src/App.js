
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddStudents from './components/AddStudents';
import DeleteStudents from './components/DeleteStudents';
import Navbar from './components/Navbar';
import SearchStudents from './components/SearchStudents';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter> 
    <Routes>

      <Route path='/' element={<AddStudents/>}/>
      <Route path='/search' element={<SearchStudents/>}/>
      <Route path='/delete' element={<DeleteStudents/>}/>
      <Route path='/view' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
