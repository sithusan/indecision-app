import React from 'react';
const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1>{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
)

Header.defaultProps = {
    title: 'Indecision'
};
export default Header