export default function Header({ count, onSearch }) {
  return (
    <header className="header">
      <div className="logo">amazon<span style={{color:"#febd69"}}>.lite</span></div>
      <div className="search">
        <input placeholder="Search products" onChange={(e)=>onSearch(e.target.value)} />
        <button>Search</button>
      </div>
      <nav className="nav">
        <a href="#">Hello, Sign in</a>
        <a href="#">Returns & Orders</a>
        <a href="#">Cart ({count})</a>
      </nav>
    </header>
  );
}
