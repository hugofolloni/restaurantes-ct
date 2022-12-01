import bd from './bd.json';

const Lista = () => {

    const restaurants = bd.restaurants;

    return ( 
        <div className='main-div'>
            <a className="voltar-div" href="/">Voltar</a>
            <div className='restaurants-list'>
                {restaurants.map((restaurant) => {
                    return (
                        <a className='item' href={`/restaurant?r=${restaurant.name}`}>
                            <div>
                            <div className='title-line'>
                                <div style={{ marginRight: '10px', marginTop: '-15px', width: '20px', height: '20px', backgroundColor: restaurant.hex, borderRadius: '50%'}}/>
                                <h3>{restaurant.name} </h3>
                            </div>
                            <p> ⋅ {restaurant.local}</p>
                            <p>{restaurant.description}</p>
                            <p>{restaurant.faixa}</p>
                            </div>
                        </a>
                    )}
                )}
            </div>
        </div>
     );
}
 
export default Lista;