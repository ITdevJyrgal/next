import HomeLayout from "../components/HomeLayout";
import Hero from "../components/hero/hero";
import About from "../components/about/about";
import AboutUs from "../components/aboutus/aboutus";
import Services from "../components/services/services";
import Job from "../components/job/job";
import Out from "../components/out/out";
import Reviews from "../components/reviews/reviews";
import Question from "../components/question/question";
import Dark from "./../components/dark"

export default function Home() {
    return (
        <HomeLayout>
            <Hero/>
            <About/>
            <AboutUs/>
            <Services/>
            <Job/>
            <Out/>
            <Reviews/>
            <Question/>
            <Dark/>
        </HomeLayout>
    )
}
