const initialState = {
  bla: true
};

interface Action {
  type: string,
  payload: any
}

export default (state = initialState, action: Action) => {
  switch(action.type){
    case 'bla':
      return{
        ...state,
        bla: false
      };
    default:
      return state;
  }
}