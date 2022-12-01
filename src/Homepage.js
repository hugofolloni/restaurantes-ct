import cooking from "./assets/cooking.svg"

const Homepage = () => {
    return ( 
        <div className="main-div">
            <div className="homepage">  
                <img className="cooking" src={cooking} alt="" />      
                <div className="container">
                    <h2>Para você descobrir onde irá comer hoje na UFRJ</h2>
                    <p>Dentre tantas opções de restaurantes no Centro de Tecnologia da UFRJ, é comum você se ver confuso em relação a onde comer. Com a nossa ajuda, você vai poder comparar e encontrar qual a melhor opção pro seu almoço, jantar ou lanche. Aquela que melhor que cabe no seu gosto e no seu apetite.</p>
                    <div className="buttons">
                        <a href="/list">Restaurantes</a>
                        <a href="/map">Mapa</a>
                    </div>
                </div>
            </div>
        </div> 
     );
}
 
export default Homepage;