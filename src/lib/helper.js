import polyfill from "./polyfill"
polyfill()

export function capitalizeLetter(text, locale = "tr-TR") {
  if (typeof text === "string")
    return text
      .split(" ")
      .map(word => word.charAt(0).toLocaleUpperCase(locale) + word.slice(1))
      .join(" ")

  return text
}
export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function mapImagesToFluid(data, fixed = false, cloud = false) {
  return mapEdgesToNodes(data).map(
    cloud
      ? mapCloudImageToSources
      : fixed
      ? mapLocalImageFixedToSources
      : mapLocalImageToSources
  )
}

export function filterOutDocsWithoutSlugs({ slug }) {
  return (slug || {}).current
}

export function filterOutProducts(data) {
  return mapEdgesToNodes(data).map(node => ({
    image: mapCloudImageToSources(node),
    title: mapNodeToAttribute(node, "title"),
    slug: mapNodeToSlug(node),
  }))
}

export function filterOutServices(data) {
  return mapEdgesToNodes(data).map(node => ({
    title: mapNodeToAttribute(node, "title"),
    description: mapNodeToAttribute(node, "description"),
    id: mapNodeToAttribute(node, "id"),
  }))
}

export function filterOutQuestions(data, limit) {
  return mapEdgesToNodes(data)
    .slice(0, limit)
    .map(node => ({
      question: mapNodeToAttribute(node, "question"),
      answer: mapNodeToAttribute(node, "answer"),
      id: mapNodeToAttribute(node, "id"),
    }))
}

export function buildImageObj(source) {
  const imageObj = {
    asset: { _ref: source.asset._ref || source.asset._id },
  }

  if (source.crop) imageObj.crop = source.crop
  if (source.hotspot) imageObj.hotspot = source.hotspot

  return imageObj
}

function mapCloudImageToSources({
  mainImage: {
    asset: {
      fluid,
      // childImageSharp: { fluid }
    },
  },
}) {
  return fluid
}

function mapLocalImageToSources({ childImageSharp: { fluid } }) {
  return fluid
}

function mapLocalImageFixedToSources({ childImageSharp: { fixed } }) {
  return fixed
}

function mapNodeToAttribute(node, key) {
  return node[key]
}

function mapNodeToSlug(node) {
  return mapNodeToAttribute(node, "slug").current
}

// Schedule Helpers

export function setResponse(setState) {
  return function(respond) {
    const responseObject = Array.isArray(respond)
      ? respond[0] // Fetch success.
      : respond.statusCode && respond.statusCode !== 200
      ? respond.response.body // Fetch error.
      : respond.result // Listen success.
    setState({ isLoading: false, ...responseObject })
  }
}

export function getTimeRows(data) {
  return data.slice(1).map(({ _type, ...rest }) => ({ ...rest }))
}

export function parseRows(rows) {
  return rows.map(refactorCells)
}

function refactorCells(row) {
  return {
    ...row,
    cells: row.cells.map((cell, index) =>
      index < 1
        ? cell
        : cell === "x"
        ? "break"
        : cell === "-"
        ? "free"
        : "reserved"
    ),
  }
}
