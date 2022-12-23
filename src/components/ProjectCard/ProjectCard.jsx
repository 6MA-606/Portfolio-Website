import styles from './projectCard.module.scss';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

const ProjectCard = (props) => {

    const { thumbnail, link, repo, bg } = props;

    const clickLink = () => window.open(link);
    const clickRepo = () => window.open(repo);


    return (
        <div className={ styles.container } >
            <div className={ styles.name }>{ props.children }</div>
            <div
                className={ styles.thumbnail }
                style={{ background: bg }}
            >
                <img src={ thumbnail } alt="thumbnail" />
            </div>
            <div className={ styles.bottom }>
                <div
                    className={ classNames(styles.goBtn, styles.btn) }
                    onClick={ clickLink }
                >
                    <div className={ styles.text }>
                        <Icon
                            iconName="BoxArrowUpRight"
                            color="ghostwhite"
                            size="1rem"
                        />
                        &nbsp;Go
                    </div>
                </div>
                <div
                    className={ classNames(styles.repoBtn, styles.btn) }
                    onClick={ clickRepo }
                >
                    <div className={ styles.text }>
                        <Icon
                            iconName="Github"
                            color="ghostwhite"
                            size="1rem"
                        />
                        &nbsp;Repo
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;