// @ts-ignore
const proxy = require('http-proxy-middleware');

module.exports = function(app){
  app.use(proxy('/api', {
    // target: 'http://localhost:8880/',
    target: 'http://wx.cscec3b.com/hr/',
    'pathRewrite': {
      '^/api': ''
    },
    'changeOrigin': true
  }));
}