import moment from 'moment';

export const disabled = [
    {
        start: moment().set({ hour: 12, minute: 30, second: 0 }).toDate(),
        end: moment().set({ hour: 13, minute: 0, second: 0 }).toDate(),
        type: 'disabled'
    },

];

export const events = {
    doctor: [
        {
            name: 'MRI',
            start: moment().set({ hour: 9, minute: 30, second: 0 }).toDate(),
            end: moment().set({ hour: 10, minute: 0, second: 0 }).toDate(),
            allDay: false,
            type: 'test'
        },

    ],
    patient: {
        general: [
            {
                name: '3:00 PM  Patient Nagar',
                start: moment().set({ hour: 10, minute: 0, second: 0 }).toDate(),
                end: moment().set({ hour: 10, minute: 30, second: 0 }).toDate(),
                allDay: false,
                type: 'test'
            }


        ],
        disabled: disabled
    }
}