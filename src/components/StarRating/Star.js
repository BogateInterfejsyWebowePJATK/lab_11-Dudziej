import { FaStar } from 'react-icons/fa';

function Star({ index, value, rating, pressRating }) {
    return (
        <div>
            <FaStar color={value ? "orange" : "#aaa"} onClick={() => pressRating(index + 1)} />
        </div>
    )
}

export default Star;