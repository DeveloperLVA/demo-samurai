import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 15},
                {id: 2, message: 'It\'s my first post', likesCount: 1},
                {id: 4, message: 'Yo', likesCount: 7},
                {id: 5, message: 'Yo---', likesCount: 3},
                {id: 6, message: 'Привет', likesCount: 11}
            ],

            newPostText: 'it-kamasutra.com'

        },
        dialogsPage: {
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
            ],

            newMessagesText: '',

            newMessageBody: ""
        },
        sidebar: {
            /*
                    friends: [
                        {name: 'Dimych'},
                        {name: 'Andrey'},
                        {name: 'Viktor'},
                        {name: 'Valera'},
                        {name: 'Я'},
                        {name: 'ТЫ'}
                    ],
                   friendsFoto :  [
                        { photo: require("./../img/woman.svg") },
                        { photo: require("./../img/girl.svg") },
                        { photo: require("./../img/girl.svg") }
                    ]*/
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {

        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer - патернт (наблюдатель) //
    },


    dispatch(action) {

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);

        this._callSubscriber(this._state);  // уведомили "подписчика"

    }
}


export default store;

window.store = store;

 