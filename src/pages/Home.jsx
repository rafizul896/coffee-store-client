import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";

const Home = () => {
    const loadedCoffees = useLoaderData();
    const [coffees,setCoffees] = useState(loadedCoffees)
    return (
        <div className="md:w-[90%] lg:md:w-[70%] mx-auto">
            <div className="flex flex-col justify-center items-center space-y-1">
                <p>--- Sip & Savor ---</p>
                <h1>Our Popular Products</h1>
                <button className="btn btn-block bg-[#D2B48C] text-[#331A15] border-2 border-[#331A15] rancho text-2xl hover:bg-[#d5a566] hover:border- w-auto">Add Coffee</button>
            </div>
            <div className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;