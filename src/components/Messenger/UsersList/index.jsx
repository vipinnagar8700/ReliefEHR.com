// styled components
import Field from '@ui/Field';
import { Footer, Header, List } from '@components/Messenger/style';
import { Container, Button } from '@ui/TabNav/style';

// components
import Widget from '@components/Widget';
import Nav from 'react-bootstrap/Nav';
import User from '@components/Messenger/UsersList/User';
import ScrollContainer from '@components/ScrollContainer';
import NoDataPlaceholder from '@components/NoDataPlaceholder';

// utils
import PropTypes from 'prop-types';

// hooks
import { useRef, useState, useEffect } from 'react';
import useContentHeight from '@hooks/useContentHeight';

// data placeholder
import { doctor, patient } from '@db/messenger';
import { GetAllPatientData } from '@components/Api/AllApi';

const UserList = ({ variant, user, onUserSelect, setModal, activeList, setActiveList, onClick }) => {
    const [query, setQuery] = useState('');
    const placeholder = variant === 'doctor' && activeList !== 'doctors' ? 'Search patients' : 'Search doctor or medical department';

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    const [patient, setPost] = useState(false)
    const handleUserSelect = (userData) => {
        // Call the callback function passed from the parent component (onClick)
        onClick(userData);
    }

    useEffect(() => {


        const AllUsers = GetAllPatientData()
        if (AllUsers) {
            AllUsers.then((data) => {
                console.log(data, "ALL USERS DATA FOR MESSAGE998")
                setPost(data?.result)
            })
        }
    }, [])


    console.log(patient, "UUUUUUUUUUUUUUUUUUUUUUUUUuuuu")

    const drawList = (patient) => {
        return patient.map(item => (
            <Nav.Link as="div" key={item.id} eventKey={item.id}>
                <User
                    user={user}
                    data={item}
                    onUserSelect={onUserSelect}
                    setModal={setModal}
                    onClick={handleUserClick} // Pass the callback function here
                />
            </Nav.Link>

        ));
    }



    // const drawList = (arr, role, patient) => {
    //     const list = arr.filter(item => {
    //         const fullName = `${item.name} ${item.lname}`;
    //         return fullName.toLowerCase().includes(query.toLowerCase()) && item.role === role;
    //     })
    //         .map(item => (
    //             <Nav.Link as="div" key={item.id} eventKey={item.id} onClick={() => onUserSelect(item.id)}>
    //                 <User user={user} data={item} onUserSelect={onUserSelect} setModal={setModal} />
    //             </Nav.Link>
    //         ));
    //     return list.length ? list : <NoDataPlaceholder />;
    // }
    const handleClick = (data) => {
        onUserSelect(data.id);
        setModal(true);
        onClick(data); // Call the callback with the user's data
    }


    const handleUserClick = (userData) => {
        // Handle the clicked user's data here in the UserList component
        console.log("Clicked user's data:", userData);
        // You can do whatever you need with the clicked user's data here
    }




    return (
        <Widget name="MessengerUserList">
            {
                variant === 'doctor' && (
                    <>
                        <Header ref={headerRef}>
                            <Container>
                                <Button className={activeList === 'patients' ? 'active' : ''} onClick={() => setActiveList('patients')}>
                                    Patients
                                </Button>
                                {/* <Button className={activeList === 'doctors' ? 'active' : ''} onClick={() => setActiveList('doctors')}>
                                    Doctors
                                </Button> */}
                            </Container>
                        </Header>
                        <ScrollContainer height={height}>
                            <List className="track">
                                <div style={{ margin: '2px 0' }}>
                                    {
                                        activeList === 'patients'
                                            ? drawList(doctor, 'patient', handleUserSelect) // Pass the callback function
                                            : drawList(doctor, 'doctor', handleUserSelect) // Pass the callback function
                                    }
                                </div>
                            </List>
                        </ScrollContainer>
                    </>
                )
            }
            {
                variant === 'patient' &&
                <ScrollContainer height={height}>
                    <List className="track">
                        {drawList(patient)}
                    </List>
                </ScrollContainer>
            }
            <Footer ref={footerRef}>
                <div className="search">
                    <Field type="search" placeholder={placeholder} value={query}
                        handler={e => setQuery(e.target.value)} />
                    <button className={query !== '' ? 'visible' : ''} onClick={() => setQuery('')}>
                        <i className="icon icon-close" />
                    </button>
                </div>
            </Footer>
        </Widget>
    );
}

UserList.propTypes = {
    variant: PropTypes.oneOf(['doctor', 'patient']).isRequired,
    onUserSelect: PropTypes.func.isRequired,
    user: PropTypes.any.isRequired
}

export default UserList;