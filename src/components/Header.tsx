import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex bg-black">
          <li className="text-lg">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/MyPage">My Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
