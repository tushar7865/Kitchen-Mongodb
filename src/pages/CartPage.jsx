import { useCart } from "../contexts/CartContext";
import { FaCartArrowDown } from "react-icons/fa";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <section className="cart section">
      <h2>
        Your Cart <FaCartArrowDown />
      </h2>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="grid grid-3">
          {cart.map((item, i) => (
            <div className="card cart-card" key={i}>
              <img src={item.img} alt={item.title} className="cart-img" />
              <div className="p">
                <h3>{item.title}</h3>
                <p className="price">₹ {item.price}</p>
                <button
                  onClick={() => removeFromCart(i)}
                  className="btn-remove"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <h4 className="total">
          Total: ₹{" "}
          {cart.reduce((acc, item) => acc + item.price, 0)}
        </h4>
      )}
    </section>
  );
}
