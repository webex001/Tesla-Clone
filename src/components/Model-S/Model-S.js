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
            <TravelAnywhere />
        </div>
    )
}

export default ModelS
