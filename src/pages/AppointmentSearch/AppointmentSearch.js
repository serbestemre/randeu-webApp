import React from 'react';
import BusinessList from '../../containers/BusinessList/BusinessList'

const appointmentSearch = (props) => {

    const {searchedKeyword} = props;

    return (
        <BusinessList searchedKeyword={searchedKeyword}/>
    )

}

export default appointmentSearch;