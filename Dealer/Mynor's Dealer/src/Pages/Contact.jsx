import { Nav } from "../Components/index"
import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(name, email, message);
        alert("Message sent successfully!");
    };

    return (
        <div>
            <Nav />

            <div id="klk" className="flex justify-center justify-center mt-[3rem]">
                <div className="flex justify-center items-center bg-GrayMynor3 w-[45rem] h-[35rem] rounded-2xl">
                    <form onSubmit={handleSubmit} className="h-[30rem] w-[30rem]" >
                        <h1 className="text-RedMynor m-0 text-5xl mb-10 font-bold text-center ">Contact Us!!</h1>
                        <div className="mt-1">
                            <label htmlFor="name" className="block mb-2 text-2xl font-bold text-BlueMynor">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-2 border-RedMynor rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-semibold text-BlueMynor "
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block mb-2 text-2xl font-bold text-BlueMynor">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-2 border-RedMynor rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-semibold text-BlueMynor "
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block mb-2 text-2xl font-bold text-BlueMynor">
                                Message
                            </label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full px-3 py-2 border border-2 border-RedMynor rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 font-semibold text-BlueMynor "
                                required
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button
                                type="submit"
                                className="px-4 py-2 w-[40vh] bg-White text-white bg-blue-500 rounded-md hover:text-RedMynor hover:bg-BlueMynor focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-semibold text-2xl"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;