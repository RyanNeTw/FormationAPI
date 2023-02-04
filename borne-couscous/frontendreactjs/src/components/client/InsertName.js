import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { StoreContext } from "../../Providers/Store";

export default function insertName(){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showModal, setShowModal] = useState(true);
    const { name, setName } = useContext(StoreContext);

    const onSubmit = data => {insertNameModal(data)};

    function insertNameModal(data){
        setShowModal(false);
        setName(data.name)
    }

    return(
        <div>
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
                    <div className="relative bg-gray-700 rounded-lg shadow dark:bg-gray-700">
                    <form onSubmit={handleSubmit(onSubmit)} className="py-6 px-6 lg:px-8 flex flex-col gap-4">
                        <h2 className="text-white">Inserez un nom a la commade</h2>
                        <input placeholder="Nom de la commande" {...register("name", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        {errors.name && <span>This field is required</span>}
                        
                        <input type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"/>
                    </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
            
        </div>
    )
}