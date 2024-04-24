import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const newCoffee = { coffeeName, chef, supplier, taste, category, details, price, photo }
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'User Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className="md:w-[80%] py-10 md:p-10 mx-auto my-10 bg-[#F4F3F0] rounded-md">
            <div className="text-center space-y-5">
                <h1 className="text-4xl text-[#314151] rancho">Add New Coffee</h1>
                <p className="raleway text-center px-2 md:px-0 lg:max-w-[70%] mx-auto">
                    It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
                </p>
                {/* Form */}
                <form onSubmit={handleAddCoffee}>
                    <div className="w-[90%] mx-auto md:w-[100%]">
                        {/* row-1 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Coffee Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="coffeeName" placeholder="Coffee Name" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Chef</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="chef" placeholder="Enter coffee chef" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        {/* row-2 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Supplier</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Taste</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        {/* row-3 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Category</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Coffee Price</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="price" placeholder="Enter coffee price" required className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        {/* row-4 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Details</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-full border-0" />
                                </label>
                            </div>
                        </div>
                        {/* row-5 */}
                        <div className="flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-6">
                            <div className="form-control w-full pb-2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Photo</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full border-0" required/>
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-block mt-6 bg-[#D2B48C] text-[#331A15] border-2 border-[#331A15] rancho text-2xl hover:bg-[#d5a566] hover:border-0">Add Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;