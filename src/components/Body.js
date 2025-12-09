import { useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

export const Body = () => {
  const [list, setList] = useState([
    {
      id: 1,
      resName: "Pizza Palace",
      cuisine: "Italian, Continental",
      rating: "4.5",
      costForTwo: "₹600 for two",
      deliveryTime: "30 mins",
    },
    {
      id: 2,
      resName: "Spice Route",
      cuisine: "Indian, North Indian",
      rating: "3.8",
      costForTwo: "₹450 for two",
      deliveryTime: "22 mins",
    },
  ]);

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setList(list.filter((n) => n.rating > 4));
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {list.map((res) => (
          <RestaurantCard resData={res} key={res.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
