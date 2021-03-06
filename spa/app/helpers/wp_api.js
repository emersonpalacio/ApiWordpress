const NAME ="css-tricks",
   DOMAIN = `https://${NAME}.com`,
   SITE = `${DOMAIN}/wp-json`,
   API_WP = `${SITE}/wp/v2`,
   PER_PAG = 9 ,
   POSTS =`${API_WP}/posts?_embed&per_page=${PER_PAG}`,
   POST= `${API_WP}/posts`,
   CATEGORIES = `${API_WP}/categories`,
   SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAG}&search=`;

   let page=1;

export default {
    API_WP,
    DOMAIN,
    NAME,
    SITE,
    PER_PAG,
    page,
    POSTS,
    POST,
    SEARCH,
    CATEGORIES,
}