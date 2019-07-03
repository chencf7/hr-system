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
  Http.post(Url.getMenu).then((ret:any)=>{
    if(ret.Result&&ret.Result==='error'){
      dispatch({
        type: Actiontype.Getmenulist,
        menus: [{name: '组织管理'},{name: '考勤管理'},{name: '薪酬管理'}]
      });
      return;
    }
    dispatch({
      type: Actiontype.Getmenulist,
      menus: ret
    });
  })
};