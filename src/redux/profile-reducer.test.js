import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'Im fine', likesCount: 30},
        {id: 3, message: 'blabla', likesCount: 20},
        {id: 4, message: 'dada', likesCount: 10}
    ]
};

test('reducer test new post added', () => {
    //1. test start data
    let action = addPostActionCreator('newPostText');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.posts.length).toBe(5);
});

test('message should be correct', () => {
    //1. test start data
    let action = addPostActionCreator('newPostText');

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.posts[4].message).toBe('newPostText');
});

test('after deleting length of messagess should be decrement', () => {
    //1. test start data
    let action = deletePost(1);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.posts.length).toBe(3);
});

test(`after deleting shouldn't be decrement if id is incorrect`, () => {
    //1. test start data
    let action = deletePost(1000);

    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.posts.length).toBe(4);
});