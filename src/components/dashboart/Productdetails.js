import React, { useEffect, useState } from 'react';
import './Productdetails.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Productdetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(response.data);  
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserDetails();
    }, [id]);

    return (
        <>
            <div className="user-details-container">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-username"><strong>Username:</strong> {user.username}</p>
                <p className="user-email"><strong>Email:</strong> {user.email}</p>
                <p className="user-phone"><strong>Phone:</strong> {user.phone}</p>
                <p className="user-website"><strong>Website:</strong> {user.website}</p>
                <p className="user-address">
                    <strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city}, {user.address?.zipcode}
                </p>
                <p className="user-company"><strong>Company:</strong> {user.company?.name}</p>
                <button className="back-button" onClick={() => window.history.back()}>Back to Users</button>
            </div>
        </>
    );
}
