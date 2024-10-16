import { useEffect, useState } from "react"
import './Users.css'
import Users from "./Users";

export default function User() {
    const [user, setUser] = useState([]);
    
    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])

    return (
        <div className="box">
            <h3>Users: {user.length}</h3>
            {
                user.map(users => <Users users={users}></Users>)
            }
        </div>
    )
}


/**
 *1. Declare a state to hold the data
 2.USEffect with call back and dependence array
 3. use fetch to load data
 4. set loaded data to the state
 5. display data on the component
 */ 