import React, {useEffect} from 'react';
import {TbRefresh} from 'react-icons/tb';
import {useSelector, useDispatch} from "react-redux";
import {getQuote} from "../features/refresh/refresh";

const Advice = () => {
    const {content, author, error} = useSelector((state) => state.refresh);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getQuote());
        // eslint-disable-next-line
    }, []);

    return (
        <section className='advice'>
            <div className='advice-container'>
                <p className='advice-text'>{error ? error : content}</p>
                <h3 className='advice-author'>{error ? '' : author}</h3>

                <button type='button' className='refresh-btn' onClick={() => dispatch(getQuote())}>
                    <TbRefresh/>
                </button>
            </div>
        </section>
    );
};

export default Advice;