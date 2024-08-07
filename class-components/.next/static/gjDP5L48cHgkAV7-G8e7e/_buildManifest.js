(self.__BUILD_MANIFEST = (function (s, e) {
  return {
    __rewrites: { afterFiles: [], beforeFiles: [], fallback: [] },
    '/': [s, e, 'static/css/a881945304f9e4f8.css', 'static/chunks/pages/index-96da8cf60acca053.js'],
    '/404': [s, 'static/chunks/pages/404-3314bfc0e242f69c.js'],
    '/_error': ['static/chunks/pages/_error-77823ddac6993d35.js'],
    '/planets/[CardDetail]': [
      s,
      e,
      'static/css/0ca392952eb5894c.css',
      'static/chunks/pages/planets/[CardDetail]-05e1585ce9afe8d8.js',
    ],
    sortedPages: ['/', '/404', '/_app', '/_error', '/planets/[CardDetail]'],
  };
})('static/chunks/664-fe029c8b38e64ec1.js', 'static/chunks/655-59f86f9931b431be.js')),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
