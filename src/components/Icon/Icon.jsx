import * as icons from 'react-bootstrap-icons';

const Icon = (props) => {
    const { iconName, ...otherProps } = props;

    const BootstrapIcon = icons[iconName];
    return <BootstrapIcon {...otherProps} />;
}

export default Icon;