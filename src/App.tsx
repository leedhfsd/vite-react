import Header from "./components/Header";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Toon from "./pages/Toon";
import Novel from "./pages/Novel";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/" Component={Home} />
        <Route path="/toon" Component={Toon} />
        <Route path="/novel" Component={Novel} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
