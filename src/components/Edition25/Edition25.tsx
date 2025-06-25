import Button from "../ui/Button"

export const Edition25 = () => {
    return (
        <section className="px-4 py-6">
            <main >
                <article className="text-center w-[60%] m-auto">
                    <h1 className="text-3xl font-bold">The 2025 Edition: <br /> Go Digital. Go Further.</h1>
                    <p className="text-lg mt-5"> We’re taking it up a notch. The 2025 edition of The Pivot Challenge will support 3,000 MSMEs in the Southeast. 
                    Through an 8-week bootcamp—part online, part in-person—you’ll learn how to take your business digital and grow it sustainably.
                    </p>
                </article>
                <div className="mt-15 w-[98%] m-auto flex justify-between items-center">
                    <article className="space-y-5 w-[40%]">
                        <h1 className="font-bold text-3xl">What You’ll Get:</h1>
                        <p className="text-xl">Tools to run your business online.</p>
                        <p className="text-xl">Visibility and a chance to pitch your business at The Pivot Conference.</p>
                        <p className="text-xl">Access to subsidized internet we know the struggle</p>
                        <p className="text-xl">Mentorship from people who’ve walked the talk</p>
                    </article>
                    <div className="w-[50%] h-[320px] overflow-hidden">
                        <img src="images/edition25.png" alt="" className="w-full h-full object-cover rounded-2xl"/>
                    </div>
                </div>
            </main>

            <main className="mt-15">
                <div className="w-full relative">
                <div className="flex flex-row items-center justify-around space-x-4">
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
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-[#FCE0D3] z-0 transform -translate-y-1/2" />
                </div>

                <article className="gap-10 flex">
                    <div className="border border-[#F06621] text-center px-10 py-5 w-1/4 mt-10 rounded-lg">
                        <h3 className="text-xl font-bold">Weeks 1-7</h3>
                        <p className="text-center mt-3">Live virtual classes, downloadable toolkits, expert feedback</p>
                    </div>

                    <div className="border border-[#F06621] text-center px-10 py-5 w-1/4 mt-10 rounded-lg">
                        <h3 className="text-xl font-bold">Weeks 8</h3>
                        <p className="text-center mt-3">Top 10 businesses go residential for an on-ground digital transformation experience</p>
                    </div>

                    <div className="border border-[#F06621] text-center px-10 py-5 w-1/4 mt-10 rounded-lg">
                        <h3 className="text-xl font-bold">October 1, 2025</h3>
                        <p className="text-center mt-3">The Pivot Conference – Finalists pitch live in Awka</p>
                    </div>

                    <div className="border border-[#F06621] text-center px-10 py-5 w-1/4 mt-10 rounded-lg">
                        <h3 className="text-xl font-bold">Post-bootcamp</h3>
                        <p className="text-center mt-3">Free digital tools, mentorship, broadband access & funding exposure.</p>
                    </div>
                </article>

                <nav className="flex my-15 justify-center items-center gap-10">
                    <Button title="Apply Now" style={"bg-[#F06621] hover:bg-black px-35 py-4"}/>
                    <Button title="Download Full Program Brochure" style={"bg-black hover:bg-[#F06621] px-11 py-4"}/>
                </nav>
            </main>
        </section>
    )
}