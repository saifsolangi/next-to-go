import React from 'react'

const AutoCompleteAddress = () => {
    return (
        <div>
            <div>
                <label className='text-slate-300'>Where From?</label>
                <input type='text' className='w-full px-2 py-1 bg-slate-50 border-[1px] rounded-md outline-none focus:border-yellow-100' />
            </div>
            <div>
                <label className='text-slate-300'>Where To?</label>
                <input type='text' className='w-full px-2 py-1 bg-slate-50 border-[1px] rounded-md outline-none focus:border-yellow-100' />
            </div>
        </div>
    )
}

export default AutoCompleteAddress