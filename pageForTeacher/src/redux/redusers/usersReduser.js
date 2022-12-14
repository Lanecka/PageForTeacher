// import { v4 as uuidv4 } from 'uuid';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

/**
 * Почемучка X>10 вопросов;
 * Цветик 5<X=<10 вопросов;
 * Знайка 0<Х=<5 вопросов;
 * Нeзнайка 0 вопросов 
 */
let initialState = {
  users: []
  //DELETED: 
  // users: [
  //   {
  //     id: 1,
  //     name: 'Ivan Durov',
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReat85zPN80s7pgNCtJkQcs4OguKiBudU-t4ywvz4-e54vxADlSt2uEYUWWNF9HjURkn0&usqp=CAU',
  //     followed: true,
  //     userClass: '9Б',
  //     status: 'Почемучка'
  //   },
  //   {
  //     id: 2,
  //     name: 'Людмила Матрешкина',
  //     img: 'http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1',
  //     followed: true,
  //     userClass: '8Г',
  //     status: 'Цветик'
  //   },
  //   {
  //     id: 3,
  //     name: 'Ксения Юсупова',
  //     img: 'https://bipbap.ru/wp-content/uploads/2020/11/83365328c62d52bc35b92e9e89fd59ff-640x640.jpg',
  //     followed: true,
  //     userClass: '11А',
  //     status: 'Знайка'
  //   },
  //   {
  //     id: 4,
  //     name: 'Максим Кошкин',
  //     img: 'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg',
  //     followed: false,
  //     userClass: 'Родитель',
  //     status: 'Незнайка'
  //   },
  //   {
  //     id: 5,
  //     name: 'Копирующий Нинзя',
  //     img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReat85zPN80s7pgNCtJkQcs4OguKiBudU-t4ywvz4-e54vxADlSt2uEYUWWNF9HjURkn0&usqp=CAU',
  //     followed: false,
  //     userClass: '5А',
  //     status: 'Незнайка'
  //   }
  // ]
};

const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      };
    case SET_USERS: 
      return {
          ...state, 
          users: [ ...state.users, ...action.users ] 
      }
    default:
      return state;
  }
}

/**
 * Подписчик
 */
export const followActionCreation = (userId) => ({ type: FOLLOW, userId });
/**
 * Не подписан
 */
export const unFollowActionCreation = (userId) => ({ type: UNFOLLOW, userId });
/**
 * Загрузить пользователей еще
 */
export const setUsersActionCreation = (users) => ({ type: SET_USERS, users });

export default usersReduser;