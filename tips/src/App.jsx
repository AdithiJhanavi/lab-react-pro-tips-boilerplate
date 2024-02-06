import Navbar from "./header"
import First from "./component/first"
import Home from "./component/home"
import RegForm from "./component/form"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First/>} />
          <Route path="/form" element={<RegForm />} />
        </Routes>
      </div>
    </>
  )
}

export default App