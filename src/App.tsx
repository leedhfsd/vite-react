import Header from "./components/Header";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Toon from "./pages/Toon";
import Novel from "./pages/Novel";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/toon" Component={Toon} />
        <Route path="/novel" Component={Novel} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
