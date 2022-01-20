import React from 'react'
import Header from './Header';
import FirstInterior from './FirstInterior';
import FullModelImage from './FullModelImage';
import ModelTextNotes from './ModelTextNotes';
import ModelExteriorImage from './ModelExteriorImage';
import EfficiencyDetails from './EfficiencyDetails';
import TravelAnywhere from './TravelAnywhere';
import FirstModelGrid from './FirstModelGrid';
import DetailSlider from './DetailSlider';
import SecondModelGrid from './SecondModelGrid';

const ModelS = () => {
    return (
        <div>
            <Header />
            <FirstInterior />
            <FirstModelGrid />
            <FullModelImage />
            <ModelTextNotes />
            <DetailSlider />
            <ModelExteriorImage />
            <EfficiencyDetails />
            <SecondModelGrid />
            <TravelAnywhere />
        </div>
    )
}

export default ModelS
