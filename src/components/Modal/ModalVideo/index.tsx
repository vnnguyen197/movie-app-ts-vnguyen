import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieAPI from 'services/MovieAPI';

const ModalVideo = ({ closeModal }:any) => {

    // const { id } = useParams();
    // const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //     const fetchVideos = async () => {
    //         try {
    //             const response = await movieAPI.getAllVideos(id);
    //             const finalTrailers = response.results.find((item) => item.name.includes("Official Trailer"))
    //             setVideos(finalTrailers.key);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchVideos();
    // }, [id]);

    return (
        <div className={style.modal}>
            <div className={style.modalBanner}>
                <div className={style.playTrailer}>
                    <div className={style.title}>
                        Play Trailer
                        <button onClick={() => closeModal(false)}> X </button>
                    </div>
                </div>
                <div className={style.trailerYoutube}>
                    {/* <iframe src={`https://www.youtube.com/embed/${videos}?autoplay=1&mute=0`}> </iframe> */}
                </div>
            </div>
        </div>
    )
}
export default ModalVideo;