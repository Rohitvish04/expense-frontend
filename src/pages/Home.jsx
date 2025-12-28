import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="card">
      <h2>Welcome to Expense Tracker</h2>
      <Link to="/add-expense">➕ Add Expense</Link><br />
      <Link to="/expenses">📋 Expense List</Link><br /><br />
      <button onClick={logout}>Logout</button>
    </div>
  );
}
