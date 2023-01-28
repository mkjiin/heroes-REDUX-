const initialState = {
    filtresLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all'
}

const filters = (state = initialState, action) => {

    switch (action.type) {
        case 'FILTRES_FETCHING':
            return {
                ...state,
                filtresLoadingStatus: 'loading'
            }
        case 'FILTRES_FETCHING_ERROR':
        return {
            ...state,
            filtresLoadingStatus: 'error'
        }
        case 'FILTRES_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtresLoadingStatus: 'idle'
            }
        case 'ACTIVE_FILTRED_CHANGED':
            return {
                ...state,
                activeFilter: action.payload
            }
        default: return state
    }

}

export default filters;