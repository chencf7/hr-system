import * as Actiontype from 'redux/Actiontypes';

export interface homeState{
  userId: string,
  userName: string,
  menuList: Array<any>
}

const initialState:homeState={
  userId: '',
  userName: '',
  menuList: []
}

const homeReducer=(state:homeState=initialState, action: any)=>{
  switch(action.type){
    case Actiontype.LOGIN_IN:
      return {...state, userId: '123', userName: '123'};
    case Actiontype.Getmenulist:{
      return {...state, menuList: action.menus};
    }
    default: {
      return {...state};
    }
  }
}

export default homeReducer;