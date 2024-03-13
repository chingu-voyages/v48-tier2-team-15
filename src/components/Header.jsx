import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="text-4xl font-bold tracking-wider">DinoWorld</h1>
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/go-digging">Go Digging</Link>
          </li>
          <li>
            <Link to="/data">Data</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
