const Container = (props) => {
    return (
        <div className={`container mx-auto px-3 ${props.className}`}>
            {props.children}
        </div>
    );
};

export default Container;