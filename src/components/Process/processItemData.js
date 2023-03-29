import { v4 as uuidv4 } from 'uuid';

const processItemData = [{
        id: uuidv4(),
        number: '01',
        heading: 'Discussions About Project',
        text: 'We discuss and brainstorm your machine ideas and finilise the plan',
    },

    {
        id: uuidv4(),
        number: '02',
        heading: 'Start Work With Team',
        text: 'Our team works close with you and update the process every now and then',
    },

    {
        id: uuidv4(),
        number: '03',
        heading: 'Handover & Test Machine',
        text: 'We Testing the machine before handing over to the you',
    },

    {
        id: uuidv4(),
        number: '04',
        heading: 'Great Support',
        text: 'We will be with you and support you in your industrial journey, happy machine building',
    },
];

export default processItemData;