import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee=e=>{
        e.preventDefault();
        const form=e.target;
        const formData=new FormData(form);
        const coffeeData=Object.fromEntries(formData.entries())
        // console.log(formData.entries());
        console.log(coffeeData);
        
        fetch('http://localhost:3000/coffees',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(coffeeData)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                console.log('added successfully',data)
                Swal.fire({
                    title: "Coffee added successfully!",
                    icon: "success",
                    draggable: true
                  });
                //   form.reset()

            }
            
        })




    }
    return (
        <div className='p-12'>
            <div className='p-12'>
                <h1 className='text-6xl'>Add Coffee</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quis facilis dolores eligendi, consequatur placeat minima maxime officia cumque adipisci.</p>
            </div>
            <form  onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Coffee Name" />

                      
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input w-full" placeholder="Quantity" />

                      
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Supplier</label>
                        <input type="text" name='supplier' className="input w-full" placeholder="Supplier Name" />

                      
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Taste</label>
                        <input type="text" name='taste' className="input w-full" placeholder="TasteName" />

                      
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Category</label>
                        <input type="text" name='category' className="input w-full" placeholder="Category Name" />

                      
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                        <label className="label">Details</label>
                        <input type="text" name='details' className="input w-full" placeholder="Details Name" />

                      
                    </fieldset>
                   
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6  border p-4">
                       

                       <label className="label">Photo</label>
                       <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />

                     
                   </fieldset>
                   <input type="submit" className='btn w-full' value="Add Coffee" />

            </form>
        </div>
    );
};

export default AddCoffee;