import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeFiltredChanged, fetchedFiltres } from "./filtresSlice";
import { useHttp } from "../../hooks/http.hook";
import Spinner from '../spinner/Spinner';
import { v4 } from 'uuid';
import classNames from 'classnames';

// Задача для этого компонента
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {

    const { filters, filtresLoadingStatus } = useSelector(state => state.filters)
    const { request } = useHttp();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchedFiltres());
    }, [])

    if (filtresLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (filtresLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderFiltres = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Фильтров пока нет</h5>
        }

        return arr.map(({name, label, className}) => {

            const btnClass = classNames('btn', className)

            return <button
                        key={name}
                        id={name}
                        className={btnClass}
                        onClick={() => dispatch(activeFiltredChanged(name))}
                    >
                    {label}
                    </button>
        })
    }

    const buttons = renderFiltres(filters)

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {buttons}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;