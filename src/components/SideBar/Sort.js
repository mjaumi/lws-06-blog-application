import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sorted } from '../../features/filters/filtersSlice';

const Sort = () => {
    // integration of react-redux hooks here
    const dispatch = useDispatch();
    const { sortText } = useSelector(state => state.filters);

    // integration of react hooks here
    const [inputSortText, setInputSortText] = useState(sortText);

    // dispatching the action to sort the blogs
    useEffect(() => {
        dispatch(sorted(inputSortText));
    }, [dispatch, inputSortText]);

    // handler function to handle the sorting
    const sortSelectHandler = (e) => {
        setInputSortText(e.target.value);
    }

    // rendering the sort menu here
    return (
        <div className='sidebar-content'>
            <h4>Sort</h4>
            <select value={inputSortText} onChange={sortSelectHandler} name='sort' id='lws-sort' className='w-full max-w-[150px] border-2 rounded-md text-gray-500'>
                <option value=''>Default</option>
                <option value='newest'>Newest</option>
                <option value='most_liked'>Most Liked</option>
            </select>
        </div>
    );
};

export default Sort;