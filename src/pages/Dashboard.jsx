import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function Dashboard() {
  return (
    <div className="container">
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}
