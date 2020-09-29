import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div>
                <img src='https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg'></img>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatus status={'Hello'}/>
                <div>Обо мне: {props.profile.aboutMe}</div>
                <div>Мое имя: {props.profile.fullName}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;
