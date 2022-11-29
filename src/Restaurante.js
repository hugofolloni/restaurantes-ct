import bd from './bd.json';

const Restaurante = () => {

    const restaurant = window.location.href.split('?r=')[1];
    const restaurantInfo = bd.restaurants.filter((restaurantInfo) => restaurantInfo.name === restaurant)[0];
    console.log(restaurantInfo, restaurant);

    return ( 
        <div className='main-div'>
            <div className="big-container">
                <div className='title-line'>
                    <div style={{ marginRight: '10px', marginTop: '-20px', width: '30px', height: '30px', backgroundColor: restaurantInfo.hex, borderRadius: '50%'}}/>
                    <h1>{restaurantInfo.name} </h1>
                </div>
                <h3>{restaurantInfo.faixa}</h3>
                <h4>{restaurantInfo.description}</h4>
                <div className="menu">
                    {restaurantInfo.menu.map((item) => {
                        return (
                            <div className="item">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                    )
                    }
                    )}                         
                </div>
            </div>
        </div>

     );
}
 
export default Restaurante;