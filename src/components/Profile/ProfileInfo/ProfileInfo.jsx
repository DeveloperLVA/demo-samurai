import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {

	if (!profile) {
		return <Preloader/>
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large} />

				<ProfileStatusWithHooks  status={status} updateStatus={updateStatus} />

				<div className="LVA_user">
					<img className="LVA_logo_soc" src='https://pngimg.com/uploads/vkontakte/vkontakte_PNG32.png'/>
					<div className="LVA_user_data"><span> <a
						href='{profile.contacts.vk}'> {profile.contacts.vk}</a> </span></div>
				</div>

				<div className="LVA_user">
					<img className="LVA_logo_soc"
						 src='https://png.pngtree.com/png-clipart/20190613/original/pngtree-twitter-icon-png-image_3584901.jpg'/>
					<div className="LVA_user_data"><span> <a
						href='{profile.contacts.tvitter}'> {profile.contacts.twitter}</a> </span></div>
				</div>

				<div className="LVA_user">
					<img className="LVA_logo_soc" src='http://pngimg.com/uploads/youtube/youtube_PNG23.png'/>
					<div className="LVA_user_data"><span> <a
						href='{profile.contacts.youtube}'> {profile.contacts.youtube}</a> </span></div>
				</div>

				<div className="LVA_user">
					<img className="LVA_logo_soc"
						 src='https://img1.freepng.ru/20180730/vgo/kisspng-logo-clip-art-icone-instagram-facebook-5b5ed348052465.2794363915329411280211.jpg'/>
					<div className="LVA_user_data"><span> <a
						href='{profile.contacts.instagram}'> {profile.contacts.instagram}</a> </span></div>
				</div>

				<div className="LVA_user">
					<div className="LVA_user_data"> <span> <a target="_blank"
						 href="https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies">Пробная СЫЛКА от ФАНАРЯ</a>
						</span></div>
				</div>


			</div>

		</div>
	)
}

export default ProfileInfo;


