import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Link to="/todo">
        <Button>Route to Todo </Button>
      </Link>
    </div>
  );
}

export default NavBar;