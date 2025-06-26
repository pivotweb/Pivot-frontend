export const Testimonials = () => {
    return (
        <section className="md:my-25 text-center">
            <h1 className="text-3xl font-bold">Testimonials</h1>
            <main className="my-15 md:gap-10 gap-15 flex flex-col md:flex-row items-center justify-between"> 
                <article className="md:w-1/3">
                    <div className=" h-[300px] overflow-hidden">
                        <img src="images/testimonial1.jpg" alt="" className="w-full h-full object-cover rounded-2xl"/>
                    </div>
                    <p className="md:my-5 my-3 px-5">
                        <span className="text-xl">"</span>
                        Before The Pivot Challenge, I didn’t even know how to use WhatsApp for Business. Now, my products are reaching customers in Lagos and Ghana. This program changed how I see my business.
                        <span className="text-xl">"</span>
                    </p>
                    <h3 className="text-xl font-medium">Entrepreneur</h3>
                </article>

                <article className="md:w-1/3">
                    <div className=" h-[300px]  overflow-hidden">
                    <video
                        src="images/testimonial2.mp4"
                        className="w-full h-full object-cover rounded-2xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                    </div>
                    <p className="md:my-5 my-3 px-5">
                        <span className="text-xl">"</span>
                        Mentoring at The Pivot Challenge wasn’t just about teaching. It was about connecting—helping these incredible MSMEs see how digital tools could multiply their impact. I’d do it again in a heartbeat.                        <span className="text-xl">"</span>
                    </p>
                    <h3 className="text-xl font-medium">Mentor</h3>
                </article>

                <article className="md:w-1/3">
                    <div className="h-[300px] overflow-hidden">
                        <img src="images/testimonial3.jpg" alt="" className="w-full h-full object-top object-cover rounded-2xl"/>
                    </div>
                    <p className="md:my-5 my-3 px-5">
                        <span className="text-xl">"</span>
                        We partnered with The Pivot Challenge because it delivers. The impact is real, the stories are inspiring, and the businesses are transforming.                        <span className="text-xl">"</span>
                    </p>
                    <h3 className="text-xl font-medium">Partner</h3>
                </article>
            </main>
        </section>
    )
}