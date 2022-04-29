import { IMG_URL_CardMovie } from "constants/movie";

const PosterList = (props: any) => {
  const data = props.data;
  return (
    <div className="video-detail">
      <img
        src={IMG_URL_CardMovie + data.file_path}
        alt="Backdrops"
      ></img>
    </div>
  );
}

export default PosterList;