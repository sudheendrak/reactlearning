function Timetic(props) {
    return (
        <div className="clock">
            <h2>{props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default Timetic;