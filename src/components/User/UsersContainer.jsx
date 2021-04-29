import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, requestUsers,

} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import { compose } from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../Redux/users-selectors";



class UsersContainer extends React.Component {
    componentDidMount() {   // АЯКС запрос !
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);

    }


    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props ;
        this.props.getUsers(pageNumber, pageSize);
          }


    render() {   // props` сюда (в скобки) НЕ ПРИХОДЯТ  - возвращяет .jsx

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                 //  toggleFollowingProgress = {this.props.toggleFollowingProgress}
                   followingInProgress = {this.props.followingInProgress}
            />
        </>
    }
}


let mapStateToProps = (state) => {  // ф-ия, которая принимает ВЕСЬ СТЕЙТ ЦЕЛИКОМ (ГЛОБАЛЬНЫЙ - ВСЕГО ПРИЛОЖЕНИЯ) ! //
    // и возвращает обьект только с ТЕМИ данными, которые НАМ из СТЕЙТА НУЖНЫ //

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

//  let withRedirect =  withAuthRedirect(UsersContainer);   // HOC c Redirectom


export default compose (
    connect (mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers,
    })
) 
(UsersContainer );