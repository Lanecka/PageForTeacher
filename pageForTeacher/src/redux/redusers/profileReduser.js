import { v4 as uuidv4 } from 'uuid';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST_TEXT';

let initialState = {
  posts: [
    {
      id: 1,
      message: `День знаний — это первые звонки в школе и волнения, море цветов и белых бантов, и, конечно, традиционные уроки мира. Это самый долгожданный день для тех, кто впервые переступит школьный порог.   
        Этот праздник появился в советское время. Хотя до середины 1930-х годов в СССР точной даты начала учебного года не существовало. Согласно постановлению Совнаркома от 14 августа 1930 года, все дети в возрасте 8-10 лет, а также иных возрастов, которые до этого времени не обучались в школе, должны были быть приняты в школу осенью. Обязанность посылать в школу детей возлагалась на их родителей. Каждый ребенок был обязан отучиться не менее четырехлетнего курса начальной школы.`
    },
    {
      id: 2,
      message: `Ежегодно 5 октября свыше ста государств отмечают Всемирный день учителей (World Teachers' Day). Это профессиональный праздник всех учителей, преподавателей и работников сферы образования — день, в который отмечаются роль и заслуги учителей в процессе качественного образования на всех уровнях, а также их неоценимый вклад в развитие общества.`
    },
    {
      id: 3,
      message: `22.11.22!`
    }
  ],
  newPostText: 'Новая запись',
};

const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newPostText: '',
        posts: [
          ...state.posts,
          {
            id: uuidv4(),
            message: state.newPostText
          }
        ]
      }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPost
      }
    default:
      return state;
  }
}

//Action Creation:
export const addPost = () => ({ type: ADD_POST })
export const updateNewPost = (text) => ({ type: UPDATE_NEW_POST_TEXT, newPost: text })

export default profileReduser;