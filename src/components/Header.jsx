import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="border-2 bg-gray-400 pl-6">
        <ul className="flex gap-8 font-mono text-[40px] font-bold flex-end">
          <li>
            <Link to="/home">TechnicalSEO</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/service">service</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
