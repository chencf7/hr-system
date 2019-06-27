import {LOGIN_IN} from 'redux/Actiontypes';

export interface userInfo{
  userId: string,
  userName: string
}

const initialState:userInfo={
  userId: '',
  userName: ''
}

const homeReducer=(state:userInfo=initialState, action: any)=>{
  switch(action.type){
    case LOGIN_IN:
      return {...state, userId: '123', userName: '123'};
    default: {
      return state;
    }
  }
}

export default homeReducer;