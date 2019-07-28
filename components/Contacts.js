var Contacts = React.createClass({
    propTypes: {
        items: React.PropTypes.array.isRequired
    },
//renderujemy nasza liste kontaktow
    render: function() {
        var contacts = this.props.items.map(function(contact) {
            return React.createElement(Contact, {
                item: contact,
                key: contact.id //id kontaktow
            });
        });

        return React.createElement(
            "ol",
            { className: "contactsList" },
            contacts
        );
    }
});
