import Button from "../ui/Button"

export const RolePlay = () => {
 return (
    <section className="my-25 text-center">
        <h1 className="text-3xl font-bold">You Have a Role to Play</h1>
        <main className="flex md:flex-row flex-col gap-7 justify-between mt-15">
            <article className="md:w-1/3 md:px-15">
                <h1 className="text-xl font-bold">Partners & Donors</h1>
                <p className="mt-5 text-xl text-[#202020]">Want to sponsor an MSME, fund tech kits, or support connectivity? Let's build a future together.</p>
                <Button title="Partner With Us" style={"bg-[#F06621] hover:bg-[#F6A37A] px-10 py-4 mt-5"}/>

            </article>

            <article className="md:w-1/3 md:px-15">
                <h1 className="text-xl font-bold">Mentors & Trainers</h1>
                <p className="mt-5 text-xl text-[#202020]">Have digital expertise? Share your knowledge and mentor the next generation of African business owners.</p>
                <Button title="Join Our Mentor Network" style={"bg-[#F06621] hover:bg-[#F6A37A] px-5 py-4 mt-5"}/>

            </article>

            <article className="md:w-1/3 md:px-10">
                <h1 className="text-xl font-bold">Volunteers</h1>
                <p className="mt-5 text-xl text-[#202020]">Passionate about small businesses? Come help us run smooth events, training, and community engagement.</p>
                <Button title="Become a Volunteer" style={"bg-[#F06621] hover:bg-[#F6A37A] px-5 py-4 mt-5"}/>
            </article>
        </main>
    </section>
 )
}