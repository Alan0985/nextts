import { StyledTourCard } from "./TourCard.style"
import { FaStar, FaStarHalf } from 'react-icons/fa';

type Props = {
    href: string;
    src: string;
    title: string;
    description: string;
    starCount: number;
    halfStar: boolean;
}

export const TourCard = ( { href, src, title, description, starCount, halfStar }: Props ) => (
    <StyledTourCard>
        <div>
            <a href={href}><img src={src} alt="" /></a>
        </div>

        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p></p>
            <div>
                {starCount}
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                {halfStar ? <FaStarHalf /> : null}
            </div>
        </div>
    </StyledTourCard>
)
