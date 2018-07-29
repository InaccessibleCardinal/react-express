import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    getUsers as getUsersAction,
    getPosts as getPostsAction,
    getComments as getCommentsAction,
    getAlbums as getAlbumsAction,
    getTodos as getTodosAction, 
    tryMe as tryMeAction
} from './redux/apiActions';

class App extends Component {
    constructor(props) {
        super(props);
        this.testService = this.testService.bind(this);
        this.testGraphQL = this.testGraphQL.bind(this);
    }

    testService(serviceType) {
        this.props[serviceType]();  
    }
    testGraphQL() {
        let url = 'http://localhost:8000/graphql?query=%7Bmessage%7D';
        fetch(url).then(d => d.json()).then(m => console.log('Groundbreaking stuff: ',m.data));
    }
    render() {
        let _this = this;
        return (
            <div>
                <div>
                    <button onClick={function() {_this.testService('getUsers')}}>
                        Call for users
                    </button>
                    {this.props.users.length > 0 && <ShowResults name={'Users'} data={this.props.users}/>}
                </div>
                <div>
                    <button onClick={function() {_this.testService('getPosts')}}>
                        Call for posts
                    </button>
                    {this.props.posts.length > 0 && <ShowResults name={'Posts'} data={this.props.posts}/>}
                </div>
                <div>
                    <button onClick={function() {_this.testService('getComments')}}>
                        Call for comments
                    </button>
                    {this.props.comments.length > 0 && <ShowResults name={'Comments'} data={this.props.comments}/>}
                </div>
                <div>
                    <button onClick={function() {_this.testService('getAlbums')}}>
                        Call for albums
                    </button>
                    {this.props.albums.length > 0 && <ShowResults name={'Albums'} data={this.props.albums}/>}
                </div>
                <div>
                    <button onClick={function() {_this.testService('getTodos')}}>
                        Call for todos
                    </button>
                    {this.props.todos.length > 0 && <ShowResults name={'Todos'} data={this.props.todos}/>}
                </div>
                <div>
                    <button onClick={this.testGraphQL}>GRAPHQL?</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
        posts: state.posts,
        comments: state.comments,
        albums: state.albums,
        todos: state.todos,
        trying: state.trying
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getUsers: getUsersAction,
        getPosts: getPostsAction,
        getComments: getCommentsAction,
        getAlbums: getAlbumsAction,
        getTodos: getTodosAction,
        tryMe: tryMeAction
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

function ShowResults({data, name}) {
    return (
        <div>
            <span>{name} from service: </span>
            <span>{data.length}</span>
        </div>
    );
}