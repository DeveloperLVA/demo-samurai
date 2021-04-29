import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {withRouter, Route} from "react-router-dom";

import MyPostsContainer from "./components/Profile/MyPosts/MyPostsContainer"
import UsersContainer from "./components/User/UsersContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { withSuspense } from './hoc/withSuspense';


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized)
        {return  <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavBar/>
                <div className='app-wrapper-content'>

                    <Route path='/dialogs'
                           render= { withSuspense ( DialogsContainer ) } />
                            
                    <Route path='/profile/:userId?'   
                           render= { withSuspense ( ProfileContainer ) } />
                           
                    <Route path='/news'
                           render= { withSuspense ( DialogsContainer ) } />

                    <Route path='/music'
                           render= { withSuspense ( DialogsContainer ) } />

                    <Route path='/settings'
                           render={() => <MyPostsContainer/>}/>


                    <Route path='/users'
                           render={() => <UsersContainer/>}/>


                    <Route path='/login'
                           render={() => <LoginPage/>}/>


                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose (
    withRouter,
    connect (mapStateToProps, {initializeApp})) (App);

const    SamuraiJSApp = (props) => {
        
        //<React.StrictMode>
      return  <BrowserRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </BrowserRouter>
        // </React.StrictMode>,
    }

    export default SamuraiJSApp;