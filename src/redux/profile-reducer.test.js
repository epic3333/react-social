import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";



test('reducer test new post added', () => {
    //1. test start data
    let action = addPostActionCreator('newPostText');
    let state = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'Im fine', likesCount: 30},
            {id: 3, message: 'blabla', likesCount: 20},
            {id: 4, message: 'dada', likesCount: 10}
        ]
    };
    //2. action
    let newState = profileReducer(state, action);

    //3. expectation
    expect (newState.posts.length).toBe(5);
});