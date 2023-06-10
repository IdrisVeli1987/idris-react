export default function UserCard({ card }) {
  const { name, department, country, city, img1 } = card;
  return (
    <div className="usecard">
      <img className="usercard_img" src={img1} alt="" />
      <p className="usercard_name">
        Hi, my name is {name}. I'm from {country}, {city} city. I'm {department}{" "}
      </p>
    </div>
  );
}
