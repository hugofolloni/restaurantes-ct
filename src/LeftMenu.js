import logo from './assets/logo.png';

const LeftMenu = () => {
    return ( 
        <div className="left-menu">
            <a href="/"><img className='logo-image' src={logo} alt="" /></a>
            <div className='links'>
                <a href="/list">Restaurantes</a>
                <a href="/map">Mapa</a>
            </div>
            <div className="members">
                <h3>Membros</h3>
                <p>Thiago Nobre</p>
                <p>Clayton Portal</p>
                <p>Vitória Nazareth</p>
                <p>Paulo Yamagishi</p>
                <p>Lucas Silva</p>
            </div>
        </div>
     );
}
 
export default LeftMenu;