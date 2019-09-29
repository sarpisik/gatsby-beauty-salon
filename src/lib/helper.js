export function capitalizeLetter(text, locale = "tr-TR") {
  return text
    .split(" ")
    .map(word => word.charAt(0).toLocaleUpperCase(locale) + word.slice(1))
    .join(" ")
}
export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function mapImagesToFluid(data, cloud = false) {
  return mapEdgesToNodes(data).map(
    cloud ? mapCloudImageToSources : mapLocalImageToSources
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

function mapNodeToAttribute(node, key) {
  return node[key]
}

function mapNodeToSlug(node) {
  return mapNodeToAttribute(node, "slug").current
}
