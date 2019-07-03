import * as Actiontype from 'redux/Actiontypes';
import * as Url from 'utils/Url';
import {Http} from 'utils/Utilmethod';

export const getMenulistcs=(menuList:any)=>({
  type: Actiontype.LOGIN_IN,
  menuList
});

// export const action_Getmenulist=()=>({
//   type: 'type_getMenuList'
// });
// const getMenulist = function(){
//   return function(dispatch: any, getState: any){
//     console.log(getState());
//     dispatch(action_Getmenulist);
//   }
// }
// redux-thunk的异步action写法
export const getMenulistByuser = () => (dispatch:any) => {
  debugger;
  Http.post(Url.getMenu).then((ret:any)=>{
    console.log(ret);
  })
  dispatch({
    type: 'type_getMenuList'
  });
};