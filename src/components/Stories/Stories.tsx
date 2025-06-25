export const Stories = () => {
    return (
        <section className="my-15 text-center">
            <h1 className="text-3xl font-bold">Stories in Motion</h1>
            <main className="my-15 flex flex-col gap-3">
                <div className="flex flex-col md:flex-row gap-3 w-full">
                    <div className="md:w-2/3 h-[400px] overflow-hidden">
                        <img src="images/story1.jpg" alt="" className="w-full h-full object-cover rounded-2xl"/>
                    </div>
                    <div className="md:w-1/3 h-[400px] overflow-hidden flex flex-col gap-3" >
                        <div className="h-1/2 overflow-hidden">
                            <img src="images/story2.jpg" alt="" className="w-full h-full object-cover rounded-2xl"/>
                        </div>
                        <div className="h-1/2 overflow-hidden">
                            <img src="images/story3.jpg" alt="" className="w-full h-full object-[25%_20%] object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="md:w-1/3 h-[400px] overflow-hidden">
                        <img src="images/story4.jpg" alt="" className="w-full h-full object-cover rounded-2xl"/>
                    </div>
                    <div className="md:w-2/3 h-[400px] overflow-hidden">
                        <img src="images/story5.jpg" alt="" className="w-full h-full object-top object-cover rounded-2xl"/>
                    </div>
                </div>
            </main>
        </section>
    )
}