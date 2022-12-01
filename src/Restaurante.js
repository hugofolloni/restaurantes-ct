import bd from './bd.json';

const Restaurante = () => {

    const restaurant = window.location.href.split('?r=')[1].replace(/%20/g, ' ').replace(/%27/g, "'");
    const restaurantInfo = bd.restaurants.filter((restaurantInfo) => restaurantInfo.name === restaurant)[0];
    console.log(restaurantInfo, restaurant);

    restaurantInfo.menu.map((item) => {
        if(item.name.indexOf(':') !== -1 && item.price === "NaN"){
            item.bold = item.name
            item.name = ''
            item.price = ''
        }
        return item
    })


    console.log(restaurantInfo.menu);


    return ( 
        <div className='main-div'>
            <a className="voltar-div" href="/">Voltar</a>
            <div className="big-container">
                <div className='title-line'>
                    <div style={{ marginRight: '10px', marginTop: '-20px', width: '30px', height: '30px', backgroundColor: restaurantInfo.hex, borderRadius: '50%'}}/>
                    <h1>{restaurantInfo.name} </h1>
                </div>
                <h4>{restaurantInfo.local}</h4>
                <h3>{restaurantInfo.faixa}</h3>
                <h4>{restaurantInfo.description}</h4>
                    <div className="menu">
                    <h2>Cardápio</h2>
                        {restaurantInfo.menu.map((item) => {
                            return (
                                <div className="item">
                                    <h3><strong>{item.bold}</strong>{item.name}</h3>
                                    <p>{item.price}</p>
                                </div>
                            )}
                        )}                         
                    </div>
            </div>
        </div>
     );
}
 
export default Restaurante;