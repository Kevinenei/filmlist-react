import { createStore } from 'redux'

const reducer = (state,action) => {
	if(action.type === "Filtro_Grid"){
		return {
			...state,
			type: state.type.concat("grid")
		}

	}
	return state
}

export default createStore(reducer,{ type: ""}) 