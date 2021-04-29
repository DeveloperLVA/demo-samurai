import { act } from "@testing-library/react";
import {usersAPI} from "../api/api";
import { updateObjectInArray } from './../utils/object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,  // сколько мы будем показывать Usrов на странице (в ФронтЭнде)
    totalUsersCount: 0,   // кол-во ВСЕГО страниц на сервере (в БекЭнде)
    currentPage: 1, // с какой страницы будет "показ"
    isFetching: true, // картинка загрузки
    followingInProgress: [],  // ДЕЗАКТИВАЦИЯ кнопки
    fake: 10
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray ( state.users, action.userId, "id", {followed: true}  )
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray ( state.users, action.userId, "id", {followed: false}  )
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)   // отфильтровываем в массиве не нужных людей
            }
        }

        default:
            return state;
    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId})

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})

export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})

export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})


export const requestUsers =(page, pageSize) => {   // САНКа - это Ф-ИЯ, которая принимает метод ДИСПАТЧ (с обччными Экшинами)
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));

        let data  = await   usersAPI.getUser(page, pageSize);
            dispatch(toggleIsFetching(false)); // диспатчим одячный action (toggleIsFetching)
            dispatch(setUsers(data.items)); // в ответ - от  сервера прийдет ВОТ ЭТОТ респонс ...
            dispatch(setUsersTotalCount(data.totalCount)); // в ответ - от  сервера прийдет ВОТ ЭТОТ респонс ...

    }
}


const followUnfollowFlow = async ( dispatch, userId, apiMethod, actionCreator ) => {
    dispatch (toggleFollowingProgress(true, userId));
    let response  = await   apiMethod(userId);   

            if (response.data.resultCode == 0) {
                dispatch (actionCreator(userId));
            }   // проверяем рузультат КОДА с СЕРВАКА

            dispatch (toggleFollowingProgress(false, userId));
}


export const follow =(userId) => {   // САНКа - это Ф-ИЯ, которая принимает метод ДИСПАТЧ (с обччными Экшинами)
    return async (dispatch) => {
        followUnfollowFlow (dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess );

    }
}


export const unfollow =(userId) => {   // САНКа - это Ф-ИЯ, которая принимает метод ДИСПАТЧ (с обччными Экшинами)
    return async (dispatch) => {
        followUnfollowFlow (dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess );

    }
}


export default usersReducer;