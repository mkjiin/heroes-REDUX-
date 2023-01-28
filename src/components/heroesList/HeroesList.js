import {useHttp} from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { heroesDeleted, fetchHeroes, selectAll } from './heroesSlice';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import { useCallback } from 'react';
import { createSelector } from 'reselect';

// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE

const HeroesList = () => {

    const filtredHeroesSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.heroes.heroes,
        (filter, heroes) => {
            if (filter === 'all') {
                return heroes;
            } else {
                return heroes.filter(el => el.element === filter)
            }
        }
    );

    // const filtredHeroes = useSelector(state => {
    //     if (state.filters.activeFilter === 'all') {
    //         return state.heroes.heroes;
    //     } else {
    //         return state.heroes.heroes.filter(el => el.element === state.filters.activeFilter)
    //     }
    // })

    const filtredHeroes = useSelector(filtredHeroesSelector)
    const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchHeroes());
        // eslint-disable-next-line
    }, []);

    const onDelete = useCallback((id) => {
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            // .then(res => console.log(res, 'Deleted'))
            .then(dispatch(heroesDeleted(id)))
            .catch(err => console.log(err))
    }, [request])

    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героев пока нет</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem 
                    key={id} 
                    {...props}
                    onDelete={() => onDelete(id)}
                    />
        })
    }


    const elements = renderHeroesList(filtredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;