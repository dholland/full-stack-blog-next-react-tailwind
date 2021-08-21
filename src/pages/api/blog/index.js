export function getArticlesMetaData() {
  return require("./articles.json");
}

export function getArticleMetaData(slug) {
  return getArticlesMetaData().find((article) => article.slug === slug);
}

export function getTags() {
  return require("./tags.json");
}

export function getArticlesByTags(tags) {}
