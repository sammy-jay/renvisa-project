import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import UserReg from "./pages/UserReg/UserReg";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<UserReg />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
