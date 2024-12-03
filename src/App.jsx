import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="w-11/12 lg:w-10/12 mx-auto">
      <h1 className="text-6xl text-center">
        Number of coffee {coffees.length}
      </h1>
      <div className="grid gap-5 md:grid-cols-2">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees = {setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
