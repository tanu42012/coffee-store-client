import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee,coffees,setCoffees }) => {
    const { _id, photo, quantity, supplier, taste, name } = coffee;

    const handleDelete = (_id) => {

        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remainingCoffees=coffees.filter(cof=>cof._id!==_id);
                            setCoffees(remainingCoffees);

                        }
                        // console.log('after delete',data);

                    })

            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm border-2">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <div>
                    <h2 className="">{name}</h2>
                    <p>Quantity :{quantity}</p>
                    <p>supplier :{supplier}</p>
                </div>

                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                      <Link to={`/coffee/${_id}`}>
                      <button className="btn join-item">view</button></Link>
                        <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn join-item">x</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard; 