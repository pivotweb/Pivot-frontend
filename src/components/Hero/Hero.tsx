import Button from "../ui/Button"
import "./Hero.css"

export const Hero = () => {
    return (
        <section className="">
            <main className="hero-bg text-white">
                <h1 className="text-3xl md:text-6xl font-medium ">The Pivot Challenge</h1>
                <p className="text-lg my-5 md:my-0 md:mt-3 font-medium">Empowering MSMEs to Go Digital, Grow Stronger, and Get Seen.</p>
                <Button title="Apply Now for 2025" style={"bg-[#F06621] hover:bg-[#F6A37A] md:mt-5 md:px-11 md:py-4 px-7 py-3"} link="https://docs.google.com/forms/d/e/1FAIpQLSdHQ-J0ih1bjnUUzYpSUiodp5dwA8l4Edr7QInKTxdY_QuJhA/viewform?usp=header"/>
            </main>
            <main className="py:5 md:py-15 flex flex-col md:flex-row text-center md:text-start">
                <article className="md:w-3/5 mb-5">
                    <h2 className="text-2xl md:text-4xl md:w-[70%] font-bold">A Challenge. A Community. A Comeback Story for Local Businesses.</h2>
                    <p className="md:w-[65%] mt-5 text-md md:text-lg">Welcome to The Pivot Challenge, a bold, energetic initiative helping MSMEs take charge of their future with digital tools, skills, and confidence</p>
                </article>
                <article className="md:w-2/5 flex flex-col justify-between items-end">
                    <p className="text-md md:text-lg w-[95%]">From Aba to Awka, Nsukka to Nnewi, we’re meeting MSMEs where they are and taking them where they need to be—online, equipped, and unstoppable.</p>
                    <div className="flex flex-col md:flex-row justify-between md:w-[95%] w-full">
                        <Button title="Apply Now for 2025" style={"bg-[#F06621] hover:bg-[#F6A37A] px-11 py-4 my-7 md:my-0"} link="https://docs.google.com/forms/d/e/1FAIpQLSdHQ-J0ih1bjnUUzYpSUiodp5dwA8l4Edr7QInKTxdY_QuJhA/viewform?usp=header"/>
                        <Button title="Partner With us" style={"bg-black hover:bg-[#4B3D34] px-11 py-4"} link="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header"/>
                    </div>
                </article>
            </main>
        </section>
    )
}