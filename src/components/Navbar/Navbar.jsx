import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <nav className="navigation-panel">
      <ul className="navigation-list">
        <li className="navigation-option">
          <Link to="game">Play</Link>
        </li>
        <li className="navigation-option">
          <Link to="deck-manager">Edit decks</Link>
        </li>
        <li className="navigation-option">
          <Link to="dictionary">Dictionary</Link>
        </li>
      </ul>
    </nav>
  );
}
