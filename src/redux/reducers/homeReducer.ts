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
  debugger;
  switch(action.type){
    case Actiontype.LOGIN_IN:
      return {...state, userId: '123', userName: '123'};
    default: {
      return {...state};
    }
  }
}

export default homeReducer;