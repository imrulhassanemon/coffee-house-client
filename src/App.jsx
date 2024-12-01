import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div className="w-11/12 lg:w-10/12 mx-auto">
      <h1 className="text-6xl text-center">Number of coffee {coffees.length}</h1>
      <div className="grid gap-5 md:grid-cols-2">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
