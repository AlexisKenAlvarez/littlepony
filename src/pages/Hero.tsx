import HeroAbout from "../views/Hero/HeroAbout";
import HeroIndex from "../views/Hero/HeroIndex";
import HeroTokenomics from "../views/Hero/HeroTokenomics";

const Hero = () => {
    return (
        <section className="">
            <HeroIndex />
            <HeroAbout />
            <HeroTokenomics />
        </section>
    );
}

export default Hero;