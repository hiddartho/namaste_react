import "../index.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://st2.depositphotos.com/1496387/10676/v/450/depositphotos_106767710-stock-illustration-cook-chef-vector-logo-restaurant.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
