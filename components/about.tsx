import {
    HandHeart,
    HeartPulse,
    Library,
    Scale,
    School,
    ShieldPlus,
    Tablets,
} from "lucide-react";
import Link from "next/link";
import { Fade, Slide } from "react-awesome-reveal";
import { News } from "./news";
import { Impact } from "./impact";
import { Importance } from "./importance";

export const About = () => {
    return (
        <div className="w-full min-h-screen bg-white py-8 flex flex-col gap-10 items-center">
            <Fade className="text-5xl font-bold text-center text-[#003A6B]">
                Why stop Ragging?
            </Fade>
            <div className="px-24 w-full h-[550px]">
                <iframe
                    className="w-full h-full rounded-xl "
                    src="https://www.youtube.com/embed/PKUZ6HUiLFY"
                    title="STOP Human Rights Violations in the name of RAGGING"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>

            <Slide direction="up" triggerOnce>
                <div className="relative px-10 md:px-4">
                    <div className="bg-[#1B5886] text-white p-12 rounded-t-xl md:p-5">
                        <p className="text-2xl text-center font-medium">
                            Ragging is a form of harassment where senior
                            students{" "}
                            <span className="text-3xl text-yellow-400">
                                intimidate, bully, or physically or mentally
                                abuse
                            </span>{" "}
                            new students, often under the guise of an initiation
                            ritual. It can range from mild teasing to severe
                            abuse, creating a{" "}
                            <span className="text-3xl text-yellow-400">
                                hostile and unsafe environment for those
                                targeted.
                            </span>
                        </p>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#1B5886"
                            fill-opacity="1"
                            d="M0,288L12.6,250.7C25.3,213,51,139,76,90.7C101.1,43,126,21,152,53.3C176.8,85,202,171,227,186.7C252.6,203,278,149,303,154.7C328.4,160,354,224,379,218.7C404.2,213,429,139,455,144C480,149,505,235,531,224C555.8,213,581,107,606,64C631.6,21,657,43,682,42.7C707.4,43,733,21,758,48C783.2,75,808,149,834,181.3C858.9,213,884,203,909,165.3C934.7,128,960,64,985,37.3C1010.5,11,1036,21,1061,74.7C1086.3,128,1112,224,1137,261.3C1162.1,299,1187,277,1213,250.7C1237.9,224,1263,192,1288,170.7C1313.7,149,1339,139,1364,133.3C1389.5,128,1415,128,1427,128L1440,128L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
                        ></path>
                    </svg>
                    <div className="absolute bottom-0 right-0 max-[700px]:bottom-[-50px]">
                        <iframe
                            className="w-[250px] h-[250px]"
                            src="https://lottie.host/embed/d4281cdf-cd87-42ad-907a-835e330f180d/BoLMpXuxWZ.json"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                </div>
            </Slide>

            <Impact />
            <div className="w-full px-16 py-16 bg-[#1B5886] map-box flex flex-col gap-4 text-white">
                <Fade className="text-4xl font-bold text-center">
                    Ragging Stats in Asia
                </Fade>
                <iframe
                    src="https://ourworldindata.org/grapher/share-of-children-ages-13-15-who-report-being-bullied?region=Asia&tab=map"
                    loading="lazy"
                    className="w-full h-[500px] border-none rounded-xl"
                    allow="web-share; clipboard-write"
                ></iframe>
            </div>

            <News />
            <Importance />
        </div>
    );
};
