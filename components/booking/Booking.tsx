import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'

const Booking = () => {
    return (
        <div className='p-4'>
            <h2 className='text-xl font-bold'>Booking</h2>
            <div className='border-[1px] p-2 rounded-md mt-4 h-[70vh]'>
                <AutoCompleteAddress />
            </div>
        </div>
    )
}

export default Booking