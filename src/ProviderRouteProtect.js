import React, { useContext } from 'react';
import { useNavigate } from 'react-router';

const dataFromLocalStorage = localStorage.getItem("provider");
// Parse the JSON data back to an object
const parsedData = JSON.parse(dataFromLocalStorage);

console.log(parsedData, "PPPPPPP1234567890");

const Providerprotect = ({ children }) => {
    const navigate = useNavigate();

    if (parsedData && parsedData.role === 'provider') {
        return (
            <div>{children}</div>
        );
    } else {
        // Redirect to the login page
        navigate('/Login');
        return null; // You can return null here as you're navigating away
    }
};

export default Providerprotect;
