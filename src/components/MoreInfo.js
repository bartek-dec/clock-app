import React from 'react';

const MoreInfo = () => {

    return (
        <section className='more-info'>
            <div className='more-info-container'>
                <div className='info'>
                    <h3 className='info-heading zone'>current timezone</h3>
                    <h2 className='info-text'>Europe/Warsaw</h2>
                </div>

                <div className='info year'>
                    <h3 className='info-heading'>day of the year</h3>
                    <h2 className='info-text'>11</h2>
                </div>

                <div className='info day'>
                    <h3 className='info-heading'>day of the week</h3>
                    <h2 className='info-text'>3</h2>
                </div>

                <div className='info week'>
                    <h3 className='info-heading'>week number</h3>
                    <h2 className='info-text'>2</h2>
                </div>
            </div>

        </section>
    );
};

export default MoreInfo;