export default function Users({users}){
    const {name, email} = users;
    return(
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Emali: {email}</p>
        </div>
    )
}