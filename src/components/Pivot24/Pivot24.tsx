export const Pivot24 = () => {
    return (
    <section className="md:my-10">
        <div className="flex md:flex-row flex-col justify-between md:text-start text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:w-1/2">2024 Pivot Challenge Recap</h1>
            <p className="md:text-xl text-gray-700 md:w-1/2">2024 was our first bold step. We brought MSMEs together, ran practical training, and saw real transformation. Want to know what worked and how it started? The 2024 recap will show snapshots, and key lessons from our pivot that paved the way for 2025.</p>
        </div>
        <div className="my-10 md:my-15 flex flex-col gap-5">
            <div className="w-full h-[350px] md:h-[400px] overflow-hidden">
                <img src="images/pivot1.jpg" alt="" className="w-full h-full object-cover rounded-2xl"/>
            </div>
            <div className="flex gap-5">
                <div className="w-1/2 h-[250px] md:h-[400px] overflow-hidden">
                    <img src="images/pivot2.jpg" alt="" className="w-full h-full object-cover rounded-2xl"/>
                </div>
                <div className="w-1/2 h-[250px] md:h-[400px] overflow-hidden">
                    <img src="images/pivot3.jpg" alt="" className="w-full h-full object-cover rounded-2xl"/>
                </div>
                </div>
        </div>
    </section>
    )
}