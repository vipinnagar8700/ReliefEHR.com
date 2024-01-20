// styled components
import { Menu, UserWrapper } from '../style';
// components
import Avatar from '@ui/Avatar';

// utils
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { useState } from 'react';

// assets
import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import { LogoutProfile, ProfileApi } from '@components/Api/AllApi';
import { useEffect } from 'react';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Url from 'url/Allurl';

const CurrentUser = () => {
    const navigate = useNavigate();
    const [ProfileData, setProfileData] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClickAway = () => setOpen(false);
    const handleClick = () => setOpen(!open);

    const src = {
        jpg: doc1jpg,
        webp: doc1webp
    }


    useEffect(() => {
        ProfileApi().then((res) => {
            setProfileData(res.results)
            console.log(res.results, "This Is profileData")
        })
    }, [])


    const Logout = async () => {
        // Ask for confirmation
        const confirmLogout = window.confirm("Are you sure you want to log out?");

        if (confirmLogout) {
            const response = await LogoutProfile();
            console.log(response);

            if (response && response.message === "Successfully logged out") {
                alert("Successfully Logout!");

                localStorage.removeItem("provider");
                setTimeout(() => {
                    window.location.reload();
                }, 500);
            } else {
                alert("Logout failed. Please try again.");
            }
        } else {
            // The user cancelled the logout, do nothing or provide feedback if needed
            console.log("Logout cancelled by the user.");
        }
    };



    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <UserWrapper>
                <img src={`${Url}/public/uploads/images/${ProfileData.img}`} style={{ height: '25px', width: '25px' }} alt="avatar" />
                <div className="info">
                    <span className="h3">{ProfileData.name} {ProfileData.lname}</span>
                    <span className="position">{ProfileData.address}</span>
                    <Menu className={open ? 'visible' : ''}>
                        <button>
                            <Link to="/settings"> <i className="icon icon-circle-user" /> Change user</Link>
                        </button>
                        <button>
                            <Link to="/settings/ChangePassword"> <i className="icon icon-circle-user" /> Change Password</Link>
                        </button>

                        <button onClick={Logout} >
                            <i className="icon icon-logout" /> Logout
                        </button>
                    </Menu>
                </div>
                <button className="trigger" onClick={handleClick} aria-label="Show menu">
                    <i className="icon icon-chevron-down" />
                </button>
            </UserWrapper>
        </ClickAwayListener>
    )
}

export default CurrentUser;