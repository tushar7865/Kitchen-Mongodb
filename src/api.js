const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

async function http(method, path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `HTTP ${res.status}`)
  }
  const ct = res.headers.get('content-type') || ''
  return ct.includes('application/json') ? res.json() : null
}

export const api = {
  // Recipes
  listRecipes: () => http('GET', '/api/recipes'),
  createRecipe: (data) => http('POST', '/api/recipes', data),
  updateRecipe: (id, data) => http('PUT', `/api/recipes/${id}`, data),
  deleteRecipe: (id) => http('DELETE', `/api/recipes/${id}`),

  // Contact
  sendContact: (data) => http('POST', '/api/contacts', data),
}
