import StarRating from "./StarRating/StarRating";
import ThumbRating from "./ThumbRating";

function StockPhoto(props) {
    const { url, title, date } = props;

    return (
        <div className="StockPhoto">
            <img src={url} />
            <div>{title}</div>
            <div>{date.toISOString()}</div>
            <StarRating />
            <ThumbRating />
        </div>
)}

export default StockPhoto;
