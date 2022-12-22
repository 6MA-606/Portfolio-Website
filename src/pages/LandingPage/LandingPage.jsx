import styles from './landingPage.module.scss';
import { motion, transform, useScroll, useTransform } from 'framer-motion';
import MenuBar from '../../components/MenuBar/MenuBar';
import me from '../../assets/me.png';
import IconBtn from '../../components/IconBtn/IconBtn';
import graphic1 from '../../assets/left.svg'
import graphic2 from '../../assets/right.svg'
import Link from '../../components/Link/Link';
import Button from '../../components/Button/Button';

const LandingPage = () => {

    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div className={ styles.container }>
            <MenuBar />
            <div className={ styles.area_1 }>
                <motion.div
                    className={ styles.welcomeText }
                    transition={{ delay: 1 ,duration: 2 }}
                    style={{ scale, opacity }}
                >
                    <div className={ styles.header }>Welcome to<br />Sittha Manittayakul<br />Portfolio</div>
                    <div className={ styles.content }>
                        Hello everyone! this is my first portfolio website.<br />
                        Let's go! My information here!
                    </div>
                    <div className={ styles.contact }>
                        <IconBtn
                            to="https://github.com/6MA-606"
                            bg="#252525"
                            icon="Github"
                            color="#f8f8ff"
                            size="50"
                            box
                            hoverShadow="#f8f8ff"
                        />
                        <IconBtn
                            to="https://www.facebook.com/sittha.manittayakul"
                            bg="#f8f8ff"
                            icon="Facebook"
                            color="#0080ff"
                            size="50"
                            box
                            hoverShadow="#0080ff"
                        />
                        <IconBtn
                            to="https://www.instagram.com/sittha.m_/"
                            bg="linear-gradient(215deg, #ac25ed, #d82786, #fe6642, #febb58)"
                            icon="Instagram"
                            color="#f8f8ff"
                            size="50"
                            box
                            boxType="shrink"
                            shrink="0.7"
                            hoverShadow="#d82786"
                        />
                        <IconBtn
                            to="https://www.linkedin.com/in/sittha-manittayakul-76639125b/"
                            bg="#0a66c2"
                            icon="Linkedin"
                            color="#f8f8ff"
                            size="50"
                            box
                            boxType="shrink"
                            shrink="0.6"
                            hoverShadow="#0a66c2"
                        />
                    </div>
                </motion.div>
                <motion.div
                    className={ styles.myIMG }
                    // initial={{ x: "20%", opacity: "0%" }}
                    // animate={{ x: "0%", opacity: "100%" }}
                    transition={{ delay: 1, duration: 2 }}
                    style={{ scale, opacity }}
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
            <motion.div
                className={ styles.area_2 }
                style={{
                    opacity: useTransform(scrollYProgress, [0, .33, .66, 1], [0, 1, 1, 0])
                }}
            >
                <div className={ styles.left }>
                    <motion.img
                        src={ graphic1 }
                        alt="graphic1"
                        initial={{ y: "20%" }}
                        animate={{ y: "25%", originX: 0, originY: 1 }}
                        transition={{ duration: 2.75, repeat: Infinity, repeatType: "mirror"}}
                        style={{
                            rotate: useTransform(scrollYProgress, [0, .33], ["-15deg", "0deg"]),
                            origin: "left"
                        }}
                    />
                    <motion.img
                        src={ graphic2 }
                        alt="graphic2"
                        initial={{ y: "-20%", x: "35%" }}
                        animate={{ y: "-25%", x: "35%", originX: 1, originY: 1  }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "mirror"}}
                        style={{
                            rotate: useTransform(scrollYProgress, [0, .33], ["15deg", "0deg"]),
                            origin: "right"
                        }}
                    />
                </div>
                <div className={ styles.right }>
                <motion.div
                    transition={{ delay: 1 ,duration: 2 }}
                    style={{
                        x: useTransform(scrollYProgress, [0, .33], ["20%", "0%"]),
                    }}
                >
                    <div className={ styles.header }>This Portfolio<br />Created By Using</div>
                    <div className={ styles.content }>
                        <Link href="https://reactjs.org" color="#35d7ec">React</Link>,&nbsp;
                        <Link href="https://vitejs.dev" color="#fff570">Vite</Link>,&nbsp;
                        <Link href="https://sass-lang.com" color="#fa71ff">Sass</Link>&nbsp;and&nbsp;
                        <Link href="https://www.framer.com/motion/" color="#cf7ffd">Framer Motion</Link>
                    </div>
                    <div className={ styles.repo }>
                        <Button
                            icon="Github"
                            bg="#252525"
                            hoverShadow="#fff"
                            to="https://github.com/6MA-606/Portfolio-Website"
                        >
                            This Project<br />Repository
                        </Button>
                    </div>
                </motion.div>
                </div>
            </motion.div>
        </div>
    );
}

export default LandingPage;