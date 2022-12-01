import dialogsReduser from "./redusers/dialogsReduser"
import profileReduser from "./redusers/profileReduser"

let store = {
  _state: {
    dialogsPage: {
      messagesList: [
        {
          id: 1,
          message: 'Какой газ является самым легким?'
        },
        {
          id: 2,
          message: 'Какая формула у негашеной извести?'
        },
        {
          id: 3,
          message: 'Почему срез яблока постепенно начинает желтеть?'
        },
        {
          id: 4,
          message: 'Какие вещества нужно смешать, что бы получился порох?'
        },
        {
          id: 5,
          message: 'Как называется неделимая частица?'
        }
      ],
      newMessageText: '',
      studentsList: [
        {
          id: 1,
          name: 'Ivan Durov',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReat85zPN80s7pgNCtJkQcs4OguKiBudU-t4ywvz4-e54vxADlSt2uEYUWWNF9HjURkn0&usqp=CAU'
        },
        {
          id: 2,
          name: 'Людмила Матрешкина',
          img: 'http://sun9-3.userapi.com/s/v1/if1/y72Ov_XZPLyuIeAQsCKjkYj31CV4h3ULfIBf755hFxDLRpqvvyxv0Rcs-RDqK0dOBufGqVX5.jpg?size=200x235&quality=96&crop=0,0,500,588&ava=1'
        },
        {
          id: 3,
          name: 'Ксения Юсупова',
          img: 'https://bipbap.ru/wp-content/uploads/2020/11/83365328c62d52bc35b92e9e89fd59ff-640x640.jpg'
        },
        {
          id: 4,
          name: 'Максим Кошкин',
          img: 'https://klike.net/uploads/posts/2019-06/1560329641_2.jpg'
        },
        {
          id: 5,
          name: 'Копирующий Нинзя',
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReat85zPN80s7pgNCtJkQcs4OguKiBudU-t4ywvz4-e54vxADlSt2uEYUWWNF9HjURkn0&usqp=CAU'
        }
      ]
    },
    profilePage: {
      posts: [
        {
          id: 1,
          message: `22.11.22!`
        },
        {
          id: 2,
          message: `Ежегодно 5 октября свыше ста государств отмечают Всемирный день учителей (World Teachers' Day). Это профессиональный праздник всех учителей, преподавателей и работников сферы образования — день, в который отмечаются роль и заслуги учителей в процессе качественного образования на всех уровнях, а также их неоценимый вклад в развитие общества.`
        },
        {
          id: 3,
          message: `День знаний — это первые звонки в школе и волнения, море цветов и белых бантов, и, конечно, традиционные уроки мира. Это самый долгожданный день для тех, кто впервые переступит школьный порог.   
          Этот праздник появился в советское время. Хотя до середины 1930-х годов в СССР точной даты начала учебного года не существовало. Согласно постановлению Совнаркома от 14 августа 1930 года, все дети в возрасте 8-10 лет, а также иных возрастов, которые до этого времени не обучались в школе, должны были быть приняты в школу осенью. Обязанность посылать в школу детей возлагалась на их родителей. Каждый ребенок был обязан отучиться не менее четырехлетнего курса начальной школы.`
        }
      ],
      newPostText: 'Новая запись'
    }
  },
  _callSubsriber() {
    console.log('state changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubsriber = observer //паттерн наблюдатель
  },

  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action);

    this._callSubsriber(this._state)
  }
}

export default store;