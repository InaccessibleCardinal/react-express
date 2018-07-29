import * as C from './constants';
const initialState = {
    users: [],
    posts: [],
    comments: [],
    albums: [],
    todos: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case C.GOT_USERS: {
            return {...state, users: action.payload};
        }
        case C.GOT_POSTS: {
            return {...state, posts: action.payload};
        }
        case C.GOT_COMMENTS: {
            return {...state, comments: action.payload};
        }
        case C.GOT_ALBUMS: {
            return {...state, albums: action.payload};
        }
        case C.GOT_TODOS: {
            return {...state, todos: action.payload};
        }
        case 'TRY_ME': {
            return {...state, trying: true};
            //return Object.assign({}, state, {trying: true});
        }
        default: {
            return state;
        }
    }
}