import React from 'react';
import {TbRefresh} from 'react-icons/tb';

const Advice = () => {

    return (
        <section className='advice'>
            <div className='advice-container'>
                <p className='advice-text'>"The science of operations, as derived from mathematics more especially, is a
                    science of itself and has its own abstract truth and value."</p>
                <h3 className='advice-author'>Ada Lovelace</h3>

                <button type='button' className='refresh-btn'>
                    <TbRefresh/>
                </button>
            </div>
        </section>
    );
};

export default Advice;