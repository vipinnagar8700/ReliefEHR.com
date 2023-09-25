// styled components
import { EventsCalendar, Container, Popup, Backdrop } from '@widgets/EventsCompactCalendar/style';

// components
import Widget from '@components/Widget';
import Calendar from 'react-calendar';
import Timestamp from '@ui/Timestamp';
import Grow from '@mui/material/Grow';
import CloseBtn from '@components/ModalWindow/CloseBtn';

// hooks
import { useState, useRef } from 'react';
import './styleCal.css'
// utils
import { nanoid } from 'nanoid';
import moment from 'moment';
import { Typography } from '@mui/material';
import { useEffect } from 'react';
import { GetAppointmtentREwie } from '@components/Api/AllApi';

const EventsCompactCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(moment());
    const [popupVisible, setPopupVisible] = useState(false);
    const popupRef = useRef(null);

    const events = [
        {
            date: moment(),
            title: 'Appointment Booked by Vipin Nagar',
        },
        {
            date: moment(),
            title: 'Appointment Booked by Tushar Nagar',
        },
        {
            date: moment().add(3, 'hours'),
            title: 'Appointment Booked by Raghu Yadav',
        },
        {
            date: moment().add(2, 'days').add(1, 'hours'),
            title: 'Appointment Booked by John',
        },
        {
            date: moment().add(2, 'days').add(2, 'hours'),
            title: 'Appointment Booked by  Boby',
        }
    ]





    const hasEvents = date => events.filter(event => moment(event.date).isSame(date, 'day')).length > 0;

    const drawPopup = date => {
        const eventsOnDate = events.filter(event => moment(event.date).isSame(date, 'day'));
        return eventsOnDate.map(event => {
            return (
                <div key={nanoid(5)}>
                    <Timestamp date={date} time={true} />
                    <h3>{event.title}</h3>
                </div>
            )
        });
    }

    const config = {
        as: Calendar,
        locale: 'en-US',
        navigationLabel: ({ date }) => `${moment(date).format('MMMM, YYYY')}`,
        navigationAriaLabel: 'Current month',
        prevLabel: <i className="icon icon-chevron-left" />,
        nextLabel: <i className="icon icon-chevron-right" />,
        prev2Label: null,
        next2Label: null,
        nextAriaLabel: 'Next month',
        prevAriaLabel: 'Previous month',
        onClickDay: (value) => {
            setSelectedDate(value);
            setPopupVisible(true);
        },
        tileClassName: ({ date }) =>
        moment(date).isSame(moment(), 'day') ? 'react-calendar__tile--now' : '',
    }

    return (
        <Widget name="EventsCompactCalendar">
            <Container>
                <Typography m={1} sx={{ fontSize: 22, fontWeight: 600 }}>Quick Calender</Typography>
                <EventsCalendar {...config} />

            </Container>
        </Widget>
    )
}

export default EventsCompactCalendar;