import Button from "../ui/Button"
import "./Hero.css"

export const Hero = () => {
    return (
        <section className="mt-5">
            <main className="hero-bg text-white">
                <h1 className="text-6xl font-medium ">The Pivot Challenge</h1>
                <p className="text-md mt-3 font-medium">Empowering MSMEs to Go Digital, Grow Stronger, and Get Seen.</p>
            </main>
            <main className="py-15 flex flex-row ">
                <article className="w-3/5">
                    <h2 className="text-4xl w-[70%] font-bold">A Challenge. A Community. A Comeback Story for Local Businesses.</h2>
                    <p className="w-[65%] mt-5 text-lg">Welcome to The Pivot Challenge, a bold, energetic initiative helping MSMEs take charge of their future with digital tools, skills, and confidence</p>
                </article>
                <article className="w-2/5 flex flex-col justify-between items-end">
                    <p className="text-lg w-[95%]">From Aba to Awka, Nsukka to Nnewi, we’re meeting MSMEs where they are and taking them where they need to be—online, equipped, and unstoppable.</p>
                    <div className="flex flex-row justify-between w-[95%]">
                        <Button title="Apply Now for 2025" style={"bg-[#F06621] hover:bg-black px-11 py-4"}/>
                        <Button title="Partner With us" style={"bg-black hover:bg-[#F06621] px-11 py-4"}/>
                    </div>
                </article>
            </main>
        </section>
    )
}