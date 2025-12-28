import API from "../api/api";
import { useEffect, useState } from "react";

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([]);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    API.get("/expenses").then(res => setExpenses(res.data));
  }, []);

  const update = async () => {
    await API.put(`/expenses/${edit.id}`, edit);
    setEdit(null);
    const res = await API.get("/expenses");
    setExpenses(res.data);
  };

  return (
    <div className="card">
      <h2>Expense List</h2>

      {expenses.map(e => (
        <div key={e.id} className="item">
          <b>{e.title}</b> ₹{e.amount}<br/>
          {new Date(e.date).toDateString()}
          <button onClick={() => setEdit(e)}>Edit</button>
        </div>
      ))}

      {edit && (
        <div>
          <h3>Edit Expense</h3>
          <input value={edit.title} onChange={e=>setEdit({...edit,title:e.target.value})}/>
          <input value={edit.amount} onChange={e=>setEdit({...edit,amount:e.target.value})}/>
          <button onClick={update}>Update</button>
        </div>
      )}
    </div>
  );
}
