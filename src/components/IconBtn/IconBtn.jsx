import Icon from "../Icon/Icon";
import styles from './iconBtn.module.scss';
import { motion } from "framer-motion";

const IconBtn = (props) => {

    const { bg, icon, color, size, box, boxType, shrink, hoverShadow, to } = props;
    let adjust = 1;

    const isValid = (str) => !(str === undefined || str.trim() === "");

    const openNewWindow = () => {
        window.open(to);
    }

    if (box) {
        switch (boxType) {
            case "fit":
                adjust = 1;
                break;
            case "shrink":
                adjust = 0.8;
                break;
        }
    }

    if (isValid(shrink)) {
        adjust = shrink;
    }

    return (
        <div className={ styles.btn }>
            <motion.div
                className={ styles.block }
                style={ box ? {
                    background: bg,
                    width: size + "px",
                    height: size + "px"
                } : null }
                initial={{ scale: 1, boxShadow: "0px 0px 0px 0px " + hoverShadow }}
                whileHover={{ boxShadow: "0px 0px 10px 1px "  + hoverShadow, cursor: "pointer" }}
                whileTap={{ scale: .9 }}
                transition={{ duration: .15 }}
                onClick={ openNewWindow }
            >
                <Icon
                    iconName={ icon }
                    color={ color }
                    size={ size * adjust }
                />
            </motion.div>
        </div>
    );
}

export default IconBtn;