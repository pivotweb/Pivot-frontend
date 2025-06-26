import Button from "../ui/Button"

export const Edition25 = () => {
    return (
        <section className="md:px-4 py-6">
            <main >
                <article className="text-center md:w-[60%] m-auto">
                    <h1 className="text-xl md:text-3xl font-bold">The 2025 Edition: <br /> Go Digital. Go Further.</h1>
                    <p className="text-lg mt-5"> We’re taking it up a notch. The 2025 edition of The Pivot Challenge will support 3,000 MSMEs in the Southeast. 
                    Through an 8-week bootcamp—part online, part in-person—you’ll learn how to take your business digital and grow it sustainably.
                    </p>
                </article>
                <div className="mt-15 md:w-[98%] m-auto flex md:flex-row flex-col-reverse justify-between items-center">
                    <article className="space-y-5 mt-10 md:mt-0 md:w-[40%]">
                        <h1 className="font-bold text-3xl">What You’ll Get:</h1>
                        <p className="text-lg">Tools to run your business online.</p>
                        <p className="text-lg">Visibility and a chance to pitch your business at The Pivot Conference.</p>
                        <p className="text-lg">Access to subsidized internet we know the struggle</p>
                        <p className="text-lg">Mentorship from people who’ve walked the talk</p>
                    </article>
                    <div className="md:w-[50%] h-[320px] overflow-hidden">
                        <img src="images/edition25.png" alt="" className="w-full h-full object-cover rounded-2xl"/>
                    </div>
                </div>
            </main>

            <main className="mt-15 ">
                <div className="flex flex-row justify-between md:flex-col">
                    <div className="md:w-full relative w-1/5 ">
                        <div className="flex md:flex-row flex-col justify-around items-center md:space-x-4 h-[100%] md:h-auto">
                            <div className="w-10 z-1 h-10 bg-[#F06621] text-white rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[#F06621]/50">
                                1
                            </div>
                            <div className="w-10 z-1 h-10 bg-[#F06621] text-white rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[#F06621]/50">
                                2
                            </div>
                            <div className="w-10 z-1 h-10 bg-[#F06621] text-white rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[#F06621]/50">
                                3
                            </div>
                            <div className="w-10 z-1 h-10 bg-[#F06621] text-white rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-[#F06621]/50">
                                4
                            </div>
                        </div>
                        {/* Horizontal line for desktop */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#FCE0D3] z-0 transform -translate-y-1/2" />

                        {/* Vertical line for mobile */}
                        <div className="block md:hidden absolute top-0 left-1/2 h-full w-1 bg-[#FCE0D3] z-0 transform -translate-x-1/2" />
                    </div>

                    <article className="w-4/5 md:w-full gap-10 flex flex-col md:flex-row">
                        <div className="border border-[#F06621] text-center md:px-10 md:py-5 px-3 py-10 md:w-1/4 md:mt-10 rounded-lg">
                            <h3 className="text-xl font-bold">Weeks 1-7</h3>
                            <p className="text-center mt-3">Live virtual classes, downloadable toolkits, expert feedback</p>
                        </div>

                        <div className="border border-[#F06621] text-center md:px-10 md:py-5 px-3 py-10 md:w-1/4 md:mt-10 rounded-lg">
                            <h3 className="text-xl font-bold">Weeks 8</h3>
                            <p className="text-center mt-3">Top 10 businesses go residential for an on-ground digital transformation experience</p>
                        </div>

                        <div className="border border-[#F06621] text-center md:px-10 md:py-5 px-3 py-10 md:w-1/4 md:mt-10 rounded-lg">
                            <h3 className="text-xl font-bold">October 1, 2025</h3>
                            <p className="text-center mt-3">The Pivot Conference – Finalists pitch live in Awka</p>
                        </div>

                        <div className="border border-[#F06621] text-center md:px-10 md:py-5 px-3 py-10 md:w-1/4 md:mt-10 rounded-lg">
                            <h3 className="text-xl font-bold">Post-bootcamp</h3>
                            <p className="text-center mt-3">Free digital tools, mentorship, broadband access & funding exposure.</p>
                        </div>
                    </article>
                </div>

                <nav className="flex w-full md:flex-row flex-col my-15 justify-center items-center gap-5 md:gap-10">
                    <Button title="Apply Now" style={"bg-[#F06621] hover:bg-[#F6A37A] w-full md:w-1/2 py-4"} link="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header"/>
                    <Button title="Download Full Program Brochure" style={"bg-black hover:bg-[#4B3D34] w-full md:w-1/2 py-4"}/>
                </nav>
            </main>
        </section>
    )
}