import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const {_id,name,quantity,supplier,taste,photo,details,category}=useLoaderData();


    const handleUpdateCoffee=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const updatedCoffee=Object.fromEntries(formData);
        console.log(updatedCoffee);
        fetch(`http://localhost:3000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);

        })


    }
    return (
        <div className='p-12'>
        <div className='p-12'>
            <h1 className='text-6xl'>Update Coffee</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis facilis dolores eligendi, consequatur placeat minima maxime officia cumque adipisci.</p>
        </div>
        <form  onSubmit={handleUpdateCoffee}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                   

                    <label className="label">Name</label>
                    <input type="text" name='name'
                    defaultValue={name}
                    className="input w-full" placeholder="Coffee Name" />

                  
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                   

                    <label className="label">Quantity</label>
                    <input type="text" 
                    defaultValue={quantity}
                    name='quantity' className="input w-full" placeholder="Quantity" />

                  
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                   

                    <label className="label">Supplier</label>
                    <input type="text" 
                    defaultValue={supplier}
                    name='supplier' className="input w-full" placeholder="Supplier Name" />

                  
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                   

                    <label className="label">Taste</label>
                    <input type="text"
                    defaultValue={taste}
                    name='taste' className="input w-full" placeholder="TasteName" />

                  
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                   

                    <label className="label">Category</label>
                    <input type="text" 
                    defaultValue={category}
                    name='category' className="input w-full" placeholder="Category Name" />

                  
                </fieldset>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                   

                    <label className="label">Details</label>
                    <input type="text" 
                    defaultValue={details}
                    name='details' className="input w-full" placeholder="Details Name" />

                  
                </fieldset>
               
            </div>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6  border p-4">
                   

                   <label className="label">Photo</label>
                   <input type="text"
                   defaultValue={photo}
                   
                   name='photo' className="input w-full" placeholder="Photo URL" />

                 
               </fieldset>
               <input type="submit" className='btn w-full' value="Update Coffee" />

        </form>
    </div>
    );
};

export default UpdateCoffee;