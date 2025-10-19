import { useEffect, useState } from 'react'
import { api } from '../api'

export default function RecipeForm({ editRecipe, onSaved, onCancel } = {}) {
  const [form, setForm] = useState({
    dishName: "",
    chefName: "",
    ingredients: "",
    instructions: ""
  })
  const isEdit = Boolean(editRecipe && editRecipe.id)

  useEffect(() => { if (editRecipe) setForm(editRecipe) }, [editRecipe])

  function onChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (isEdit) await api.updateRecipe(form.id, form)
    else await api.createRecipe(form)
    setForm({ dishName: '', chefName: '', ingredients: '', instructions: '' })
    onSaved?.()
  }

  return (
    <section className="section">
      <h2>{isEdit ? 'Edit Recipe' : 'Add a New Recipe'}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label>Dish Name</label>
            <input name="dishName" required value={form.dishName} onChange={onChange} />
          </div>
          <div>
            <label>Chef Name</label>
            <input name="chefName" required value={form.chefName} onChange={onChange} />
          </div>
        </div>
        <div>
          <label>Ingredients</label>
          <textarea name="ingredients" rows={3} required value={form.ingredients} onChange={onChange} />
        </div>
        <div>
          <label>Instructions</label>
          <textarea name="instructions" rows={4} required value={form.instructions} onChange={onChange} />
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <button type="submit">{isEdit ? 'Update Recipe' : 'Save Recipe'}</button>
          {isEdit && <button type="button" onClick={onCancel}>Cancel</button>}
        </div>
      </form>
    </section>
  )
}
