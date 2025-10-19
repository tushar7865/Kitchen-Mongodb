import { FaCartArrowDown } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";
import biryani from "../assets/images/biryani.jpg";
import paneer from "../assets/images/paneer.jpg";
import dosa from "../assets/images/dosa.jpg";
import gulabjamun from "../assets/images/gulabjamun.jpg";

export default function Specials() {
  const { addToCart } = useCart();

  const items = [
    { img: biryani, title: "Hyderabadi Biryani", price: 250 },
    { img: paneer, title: "Paneer Butter Masala", price: 180 },
    { img: dosa, title: "Masala Dosa", price: 120 },
    { img: gulabjamun, title: "Gulab Jamun", price: 80 },
  ];

  return (
    <section id="specials" className="specials">
      <h2>Our Specialities</h2>
      <div className="grid grid-4">
        {items.map((d, i) => (
          <div className="card" key={i}>
            <img src={d.img} alt={d.title} />
            <div className="p">
              <h3>{d.title}</h3>
              <p className="price">₹ {d.price}</p>
              <button className="btn" onClick={() => addToCart(d)}>
                <FaCartArrowDown /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
