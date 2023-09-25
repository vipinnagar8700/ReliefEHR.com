import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import doc2jpg from '@assets/avatars/doc2.jpg';
import doc2webp from '@assets/avatars/doc2.jpg?as=webp';
import doc3jpg from '@assets/avatars/doc3.jpg';
import doc3webp from '@assets/avatars/doc3.jpg?as=webp';
import doc4jpg from '@assets/avatars/doc4.jpg';
import doc4webp from '@assets/avatars/doc4.jpg?as=webp';
import doc8jpg from '@assets/avatars/doc8.jpg';
import doc8webp from '@assets/avatars/doc8.jpg?as=webp';
import doc10jpg from '@assets/avatars/doc10.jpg';
import doc10webp from '@assets/avatars/doc10.jpg?as=webp';
import doc11jpg from '@assets/avatars/doc11.jpg';
import doc11webp from '@assets/avatars/doc11.jpg?as=webp';

export const doctors = [
    {
        id: "marvin_park",
        name: "Vipin Nagar",
        avatar: {
            jpg: doc2jpg,
            webp: doc2webp
        },
        speciality: "Dentist",
        rating: {
            year: 3.64,
            month: 4.5,
            week: 4.14
        },
        daily: [
            { label: '9am', value: 25 },
            { label: '10am', value: 45 },
            { label: '11am', value: 30 },
            { label: '12pm', value: 41 },
            { label: '1pm', value: 56 },
            { label: '2pm', value: 20 },
            { label: '3pm', value: 51 },
            { label: '4pm', value: 33 },
            { label: '5pm', value: 14 },
        ]
    },

];