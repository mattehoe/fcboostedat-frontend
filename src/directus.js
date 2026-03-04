const DIRECTUS_URL = import.meta.env.DIRECTUS_URL || 'http://localhost:8055'

export async function fetchCollection(collection, params = '') {
  const res = await fetch(`${DIRECTUS_URL}/items/${collection}${params}`)
  const json = await res.json()
  return json.data
}

export function getImageUrl(fileId) {
  return `${DIRECTUS_URL}/assets/${fileId}`
}