import panoImageSrc from './pano-images/IMG_0124.jpg'
import React, { useRef, useState, useEffect } from "react"
import pannellum from "pannellum"

function Pannellum() {

    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [hotspotData, setHotspotData] = useState([]);
    const panImage = useRef(null);

    const hotspotArray = [
        {
            "type": "info",
            "pitch": -2.061414181110537,
            "yaw": -60.27127993353921,
            "hfov": 150,
            //"tooltip": hotspotDisplay1,
            //"tooltipArg": "My hotspot 1"
        },
        {
            "type": "info",
            "pitch":  2.9041245428623563,
            "yaw":  43.102330931646044,
            "hfov": 150,
            //"tooltip":"hotspotDisplay1",
            //"tooltipArg": "My hotspot 2"
        },
        {
            "type": "info",
            "pitch": 2.0380524407578284,
            "yaw": 51.77017113892216,
            "hfov": 150,
            //"tooltip": "hotspotDisplay1",
            //"tooltipArg": "My hotspot 1"
        }      
    ]

    setHotspotData(prevData => [...prevData, hotspotArray])
    console.log(hotspotData)


    window.pannellum.viewer('panorama', {
        "type": "equirectangular",
        "panorama": panoImageSrc, 
        //"hotSpots": hotspotData
    })

    return(
        <div id='panorama'></div>
    )

}

export default Pannellum