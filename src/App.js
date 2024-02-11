import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ToDoComponent from "./views/ToDo";
import NavBar from "./components/Navbar";
import HomePage from "./views/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const location = useLocation;
  return (
    <div>
      <Routes>
        <Route path="/" element = {< HomePage/>} />
        <Route path="/todo" element={<ToDoComponent />} />
      </Routes>
    </div>
  );
}

export default App;
