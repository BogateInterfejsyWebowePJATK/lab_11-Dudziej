import { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

function ThumbRating() {
    const [like, pressLike] = useState(0);
    const [dislike, pressDislike] = useState(0);

    return (
        <div>
            <div>
                <FaThumbsUp color={"green"} onClick={(i) => { i.preventDefault(); pressLike(like + 1); }} />
                {like}
            </div>
            <div>
                <FaThumbsDown color={"red"} onClick={(i) => { i.preventDefault(); pressDislike(dislike + 1); }} />
                {dislike}
            </div>
        </div>
)}
export default ThumbRating;
