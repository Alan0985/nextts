import styled from "styled-components";

type Props = {
    href: string;
    src: string;
    title: string;
}

type Theme = {
    theme: any
}

export const StyledTourImage = styled.div`
    width: 50%;
    margin: 40px 20px;

    img{
        border-radius: 15px;
    }

    @media (max-width: ${ ( { theme }: Theme ) => theme.vp.sm }) {
        width: 100%;
        margin: 0;
        padding: 10px 20px;
    }
`

export const TourImage = ( { href, src, title, }: Props ) => (
    <StyledTourImage>
        <a href={href}><img src={src} alt={title} /></a>
    </StyledTourImage>
)
