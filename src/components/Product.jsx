export default function Product({ p, add }) {
  return (
    <div className="card">
      <img src={p.img} alt={p.title}/>
      <h3>{p.title}</h3>
      <p>⭐ {p.rating}</p>
      <p className="price">₹{p.price}</p>
      <button className="btn" onClick={()=>add(p)}>Add to Cart</button>
    </div>
  );
}
