import { NavLink } from 'react-router-dom';
import style from '../DialogsPage.module.css';

const StudentChoose = ({ name, id, img }) => {
  return (
    <div className={style.student}>
      <NavLink to={'/dialogs/' + id} className={navData => navData.isActive ? style.active : style.student}>
        <img src={img} alt="icon"></img>
        <h4>{name}</h4>
      </NavLink>
    </div>
  )
}

export default StudentChoose;