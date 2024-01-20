// styling
import styled from 'styled-components/macro';
import { flex, textSizes, breakpoints } from '@styles/vars';

// styled components
import { Footer } from '@components/Messenger/style';
import ShapeButton from '@ui/ShapeButton';

// hooks
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

// utils
import PropTypes from 'prop-types';
import moment from 'moment';
import { nanoid } from 'nanoid';

// actions
import { addMessage } from '@store/features/messenger';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Url from 'url/Allurl';

const InputFooter = styled(Footer)`
top:92%;
position:fixed;
width:100%;
background-color:white;
  padding: 15px 24px 20px;
  form {
    display: flex;
    ${flex.between};
    gap: 8px;

    input {
      height: 40px;
      max-width: calc(100% - 48px);

      &::placeholder {
        font-size: ${textSizes['14']};;
      }
    }
    
    ${breakpoints.tablet} {
        input::placeholder {
            font-size: ${textSizes['18']};
        }
    }
  }
`;

const Input = ({ elRef, onSendMessage }) => {
    const [message, setMessage] = useState(''); // State to store the message text

    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let token = Cookies.get("provider")
        console.log(token, "This Is token for all Api's")
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        var formdata = new FormData();
        formdata.append("sender_id", "704");
        formdata.append("receiver_id", "703");
        formdata.append("clinic_id", "1");
        formdata.append("message", message);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        return fetch(`${Url}/api/sendMessage`, requestOptions)
            .then((result) => result.json())
            .then(() => {
                // Call the onSendMessage function to pass the message text to the parent component
                onSendMessage(message);

                // Clear the input field
                setMessage('');
            })
            .catch(error => console.log('error', error));
    }

    return (
        <InputFooter ref={elRef}>

            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" placeholder="Type a message..." spellCheck={true} value={message} // Set the input value from the state
                    onChange={(e) => setMessage(e.target.value)} />
                <ShapeButton shape="round" icon="paper-plane" label="Send" type="submit" />
            </form>
        </InputFooter>
    )
}

Input.propTypes = {
    db: PropTypes.oneOf(['doctor', 'patient']).isRequired,
    id: PropTypes.string.isRequired
}

export default Input;