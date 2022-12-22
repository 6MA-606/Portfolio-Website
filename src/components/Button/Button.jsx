import Icon from '../Icon/Icon';
import styles from './button.module.scss';
import { motion } from 'framer-motion';

const Button = (props) => {

    const { bg, icon, to } = props;

    const isValid = (str) => !(str === undefined || str.trim() === "");

    const style = {
        background: isValid(bg) ? bg : "grey"
    }

    const handleClick = () => {
        window.open( to );
    }

    return (
        <motion.div
            className={ styles.container }
            style={ style }
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
            onClick={ handleClick }
        >
            <Icon
                iconName={ icon }
                color="#f8f8ff"
                size="3rem"
            />
            <div className={ styles.text }>
                { props.children }
            </div>
            <Icon
                iconName="BoxArrowUpRight"
                color="#f8f8ff"
                size="2rem"
            />
        </motion.div>
    );

}
export default Button;