import { useEffect, useState } from "react";
import { restaurantList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [search, setSearch] = useState("");

  const searchRestaurants = (searchRes) => {
    const filtered = list.filter((res) =>
      res.info.name.toLowerCase().includes(searchRes.toLowerCase())
    );
    setFilteredList(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          value={search}
          placeholder="search for restaurants.."
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchRestaurants(search)}
        />
        <button onClick={() => searchRestaurants(search)}>Search</button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setFilteredList(filteredList.filter((n) => n.info.avgRating > 4));
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((res) => (
          <RestaurantCard resData={res} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
