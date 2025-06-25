import { Edition25 } from "../components/Edition25/Edition25"
import { ContainerWrapper } from "../components/Global/Global"
import { Hero } from "../components/Hero/Hero"
import { Hustlers } from "../components/hustlers/Hustlers"
import { Header } from "../components/Navigation/Header"
import { Numbers } from "../components/Numbers/Numbers"
import Footer from '../components/Footer/Footer'
import Support from "../components/Support/Support"
import { Pivot24 } from "../components/Pivot24/Pivot24"
import { RolePlay } from "../components/RoleToPlay/RolePlay"
import { Stories } from "../components/Stories/Stories"
import { Testimonials } from "../components/Testimonials/Testimonials"

export const LandingPage = () => {
    return (
        <>
            <ContainerWrapper >
                
                {/* <Navigation /> */}
                <Header />

                {/* <Hero /> */}
                <Hero />

                {/* <Numbers /> */}
                <Numbers />

                {/* <Built for Local Hustlers. Designed for Global Possibilities. /> */}
                <Hustlers />

                {/* <The 2025 Edition:  /> */}
                <Edition25 />

                {/* <2024 Pivot Challenge Recap /> */}
                <Pivot24 />

                {/* <You Have a Role to Play /> */}
                <RolePlay />

                {/* <Stories in Motion /> */}
                <Stories />

                {/* <Testimonials /> */}
                <Testimonials />

                {/* <Contact Us /> */}
                {/* <Your Support Can Power 3,000 Businesses /> */}
                <Support />

                {/* Footer */}
                <Footer/>
            </ContainerWrapper>
        </>
    )
}