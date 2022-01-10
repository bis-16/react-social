
import React from "react";
import profileBG from "../../../tropical-paradise-1000x600.jpg"
import s from "../Profile.module.css";

function ProfileInfo() {
    return  <div className={s.profileBgBlock}>
            <img  src={profileBG} className={s.profileBg} alt="bg"/>
        </div>
        {/*<div>*/}
        {/*    profile-text*/}
        {/*</div>*/}
}

export default ProfileInfo;
