import { Edition25 } from "../components/Edition25/Edition25"
import { ContainerWrapper } from "../components/Global/Global"
import { Hero } from "../components/Hero/Hero"
import { Hustlers } from "../components/hustlers/Hustlers"
import { Header } from "../components/Navigation/Header"
import { Numbers } from "../components/Numbers/Numbers"
import ContactForm from "../components/contacts/ContactForm"

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
                {/* <You Have a Role to Play /> */}
                {/* <Stories in Motion /> */}
                {/* <Testimonials /> */}
                {/* <Contact Us /> */}
                <ContactForm />

                {/* <Join the Movement /> */}
                {/* <Footer /> */}
                {/* <Your Support Can Power 3,000 Businesses /> */}
                {/* <Footer/> */}
            </ContainerWrapper>
        </>
    )
}