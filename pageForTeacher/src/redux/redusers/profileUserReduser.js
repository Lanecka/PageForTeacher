import { v4 as uuidv4 } from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST_TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  posts: [
    {
      id: 1,
      message: `Практический опыт показывает, что консультация с профессионалами из IT способствует повышению актуальности форм воздействия. Равным образом консультация с профессионалами из IT создаёт предпосылки качественно новых шагов для дальнейших направлений развития проекта. Соображения высшего порядка, а также повышение уровня гражданского сознания обеспечивает актуальность новых предложений.`
    },
    {
      id: 2,
      message: `учимся брать данные с сервака`
    },
    {
      id: 3,
      message: `Бла-бла, не путайся в редбюсерах!`
    }
  ],
  newPostUserText: 'Напиши пользователю',
  profile: null
};

const profileUserReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostUserText: '',
        posts: [
          ...state.posts,
          {
            id: uuidv4(),
            message: state.newPostUserText
          }
        ]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostUserText: action.newPost
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state;
  }
}

//Action Creation:
export const addUserPost = () => ({ type: ADD_POST })
export const updateNewUserPost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPost: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileUserReduser;