import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Authentication/Login/Login";
import Registration from "./pages/Authentication/Registration/Registration";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./pages/Shared/Header/Header";

function App() {

  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
