import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {

    /*let someComponent = () => <Profile posts={props.appState.posts}/>*/

    /*let someComponentDialogs = () => <Dialogs dialogs={props.appState.dialogs} messages={props.appState.messages}/>*/

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>

                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>

                <Route path='/users'
                       render={() => <UsersContainer/>}/>

                <Route path='/login'
                       render={() => <LoginPage/>}/>

                <Route path='/settings' component={Settings}/>
            </div>
        </div>

    );
}

export default App;