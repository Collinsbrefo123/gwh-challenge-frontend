import { Route, Routes } from "react-router-dom";
import "./App.css";
import ToDoComponent from "./views/ToDo";
import HomePage from "./views/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
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
