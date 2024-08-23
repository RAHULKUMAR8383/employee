import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import ShowModal from './ShowModal';
import { Navigate } from 'react-router-dom';
import Login from './Login';



const Admin = () => {
    const url = "http://localhost:7000";
    const [list, setList] = useState([]);
    const [list2, setList2] = useState([]);
    const [banner, setBanner] = useState(false);
    const [edit, setEdit] = useState(false);

    const [id, setId] = useState();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');

    const handlelogout = () => {
        // console.log("fasdfjkhsdfh");
        <Navigate to="/" />
    }

    const ShowModal2 = ({ closeModal, id, fname, lname }) => {
        return (
            <div>
                <div className='fixed left-0 right-0 bottom-0 top-0 bg-[rgba(189,189,189,0.9)]'></div>

                <div className='fixed z-10 top-[50%] left-1/2 translate-y-[-80%] translate-x-[-50%] h-[30%] w-[30vw] bg-[#fff] text-center  place-content-center'>
                    <button onClick={closeModal} className='border-2 w-10 h-10 text-slate-200 text-0.5xl text-center bg-red-900 rounded-full ml-[20em]'>close</button>
                    <div className='flex justify-center outline-none'>
                        <label>Employee id:-</label>
                        <input type='text' defaultValue={id}></input>
                    </div>
                    <div className='flex justify-center outline-none'>
                        <label>First Name:-</label>
                        <input type='text' defaultValue={fname} onChange={(e)=>setFname(e.target.value)}></input>
                    </div>
                    <div className='flex justify-center outline-none'>
                        <label>Last Name:-</label>
                        <input type='text' defaultValue={lname} onChange={(e)=>setLname(e.target.value)}></input>
                    </div>
                         {/* <div>{ (const x=id)}</div>  */}
                    <button onClick={(x,id)=>editnames(x,id)}>Edit</button>

                </div>
            </div>
        );
    }


    const showemp = async () => {
        setList([]);
        setList2([]);
        try {
            const { data } = await axios.get(`${url}/api/show/emplist`);
            setList(data);


        } catch (error) {
            console.log(error);
        }
    }

    const showrole = async () => {
        setList([]);
        setList2([]);

        try {
            const { data } = await axios.get(`${url}/api/show/emplist`);
            setList2(data);


        } catch (error) {
            console.log(error);
        }
    }


    const handleSingleemp = async (id) => {
        // console.log(id);


        try {
            const { data } = await axios.get(`${url}/api/showsingle/emplist/${id}`);

            setBanner(true);
            setId(data.id);
            setFname(data.fname);
            setLname(data.lname)
            console.log(data);
        } catch (error) {
            console.log(error);
        }


    }

    const handleeditemp = async (id) => {
        console.log(id);


        try {
            const { data } = await axios.get(`${url}/api/showsingle/emplist/${id}`);

            setEdit(true);
            setId(data.id);
            setFname(data.fname);
            setLname(data.lname)

        } catch (error) {
            console.log(error);
        }


    }


    const editnames = async (x) => {
        // console.log(id);
        // console.log("dsfjsdlk");
        setEdit(false);
        setBanner(false);

        try {
            const first = fname;
            const second = lname;
            const edit = await axios.put(`${url}/api/updatesingle/emplist/${id}`, {fname,lname});
            if (edit.status === 200) {
                
                setFname("");
                setLname("");
                showemp ();
            }
        }
        catch (error) {
            console.log("Error edit todo:", error);
        }
    }




    const deleteSingleemp = async (id) => {
        console.log(id);

        try {
            const tododelete = await axios.delete(`${url}/api/deletesingle/emplist/${id}`)
            if (tododelete.status === 200) {

                showemp();
            }

        } catch (error) {

            console.log(error);
        }
    }

    const CloseModal = () => {
        return (
            <><div> {setBanner(false)}</div>
                <div>{setEdit(false)}</div>
            </>
        );
    }
    // const ShowModal=()=>{
    //     return(
    //         <p>loremfalfjsldfjpjernfdjjhsdfhasfhsduiofhidfuhiodhsfiosdfibf</p>
    //     );
    // };

    return (
        <div>
            {/* <div className='grid bg-red-600 grid-cols-2  '> */}
            <div className='flex bg-[#F8F4FF] z-0'>
                <div className=' border-8 w-[20vw] '>
                    <div className='h-screen flex flex-col '>
                        <button className='b-2 m-2 bg-sky-500 rounded-lg' onClick={showemp}>Manage Employee</button>
                        <button className='b-2 m-2 bg-sky-500 rounded-lg' onClick={showrole}>Manage Roles</button>
                        <button className='b-2 m-2 bg-sky-500 rounded-lg' onClick={handlelogout}>Logout</button>
                    </div>
                </div>

                <div>

                    {


                        list2 && list2.map(d => (
                            <div key={d.id} className='border-4  rounded-lg border-blue-800 w-[70vw] m-4 h-20 p-2 justify-between'>


                                <div className='flex justify-between flex-nowrap'>

                                    <div className='text-sky-500 text-4xl  p-2 ' > {d.fname} {d.lname} {d.emprole}</div>



                                </div>

                            </div>

                        ))

                    }


                </div>
                <div>
                    {


                        list && list.map(d => (
                            <div key={d.id} className='border-4  rounded-lg border-blue-800 w-[70vw] m-4 h-20 p-2 justify-between'>


                                <div className='flex justify-between flex-nowrap'>

                                    <div className='text-sky-500 text-4xl  p-2 ' > {d.id} {d.fname} {d.lname} </div>


                                    <div>
                                        <button className='border-2 w-20 m-2 bg-[#89CFF0] rounded-lg hover:bg-sky-700 ' onClick={() => { handleSingleemp(d.id) }}>Show Employee </button>
                                        <button className='border-2 w-20 m-2 bg-[#89CFF0] rounded-lg hover:bg-sky-700 ' onClick={() => { handleeditemp(d.id) }} >Edit Employee </button>
                                        <button className='border-2 w-20 m-2 bg-[#89CFF0] rounded-lg hover:bg-sky-700 ' onClick={() => { deleteSingleemp(d.id) }} >Delete Employee</button>
                                    </div>
                                </div>

                            </div>

                        ))

                    }
                </div>



            </div>
            <div>

                {
                    banner && <ShowModal closeModal={CloseModal} id={id} fname={fname} lname={lname} /> || edit && <ShowModal2 closeModal={CloseModal} id={id} fname={fname} lname={lname} />
                }
            </div>

        </div>
    );
}

export default Admin;
