import styles from './landingPage.module.scss';
import { motion, transform, useScroll, useTransform } from 'framer-motion';
import MenuBar from '../../components/MenuBar/MenuBar';
import me from '../../assets/me.png';
import IconBtn from '../../components/IconBtn/IconBtn';
import graphic1 from '../../assets/left.svg'
import graphic2 from '../../assets/right.svg'
import TextLink from '../../components/TextLink/TextLink';
import Button from '../../components/Button/Button';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

const LandingPage = () => {

    const { scrollYProgress } = useScroll();
    const path = "images/project_images/thumbnail/";

    return (
        <div className={ styles.container }>
            <MenuBar
                header="ZYXMA"
                btnLabel="Project"
                to="project"
                smooth
            />
            <motion.div
                className={ styles.area_1 }
                style={{
                    opacity: useTransform(scrollYProgress, [0, 0.33], [1, 0]),
                    y: useTransform(scrollYProgress, [0, 0.33], ["0%", "-30%"])
                }}
            >
                <div className={ styles.welcomeText }>
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
                </div>
                <motion.div
                    className={ styles.myIMG }
                    initial={{ y: "22%" }}
                    animate={{ y: "26%" }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                >
                    <div className={ styles.image }>
                        <img src={ me } alt="me" />
                    </div>
                    <motion.div
                        className={ styles.backCircle }
                        initial={{ rotate: "0deg" }}
                        animate={{ rotate: "360deg" }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        style={{ x: "40%", y: "-80%"}}
                    ></motion.div>
                </motion.div>
            </motion.div>
            <motion.div
                className={ styles.area_2 }
                style={{
                    opacity: useTransform(scrollYProgress, [0, .33, .66, 1], [0, 1, 1, 0]),
                    y: useTransform(scrollYProgress, [.66, 1], ["0%", "-30%"])
                }}
            >
                <div className={ styles.left }>
                    <motion.img
                        className={ styles.graphic1 }
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
                        className={ styles.graphic2 }
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
                        <TextLink href="https://reactjs.org" color="#35d7ec">React</TextLink>,&nbsp;
                        <TextLink href="https://vitejs.dev" color="#fff570">Vite</TextLink>,&nbsp;
                        <TextLink href="https://sass-lang.com" color="#fa71ff">Sass</TextLink>&nbsp;and&nbsp;
                        <TextLink href="https://www.framer.com/motion/" color="#cf7ffd">Framer Motion</TextLink>
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
            <motion.div
                name="project"
                className={ styles.area_3 }
                style={{
                    opacity: useTransform(scrollYProgress, [.66, 1], [0, 1])
                }}
            >
                <ProjectCard
                    thumbnail={ path + "toolbox.svg" }
                    link="https://zyxma-toolbox.netlify.app"
                    repo="https://github.com/6MA-606/Project-ZYXMA-Toolbox-React"
                    bg="linear-gradient(to bottom, #252525, #333)"
                >
                    ZYXMA-Toolbox
                </ProjectCard>
                <ProjectCard
                    thumbnail={ path + "camera.svg" }
                    link="https://int102.sit.kmutt.ac.th/project/nQL9E/"
                    repo="https://github.com/6MA-606/INT102-Diary-Project"
                    bg="linear-gradient(to bottom, #888, #aaa)"
                >
                    My Diary
                </ProjectCard>
            </motion.div>
        </div>
    );
}

export default LandingPage;