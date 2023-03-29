import { FaDraftingCompass, FaHardHat, FaPencilRuler } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/approch1.jpg';
import thumb2 from '../../assets/img/approch2.jpg';
import thumb3 from '../../assets/img/approch3.jpg';

const approchData = [{
        id: uuidv4(),
        thumb: thumb1,
        icon: < FaDraftingCompass / > ,
        heading: 'Our Vision',
        btnText: 'Read More',
    },

    {
        id: uuidv4(),
        thumb: thumb2,
        icon: < FaPencilRuler / > ,
        heading: 'Our Mission',
        btnText: 'Read More',
    },

    {
        id: uuidv4(),
        thumb: thumb3,
        icon: < FaHardHat / > ,
        heading: 'Our Approch',
        btnText: 'Read More',
    },
];

export default approchData;