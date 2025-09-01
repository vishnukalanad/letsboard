import React from 'react';
import Header from "../../../components/Header";
import {StatusCard, TripCard} from "../../../components";

function Dashboard() {
    const statusCardData = [
        {
            title: "Total Users",
            mainData: 17890,
            moneyFormat: false,
            chartData: {},
            percentageCalcData: {
                current: 17890,
                previous: 16567,
            }
        },
        {
            title: "Total Trip",
            mainData: 2357,
            moneyFormat: false,
            chartData: {},
            percentageCalcData: {
                current: 72,
                previous: 75,
            }
        },
        // {
        //     title: "Active Users",
        //     mainData: 10458,
        //     moneyFormat: false,
        //     chartData: {},
        //     percentageCalcData: {
        //         current: 10458,
        //         previous: 9878,
        //     }
        // },
        {
            title: "Revenue",
            mainData: 234000,
            moneyFormat: true,
            chartData: {},
            percentageCalcData: {
                current: 234000,
                previous: 234000,
            }
        },
    ]

    const tripCardData = [
        {
            "title": "Wayanad",
            "description": "Someting about Wayanad.",
            "location": "Kerala, India",
            "tags": ["Solo", "Travel", "Trip"],
            img: "/assets/images/sample.jpeg",
            price: 2000
        },
        {
            "title": "Bali",
            "description": "Popular Indonesian island known for its forested volcanic mountains, beaches, and coral reefs.",
            "location": "Indonesia",
            "tags": ["Beach", "Nature", "Relaxation"],
            img: "/assets/images/sample1.jpg",
            price: 3000
        },
        {
            "title": "Paris",
            "description": "The romantic capital of France, famous for the Eiffel Tower, art, and cuisine.",
            "location": "Île-de-France, France",
            "tags": ["Culture", "Romance", "Travel"],
            img: "/assets/images/sample2.jpg",
            price: 2300
        },
        {
            "title": "China",
            "description": "A vast country with rich history, diverse landscapes, and iconic landmarks like the Great Wall.",
            "location": "Asia",
            "tags": ["History", "Adventure", "Travel"],
            img: "/assets/images/sample3.jpg",
            price: 3100
        }
    ]
    return (
        <div>
            <Header title="👋 Hi Vishnu, plan you trip?" description="Track activity, trends and popular destination in realtime." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 mt-3">
                {
                    statusCardData.map((item, index) => (
                        <StatusCard key={index} {...item} />
                    ))
                }
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 mt-3">
                {
                    tripCardData.map((item, index) => (
                        <TripCard key={index} index={index} {...item} />
                    ))
                }
            </div>
        </div>
    );
}

export default Dashboard;