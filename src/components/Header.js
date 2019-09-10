import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);