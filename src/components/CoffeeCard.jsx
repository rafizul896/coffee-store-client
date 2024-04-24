import PropTypes from 'prop-types';
import { TiEye } from "react-icons/ti";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, coffeeName, photo, price, chef } = coffee;
    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const current = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(current)
                        }
                    })
            }
        });
    }
    return (
        <div className='flex justify-center items-center gap-4 bg-[#F5F4F1] rounded-md px-4'>
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <p>Name: <span>{coffeeName}</span></p>
                <p>Chef: <span>{chef}</span></p>
                <p>Price: <span>{price}</span></p>
            </div>
            <div className="join join-vertical gap-3">
                <button className="p-2 text-xl bg-[#D2B48C] text-white rounded-md"><TiEye /></button>
                <Link to={`/updateCoffee/${_id}`}><button className="p-2 text-xl bg-[#3C393B] text-white rounded-md"><MdModeEdit /></button></Link>
                <button onClick={() => handleDelete(_id)} className="p-2 text-xl bg-[#EA4744] text-white rounded-md"><MdDelete /></button>
            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}

export default CoffeeCard;