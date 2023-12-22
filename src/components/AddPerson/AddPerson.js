import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddMerchant from './AddMerchant';
import ShopAssign from './ShopAssign';
import ListeDesAffectations from './ListeDesAffectations';
import { useState } from 'react';

function AddPerson(props) {
    const [btnstate, setBtnstate] = useState(false);

    return (
        <div className="main">
            <section
                style={{
                    display: 'flex',
                    gap: '0.5%',
                    position: 'relative',
                    alignItems: 'center',
                }}
            >
                <button
                    className="toggle"
                    onClick={() => {
                        setBtnstate(prevState => !prevState);
                    }}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{
                            color: btnstate ? '#497174' : '#eb6440',
                            fontSize: 'large',
                            transform: btnstate ? 'rotate(135deg)' : 'rotate(0deg)',
                            transition: 'transform 0.5s ease-out',
                        }}
                    />
                </button>
                {btnstate ? <AddMerchant /> : <ShopAssign />}
            </section>
            <ListeDesAffectations />
        </div>
    );
}

export default AddPerson;
