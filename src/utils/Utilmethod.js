import axios from 'axios';

// 全局api定义
export let BaseUrl = (function(){
  if(process.env.NODE_ENV === 'development'){
    return '/api';
  }
  return '';
})();

// 封装Http axios请求
const HR_AXIOS = axios.create({
  timeout: 6000,
  withCredentials: true
});
export const Http={
  post: (url, params={})=>{
    return HR_AXIOS.post(url, params)
      .then((res)=>res.data)
      .catch(function(error){
        if(error.request){
          if(error.request.status==404){
            let respUrl=error.request.responseURL;
            let idx=respUrl.indexOf('/Account/Login')
            if(idx>0){
              // let hostUrl=respUrl.substring(0, idx);
              // location.href=hostUrl+'/#/';
              // return false;
            }
            return {Result: 'error', Data: '请求地址错误'}
          }
          return {Result: 'error', Data: '其他错误'};
        }
      });
    },
  get: null
}