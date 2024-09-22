import React, { useState, useEffect } from 'react';
import './Dashboart.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Dashboart = () => {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data); 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='cart-container'>
                {users.map((user) => {
                    const name = user.name.length > 20 ? user.name.substring(0, 20) + ".." : user.name;
                    return (
                        <div className="user-card" key={user.id}>
                            <h3 className='user-name'>{name}</h3>
                            <p className='user-email'>Email: {user.email}</p>
                            <p className='user-company'>Company: {user.company.name}</p>
                            <Link to={`/users/${user.id}`}><button className='view-details'>View Details</button></Link>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

