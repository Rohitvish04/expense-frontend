import API from "../api/api";
import { useState } from "react";

export default function AddExpense() {
  const [form, setForm] = useState({
    title: "", amount: "", date: "", description: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/expenses", form);
    setForm({ title:"", amount:"", date:"", description:"" }); // ✅ clear
    alert("Expense added");
  };

  return (
    <form className="card" onSubmit={submit}>
      <h2>Add Expense</h2>
      <input value={form.title} placeholder="Title" onChange={e=>setForm({...form,title:e.target.value})}/>
      <input value={form.amount} type="number" placeholder="Amount" onChange={e=>setForm({...form,amount:e.target.value})}/>
      <input value={form.date} type="date" onChange={e=>setForm({...form,date:e.target.value})}/>
      <input value={form.description} placeholder="Description" onChange={e=>setForm({...form,description:e.target.value})}/>
      <button>Add</button>
    </form>
  );
}
