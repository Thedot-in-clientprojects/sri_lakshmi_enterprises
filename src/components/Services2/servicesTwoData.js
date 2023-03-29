import { FaCity, FaDraftingCompass, FaHardHat, FaRegBuilding, FaTruckMoving } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import thumb1 from '../../assets/img/service1.jpg';
import thumb2 from '../../assets/img/service2.jpg';
import thumb3 from '../../assets/img/service3.jpg';
import thumb4 from '../../assets/img/service4.jpg';
import thumb5 from '../../assets/img/service5.jpg';
import thumb6 from '../../assets/img/service6.jpg';
import Bg1 from '../../assets/img/home1/one.png';
import Bg3 from '../../assets/img/home1/two.png';
import Bg4 from '../../assets/img/home1/three.png';
import Bg5 from '../../assets/img/home1/sandmould.png';
import Bg6 from '../../assets/img/home1/sandmix.png';
import Bg7 from '../../assets/img/home1/ished.png';
import Bg8 from '../../assets/img/home1/imould.png';
import Bg9 from '../../assets/img/home1/rtrack.png';

const servicesTwoData = [{
        id: uuidv4(),
        thumbnail: Bg1,
        icon: < FaDraftingCompass / > ,
        heading: 'Shot Blasting',
        text: 'We offer shot blasting machine service and new machine manufacturing.',
    },

    {
        id: uuidv4(),
        thumbnail: Bg3,
        icon: < FaRegBuilding / > ,
        heading: 'Crane',
        text: 'Crane starts at 500Kg to 50Tons Service and new manufacturing.',
    },

    {
        id: uuidv4(),
        thumbnail: Bg4,
        icon: < FaTruckMoving / > ,
        heading: 'Bucket',
        text: 'We offer bucket 100Kg to 2Tons service and manufacture.',
    },
    {
        id: uuidv4(),
        thumbnail: Bg5,
        icon: < FaTruckMoving / > ,
        heading: 'Sand Moulding',
        text: 'We offer bucket 100Kg to 2Tons service and manufacture.',
    },
    {
        id: uuidv4(),
        thumbnail: Bg6,
        icon: < FaTruckMoving / > ,
        heading: 'Sand Mixture',
        text: 'We offer bucket 100Kg to 2Tons service and manufacture.',
    },
    {
        id: uuidv4(),
        thumbnail: Bg7,
        icon: < FaTruckMoving / > ,
        heading: 'Industrial Shed',
        text: 'We offer bucket 100Kg to 2Tons service and manufacture.',
    },
    {
        id: uuidv4(),
        thumbnail: Bg8,
        icon: < FaTruckMoving / > ,
        heading: 'Foundry Moulding Box',
        text: 'We offer bucket 100Kg to 2Tons service and manufacture.',
    },
    {
        id: uuidv4(),
        thumbnail: Bg9,
        icon: < FaTruckMoving / > ,
        heading: 'Railway Track Manufacturing',
        text: 'We offer bucket 100Kg to 2Tons service and manufacture.',
    },


];

export default servicesTwoData;