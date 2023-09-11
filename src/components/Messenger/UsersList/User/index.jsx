// styled components
import { GetAllPatientData } from '@components/Api/AllApi';
import { UserItem } from '@components/Messenger/UsersList/User/style';

// components
import { QtyBadge } from '@ui/Badge/style';
import Pat from '@assets/avatars/doc4.jpg'
// utils
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { Avatar } from '@mui/material';

const User = ({ data, user, onUserSelect, setModal }) => {


    const [post, setPost] = useState(false)
    const handleUserClick = () => {
        // Call the callback function passed from the parent component (onUserSelect) with the user's data
        onUserSelect(data);
    }





    const handleClick = () => {
        onUserSelect(data.id);
        setModal(true);
    }


    return (


        <>

            <UserItem >
                <div className="container">
                    <div className="main">
                        <Avatar src={Pat} />
                        <div className="main_wrapper">
                            <span className="name">Vipin Nagar</span>
                        </div>
                    </div>
                </div>
            </UserItem>


        </>
    )
}

User.propTypes = {
    onUserSelect: PropTypes.func.isRequired
}

export default User;