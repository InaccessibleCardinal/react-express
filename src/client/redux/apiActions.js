
function makeRequestAction(url, type, dispatch) {
    dispatch({type: 'GET_' + type});
    let req = new XMLHttpRequest();
    req.open('GET', url, true);
    let _this = this;
    req.onreadystatechange = function() {
        try {
            if (this.status === 200 && this.readyState === 4) {
                let data = JSON.parse(this.responseText);
                dispatch({
                    type: 'GOT_' + type,
                    payload: data
                });
                console.log(data);
            }
        } catch(e) {
            //dispatch some sort of failure
        }
        
    }
    req.setRequestHeader('Content-Type', 'application/json');
    req.send();  
}


export function getUsers() {
    return (dispatch) => {
        makeRequestAction('http://localhost:8000/users/', 'USERS', dispatch);
    }  
}
export function getPosts() {
    return (dispatch) => {
        makeRequestAction('http://localhost:8000/posts/', 'POSTS', dispatch);
    }
}
export function getComments() {
    return (dispatch) => {
        makeRequestAction('http://localhost:8000/comments/', 'COMMENTS', dispatch);
    }
}
export function getAlbums() {
    return (dispatch) => {
        makeRequestAction('http://localhost:8000/albums/', 'ALBUMS', dispatch);
    }
}
export function getTodos() {
    return (dispatch) => {
        makeRequestAction('http://localhost:8000/todos/', 'TODOS', dispatch);
    }
}
export function tryMe() {
    return {type: 'TRY_ME'};
}