import * as Actiontype from 'redux/Actiontypes';

export interface homeState{
  userId: string,
  userName: string,
  menuList: Array<any>,
  secondmenuVisible: boolean
}

const initialState:homeState={
  userId: '',
  userName: '',
  menuList: [],
  secondmenuVisible: false
}

const homeReducer=(state:homeState=initialState, action: any)=>{
  switch(action.type){
    case Actiontype.LOGIN_IN:
      return {...state, userId: '123', userName: '123'};
    case Actiontype.TYPE_Getmenulist:{
      return {...state, menuList: action.menus};
    }
    case Actiontype.ChangeSecondmenu:{
      return {...state, secondmenuVisible: action.secondMenuvisible};
    }
    default: {
      return {...state};
    }
  }
}

export default homeReducer;