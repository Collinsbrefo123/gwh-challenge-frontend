import { useLocation } from "react-router-dom";
import NavBar from "../../components/Navbar";

function HomePage() {
  const location = useLocation();
  return <div className="App">{location.pathname === "/" && <NavBar />}</div>;
}

export default HomePage;
