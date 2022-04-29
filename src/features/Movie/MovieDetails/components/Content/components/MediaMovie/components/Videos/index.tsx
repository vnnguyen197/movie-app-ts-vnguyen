import React, { useState } from "react";
import style from "./style.module.scss";
import { faCirclePlay, faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMG_URL_Youtube } from "constants/movie";

const Videos = (props:any) => {

  const data = props.data;
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(!openModal);
  }
  return (
    <div
      className={style.video_detail}
      style={{
        background: `
        url('${IMG_URL_Youtube + data?.key}/hqdefault.jpg')
         no-repeat
      `,
      }}
    >
      <FontAwesomeIcon className={style.icons} icon={faCirclePlay} onClick={() => { setOpenModal(true) }} size="lg" fixedWidth />
      {/* <ModalMovie key_id={data.key} show={openModal} handleSetModal={handleModal} /> */}
    </div>
  );
}

export default Videos;