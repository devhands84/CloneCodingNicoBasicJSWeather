const qoute = document.querySelector('#quote');

const qoutes = [
    {
        qoute: 'text1' 
    },
    {
        qoute: 'text2'
    },
    {
        qoute: 'text3'
    },
    {
        qoute: 'text4'
    },
    {
        qoute: 'text5'
    },
];
const todayQoute = qoutes[Math.floor(Math.random() * qoutes.length)];