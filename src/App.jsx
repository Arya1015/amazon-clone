import { useMemo, useState } from "react";
import "./app.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Checkout from "./components/Checkout";
import { items } from "./data";

export default function App(){
  const [query,setQuery]=useState("");
  const [cart,setCart]=useState([]);

  const add=(p)=>{
    setCart(prev=>{
      const f=prev.find(x=>x.id===p.id);
      if(f) return prev.map(x=>x.id===p.id?{...x,qty:x.qty+1}:x);
      return [...prev,{...p,qty:1}];
    });
  };
  const remove=(id)=>setCart(prev=>prev.filter(x=>x.id!==id));

  const filtered = useMemo(
    ()=>items.filter(i=>i.title.toLowerCase().includes(query.toLowerCase())),
    [query]
  );
  const count = useMemo(()=>cart.reduce((s,i)=>s+i.qty,0),[cart]);

  return (
    <>
      <Header count={count} onSearch={setQuery} />
      <main className="grid">
        {filtered.map(p=><Product key={p.id} p={p} add={add}/>)}
      </main>
      <Checkout cart={cart} remove={remove}/>
    </>
  );
}
