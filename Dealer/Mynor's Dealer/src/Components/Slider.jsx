// import { Car1 } from "../svg/index"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Btn from './Btn';

const Slider = () => {
    return (
        <div className='px-28 '>
            <header className='flex flex-col w-fit h-fit gap-y-3 absolute pt-[10rem] pl-[5rem] items-center justify-center'>
                <p className='font-bold text-7xl text-BlueMynor'>
                    Find Your Dream
                </p>
                <span className='flex items-center justify-start gap-20 '>
                    <p className='font-bold text-[8rem] text-RedMynor'>CAR</p>
                    <Btn />
                </span>
            </header>
            <Swiper
                className='h-[35rem] m-1'
                direction='vertical'
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                speed={1000}
                autoplay={{ delay: 5000 }}
            >
                <SwiperSlide className='SliderImg'>
                    <p className='Car1Txt'> AUDI </p>
                    <img className='Car1' src={"https://i.postimg.cc/y60Xfy4m/Car1.png"} />
                </SwiperSlide>
                <SwiperSlide className='SliderImg'>
                    <p className='Car2Txt'> URUS </p>
                    <img className='Car2' src={"https://i.postimg.cc/nV41hGLd/Car2.png"} />
                </SwiperSlide>
                <SwiperSlide className='SliderImg'>
                    <p className='Car3Txt'>BMW</p>
                    <img className='Car3' src="https://i.postimg.cc/gJWHVgcB/BMW-PNG-Image-Background.png" />
                </SwiperSlide>
                ...
            </Swiper>
        </div>
    )
}

export default Slider