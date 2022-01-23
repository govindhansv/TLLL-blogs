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

function App() {



  return (
    <>
      <div>
          <Navbar />
        <div className="App-header App flex flex-col mt-16">
          <div className="bg-[#F3F4F6]">
            <Routes>
              <Route path="/profile" element={<Profile />} />
            </Routes> 
          </div>

          <header className="lg:px-48 bg-[#F3F4F6]">
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
              <Route path="/myblogs" element={<Myblogs />} />
              <Route path="/edit-profile" element={<EditProfile />} />
            </Routes>
          </header>
          <div className="mt-auto" >
            <Footer />
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
