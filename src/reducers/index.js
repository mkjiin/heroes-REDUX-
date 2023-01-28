const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filtresLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all'
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETED':
            return {
                ...state,
                heroes: state.heroes.filter(el => el.id !== action.payload)
            }
        case 'HEROES_ADDED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload]
            }
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

export default reducer;