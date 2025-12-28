import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function EditExpense() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    api.get("/expenses").then(res => {
      const expense = res.data.find(e => e.id === Number(id));
      setForm(expense);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.put(`/expenses/${id}`, form);
    navigate("/expenses");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={form.title || ""} onChange={e=>setForm({...form,title:e.target.value})}/>
      <input type="number" value={form.amount || ""} onChange={e=>setForm({...form,amount:e.target.value})}/>
      <input type="date" value={form.date?.slice(0,10) || ""} onChange={e=>setForm({...form,date:e.target.value})}/>
      <button>Update</button>
    </form>
  );
}
