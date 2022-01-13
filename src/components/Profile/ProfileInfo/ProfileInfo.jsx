
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

    /*
    {
  "aboutMe": "СЏ РєСЂСѓС‚Рѕ С‡СѓРІР°Рє 1001%",
  "contacts": {
    "facebook": "facebook.com",
    "website": null,
    "vk": "vk.com/dimych",
    "twitter": "https://twitter.com/@sdf",
    "instagram": "instagra.com/sds",
    "youtube": null,
    "github": "github.com",
    "mainLink": null
  },
  "lookingForAJob": true,
  "lookingForAJobDescription": "РЅРµ РёС‰Сѓ, Р° РґСѓСЂР°С‡СѓСЃСЊ",
  "fullName": "samurai dimych",
  "userId": 2,
  "photos": {
    "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
  }
}
     */
    return (<>
            <div className={s.profileBgBlock}>
                <img  src={profileBG} className={s.profileBg} alt="bg"/>
            </div>
            <div>{props.profile.fullName} </div>
            <div>
                <div>{props.profile.aboutMe} </div>
                <img className={s.ava} src={props.profile.photos.large} />
            </div>
            <div>
                <div>{props.profile.contacts.facebook} </div>
                <div>{props.profile.contacts.instagram} </div>
                <div>{props.profile.contacts.vk} </div>
                <div>{props.profile.contacts.github} </div>
            </div>
        </>
    )

}

export default ProfileInfo;
