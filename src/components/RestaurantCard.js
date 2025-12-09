const RestaurantCard = (props) => {
  const { resName, cuisine, rating, costForTwo, deliveryTime } = props.resData;
  return (
    <div className="res-card" style={{ background: "f0f0f0" }}>
      <img
        className="res-logo"
        src="https://logodix.com/logo/852953.jpg"
        alt="logo"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
