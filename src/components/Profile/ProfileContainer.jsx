import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { getStatus } from './../../Redux/profile-reducer';
import {getUserProfile} from "../../Redux/profile-reducer";
import { updateStatus } from './../../Redux/profile-reducer';
import {withRouter} from "react-router-dom";
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId)  {
            userId = this.props.authorizedUserId;  //  мой IP - LVA
        if (!userId) {
            this.props.history.push("/login");  // это РЕДИРЕКТ на страницу ЛОГИН
        }
        }


        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        
        

    }  // ...componentDidMount() {}  - один из методов "жизненного цыкла" - он отвечает за КОМПОНЕНТУ - здесь делаются ВСЕ СайдЭффекты

    render() {
       // console.log("RENDER PROFILE");
        return (
            <Profile {...this.props}
            profile={this.props.profile}
            status={this.props.status} 
            updateStatus={this.props.updateStatus} />
        )
    }
}


let mapStateToProps = (state) => {
    console.log('mapStateToProps PROFILE')
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth  // узнаём - авторизованы мы или нет.
    });  // возвращает обьект поэтому стоит "обертывание" в ()
}

export default compose (
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus} ),
    withRouter,
    //withAuthRedirect
    )(ProfileContainer);

