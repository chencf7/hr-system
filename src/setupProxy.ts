// @ts-ignore
const proxy = require('http-proxy-middleware');

module.exports = function(app: any){
  app.use(proxy('/api', {
    target: 'http://localhost:8880/',
    "pathRewrite": {
      '^/api': ""
    },
    "changeOrigin": true
  }));
}