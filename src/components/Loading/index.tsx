import icons from 'assets/images/480px-Loader.gif';
import loading from './style.module.scss';

const Loading = () => {
  return (
    <div className={loading.content}>
      <img src={icons} alt="icons loading" style={{ width: '100px' }} />
    </div>
  )
}

export default Loading;