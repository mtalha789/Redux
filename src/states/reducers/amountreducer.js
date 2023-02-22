function reducer(state=0,action){
    if (action==='deposit') {
        console.log(action.payload)
        return state+action.payload
    }
    else if(action==='withdraw'){
        console.log(action.payload)
        return state-action.payload
    }
    else{
        return state
    }
}
export default reducer