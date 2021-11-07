import { StyledTourCard } from "./TourCard.style"
import { TourText } from "./TourText/TourText";
import { TourImage } from "./TourImage/TourImage";

type Props = {
    href: string;
    src: string;
    title: string;
    description: string;
    duration: string;
    starCount: number;
    halfStar: boolean;
}

export const TourCard = ( { href, src, title, description, duration, starCount, halfStar }: Props ) => (
    <StyledTourCard>
        <TourImage
            href={href}
            src={src}
            title={title}
        />

        <TourText
            title={title}
            description={description}
            duration={duration}
            starCount={starCount}
            halfStar={halfStar}
        />
    </StyledTourCard>
)