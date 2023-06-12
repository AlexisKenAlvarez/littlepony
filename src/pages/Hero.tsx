import HeroAbout from "../views/Hero/HeroAbout";
import HeroIndex from "../views/Hero/HeroIndex";
import HeroRoadmap from "../views/Hero/HeroRoadmap";
import HeroTokenomics from "../views/Hero/HeroTokenomics";

const Hero = () => {
    return (
        <section className="">
            <HeroIndex />
            <HeroAbout />
            <HeroTokenomics />
            <HeroRoadmap />
        </section>
    );
}

export default Hero;