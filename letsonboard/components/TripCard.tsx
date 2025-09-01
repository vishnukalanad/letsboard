import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { client } from "~/lib/appwrite";

function TripCard({title, description, location, tags, img, price, index}: { title: string, description: string, location: string, tags: string[], img: string, price: number, index:number}) {

    useGSAP(() => {
        gsap.set(`#trip-card-${index}`, {
            visibility: "visible",
        })

        gsap.fromTo(
            `#trip-card-${index}`,
            {
                opacity: 0,
                scale: 0.8,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "back.inOut(1.7)",
                delay: index * 0.025,
            }
        )
    })

    async function sendPing() {
        try {
            const results = await client.ping()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={"flex flex-col h-full p-3 shadow shadow-slate-100 rounded-xl bg-white"} id={`trip-card-${index}`}>
            <div className="w-full flex flex-col h-60 overflow-hidden relative">
                <img src={img} alt="" className="h-full object-cover rounded-md" />
                <div className={"absolute top-1.5 right-3 bg-white rounded-full py-1 px-3 text-xs text-sky-800"}>
                    ₹{price}
                </div>
            </div>
            <div className={"flex flex-col justify-between flex-grow mt-2"}>
                <div className={"flex flex-col"}>
                    <p className={"mt-1 text-base"}>{title}</p>
                    <p className={"text-sm text-slate-600"}>{description}</p>

                    <div className={`bg-sky-100 text-sky-800 rounded-full flex items-center w-fit p-1 text-xs gap-1 mt-2`}>
                        <FaLocationDot/>
                        <span className={`text-xs pe-2`}>{location}</span>
                    </div>
                    <div className={"flex items-center gap-1 mt-3 pb-3"}>
                        {
                            tags.map((tag, index) => (
                                <span key={index} className={"text-xs text-slate-600 bg-slate-100 rounded-full px-2 py-1 mr-1"}>{tag}</span>
                            ))
                        }
                    </div>
                </div>
                <div className={"mt-auto flex items-center gap-1"}>
                    <button onClick={sendPing} className={"text-sm text-white bg-blue-800 rounded-full px-4 py-2 w-full cursor-pointer hover:bg-blue-700 transition-all duration-200"}>
                        Customize
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TripCard;