import './ButtonDnd.css';

export default function ButtonDnd({ data, ...props }) {
    return (
        <button
            className="button"
            style={data.style}
            draggable
            {...props}
        >
            <span style={{pointerEvents: 'none'}}>
                {props.value}
            </span>
        </button>
    )
}
