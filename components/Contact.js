var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    //tworzymy i renderujemy obiekty
    render: function() {
        return React.createElement(
            "div",
            { className: "contactItem" },
            React.createElement("img", {
                className: "contactImage",
                src: "./images/user-circle.png"
            }),
            React.createElement(
                "p",
                { className: "contactLabel" },
                "Imię: " + this.props.item.firstName
            ),
            React.createElement(
                "p",
                { className: "contactLabel" },
                "Nazwisko: " + this.props.item.lastName
            ),
            React.createElement(
                "p",
                { className: "phoneLabel" },
                "Numer: " + this.props.item.phone
            ),
            React.createElement(
                "a",
                {
                    className: "contactEmail",
                    href: "mailto:" + this.props.item.email
                },
                this.props.item.email
            )
        );
    }
});
