const UPDATE_NEW_MESSAGE_BOX = 'UPDATE-NEW-MESSAGE-BOX';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReduser = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText
      }
      state.messagesList.push(newMessage)
      state.newMessageText = ''
      return state;
    case UPDATE_NEW_MESSAGE_BOX:
      state.newMessageText = action.newMessage
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreation = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBoxActionCreation = (text) => ({
  type: UPDATE_NEW_MESSAGE_BOX,
  newMessage: text
})

export default dialogsReduser;