import { useState, useEffect } from 'react';
import styled from 'styled-components';
import bd from './bd.json';

const UFRJMap = () => {

    const [latitude, setLatitude] = useState(-22.9035);
    const [longitude, setLongitude] = useState(-43.2096);

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });

    const [currentRestaurant, setCurrentRestaurant] = useState(null);

    const [showPopup, setShowPopup] = useState(false);

    console.log(bd)

    const MapDiv = styled.div`
        width: 900px;
        height: 600px;
        position: relative;
    `;

    const MapImage = styled.img`
        width: 900px;
        height: 600px;
        border-radius: 10px;
    `;



    const handleMarkerClick = (restaurant) => {
        const choosenRestaurant = bd.restaurants.filter((restaurantInfo) => restaurantInfo.name === restaurant)[0];
        setCurrentRestaurant(choosenRestaurant);
        console.log(choosenRestaurant);
        setShowPopup(true);
    }

    const MainDiv = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 80vw;
        height: 100vh;
        background-color: #eaeaea;
    `;

    const PopupDiv = styled.div`
        width: 700px;
        height: 300px;
        background-color: white;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: calc(50vh - 150px);
        margin-left: calc(25vw - 350px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 20px;
    `
        
    const Background = styled.div`
        width: 150vw;
        height: 150vh;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        top: 0;
        left: 0;
        margin-left: -50vw;
        margin-top: -5vh;
    `

    const MapMarker = styled.div`
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: absolute;
        cursor: pointer;
        top: 100px;
        left: 420px;
        background-color: blue;
        border: 1px solid white;
    `

    
    const MenuButton = styled.div`
        width: 100px;
        height: 50px;
        background-color: #3D348B;
        border-radius: 10px;
        display: flex;
        align-items: center;
        color: #eaeaea;
        justify-content: center;
        cursor: pointer;
        margin-top: 20px;
        transition: 0.3s ease all;
        
        &:hover {
            background-color: #2c256b;
        }

    `


    return ( 
        <MainDiv>
            <MapDiv>
                <MapImage src={`https://www.mapquestapi.com/staticmap/v5/map?key=Ni2ADHDUCU3MFwVbERoz6VC0jiYwgpI2&center=-22.8605,-43.230&zoom=17&type=hyb&size=600,400@2x&locations=${latitude},${longitude}&defaultMarker=via-7B0099`} alt="" />
                {
                    bd.restaurants.map((restaurant) => {
                        return (
                            <MapMarker onClick={() => handleMarkerClick(restaurant.name)} style={{top: restaurant.top, left: restaurant.left, backgroundColor: restaurant.hex}}></MapMarker>
                        )
                    })
                }
                { showPopup && <div>
                    <Background onClick={() => setShowPopup(false)} />
                                    <PopupDiv>
                                        <h1>{currentRestaurant.name}</h1>
                                        <p>{currentRestaurant.description}</p>
                                        <MenuButton onClick={() => window.open(`/restaurant?r=${currentRestaurant.name}`, "_blank")}>Menu</MenuButton>
                                    </PopupDiv> 
                                </div>
                }
            </MapDiv>
        </MainDiv>
     );
}
 
export default UFRJMap;