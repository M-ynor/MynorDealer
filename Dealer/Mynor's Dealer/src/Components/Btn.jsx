import { Link } from 'react-router-dom';

const Btn = () => {
    return (
        <Link to={"/Search"} className="flex z-50 justify-center items-center gap-2 px-10 py-3 pb-3 w-fit h-fit text-WhiteMynor font-semibold bg-BlueMynor text-2xl rounded-lg">
            Order Now <span className='flex justify-center items-center'>
                <svg className='h-[30px]' xmlns="http://www.w3.org/2000/svg" viewBox=" 0 -2 24 24">
                    <path fill="#FFFFFE"  d="m7.25 17l7.5-5l-7.5-5a.901.901 0 1 1 1-1.5l8.502 5.668a1 1 0 0 1 0 1.664L8.25 18.5a.901.901 0 1 1-1-1.5" />
                </svg>
            </span>
        </Link>
    )
}

export default Btn