import { SettingsIcon } from "../../assets/svg/Icons"
import "./Hustlers.css"

export const Hustlers = () => {
  return (
    <section className="py-15">
      <main className="gap-5 flex flex-col md:flex-row justify-between">
        <div className="hustler-image">
            
        </div>
        {/* <img src="images/ella.jpg" alt="Local Hustlers" className="w-[48%]" /> */}

        <article className="w-full md:w-[48%] md:text-start">
          <h1 className="text-xl mt-3 md:mt-0 md:text-4xl font-bold text-center md:text-start">
            Built for Local Hustlers. <br /> Designed for Global Possibilities.
          </h1>
          <p className="mt-5 text-lg text-center md:text-start">
            The Pivot Challenge is not your typical training program. It's a
            digital transformation movement tailored to Nigeria’s most resilient
            entrepreneurs, the traders, the manufacturers, the dreamers.
            <br />
            <br />
            Whether you sell fabrics in Ariaria or manage a furniture workshop
            in Enugu, we’re here to help you grow. We hand you more than just
            buzzwords- we hand you broadband, real digital tools, know-how, and
            people who have your back—so you don’t just run your business, you
            grow it, digitize it, and make it thrive.
          </p>

          <article className="mt-8 ">
            <h4 className="text-2xl md:text-3xl font-medium">What Makes Us Different:</h4>
            <ul className="custom-list">
              <span className="text-ld md:text-xl mt-6 flex flex-row justify-start items-start"> 
                <div><SettingsIcon width={36} height={36} className="mr-3"/></div>
                <p>
                    <span className="font-bold">Practical, not abstract. </span>
                    Every lesson is built around what you do every day.
                </p>
              </span>
              <span className="text-ld md:text-xl mt-3 flex flex-row justify-start items-start">
                <div><SettingsIcon width={36} height={36} className="mr-3"/></div>
                <p>
                    <span className="font-bold">Community-driven. </span> Your
                    peers, mentors, and networks are part of the journey.
                </p>
              </span>
              <span className="text-ld md:text-xl mt-3 flex flex-row justify-start items-start">
                <div>
                    <SettingsIcon width={36} height={36} className="mr-3"/></div>
                <p>
                    <span className="font-bold">Plug-and-play tools. </span> We give
                    you real apps, real systems, real results.
                </p>
              </span>
              <span className="text-ld md:text-xl mt-3 flex flex-row justify-start items-start">
                <div>
                        <SettingsIcon width={36} height={36} className="mr-3"/></div>
                <p>
                    <span className="font-bold">No fluff. Just growth. </span>{" "}
                    Whether you're on WhatsApp Business or still taking orders by
                    hand, there’s a place for you here.
                </p>
              </span>
            </ul>
          </article>
        </article>
      </main>
    </section>
  );
};
