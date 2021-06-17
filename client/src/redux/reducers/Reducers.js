// const location = sessionStorage.getItem('location');
const initialState = {
    addressState : []
}

 const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ADDRESS': {
            return state
        }
        case 'REMOVE_ADDRESS': {
            return state
        }
        default: {
            return state
        }
    }
}

export default Reducer;