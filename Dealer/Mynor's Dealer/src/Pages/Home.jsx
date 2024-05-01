import { Nav, Slider } from "../Components/index";
const Home = () => {
    return (
        <div>
            <Nav />
            <Slider />
            {/* <Filter /> */}
            <section className="flex justify-center h-[5rem]">
                <p id="AboutUs" className="text-5xl flex items-center justify-between gap-x-3 font-semibold">
                    <span className="LineHeader"></span>Our Services<span className="LineHeader"></span>
                </p>
            </section>
        </div>
    )
}

export default Home