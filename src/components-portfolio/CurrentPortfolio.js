import React from 'react';
import SubHeader from '../components-portfolio/SubHeader'

const CurrentPortfolio = (props) => {
    console.log(props);
    return (
        <div>
            <SubHeader />
            <p>This page is for the item with id of {props.match.params.id}</p>
        </div>
    );
};

export default CurrentPortfolio