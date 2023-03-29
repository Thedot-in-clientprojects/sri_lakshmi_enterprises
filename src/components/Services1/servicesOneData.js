import { v4 as uuidv4 } from 'uuid';
import Bg1 from '../../assets/img/home1/one.png';
import Bg3 from '../../assets/img/home1/two.png';
import Bg4 from '../../assets/img/home1/three.png';
import Bg2 from '../../assets/img/home1/power.jpg';
import Icon1 from '../../assets/img/icon/s1.png';
import Icon2 from '../../assets/img/icon/s2.png';
import Icon3 from '../../assets/img/icon/s3.png';
import Icon4 from '../../assets/img/icon/s4.png';

const servicesOneData = [{
        id: uuidv4(),
        bgImg: Bg1,
        icon: Icon1,
        heading: 'Machine Manufacturing',
        btnText: 'Learn More',
    },

    {
        id: uuidv4(),
        bgImg: Bg2,
        icon: Icon2,
        heading: 'Machine Services and Rebuilding',
        btnText: 'Learn More',
    },

    {
        id: uuidv4(),
        bgImg: Bg3,
        icon: Icon3,
        heading: 'Foundry MachineTech',
        btnText: 'Learn More',
    },

    {
        id: uuidv4(),
        bgImg: Bg4,
        icon: Icon4,
        heading: 'Industrial Shed Building',
        btnText: 'Learn More',
    },
];

export default servicesOneData;