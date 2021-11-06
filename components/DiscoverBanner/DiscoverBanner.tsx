import { Banner } from "../Banner/Banner";
import { DiscoverBannerData } from '../../data'

export const DiscoverBanner = () => (
    <Banner
        bannerTitle={DiscoverBannerData.bannerTitle}
        bannerText={DiscoverBannerData.bannerText}
        buttonHref={DiscoverBannerData.buttonHref}
        buttonText={DiscoverBannerData.buttonText}
    />
)
