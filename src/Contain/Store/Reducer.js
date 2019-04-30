const initialState ={
    age:21,
    history:[]
}

const reducer = (state = initialState, action) =>{
 const newState ={...state};
  if(action.type === 'AGE_UP')
  {
     //  console.log("Hello");
     // newState.age = newState.age + action.value; 
    
      return{
          ...state,
        age: state.age + action.value,
        history: state.history.concat({ id: Math.random() ,age: state.age + action.value })
    }

  }
  else if(action.type === 'AGE_DOWN')
  {
    return{
        ...state,
      age: state.age - action.value,
      history: state.history.concat({id: Math.random() , age: state.age - action.value })
  }
}
  else if(action.type === 'DELETE_ITEM')
  {
    return{
        ...state,
            history: state.history.filter(el => el.id !== action.key)
  }
  }

 return newState
}

export  default reducer