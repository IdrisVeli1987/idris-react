export default function UserCard (props){
    console.log(props)
    return (
        <div className="usercard">
            <img src={props.img} alt="" />
            <p className="usercard_name">Hi, my name is {props.name}. I'm from {props.country}, {props.city} city. I'm {props.job} </p>
        </div>
    )
}