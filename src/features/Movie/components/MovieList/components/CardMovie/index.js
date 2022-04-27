import styles from './style.module.scss';
import dayjs from "dayjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import {
    Link,
    useHistory
} from "react-router-dom";
import { IMG_URL_CardMovie } from 'constants';

const CardMovie = ({ title, vote_average, release_date, poster_path, id}) => {

    const history = useHistory();
    const handleOnclick = (id) => {
        history.push(`/movie/${id}`)
    }

    return (
        <div className={styles.card_movie} onClick={() => handleOnclick(id)}>
            <div className={styles.card_movie_content}>
                <div className={styles.card_movie_img}>
                    <div className={styles.img}>
                        <Link to="/movie/:id" >
                            <img src={IMG_URL_CardMovie + poster_path} alt="img card movie" />
                        </Link>
                    </div>
                    <div className={styles.card_movie_percent}>
                        <div className={styles.percent}>{vote_average * 10}
                            <FontAwesomeIcon className={styles.icons} icon={faPercent} />
                        </div>
                    </div>
                    <div className={styles.card_movie_option}>
                        <div className={styles.option}>
                            <FontAwesomeIcon icon={faEllipsis} />
                        </div>
                    </div>
                </div>
                <div className={styles.card_movie_content}>
                    <div className={styles.items} >{title}</div>
                    <div className={styles.day}>{`${dayjs(`${release_date}`).format("MMM D, YYYY")}`}</div>
                </div>
            </div>
        </div>
    );
}

export default CardMovie;