import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-center items-center">
        <ul className="flex space-x-4 m-4">
          <li>
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
