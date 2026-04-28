import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router'
import { Home } from './Home';
import { Blog } from './Blog';
import { Contact } from './Contact';

import Post from './components/Post';
import Author from './components/Author';

 
function App() {

  return(
    <>
    <nav>
      <Link to="/">Inicio</Link> <br></br>
      <Link to="/blog">Blog</Link><br></br>
      <Link to="/contact">Contacto</Link><br></br>
    </nav>
    <Routes>
      <Route path="/" element={<Home></Home> } />
      <Route path="/blog" element={<Blog></Blog>}></Route>
      <Route path="/contact" element = {<Contact></Contact>}></Route>
      <Route path="/blog/:id_post" element={<Post></Post>}></Route>
      <Route path="/blog/:id_post/:id_author" element={<Author />} />

    </Routes>
    </>
  )


}

export default App
