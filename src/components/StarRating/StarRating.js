import { useState } from 'react';
import Star from './Star';
import { avgSum, plusArray } from '../../util';

function StarRating() {
    const [rating, pressRating] = useState(0);
    const [allratings, pressAllratings] = useState([]);

    return (
        <div className="StarRating">
            <div>
                {plusArray(rating, () => 1).concat(plusArray(5 - rating, () => 0)).map((value, index) => <Star {...{ value, index, pressRating }} />)}
            </div>
            <div>Średnia ocena {avgSum(allratings)} na 5 gwiazdek</div>
            <button onClick={
                () => {
                    allratings.push(rating);
                    pressRating(0);
                }
            }>
            Oceń 
            </button>
        </div>
    )
}

export default StarRating;
