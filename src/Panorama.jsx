import { Pannellum } from "pannellum-react"
import panoImageSrc from './pano-images/IMG_0124.jpg'
import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';

function Panorama() { 

    /*  
    fetch({
        'url': "./hotspots.json",
        'dataType': "json",
        'success': function (data) {
            // Create pannellum.viewer
            createPannellumViewer(data);
        }
    });*/

    const [yaw, setYaw] = useState(0);
    const [pitch, setPitch] = useState(0);
    const [data, setData] = useState({ hotspots: [] });

    const panImage = useRef(null);

    const hotspotArray = props => {
        return (
            <React.Fragment>
                <Pannellum.Hotspot
                            type="info"
                            pitch={ -2.061414181110537}
                            yaw={ -60.27127993353921}
                            hfov={150}
                            text="Hotspot Info"
                            //URL="https://github.com/farminf"
                            />,
                        <Pannellum.Hotspot
                            type="info"
                            pitch={ 2.9041245428623563}
                            yaw={ 43.102330931646044}
                            hfov={150}
                            text="Hotspot Info"
                            //URL="https://github.com/farminf"
                        />,
                        <Pannellum.Hotspot
                            type="info"
                            pitch={ 2.0380524407578284}
                            yaw={ 51.77017113892216}
                            hfov={150}
                            text="Hotspot Info"
                            //URL="https://github.com/farminf"
                        />
            </React.Fragment>
        )
    }

    useEffect(() => {
        /*const fetchData = async () => {
          const result = await axios.get(
            './hotspots.json',
          );
     
          setData(result.data);
        };
     
        fetchData();
        axios.get('C:\\Users\\Lenovo\\pano-app\\src\\hotspots.json')
            .then((res)=>{
                console.log(res.data);
            }).catch((err)=>{
                console.log(err);
            })

        createPannellumViewer(data.hotspots); */
      }, []);

    return (
        <>
            
            <div className='coord-info'>
                <div> Pitch: {pitch} </div>
                <div> Yaw: {yaw} </div>
            </div>
            
            {console.log(hotspotArray)}
            {createPannellumViewer()}
            {/*
            <div className='panorama'>
                <Pannellum
                    ref={panImage}
                    id='pannellum'
                    width='100%'
                    height='500px'
                    image= {panoImageSrc}
                    pitch={5}
                    yaw={0}
                    hfov={200}
                    autoLoad
                    author='Lumoview Building Analytics GmbH'
                    showZoomCtrl={false}
                    hotspotDebug={false}
                    onLoad={() => {
                        console.log("panorama loaded");
                        console.log(panImage.current);
                    }}
                    onMouseup={(event)=> {addHotspot(event)}}

                    //onMousedown={(evt)=>{addHotspot(evt);}}
                    //onMousedown={(evt)=>{console.log("Mouse Down", evt);}}
                    //onMouseup={(evt)=>{console.log("Mouse Up", evt);}}                   
                >
                    <Pannellum.Hotspot
                        type="info"
                        pitch={ -2.061414181110537}
                        yaw={ -60.27127993353921}
                        hfov={150}
                        text="Hotspot Info"
                        //URL="https://github.com/farminf"
                    />
                    <Pannellum.Hotspot
                        type="info"
                        pitch={ 2.9041245428623563}
                        yaw={ 43.102330931646044}
                        hfov={150}
                        text="Hotspot Info"
                        //URL="https://github.com/farminf"
                    />
                    <Pannellum.Hotspot
                        type="info"
                        pitch={ 2.0380524407578284}
                        yaw={ 51.77017113892216}
                        hfov={150}
                        text="Hotspot Info"
                        //URL="https://github.com/farminf"
                    />
                </Pannellum>
                </div> */}
        </>
    );

    function getHotspotList() {

    }

    function createPannellumViewer() {
        /*
        // Create viewer
        viewer = pannellum.viewer('yourElementId', {
            ...
            //"hotSpotDebug": true, // Use to display pitch/yaw
            "hotSpots": hotspotList
        });*/
        return(
            <div className='panorama'>
                <Pannellum
                    ref={panImage}
                    id='pannellum'
                    width='100%'
                    height='500px'
                    image= {panoImageSrc}
                    pitch={5}
                    yaw={0}
                    hfov={200}
                    autoLoad
                    author='Lumoview Building Analytics GmbH'
                    showZoomCtrl={false}
                    hotspotDebug={false}
                    hotSpots= {
                        [
                            {
                                "type": "custom",
                                "pitch": -2.061414181110537,
                                "yaw": -60.27127993353921,
                                "hfov": 150,
                                "tooltip": hotspotDisplay1,
                                "tooltipArg": "My hotspot 1"
                            },
                            {
                                "type": "custom",
                                "pitch":  2.9041245428623563,
                                "yaw":  43.102330931646044,
                                "hfov": 150,
                                "tooltip":"hotspotDisplay1",
                                "tooltipArg": "My hotspot 2"
                            },
                            {
                                "type": "custom",
                                "pitch": 2.0380524407578284,
                                "yaw": 51.77017113892216,
                                "hfov": 150,
                                "tooltip": "hotspotDisplay1",
                                "tooltipArg": "My hotspot 1"
                            }                       
                        ]
                    }
                    onLoad={() => {
                        console.log("panorama loaded");
                        //console.log(panImage.current);
                    }}
                    onMouseup={(event)=> {showHotspotCoords(event)}}

                    //onMousedown={(evt)=>{addHotspot(evt);}}
                    //onMousedown={(evt)=>{console.log("Mouse Down", evt);}}
                    //onMouseup={(evt)=>{console.log("Mouse Up", evt);}}                   
                />
            </div>   

        )
    };


    // Hot spot display creation function without link
    function hotspotDisplay1(hotSpotDiv, args) {
        hotSpotDiv.classList.add('my-custom-tooltip1');
        var span = document.createElement('span');
        span.innerHTML = args;
        hotSpotDiv.appendChild(span);
    };

    function showHotspotCoords(e) {
        if(e.which === 3) {
            setPitch(panImage.current.getViewer().mouseEventToCoords(e)[0])
            setYaw(panImage.current.getViewer().mouseEventToCoords(e)[1])

            //console.log("Right mouse button was clicked and Hotspot is added at position:\n\n" +
            //"Pitch: " + panImage.current.getViewer().mouseEventToCoords(e)[0]+ "\nYaw: " + panImage.current.getViewer().mouseEventToCoords(e)[1])
        }
    };

}

export default Panorama