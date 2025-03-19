
function Home(){
    return(
        <div className="home-container h-screen  flex justify-center items-center" >
            <div className="homeContent  flex max-w-[960px] p-10 gap-10">
                <div className="home-left flex flex-col gap-3 justify-center">
                    <p className="hello font-bold">Hello, It's me</p>
                    <h3 className="hello font-bold text-5xl">Nichapa Jongsakulsiri</h3>
                    <p className="ima font-bold ">I'm a student</p>
                    <p className="description">I'm just a normal CS student at KMUTT.<br/> May the world be kind to me</p>
                    <div className="contactIco flex items-center gap-4">
                        <a><img className="w-15" src="src/icons/facebook.svg"/></a>
                        <a><img className="w-15" src="src/icons/instagram.svg"/></a>
                        <a><img className="w-15" src="src/icons/mail.svg"/></a>
                    </div>
                    <div className="portfolio pt-4">
                        <div className="port-btn bg-blue-400 text-white p-2 rounded-3xl text-center w-[70%]">
                            My Portfolio
                        </div>
                    </div>
                </div>
                <div className="home-right flex items-center justify-center">
                    <img className="w-[500px]" src="src/images/ProfileHomeImg1.jpg"/>
                </div>
            </div>
        </div>
    )
}
export default Home;