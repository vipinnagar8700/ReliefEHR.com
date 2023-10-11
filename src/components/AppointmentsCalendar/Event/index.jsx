import React, { useEffect, useState } from 'react';
import { StyledEvent, EventModal } from './style';
import moment from 'moment';
import PropTypes from 'prop-types';
import ModalWindow from '@components/ModalWindow';
import { useTheme } from 'styled-components';
import useWindowSize from '@hooks/useWindowSize';
import { AllAppointmentDetails } from '@components/Api/AllApi';

const Event = ({ event, variant }) => {
    const [post, setPost] = useState(null);
    const [open, setOpen] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await AllAppointmentDetails();
                setPost(data?.result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const isEnded = moment(post?.end_date).isBefore(moment());
    const isDesktop = useWindowSize().width >= 1280;

    const getTakenSlots = () => {
        const duration = moment.duration(moment(post?.end_date).diff(moment(post?.start_date)));
        return Math.ceil(duration.asMinutes() / 30);
    }

    const formattedStartTime = moment(post?.start_date).format('hh:mm A');
    const formattedEndTime = moment(post?.end_date).format('hh:mm A');

    const Title = () => (
        <span className="event-title" style={{ direction: 'ltr' }}>
            {formattedStartTime} - {formattedEndTime} {post?.patient?.[0]?.name} {post?.patient?.[0]?.lname}
        </span>
    );

    return (
        <StyledEvent className={`event event-${variant} ${isEnded ? 'isEnded' : ''}`}
            type={event.type}
            mode={theme}
            slots={getTakenSlots()}>
            {event.type !== 'available' ? <Title /> : <i className="icon icon-plus-circle" />}
            <span className="overlay" />
            {
                !isDesktop && event.type !== 'disabled' && (
                    <ModalWindow visibilityHandler={setOpen} isVisible={open}>
                        <EventModal>
                            <div className="block">
                                <span className="label">Event:</span>
                                <span className="value">{event.name}</span>
                            </div>
                            <div className="block">
                                <span className="label">Start:</span>
                                <span className="value">
                                    <span>{moment(event.start).format('MMM, D')}</span>
                                    at
                                    <span>{moment(event.start).format('HH:mm A')}</span>
                                </span>
                            </div>
                            <div className="block">
                                <span className="label">End:</span>
                                <span className="value">
                                    <span>{moment(event.end).format('MMM, D')}</span>
                                    at
                                    <span>{moment(event.end).format('HH:mm A')}</span>
                                </span>
                            </div>
                        </EventModal>
                    </ModalWindow>
                )
            }
            <div className="cover">
                <i className="icon icon-circle-minus-regular" />
            </div>
        </StyledEvent>
    )
}

Event.propTypes = {
    event: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['day', 'week', 'month']).isRequired
}

export default Event;
