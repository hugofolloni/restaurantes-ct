import { useState, useEffect } from 'react';
import styled from 'styled-components';

const RestaurantInfos = [
    {
        name: 'anjinho',
        left: 420,
        top: 100,
        description: 'Restaurante Anjinho',
        menu: 'https://www.google.com'
    }
]

const UFRJMap = () => {

    const [latitude, setLatitude] = useState(-22.9035);
    const [longitude, setLongitude] = useState(-43.2096);

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });

    const [currentRestaurant, setCurrentRestaurant] = useState(null);

    const [showPopup, setShowPopup] = useState(false);

    const MapDiv = styled.div`
        width: 900px;
        height: 600px;
    `;

    const MapImage = styled.img`
        width: 100%;
        height: 100%;
        border-radius: 10px;
        position: relative;
    `;



    const handleMarkerClick = (restaurant) => {
        const choosenRestaurant = RestaurantInfos.filter((restaurantInfo) => restaurantInfo.name === restaurant)[0];
        setCurrentRestaurant(choosenRestaurant);
        console.log(choosenRestaurant);
        setShowPopup(true);
    }

    const MainDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
    `;

    const PopupDiv = styled.div`
        width: 700px;
        height: 500px;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: calc(50vh - 250px);
        margin-left: calc(50vw - 350px);
        display: flex;
        flex-direction: column;
    `
        
    const Background = styled.div`
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
    `

    const MapMarker = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        cursor: pointer;
        top: 100px;
        left: 650px;
        background-color: blue;
    `

    const AnjinhoMarker = styled(MapMarker)`
    `;


    return ( 
        <MainDiv>
            <MapDiv>
                <MapImage src={`https://www.mapquestapi.com/staticmap/v5/map?key=Ni2ADHDUCU3MFwVbERoz6VC0jiYwgpI2&center=-22.8605,-43.230&zoom=17&type=hyb&size=600,400@2x&locations=${latitude},${longitude}&defaultMarker=via-7B0099`} alt="" />
                <MapMarker onClick={() => handleMarkerClick('anjinho')} />
                { showPopup &&  <div>
                    <Background onClick={() => setShowPopup(false)} />
                                    <PopupDiv>
                                        <h1>{currentRestaurant.name}</h1>
                                        <p>{currentRestaurant.description}</p>
                                        <a href={currentRestaurant.menu}>Menu</a>
                                    </PopupDiv> 
                                </div>
                }
            </MapDiv>
        </MainDiv>
     );
}
 
export default UFRJMap;