import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtered } from '../../features/filters/filtersSlice';

const Filter = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const { filterText } = useSelector(state => state.filters);

    // integration of react hooks here
    const [inputFilterText, setInputFilterText] = useState(filterText);

    // dispatching the action to filter the blogs
    useEffect(() => {
        dispatch(filtered(inputFilterText));
    }, [dispatch, inputFilterText]);

    // handler function to handle radio input change
    const filterInputHandler = (e) => {
        setInputFilterText(e.target.id === 'lws-saved' ? 'Saved' : 'All');
    }

    // rendering the filter menu here
    return (
        <div className='sidebar-content'>
            <h4>Filter</h4>
            <div className='radio-group'>
                <div>
                    <input onChange={filterInputHandler} type='radio' name='filter' id='lws-all' checked={inputFilterText === 'All'} className='radio' />
                    <label htmlFor='lws-all'>All</label>
                </div>
                <div>
                    <input onChange={filterInputHandler} type='radio' name='filter' id='lws-saved' checked={inputFilterText === 'Saved'} className='radio' />
                    <label htmlFor='lws-saved'>Saved</label>
                </div>
            </div>
        </div>
    );
};

export default Filter;