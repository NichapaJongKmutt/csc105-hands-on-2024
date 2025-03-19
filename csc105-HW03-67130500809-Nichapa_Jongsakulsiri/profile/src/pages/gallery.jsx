function Gallery() {
    return (
        <>
            <div className="gallery-container flex items-center justify-center p-4 mt-20">
                <div className="gallery max-w-[960px] flex flex-col items-center gap-6">
                    <h3 className="text-5xl font-bold">Gallery</h3>
                    <div className=" gal-item grid grid-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 p-4 items-center justify-center">
                        <img src="src/images/g1.jpg" className="  md:w-[500px] lg:w-full " />
                        <img src="src/images/g2.jpg" className=" md:w-[500px] lg:w-full " />
                        <img src="src/images/g3.jpg" className=" md:w-[500px] lg:w-full  " />
                        <img src="src/images/g4.jpg" className=" md:w-[500px] lg:w-full " />
                        <img src="src/images/g5.jpg" className=" md:w-[500px] lg:w-full " />
                        <img src="src/images/g6.jpg" className=" md:w-[500px] lg:w-full " />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
