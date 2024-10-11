import { Link } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import { toast } from "react-toastify";

const Header = () => {
  const accessToken = useUserStore((state) => state.accessToken);
  const logout = useUserStore((state) => state.logout);

  return (
    <header>
      <nav className="flex justify-center items-center">
        <ul className="flex space-x-4 m-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          {!accessToken ? (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={() => {
                  logout();
                  toast.success("로그아웃 되었습니다.");
                }}
              >
                Logout
              </button>
            </li>
          )}
          <li>
            <Link to="/MyPage">My Page</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
