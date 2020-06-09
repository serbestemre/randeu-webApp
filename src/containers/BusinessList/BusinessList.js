import React from 'react';

import BusinessCard from '../../components/Card/BusinessCard/BusinessCard'

const businessList = (props) => {

const emplist =["İsa Çapar", "Volkan Yalçın", "Hasan Mingir"]

    return (
        <div>
            <BusinessCard businessName={"Byce Erkek Kuaförü"} employees={emplist} star={4} commentCount={76}></BusinessCard>
        </div>
    )

}

export default businessList;