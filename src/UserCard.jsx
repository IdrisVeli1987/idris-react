export default function UserCard({ card }) {
  const { cumle, img1 } = card;
  return (
    <div className="usecard">
      <img className="usercard_img" src={img1} alt="" />
      <p className="usercard_name">{cumle}</p>
    </div>
  );
}
