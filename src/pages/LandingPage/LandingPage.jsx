import styles from './landingPage.module.scss';
import { motion } from 'framer-motion';
import MenuBar from '../../components/MenuBar/MenuBar';
import me from '../../assets/me.png';

const LandingPage = () => {
    return (
        <div className={ styles.container }>
            <MenuBar />
            <div className={ styles.area_1 }>
                <motion.div
                    className={ styles.welcomeText }
                    initial={{ x: "-20%", opacity: "0%" }}
                    animate={{ x: "0%", opacity: "100%" }}
                    transition={{ delay: 1 ,duration: 2 }}
                >
                    <div className={ styles.header }>Welcome to<br />Sittha Manittayakul<br />Portfolio</div>
                    <div className={ styles.content }>
                        Hello everyone! this is my first portfolio website.<br />
                        Let's go! My information here!
                    </div>
                </motion.div>
                <motion.div
                    className={ styles.myIMG }
                    initial={{ x: "20%", opacity: "0%" }}
                    animate={{ x: "0%", opacity: "100%" }}
                    transition={{ delay: 1 ,duration: 2 }}
                >
                    <motion.div
                        className={ styles.image }
                        initial={{ y: "-2%" }}
                        animate={{ y: "2%" }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                    >
                        <img src={ me } alt="me" />
                    </motion.div>
                    <motion.div
                        className={ styles.backCircle }
                        initial={{ rotate: "0deg", x: "30%", y: "30%"}}
                        animate={{ rotate: "360deg" }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    ></motion.div>
                </motion.div>
            </div>
            <div className={ styles.area_2 }></div>
        </div>
    );
}

export default LandingPage;