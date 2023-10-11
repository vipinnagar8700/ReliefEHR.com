import pat1jpg from '@assets/avatars/pat1.jpg';
import pat1webp from '@assets/avatars/pat1.jpg?as=webp';
import pat2jpg from '@assets/avatars/pat2.jpg';
import pat2webp from '@assets/avatars/pat2.jpg?as=webp';
import pat3jpg from '@assets/avatars/pat3.jpg';
import pat3webp from '@assets/avatars/pat3.jpg?as=webp';
import pat4jpg from '@assets/avatars/pat4.jpg';
import pat4webp from '@assets/avatars/pat4.jpg?as=webp';
import pat5jpg from '@assets/avatars/pat5.jpg';
import pat5webp from '@assets/avatars/pat5.jpg?as=webp';
import pat6jpg from '@assets/avatars/pat6.jpg';
import pat6webp from '@assets/avatars/pat6.jpg?as=webp';
import pat9jpg from '@assets/avatars/pat9.jpg';
import pat9webp from '@assets/avatars/pat9.jpg?as=webp';

import doc1jpg from '@assets/avatars/doc1.jpg';
import doc1webp from '@assets/avatars/doc1.jpg?as=webp';
import doc2jpg from '@assets/avatars/doc2.jpg';
import doc2webp from '@assets/avatars/doc2.jpg?as=webp';
import doc3jpg from '@assets/avatars/doc3.jpg';
import doc3webp from '@assets/avatars/doc3.jpg?as=webp';

export const appointments = [
    {
        id: 'smdIdn',
        patient: {
            name: 'Corey Aguilar',
            avatar: {
                jpg: pat1jpg,
                webp: pat1webp
            }
        },
        doctor: {
            name: 'Shawn Hampton',
            avatar: {
                jpg: doc2jpg,
                webp: doc2webp
            }
        },
        type: 'Kidney function test',
        payment: 24.5,
        date: new Date(2022, 0, 1, 9, 0),
        phone: '12456789',
    },

]