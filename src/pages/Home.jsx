  // src/pages/Home.jsx
  import Hero from "../components/Hero.jsx";
 
  import RecipeTable from "../components/RecipeTable.jsx";
  import Contact from "../components/Contact.jsx";

  export default function Home({ reloadKey, setEditRecipe }) {
    return (
      <>
        <Hero />
    
        <RecipeTable key={reloadKey} onEdit={setEditRecipe} />
        <Contact />
      </>
    );
  }
