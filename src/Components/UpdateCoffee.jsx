import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const updatedCoffee = useLoaderData();
  const { _id, name, quantity, supplier, test, category, details, photourl } =
    updatedCoffee;
  const handelUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      test,
      category,
      details,
      photourl,
    };
    console.log(JSON.stringify(newCoffee));

    // send data to serverside
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <div className="mt-12 ">
      <div className="bg-[#F4F3F0] rounded-t-xl  md:w-3/4 mx-auto text-center py-10 ">
        <h2 className="text-5xl">Update Coffee</h2>
      </div>
      <form onSubmit={handelUpdateCoffee}>
        {/* form row name and quantity */}
        <div className="md:flex md:w-3/4 px-5  gap-5 pb-8  mx-auto py-2 bg-[#F4F3F0] lg:px-28">
          <div className="md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold"> Name</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-ed w-full"
                name="name"
                defaultValue={name}
              />
            </label>
          </div>
          <div className="md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Quantity</span>
              </div>
              <input
                type="text"
                placeholder="Coffee Quantity"
                className="input input-ed w-full "
                name="quantity"
                defaultValue={quantity}
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        {/* form row suppiler and test */}
        <div className="md:flex md:w-3/4 px-5  gap-5 pb-8  mx-auto  bg-[#F4F3F0] lg:px-28">
          <div className="md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Supplier Name</span>
              </div>
              <input
                type="text"
                placeholder="Supplier Name"
                className="input input-ed w-full"
                name="supplier"
                defaultValue={supplier}
              />
            </label>
          </div>
          <div className="md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Test</span>
              </div>
              <input
                type="text"
                placeholder="Test"
                className="input input-ed w-full "
                name="test"
                defaultValue={test}
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        {/* form row Category Details*/}
        <div className="md:flex md:w-3/4 px-5  gap-5 pb-8  mx-auto  bg-[#F4F3F0] lg:px-28">
          <div className="md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Category</span>
              </div>
              <input
                type="text"
                placeholder="Category"
                className="input input-ed w-full"
                name="category"
                defaultValue={category}
              />
            </label>
          </div>
          <div className="md:w-1/2 ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Details</span>
              </div>
              <input
                type="text"
                placeholder="Details"
                className="input input-ed w-full "
                name="details"
                defaultValue={details}
              />
              <div className="label"></div>
            </label>
          </div>
        </div>
        {/* form row */}
        <div className=" md:w-3/4 px-5  gap-5 pb-20  mx-auto  rounded-b-xl  bg-[#F4F3F0] lg:px-28">
          <div className="md:w-full ">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </div>
              <input
                type="text"
                placeholder="Photo Url"
                className="input input-ed w-full"
                name="photourl"
                defaultValue={photourl}
              />
            </label>
          </div>
          <div>
            <input
              type="submit"
              className="btn btn-neutral btn-block mt-5"
              value="Update Coffee"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
