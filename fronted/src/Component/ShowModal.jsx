import React from 'react';

const ShowModal = ({closeModal,id,fname,lname}) => {
    return (
        <div>
            <div className='fixed left-0 right-0 bottom-0 top-0 bg-[rgba(189,189,189,0.9)]'></div>
            
            <div className='fixed z-10 top-[50%] left-1/2 translate-y-[-80%] translate-x-[-50%] h-[30%] w-[30vw] bg-[#fff] text-center  place-content-center'>
            <button onClick={closeModal} className='border-2 w-10 h-10 text-slate-200 text-0.5xl text-center bg-red-900 rounded-full ml-[20em]'>close</button>
            <p className='text-3xl text-blue-600 '>Employee id:-{id}</p>
            <p className='text-3xl text-blue-600'>Employee First Name:-{fname}</p>
            <p className='text-3xl text-blue-600'> Employee Lasst Name:-{lname}</p>
            
            </div>
        </div>
    );  
}

export default ShowModal;
