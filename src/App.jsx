import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
