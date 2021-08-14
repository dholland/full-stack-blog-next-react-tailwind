export function getArticlesMetaData() {
  return require("./articles.json");
}

export function getArticleMetaData(slug) {
  return getArticlesMetaData().find((article) => article.slug === slug);
}
