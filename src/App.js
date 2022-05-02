import { Routes, Route, Navigate } from "react-router-dom"
import Auth from "./pages/Auth/Auth"

const App = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Navigate to='/auth'/>}/>
        <Route path="/auth" element={<Auth/>}/>
    </Routes>
  )
}

export default App