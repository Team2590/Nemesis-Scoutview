import React from 'react'

export default function ButtonArea({ label, variable, setter }) {
    return (
        <div className='text-center mt-5'>
            <p className='mb-2'>{label}</p>
            <p className="bg-info py-3 px-2 rounded m-0">{ variable }</p>
            <div className="row mx-auto">
                <button className="btn btn-tertiary w-50 py-4" onClick={()=> variable <= 0 ? setter(0) : setter(parseInt(variable) - 1)}>-</button>
                <button className="btn btn-primary w-50 py-4" onClick={()=> setter(parseInt(variable) + 1)}>+</button>
            </div>
        </div>
    )
}
