export default function Checkout({ cart, remove }) {
  const total = cart.reduce((s,i)=>s+i.price*i.qty,0);
  return (
    <aside className="cart">
      <h3>Your Cart</h3>
      {cart.length===0 && <p>No items yet.</p>}
      {cart.map(i=>(
        <div key={i.id} className="cart-item">
          <span>{i.title} × {i.qty}</span>
          <span>₹{i.price*i.qty}</span>
          <button onClick={()=>remove(i.id)} style={{marginLeft:8}}>x</button>
        </div>
      ))}
      <hr/>
      <p><strong>Total:</strong> ₹{total}</p>
      <button className="btn" onClick={()=>alert("Proceed to payment (stub)")}>Proceed to Buy</button>
    </aside>
  );
}
