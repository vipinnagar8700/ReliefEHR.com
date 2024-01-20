// styled components
import { Container, Animation } from '@components/Messenger/style';

// components
import Header from '@components/Messenger/Header';
import Message from '@components/Messenger/Message';
import Input from '@components/Messenger/Input';
import Lottie from 'lottie-react';
import GroupSeparator from '@ui/GroupSeparator';
import Tab from 'react-bootstrap/Tab';
import ScrollContainer from '@components/ScrollContainer';
import './style.css'

// utils
import moment from 'moment';

// hooks
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useContentHeight from '@hooks/useContentHeight';

// assets
import typing from '@assets/typing.json';
import VidocallMain from '../Header/App';
import { MessageContainer } from '../Message/style';
import Cookies from 'js-cookie';
import Url from 'url/Allurl';


const Main = ({ user }) => {
    const trackRef = useRef(null);
    console.log(user, "KKKKKKKKKKK")
    const variant = 'patient'
    const doctor = useSelector(state => state['messenger']['doctor']);
    const patient = useSelector(state => state['messenger']['patient']);
    const db = variant === 'patient' ? patient : doctor;
    const currentUser = user && db.find(item => item.id === user);
    // console.log(currentUser, "AAAA")
    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        // Fetch chat messages from the API
        getAllChat()
    }, []);


    const getAllChat = () => {
        let token = Cookies.get("provider")
        console.log(token, "This Is token for all Api's")
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const formdata = new FormData();
        formdata.append("sender_id", user?.id);
        // formdata.append("receiver_id", "703");
        if (user?.clinic_id !== null) {
            formdata.append("receiver_id", user?.clinic_id); // Set clinic ID if available
        } else {
            formdata.append("receiver_id", user?.provider_id); // Default clinic ID
        }
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch(`${Url}/api/getChats`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    setChatMessages(result.data);
                    console.log(result?.data, "This is Chat")
                } else {
                    console.error("Failed to fetch chat messages");
                }
            })
            .catch(error => {
                console.error('Error fetching chat messages:', error);
            });
    }

    return (
        <Container>
            {
                user && <Header variant={variant} user={user} elRef={headerRef} />
            }
            <ScrollContainer height={height}>
                <div ref={trackRef} style={{ padding: '20px 0', height: '95%', overflow: 'scroll' }}>
                    {chatMessages && chatMessages?.map(message => (
                        <MessageContainer
                            key={message.messageId}
                            className={message.sendBy === "Mr Clinic" ? "sender" : "receiver"}
                        >
                            <span className="metadata">
                                {message.date} {message.time} - {message.sendBy}
                            </span>
                            <div className="content">
                                {message.message}
                            </div>
                        </MessageContainer>
                    ))}
                </div>
            </ScrollContainer>
            <Input db={variant} id={user} elRef={footerRef} />

        </Container>
    )
}

export default Main;  