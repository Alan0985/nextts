import { Banner } from "../../Banner/Banner";
import { TouringBannerData } from '../../../data'

export const TouringBanner = () => (
    <Banner
        bannerTitle={TouringBannerData.bannerTitle}
        bannerText={TouringBannerData.bannerText}
        buttonHref={TouringBannerData.buttonHref}
        buttonText={TouringBannerData.buttonText}
    />
)
