import React from 'react'
import { Routes, Route } from "react-router-dom"
import Posts from '../Posts/Posts'
import Comments from '../Comments/Comments'
import Album from '../Album/Album'
import Header from '../Header/Header'
import Photos from '../Photos/Photos'
import TodoApi from '../TodoApi/TodoApi'
import User from '../User/User'
function JsonHome() {
  return (
      <div>
      <Header/>   
     <Routes>
        <Route path="/" element={ <Posts/> } />
        <Route path="/Comments" element={ <Comments/> } />
        <Route path="/Album" element={ <Album/> } />
        <Route path="/Photos" element={ <Photos/> } />
        <Route path="/Todo" element={ <TodoApi/> } />
        <Route path="/User" element={ <User/> } />
      </Routes>
    </div>
  )
}

export default JsonHome