const accountSid = 'AC0f8d5e57905d5a7b480e0463c13a0fce';
const authToken = 'cc45ecbcb3e04961cc77a366e1108449';
const client = require('twilio')(accountSid, authToken);

let venueNames = [];

const fetchVenues = async () => {
    const data = await fetch(`https://api.tazman.online/api/tazman/venue/search`);

    const result = await data.json();
    const venueNames = result.venueList.map((ven) => ven.name)
    console.log('ven', venueNames)

    client.messages
        .create({
            body: 'Thank you for submitting your order. To finalize your payment, please tap below to call or visit our website.',
            from: 'whatsapp:+14155238886',
            to: 'whatsapp:+923323604897'
        })
        .then((message) => console.log(message.sid));
}

fetchVenues();


