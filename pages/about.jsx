import { useEffect } from "react";


export default function About(){
    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
        });
    }, []);
    return(
        <div className="h-[2560px]">
            <h1 className="text-center text-5xl font-semibold my-20">
                About Us
            </h1>
            <h2 className="text-center text-3xl text-gray-700 font-semibold my-10">
               Developed By
            </h2>
            <p className="text-center text-2xl text-gray-600 mt-10">
                Aysha Afifa
            </p>
            <p className="text-center text-2xl text-gray-600 mb-10 mt-5">
                Tamanna Tabassum
            </p>
        </div>
    )
}