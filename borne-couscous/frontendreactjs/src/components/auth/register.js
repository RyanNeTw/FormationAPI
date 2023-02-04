import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { StoreContext, StoreProvider } from "../../Providers/Store";

export default function Login() {

    const [showModal, setShowModal] = useState(false);

    function RegisterApi(data){
        fetch('http://127.0.0.1:3333/auth/register', {
            method: 'POST',
            headers:{
            'Content-Type':'application/json'
            }, 
            body: JSON.stringify({
            username: data.username,
            email: data.email,
            password: data.password
            })
        }).then((res) => {
            res.json().then((json) =>{
                console.log(json)
            })
        })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {RegisterApi(data)};
    return (
        <>
          <button
            className="bg-gray-700 text-white active:bg-gray-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {setShowModal(true)
            console.log(showModal)}}
          >
            Inscritpion
          </button>
          {showModal ? (
            <>
             <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-sm">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    {/*body*/}
                    <div class="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                <button onClick={() => setShowModal(false)} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                    <form onSubmit={handleSubmit(onSubmit)} className="py-6 px-6 lg:px-8 flex flex-col gap-4">
                        
                        <input placeholder="Username" {...register("username", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.username && <span>This field is required</span>}
                        
                        <input placeholder="Email" {...register("email", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.email && <span>This field is required</span>}
    
                        <input placeholder="Password" {...register("password", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.password && <span>This field is required</span>}
                        
                        <input type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      );
}