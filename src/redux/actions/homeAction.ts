import * as Actiontype from 'redux/Actiontypes';
import datafactory from 'utils/Datafactory';
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
      datafactory.getMenus((menus: any)=>{
        dispatch({
          type: Actiontype.TYPE_Getmenulist,
          menus: menus
        });
      })
      return;
    }
    dispatch({
      type: Actiontype.TYPE_Getmenulist,
      menus: ret
    });
  })
};

export const changeSecondmenu=(visible:boolean,　smid:string)=>{
  return {
    type: Actiontype.ChangeSecondmenu,
    secondMenuvisible: visible,
    filterid: smid
  }
};