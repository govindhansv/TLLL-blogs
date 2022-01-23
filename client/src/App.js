import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import Adminlogin from './pages/Admin/Adminlogin';
import Allblogs from './pages/Admin/Allblogs';
import Allusers from './pages/Admin/Allusers';
import Blog from './pages/Blog/Blog';
import Editblog from './pages/Forms/Editblog/Editblog';
import Login from './pages/Forms/Login/Login';
import Newblog from './pages/Forms/Newblog/Newblog';
import Signup from './pages/Forms/Signup/Signup';
import Profile from './pages/Profile/Profile';
import Myblogs from './pages/Myblogs/Myblogs';
import EditProfile from './pages/Forms/EditProfile/EditProfile';
import Success from './pages/Success/Success';

function App() {





  return (
    <>
      <div>
        <div className="App">
          
            <Navbar/>
          <header className="App-header">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/adminlogin" element={<Adminlogin />} />
              <Route path="/allblogs" element={<Allblogs />} />
              <Route path="/allusers" element={<Allusers />} />
              <Route path="/blog/:id" element={<Blog />} />
              <Route path="/editblog" element={<Editblog />} />
              <Route path="/login" element={<Login />} />
              <Route path="/newblog" element={<Newblog />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/myblogs" element={<Myblogs />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </header>
            <Footer />
        </div>
      </div>

    </>
  );
}

export default App;
