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
import VideoTab from './VideoTab';
import './Header.css';
import VideoPlayer from "react-background-video-player";
const videoTab = "./videos/WM5XUG_parking.mp4-2000_EQUBJE.mp4"

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
            <VideoTab />
            <TravelAnywhere />
            <VideoPlayer
                className="video"
                src={videoTab}
                autoPlay={true}
                muted={true}
            />
        </div>
    )
}

export default ModelS
