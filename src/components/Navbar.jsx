import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <h3>Expense Tracker</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add-expense">Add Expense</Link>
        <Link to="/expenses">Expense List</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
