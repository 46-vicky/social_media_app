import {Link, Route, Routes} from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Missing from './Missing';
import Nav from './Nav';
import Posts from './Posts';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import PostLayout from './PostLayout';
import Login from './Login'
import Signup from './Signup'
import { useState } from 'react';
function App() {
  const [isLogin,setIsLogin] = useState(true)
  return (
    <div className="App">
      <Header/>
      <Routes path="/" element={ <Home 
      isLogin={isLogin}
      setIsLogin={setIsLogin}
      />}>
           <Route path="login" element={<Login/>}/>
           <Route path='signup' element={<Signup/>}/>
         </Routes>
      <Footer />
    </div>
  );
}

export default App;
