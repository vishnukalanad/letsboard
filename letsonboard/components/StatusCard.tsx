import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

function StatusCard({title, mainData, chartData, percentageCalcData, moneyFormat}: { title: string, mainData: number, chartData: any, percentageCalcData: {current: number, previous: number}, moneyFormat: boolean}) {

    function calcPercentage() {
        return Math.floor((percentageCalcData.current - percentageCalcData.previous) / percentageCalcData.previous * 100);
    }
    
    function  growthClass() {
        let classes = "";
        const change: number = percentageCalcData.current - percentageCalcData.previous;
        if (change > 0) {
            classes = "text-green-700";
        } else if (change < 0) {
            classes = "text-red-700";
        } else {
            classes = "text-slate-700";
        }
        return classes;
    }

    function growthIcon() {
        const growth =calcPercentage();
        if (growth > 0) {
            return <FaArrowTrendUp />
        } else if (growth < 0) {
            return <FaArrowTrendDown />
        } else {
            return <FaArrowRightLong />
        }
    }

    function formatMoney(num: number) {
        if (num === null || num === undefined) return "0";

        const absNum = Math.abs(num);
        let formatted;

        if (absNum >= 1.0e9) {
            formatted = (num / 1.0e9).toFixed(2) + "B";
        } else if (absNum >= 1.0e6) {
            formatted = (num / 1.0e6).toFixed(2) + "M";
        } else if (absNum >= 1.0e3) {
            formatted = (num / 1.0e3).toFixed(2) + "K";
        } else {
            formatted = num.toString();
        }

        return formatted;
    }

    useGSAP(() => {
        gsap.set("#status-card", {
            visibility: "visible",
        })

        gsap.fromTo(
            "#status-card",
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 0.4,
                ease: "back.inOut(1.7)",
            }
        )
    })

    return (
        <div className="p-4 bg-white w-full shadow-md shadow-slate-100 rounded-xl" id={"status-card"}>
            <p className="text-sm m-0 text-slate-500">{title}</p>
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1 mt-2">
                    <p className="text-xl font-medium m-0">{moneyFormat ? formatMoney(mainData) : mainData}</p>
                    <p className={`text-xs font-medium m-0 ${growthClass()} flex items-center gap-1`}>{growthIcon()} <span className={`text-slate-600`}>{calcPercentage()}% compared to last week</span></p>
                </div>
            </div>
        </div>
    );
}

export default StatusCard;