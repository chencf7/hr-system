import * as Actiontype from 'redux/Actiontypes';

export interface homeState{
  userId: string,
  userName: string,
  menuList: Array<any>,
  secondmenuVisible: boolean,
  secondmenuList: Array<any>,
  currentMenu: string
}

const initialState:homeState={
  userId: '',
  userName: '',
  menuList: [],
  secondmenuVisible: false,
  secondmenuList: [],
  currentMenu: ''
}

const homeReducer=(state:homeState=initialState, action: any)=>{
  switch(action.type){
    case Actiontype.LOGIN_IN:
      return {...state};
    case Actiontype.TYPE_Getmenulist:{
      return {...state, menuList: action.menus};
    }
    case Actiontype.ChangeSecondmenu:{
      if(action.filterid){
        let smlist:any = state.menuList.filter((d)=>d.name===action.filterid);
        if(smlist&&smlist.length>0){
          return {
            ...state,
            secondmenuVisible: action.secondMenuvisible,
            secondmenuList: [...smlist[0].children||[]]
          };
        }
      }
      return {
        ...state,
        secondmenuVisible: action.secondMenuvisible,
        secondmenuList: []
      };
    }
    case Actiontype.ClickSecondmenu:{
      if(action.currentMenu){
        return {...state, currentMenu: action.currentMenu};
      }
      return { ...state };
    }
    default: {
      return {...state};
    }
  }
}

export default homeReducer;