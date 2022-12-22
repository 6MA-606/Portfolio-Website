const Link = (props) => {

    const { color, href, dec} = props;

    const isValid = (str) => !(str === undefined || str.trim() === "");

    const style = {
        color: color,
        textDecoration: isValid(dec) ? dec : "none",
        cursor: "pointer"
    };

    const handleClick = () => {
        window.open( href );
    }

    return (
        <span style={ style } onClick={ handleClick }>
            { props.children }
        </span>
    );
}
export default Link;