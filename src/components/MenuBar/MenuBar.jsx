import styles from './menuBar.module.scss';
import profile from '../../assets/profile1.jpg'
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const MenuBar = (props) => {

    const { header, btnLabel, to, smooth } = props;

    const handleClick = () => {
        window.location = '/profile';
    }

    return (
        <motion.div
            className={ styles.container }
            initial={{
                y: "-50%",
                opacity: "0%"
            }}
            animate={{
                y: "0%",
                opacity: "100%"
            }}
            transition={{
                duration: 1.5
            }}
        >
            <div className={ styles.logo }>{ header }</div>
            <div className={ styles.right }>
                <div className={ styles.btn }>
                    <Link to={ to } smooth={ smooth } duration={2500}>
                        { btnLabel }
                    </Link>
                </div>
                <div 
                    className={ styles.profile }
                    onClick={ handleClick }
                >
                    <div className={ styles.profileText }>
                        Profile
                    </div>
                    <div className={ styles.profileIMG }>
                        <img src={ profile } alt="profile" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
export default MenuBar;