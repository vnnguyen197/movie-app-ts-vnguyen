import { useState } from 'react';
import style from './style.module.scss';

type Props = {
    key_id: any,
    show: any,
    handleSetModal: string,
}

const ModalMovie: React.FC<Props> = ({key_id, show, handleSetModal}) => {
    const [openModal, setOpenModal] = useState(false);
    const handleModal = () => {
      setOpenModal(!openModal);
    }
    return (
        show && (
            <div className={style.modal} >
            <div className={style.modalBanner}>
                <div className={style.playTrailer}>
                    <div className={style.title}>
                        Play Trailer
                        <button onClick={handleModal} > X </button>
                    </div>
                </div>
                <div className={style.trailerYoutube}>
                    <iframe src={`https://www.youtube.com/embed/${key_id}?autoplay=1&mute=1`}> </iframe>
                </div>
            </div>
        </div>
        )
    )
}

export default ModalMovie;
