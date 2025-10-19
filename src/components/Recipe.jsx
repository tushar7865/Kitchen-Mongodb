import { useState, useEffect } from "react";
import { FaCartArrowDown, FaEdit, FaTrash } from "react-icons/fa";
import { useCart } from "../contexts/CartContext";

export default function Specials() {
  const { addToCart } = useCart();

  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    title: "",
    price: "",
    img: "",
    chef: "",
    ingredients: "",
    instructions: "",
  });
  const [editId, setEditId] = useState(null);

  // ✅ Load recipes from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/recipes")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  // ✅ Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Add or Update recipe in DB
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.price || !form.chef) {
      return alert("Please enter Recipe Name, Price, and Chef Name");
    }

    try {
      let response;
      if (editId) {
        // Update
        response = await fetch(`http://localhost:8080/api/recipes/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        // Add new
        response = await fetch("http://localhost:8080/api/recipes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }

      const savedRecipe = await response.json();

      if (editId) {
        setItems(items.map((item) => (item.id === editId ? savedRecipe : item)));
      } else {
        setItems([...items, savedRecipe]);
      }

      setForm({
        title: "",
        price: "",
        img: "",
        chef: "",
        ingredients: "",
        instructions: "",
      });
      setEditId(null);
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  // ✅ Edit recipe
  const handleEdit = (recipe) => {
    setForm(recipe);
    setEditId(recipe.id);
  };

  // ✅ Delete recipe
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/api/recipes/${id}`, { method: "DELETE" });
      setItems(items.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <section id="specials" className="specials">
      <h2>🍲 Recipe Manager</h2>

      {/* Add/Edit Recipe Form */}
      <form onSubmit={handleSubmit} className="recipe-form">
        <input type="text" name="title" placeholder="Recipe Name" value={form.title} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" value={form.price} onChange={handleChange} required />
        <input type="text" name="img" placeholder="Image URL (optional)" value={form.img} onChange={handleChange} />
        <input type="text" name="chef" placeholder="Chef Name" value={form.chef} onChange={handleChange} required />
        <textarea name="ingredients" placeholder="Ingredients (comma separated)" value={form.ingredients} onChange={handleChange} />
        <textarea name="instructions" placeholder="Cooking Instructions" value={form.instructions} onChange={handleChange} />
        <button type="submit">{editId ? "Update Recipe" : "Add Recipe"}</button>
      </form>

      {/* Recipes List */}
      <div className="grid grid-4">
        {items.map((d) => (
          <div className="card" key={d.id}>
            {d.img && <img src={d.img} alt={d.title} style={{ height: "180px", objectFit: "cover", width: "100%" }} />}
            <div className="p">
              <h3>{d.title}</h3>
              <p><b>Chef:</b> {d.chef}</p>
              <p><b>Ingredients:</b> {d.ingredients}</p>
              <p><b>Instructions:</b> {d.instructions}</p>
              <p className="price">₹ {d.price}</p>

              <button className="btn" onClick={() => addToCart(d)}>
                <FaCartArrowDown /> Add to Cart
              </button>

              <button onClick={() => handleEdit(d)} className="btn-secondary">
                <FaEdit /> Edit
              </button>
              <button onClick={() => handleDelete(d.id)} className="btn-danger">
                <FaTrash /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
