import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,  //когда СЕРВАК даст ответ
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "ab462b32-f9f7-47d9-8063-d8d53a51fc31"
    }  // это ключь сгенерированный для меня (LVA) на сайте-сервере
});


export const usersAPI = {
    getUser(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)

            .then(response => {
                return response.data;   // - это цепочка ПРОМИСОВ (автор - тема сложная...)
            });
    },
    follow(userID) {
        return instance.post(`follow/${userID}`)  // это ключь сгенерированный для меня (LVA) на сайте-сервере

    },
    unfollow(userID) {
        return instance.delete(`follow/${userID}`)   // это ключь сгенерированный для меня (LVA) на сайте-сервере
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
         return  profileAPI.getProfile (userId);  //когда СЕРВАК даст ответ

    }
}



export const profileAPI = {
    getProfile(userId) {
        return  instance.get(`profile/` + userId);  //когда СЕРВАК даст ответ
    },
    getStatus(userId) {
        return  instance.get(`profile/status/` + userId);  //когда СЕРВАК даст ответ
    },
    updateStatus(status) {
        return  instance.put(`profile/status`, {status: status });  //когда СЕРВАК даст ответ
    }
}



export const authAPI = {
   me () {
       return instance.get(`auth/me` );  //когда СЕРВАК даст ответ
   },

   login (email, password, rememberMe=false) {
    return instance.post(`auth/login`, { email, password, rememberMe } ); //когда СЕРВАК даст ответ
},

logout () {
    return instance.delete (`auth/login` );  //когда СЕРВАК даст ответ
}

}



