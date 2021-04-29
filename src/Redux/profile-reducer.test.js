import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 1},
        {id: 3, message: 'Yo', likesCount: 7},
        {id: 4, message: 'Yo---', likesCount: 3},
        {id: 5, message: 'Привет', likesCount: 11}
    ]
};

it('message of new post should be correct', () => {
    // 1 - готовим исходные данные - test date
    let action = addPostActionCreator("it-kamasutra.com");


// 2 - action
    let newState = profileReducer (state, action );

    // 3- проверяем свои ожидания - expectation
    expect(newState.posts.length).toBe (6);

});

it('length of posts should be incremented', () => {
    // 1 - готовим исходные данные - test date
    let action = addPostActionCreator("it-kamasutra.com");


// 2 - action
    let newState = profileReducer (state, action );

    // 3- проверяем свои ожидания - expectation
      expect(newState.posts[5].message).toBe ("it-kamasutra.com");
});


it('after deleting length of messages should be decrement', () => {
    // 1 - готовим исходные данные - test date
    let action = deletePost(1);


// 2 - action
    let newState = profileReducer (state, action );

    // 3- проверяем свои ожидания - expectation
     expect(newState.posts.length).toBe (4);
});


it(`after deleting length shouldn't be decrement if id is incorrect `, () => {
    // 1 - готовим исходные данные - test date
    let action = deletePost(1000);


// 2 - action
    let newState = profileReducer (state, action );

    // 3- проверяем свои ожидания - expectation
     expect(newState.posts.length).toBe (5);
});


