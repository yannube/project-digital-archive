// ============================================================
// SANITY QUERIES — Mahaldheeb Scoutun
// ============================================================

export const veteransQuery = `*[_type == "veteran"] | order(order asc) {
  _id,
  name,
  initials,
  role,
  era,
  island,
  tagline,
  excerpt,
  tags,
  photo
}`

export const milestonesQuery = `*[_type == "milestone"] | order(order asc) {
  _id,
  year,
  title,
  tag,
  isMajor,
  description,
  details
}`

export const projectsQuery = `
*[_type == "archiveItem" && category == "project"] | order(year desc) {
  _id,
  title,
  slug,
  year,
  description,
  location,
  contributor,
  tags,
  "imageUrl": image.asset->url
}
`

export const photosQuery = `*[_type == "photo"] | order(era asc) {
  _id,
  caption,
  image,
  era,
  category,
  location,
  verified,
  featured
}`

export const resourcesQuery = `*[_type == "resource"] | order(order asc) {
  _id,
  title,
  category,
  type,
  description,
  available,
  file
}`

export const islandsQuery = `*[_type == "island"] | order(order asc) {
  _id,
  name,
  code,
  capital,
  status,
  note
}`