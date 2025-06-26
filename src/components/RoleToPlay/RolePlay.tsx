import Button from "../ui/Button"

export const RolePlay = () => {
 return (
    <section className="my-25 text-center">
        <h1 className="text-3xl font-bold">You Have a Role to Play</h1>
        <main className="flex md:flex-row flex-col gap-15 justify-between mt-15">
            <article className="md:w-1/3 md:px-15">
                <h1 className="text-xl font-bold">Partners & Donors</h1>
                <p className="mt-5 text-xl text-[#202020]">Want to sponsor an MSME, fund tech kits, or support connectivity? Let's build a future together.</p>
                <br />
                {/* <br /> */}
                <div>
                    <Button title="Partner With Us" 
                        style={"bg-[#F06621] hover:bg-[#F6A37A] px-10 py-4 mt-5"} 
                        link="https://docs.google.com/forms/d/e/1FAIpQLSc51CdFXa605Vsxpu-CuqaJ-OKsPfMoO9jh16QafdH7r6JiNQ/viewform?usp=header"
                    />
                </div>

            </article>

            <article className="md:w-1/3 md:px-15">
                <h1 className="text-xl font-bold">Mentors & Trainers</h1>
                <p className="mt-5 text-xl text-[#202020]">Have digital expertise? Share your knowledge and mentor the next generation of African business owners.</p>
                <br />
                {/* <br /> */}
                <div>
                    <Button title="Join Our Mentor Network" style={"bg-[#F06621] hover:bg-[#F6A37A] px-5 py-4 mt-5"} link="https://docs.google.com/forms/d/e/1FAIpQLSeQ-i6WRhEXs-RTMpUD6pjDK-x428MYWKC1iFjz4rZ62GgO3Q/viewform?usp=header"/>
                </div>
            </article>

            <article className="md:w-1/3 md:px-10">
                <h1 className="text-xl font-bold">Volunteers</h1>
                <p className="mt-5 text-xl text-[#202020]">Passionate about small businesses? Come help us run smooth events, training, and community engagement.</p>
                <br />
                {/* <br /> */}
                <div>
                    <Button title="Become a Volunteer" style={"bg-[#F06621] hover:bg-[#F6A37A] px-5 py-4"} link="https://docs.google.com/forms/d/e/1FAIpQLSfIV4CldW6oH1BxaJUzeHEGuxNe-N7ekMFAZY9rkyg_y0n_dg/viewform?usp=header"/>
                </div>
            </article>
        </main>
    </section>
 )
}