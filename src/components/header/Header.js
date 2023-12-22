import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

function Header(props){

    return(
        <div className="Header">
            <h1 className="title">Taxation Dashboard</h1>
            <section className='notifUser'>
                <FontAwesomeIcon className='iBell' icon={faBell} />
                <div className='user'>
                    <FontAwesomeIcon className='userIcon' icon={faUserCircle} />
                    <p className='userName'>User</p>
                </div>
            </section>
        </div>
    );
}

export default Header;