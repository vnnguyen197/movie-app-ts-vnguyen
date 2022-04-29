import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus, faLock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useAppSelector } from 'app/hooks';

interface Movie{
    Movie: Object,
}

const ModalBanner = ( closeBanner:any , props: any) => {

    const Movie = useAppSelector((state) => state);
    const banner = Movie.movies.detail;
    return (
        <div className={style.ModalBanner} id={props.id}>
            <div className={style.ModalContent}>
                <div className={style.imgLeft}>
                    <img src={`https://www.themoviedb.org/t/p//w300_and_h450_bestv2${banner.poster_path}`}
                      alt={`banner-movie_${banner.id}`}
                    />
                </div>

                <div className={style.contentRight}>
                    <div className={style.exit} onClick={() => closeBanner(false)}> X </div>
                    <h3 className={style.info}>Info
                        <FontAwesomeIcon className={style.icons} icon={faLock} />

                    </h3>
                    <div className={style.form}>
                        <div className={style.primary}>
                            Primary? <FontAwesomeIcon className={style.icons} icon={faCircleXmark} />
                        </div>
                        <div style={{ fontSize: '13px' }}>
                            Added by
                        </div>
                        <div className={style.heli}>heli5m</div>
                        <div className={style.size}>
                            Size
                        </div>
                        <div className={style.sizeBottom}>2000x3000</div>
                        <div className={style.language}>Language</div>
                        <form className={style.option}>
                                <option value='english'>
                                    English
                                </option>
                        </form>
                    </div>

                    <div className={style.people}>
                        <h4 >Tagged People
                            <FontAwesomeIcon className={style.icons} icon={faPlus} />
                        </h4>
                        <h4 className={style.records}>No records have been added.</h4>
                    </div>
                    <div className={style.close}>
                        <FontAwesomeIcon className={style.icons} icon={faArrowRight} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalBanner;