import styles from './menuBar.module.scss';
import profile from '../../assets/profile1.jpg'
import { motion } from 'framer-motion';

const MenuBar = () => {
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
            <div className={ styles.logo }>ZYXMA</div>
            <div className={ styles.right }>
                <div className={ styles.project }>Project</div>
                <div className={ styles.profile }>
                    <div className={ styles.profileText }>Profile</div>
                    <div className={ styles.profileIMG }>
                        <img src={ profile } alt="profile" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
export default MenuBar;