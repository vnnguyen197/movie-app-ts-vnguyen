import { IMG_URL_Backdrops } from "constants/movie";
import style from "./style.module.scss"

const Backdrops = (props: any) => {
  const data = props.data;
  return (
    <div className={style.video_detail}>
      <img
        src={IMG_URL_Backdrops + data.file_path}
        alt="Backdrops"
      ></img>
    </div>
  );
}

export default Backdrops;