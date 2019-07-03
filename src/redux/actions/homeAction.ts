import * as Actiontype from 'redux/Actiontypes';

export const changeCategorys=(menuList:any)=>({
  type: Actiontype.LOGIN_IN,
  menuList
});

// export const getmenuList=()=>({
//   type: 'type_getMenuList'
// });
// const getMenulist = function(){
//   return function(dispatch: any, getState: any){
//     console.log(getState());
//     dispatch(getmenuList);
//   }
// }
// redux-thunk的异步action写法
export const getMenulistByuser = () => (dispatch:any) => {
  dispatch({
    type: 'type_getMenuList'
  });
};