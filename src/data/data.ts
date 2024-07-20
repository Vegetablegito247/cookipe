import caesar from '../images/land/landMain/caesar.jpg';
import carbonara from '../images/land/landMain/carbonara.jpg';
import fried from '../images/land/landMain/fried.jpg';
import grilled from '../images/land/landMain/grilled.jpg';
import tacos from '../images/land/landMain/tacos.jpg';
import user from '../images/userImg/black3.jpg';

interface Category {
    id: number;
    imgSrc: string;
    title: string;
    time: string;
    description: string;
    userImgSrc: string;
    userName: string;
    userTitle: string;
    userRating: string;
  }

export const categories: Category[] = [
    {
        id: 1,
        imgSrc: fried,
        title: 'Fried Rice',
        time: '12mins',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam tempora fuga sit beatae sapiente? Magni sequi quia veritatis natus nihil fuga repudiandae aspernatur quisquam fugiat? Soluta dicta adipisci minima eligendi.',
        userImgSrc: user,
        userName: 'Samuel John',
        userTitle: 'Chef',
        userRating: '5 star'
    },
    {
        id: 2,
        imgSrc: grilled,
        title: 'Grilled Chicken',
        time: '20mins',
        description: 'Delicious grilled chicken with a perfect blend of spices, cooked to perfection. Enjoy the flavors of our chef\'s special recipe.',
        userImgSrc: user,
        userName: 'Emily Clark',
        userTitle: 'Chef',
        userRating: '4.5 star'
    },
    {
        id: 3,
        imgSrc: carbonara,
        title: 'Pasta Carbonara',
        time: '15mins',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple yet incredibly flavorful.',
        userImgSrc: user,
        userName: 'Michael Smith',
        userTitle: 'Chef',
        userRating: '5 star'
    },
    {
        id: 4,
        imgSrc: caesar,
        title: 'Caesar Salad',
        time: '10mins',
        description: 'Crisp romaine lettuce, creamy Caesar dressing, crunchy croutons, and grated Parmesan cheese. A refreshing and healthy choice.',
        userImgSrc: user,
        userName: 'Anna Brown',
        userTitle: 'Chef',
        userRating: '4.8 star'
    },
    {
        id: 5,
        imgSrc: tacos,
        title: 'Beef Tacos',
        time: '25mins',
        description: 'Spicy beef tacos served with fresh salsa, guacamole, and a squeeze of lime. A true fiesta of flavors.',
        userImgSrc: user,
        userName: 'David Wilson',
        userTitle: 'Chef',
        userRating: '5 star'
    },
    {
        id: 6,
        imgSrc: tacos,
        title: 'Beef Tacos',
        time: '25mins',
        description: 'Spicy beef tacos served with fresh salsa, guacamole, and a squeeze of lime. A true fiesta of flavors.',
        userImgSrc: user,
        userName: 'David Wilson',
        userTitle: 'Chef',
        userRating: '5 star'
    }
];