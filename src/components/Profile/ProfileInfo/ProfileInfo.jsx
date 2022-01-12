
import React from "react";
import profileBG from "../../../tropical-paradise-1000x600.jpg"
import s from "../Profile.module.css";

function ProfileInfo(props) {

    if (!props.profile) { //null || undefined
        return <div>Preloader</div>
    }
    /* если профиля нет, возвращаем прелоадер
     * потом когда будет инициализирована перезагрузка, когда профиль придет, стэйт изменился, перезагрузка компоненты
     * опять попадаем сюда, но профиль уже будет и выполняется условие ниже
     */

    return (<>
            <div className={s.profileBgBlock}>
                <img  src={profileBG} className={s.profileBg} alt="bg"/>
            </div>
            <div>
                <img className={s.ava} src={props.profile.photos.large} />
            </div>
        </>
    )

}

export default ProfileInfo;
