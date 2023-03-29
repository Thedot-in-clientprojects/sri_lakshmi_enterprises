import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const contactData = [
    {
        id: uuidv4(),
        icon: <AiOutlineMail />,
        heading: 'Email Address',
        text: 'Sent mail asap anytime',
        item1: 'adalarasanlakshmi@gmail.com',
    },

    {
        id: uuidv4(),
        icon: <AiOutlinePhone />,
        heading: 'Phone Number',
        text: 'call us asap anytime',
        item1: '+91 9842092187',
    },

    {
        id: uuidv4(),
        icon: <FaMapMarkerAlt />,
        heading: 'Office Address',
        text: 'Sent mail asap anytime',
        item1: 'Trini Garden Near Power House, Annur Road, Arasur, Po, Coimbatore, Tamil Nadu 641407',
    },
];

export default contactData;
