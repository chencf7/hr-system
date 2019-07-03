import * as Actiontype from 'redux/Actiontypes';

export interface homeState{
  userId: string,
  userName: string,
  menuList: Array<any>,
  secondmenuVisible: boolean,
  secondmenuList: Array<any>
}

const initialState:homeState={
  userId: '',
  userName: '',
  menuList: [],
  secondmenuVisible: false,
  secondmenuList: []
}

const homeReducer=(state:homeState=initialState, action: any)=>{
  switch(action.type){
    case Actiontype.LOGIN_IN:
      return {...state, userId: '123', userName: '123'};
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
    default: {
      return {...state};
    }
  }
}

export default homeReducer;