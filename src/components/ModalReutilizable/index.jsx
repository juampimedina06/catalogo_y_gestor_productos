import { useEffect, useState } from 'react';
import "./ModalMensaje.css";

const ModalMensaje = ({ mensaje, visible, onClose }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (visible) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                setTimeout(onClose, 100);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <div className={`modal-overlay ${show ? 'show' : ''}`}>
            <div className={`modal-content ${show ? 'fade-in' : 'fade-out'}`}>
                <p>{mensaje}</p>
                <img className='okey' src="./img/okey.png" alt="" />
            </div>
        </div>
    );
};

export default ModalMensaje;