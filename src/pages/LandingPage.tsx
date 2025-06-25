import { ContainerWrapper } from "../components/Global/Global"
import { Hero } from "../components/Hero/Hero"
import { Hustlers } from "../components/hustlers/Hustlers"
import { Header } from "../components/Navigation/Header"
import { Numbers } from "../components/Numbers/Numbers"
import Footer from '../components/Footer/Footer'
import Support from "../components/Support/Support"

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
                {/* <2024 Pivot Challenge Recap /> */}
                {/* <You Have a Role to Play /> */}
                {/* <Stories in Motion /> */}
                {/* <Testimonials /> */}
                {/* <Contact Us /> */}
                {/* <Your Support Can Power 3,000 Businesses /> */}
                <Support />

                {/* Footer */}
                <Footer/>
            </ContainerWrapper>
        </>
    )
}