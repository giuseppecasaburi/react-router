import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PostList from "./components/PostList"
import Contacts from "./components/Contacts"
import AppLayout from "./components/AppLayout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Postlist" element={<PostList />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
