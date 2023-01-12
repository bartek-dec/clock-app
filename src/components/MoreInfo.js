import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getTimeInfo} from "../features/moreInfo/moreInfoSlice";

const MoreInfo = () => {
    const {timezone, dayOfYear, dayOfWeek, weekNum, error} = useSelector((state) => state.moreInfo);
    const {daytime} = useSelector((state) => state.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTimeInfo());
        // eslint-disable-next-line
    }, []);

    return (
        <section className={`more-info ${daytime}`}>
            <div className='more-info-container'>
                <div className='info'>
                    <h3 className='info-heading zone'>current timezone</h3>
                    <h2 className='info-text'>{!error ? timezone : '-'}</h2>
                </div>

                <div className='info year'>
                    <h3 className='info-heading'>day of the year</h3>
                    <h2 className='info-text'>{!error ? dayOfYear : '-'}</h2>
                </div>

                <div className='info day'>
                    <h3 className='info-heading'>day of the week</h3>
                    <h2 className='info-text'>{!error ? dayOfWeek : '-'}</h2>
                </div>

                <div className='info week'>
                    <h3 className='info-heading'>week number</h3>
                    <h2 className='info-text'>{!error ? weekNum : '-'}</h2>
                </div>
            </div>

        </section>
    );
};

export default MoreInfo;