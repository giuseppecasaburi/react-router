import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PostList from "./components/PostList"
import Contacts from "./components/Contacts"
import AppLayout from "./components/AppLayout"
import DetailPost from "./components/DetailPost"
import NewPostPage from "./components/NewPostPage"
import { useEffect, useState } from "react"
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

const apiUrl = "http://localhost:3000";

function App() {

  const [posts, setPosts] = useState([]); // Usa postsArray come stato iniziale

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    axios.get(`${apiUrl}/posts`).then((resp) => {
      console.log(resp.data.data);
      setPosts(resp.data.data)
    })
  }

  // Funzione per gestire la cancellazione dei post
  const deletePost = (id) => {                                  // CHIEDERE ID //
    axios.delete(`${apiUrl}/posts/${id}`).then((resp) => {
      console.log(resp);
      const updatedPosts = posts.filter((post) => post.id !== id);
      setPosts(updatedPosts);
    })
  }
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Postlist" element={<PostList posts={posts} apiUrl={apiUrl} deletePost={deletePost}/>} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/detailpost/:id" element={<DetailPost posts={posts} />} />
            <Route path="/newpostpage" element={<NewPostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
