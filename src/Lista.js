import bd from './bd.json';
import { useState } from 'react';

const Lista = () => {

    const [restaurants, setRestaurants] = useState(bd.restaurants);

    return ( 
        <div className='main-div'>
            <div className='restaurants-list'>
                {restaurants.map((restaurant) => {
                    return (
                        <a className='item' href={`/restaurant?r=${restaurant.name}`}>
                            <div>
                            <div className='title-line'>
                                <div style={{ marginRight: '10px', marginTop: '-15px', width: '20px', height: '20px', backgroundColor: restaurant.hex, borderRadius: '50%'}}/>
                                <h3>{restaurant.name} </h3>
                            </div>
                                <p>{restaurant.description}</p>
                                <p>{restaurant.faixa}</p>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Lista;