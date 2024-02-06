import Navbar from "./header"
import First from "./component/first"
import Main from "./component/home"
import RegForm from "./component/form"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/first" element={<First/>} />
          <Route path="/form" element={<RegForm />} />
        </Routes>
      
    </>
  )
}

export default App