import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PostList from "./components/PostList"
import Contacts from "./components/Contacts"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Postlist" element={<PostList />}/>
          <Route path="/Contacts" element={<Contacts />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
