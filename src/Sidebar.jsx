import logo from './logo-lumoview-color-transparent.png'

function Sidebar() {

    const sidebar_header = (
        <div className="header-list">
            <h5>Anlagen</h5>
        </div>
    );
    const sidebar_content = (
        <div className='sidebar-nav'>
            <p><a href={'#'} className='menu-item'>LEVPOLY-L364-MA01</a></p>
            <p><a href={'#'} className='sub-menu-item'>AM001</a></p>
            <p><a href={'#'} className='sub-menu-item'>RO001</a></p>
            <p><a href={'#'} className='menu-item'>LEVPOLY-L364-SK00</a></p>
            <p><a href={'#'} className='menu-item'>LEVPOLY-L364-WA01</a></p>
            <p><a href={'#'} className='menu-item'>LEVPOLY-L364-XI00-XI100	</a></p>
        </div>
    );  

    const logoLumoview = (
        <img 
            alt="logo"
            src={logo}
            className="logo-lumoview"
        />
    )
    
    return(
        <div className='sidebar left'>
            {sidebar_header}
            {sidebar_content}
            {logoLumoview}
        </div>  
    )
} 

export default Sidebar