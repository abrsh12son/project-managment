/* eslint-disable react/prop-types */
import propTypes from 'prop-types'
import { forwardRef } from 'react';
const Input =forwardRef(function Input({title,istextarea,isValid,...props},ref){
    return (
        <p className='flex flex-col gap-3   '>
            <label className='text-xl font-semibold mb-3 uppercase '>{title}</label>
            {istextarea ?
                <textarea  {...props}
                    ref={ref}
                    className={`bg-stone-300/80 ring-2 ring-gray-200 h-24  text-blue-950 rounded-sm focus:outline-none ${isValid && "ring-1 ring-red-300"}  focus:outline-gray-400`}
                />
                : <input {...props}
                ref={ref}
                    placeholder='Project name'
                className={`bg-stone-200/80 ring-2 ring-gray-200 p-3 text-blue-950  rounded-sm border-b-2 focus:outline-none  focus:outline-gray-400  ${isValid && "ring-1 ring-red-300"}`}

                />}
            
        </p>
    );
})

export default Input;

Input.propTypes = {
    title:propTypes.string.isRequired,
    props:propTypes.string
}

