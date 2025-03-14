function AboutMe(){
    return(
        <> 
        <div  className="home-container h-screen  flex justify-center items-center">
            <div className="homeContent  flex max-w-[960px] p-10 gap-10 md:flex-row flex-col">  
                <div className="home-right flex items-center justify-center">
                    <img className="md:w-[1000px] w-[300px]" src="src/images/AboutMeImg.jpg"/>
                </div>
                <div className="home-left flex flex-col gap-3 justify-center">
                <h3 className="font-bold text-5xl">About me</h3>
                    <p className="font-bold">CS Student</p>
                    <p>I'm 19 years old and my hobbies is drawing and playing the piano. I love anime and K-pop, my favorite movie genre is horror. I'm a cat person</p>
                    <div className="readMore bg-blue-400 text-white px-3 py-2 rounded-3xl text-center w-fit">
                        Read More
                    </div>
                </div>
            </div>
        </div>
        </>
       
    )
}
export default AboutMe;