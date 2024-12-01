import { FaRegEye } from "react-icons/fa";
import Swal from 'sweetalert2'
import { MdDeleteForever, MdOutlineEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const {_id,  name, quantity, supplier, test, category, details, photourl } =
    coffee;

    const handelDelete = (_id)=>{
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
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/coffee/${_id}`, {
                method:'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data);
                if(result.deletedCount> 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
              })
            }
          });
    }


  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="lg:w-[200px] w-[150px]" src={photourl} alt="Movie" />
        </figure>
        <div className=" flex border border-red-500 w-10/12 justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg ">
              <span className="font-semibold">Name:</span> {name}
            </h2>
            <p>
              <span className="font-semibold">Quantity:</span> {quantity}
            </p>
            <p>
              <span className="font-semibold">Supplier:</span> {supplier}
            </p>
            <p>
              <span className="font-semibold">Test:</span> {test}
            </p>
          </div>
          <div className="text-2xl mr-4 flex flex-col gap-4  text-white">
            <FaRegEye className="bg-[#d2b48c] rounded" />
           <Link to={`/updateCoffee/${_id}`}><button> <MdOutlineEdit className="bg-gray-600 rounded" /></button></Link>
            <button onClick={() => handelDelete(_id)}><MdDeleteForever className="bg-red-500 rounded" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
