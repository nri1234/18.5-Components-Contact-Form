var App = React.createClass({
    render: function() {
        return React.createElement(
            "div",
            { className: "app" },
            React.createElement(ContactForm, { contact: contactForm }),//do komponentu ContactForm przekazujemy obiekt contactForm
            React.createElement(Contacts, { items: contacts }, {}) //do Contacts --- contacts
        );
    }
});
var contacts = [
    {
        id: 1,
        firstName: 'Jan',
        lastName: 'Nowak',
        phone: '12345647',
        email: 'jan.nowak@example.com',
    },
    {
        id: 2,
        firstName: 'Adam',
        lastName: 'Kowalski',
        phone: '12345647',
        email: 'adam.kowalski@example.com',
    },
    {
        id: 3,
        firstName: 'Zbigniew',
        lastName: 'Koziol',
        phone: '12345647',
        email: 'zbigniew.koziol@example.com',
    },
    {
        id: 4,
        firstName: 'Norbert',
        lastName: 'Mielczarek',
        phone: '12345647',
        email: 'adam.kowalski@example.com',
    },
];

var contactForm = {
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
}; // inf co ma byc w kontakt form
