import { createReducer } from "@reduxjs/toolkit"

import {
    heroesFetched, 
    heroesFetchingError, 
    heroesFetching, 
    heroesDeleted, 
    heroesAdded
} from '../actions'

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroes = createReducer(initialState, {
    [heroesFetching]: state => {state.heroesLoadingStatus = 'loading'},
    [heroesFetched]: (state, action) => {
                    state.heroesLoadingStatus = 'idle';
                    state.heroes = action.payload;
                },
    [heroesFetchingError]: state => {state.heroesLoadingStatus = 'error'},
    [heroesAdded]: (state, action) => {
                    state.heroes.push(action.payload)
                },
    [heroesDeleted]: (state, action) => {
                    state.heroes.push(action.payload)
                }
    },
[], state => state)

// const heroes = createReducer(initialState, builder => { ?/ ДРУГА ВЕРСІЯ 
//     builder
//         .addCase(heroesFetching, state => {
//             state.heroesLoadingStatus = 'loading';
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = 'idle';
//             state.heroes = action.payload;
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error'
//         })
//         .addCase(heroesAdded, (state, action) => {
//             state.heroes.push(action.payload)
//         })
//         .addCase(heroesDeleted, (state, action) => {
//             state.heroes = state.heroes.filter(el => el.id !== action.payload)
//         })
//         .addDefaultCase(() => {});
// })

// const heroes = (state = initialState, action) => { // ПЕРША ВЕРСІЯ 
//     switch (action.type) {
//         case 'HEROES_FETCHING':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'loading'
//             }
//         case 'HEROES_FETCHED':
//             return {
//                 ...state,
//                 heroes: action.payload,
//                 heroesLoadingStatus: 'idle'
//             }
//         case 'HEROES_FETCHING_ERROR':
//             return {
//                 ...state,
//                 heroesLoadingStatus: 'error'
//             }
//         case 'HEROES_DELETED':
//             return {
//                 ...state,
//                 heroes: state.heroes.filter(el => el.id !== action.payload)
//             }
//         case 'HEROES_ADDED':
//             return {
//                 ...state,
//                 heroes: [...state.heroes, action.payload]
//             }
//         default: return state
//     }

// }

export default heroes;                                