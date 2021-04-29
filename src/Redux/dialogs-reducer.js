const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Valera'},
        {id: 5, name: 'Я'},
        {id: 6, name: 'ТЫ'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it ?'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Привет'},
        {id: 7, message: 'У меня ВРОДЕ получается ! :-)'}
    ]
};

const dialogsReducer = (state = initialState, action) => {


    //let stateCopy; 15.02.2021

    switch (action.type) {

        case SEND_MESSAGE:

            let body = action.newMessageBody;  //*от автора - "запишим это в body" */

            return  {
                ...state, // копируем обьект
                messages: [...state.messages, {id: 7, message: body}]  // создаём НОВЫЙ обьект массива
            };


        default:
            return state;
    }
}


export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})   //* от автора -  отправить сообщение *//


export default dialogsReducer;