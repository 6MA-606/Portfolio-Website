import styles from './profile.module.scss';
import my_pic from '../../assets/me_profile.jpg';

const Profile = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.myPic }>
                <img src={ my_pic } alt="my_pic" />
            </div>
        </div>
    );
}
export default Profile;