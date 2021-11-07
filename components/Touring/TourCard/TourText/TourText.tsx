import { StyledTourText } from "./TourText.style";
import { FaStar, FaStarHalf } from 'react-icons/fa';

type Props = {
    title: string;
    description: string;
    duration: string;
    starCount: number;
    halfStar: boolean;
}

export const TourText = ( { title, description, duration, starCount, halfStar }: Props ) =>
{
    let starts = [];
    for ( let i = 1; i <= starCount; i++ )
    {
        starts.push( <FaStar /> )
    }
    return (
        <StyledTourText>
            <h1>{title}</h1>
            <p>{description}</p>
            <p><span>Duration:</span>{duration}</p>
            <div>
                <span>
                    Rating:
                </span>
                {starts}
                {halfStar && <FaStarHalf />}
            </div>
        </StyledTourText>
    )
}