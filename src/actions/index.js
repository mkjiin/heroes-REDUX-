import { createAction } from "@reduxjs/toolkit";
import { heroesFetching, heroesFetched, heroesFetchingError} from '../components/heroesList/heroesSlice'
import { filtresFetching, filtresFetched, filtresFetchingError} from '../components/heroesFilters/filtresSlice'

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }

// export const heroesFetching = createAction('HEROES_FETCHING');

// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }

// export const heroesFetched = createAction('HEROES_FETCHED');

// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }

// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR')

// export const heroesDeleted = (id) => {
//     return {
//         type: 'HEROES_DELETED',
//         payload: id   
//     }
// }

// export const heroesDeleted = createAction('HEROES_DELETED')

// export const heroesAdded = (hero) => {
//     return {
//         type: 'HEROES_ADDED',
//         payload: hero
//     }
// }

// export const heroesAdded = createAction('HEROES_ADDED')

export const fetchedFiltres = (request) => (dispatch) => {
    dispatch(filtresFetching());
    request("http://localhost:3001/filters")
        .then(res => dispatch(filtresFetched(res)))
        .catch(() => dispatch(filtresFetchingError()))
}

// export const filtresFetching = () => {
//     return {
//         type: 'FILTRES_FETCHING'
//     }
// }

// export const filtresFetched = (filtres) => {
//     return {
//         type: 'FILTRES_FETCHED',
//         payload: filtres
//     }
// }

// export const filtresFetchingError = () => {
//     return {
//         type: 'FILTRES_FETCHING_ERROR'
//     }
// }

// export const activeFiltredChanged = (filter) => {
//     return {
//         type: 'ACTIVE_FILTRED_CHANGED',
//         payload: filter
//     }
// }

// export const activeFiltredChanged = (filter) => {(dispatch) => {
//     setTimeout(() => {
//         dispatch({
//                 type: 'ACTIVE_FILTRED_CHANGED',
//                 payload: filter
//             })
//     }, 1000)
// }}