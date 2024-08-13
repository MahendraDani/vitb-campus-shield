import { ShieldPlus, School, Scale, HandHeart } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export const Importance = () => {
    return (
        <div className="prevention-box bg-[#89CFF1] w-full py-20 px-6 flex flex-col justify-center items-center gap-5 text-[#003A6B]">
            <Fade className="text-4xl font-bold text-center">
                Why It Is Important to Prevent Ragging
            </Fade>
            <Fade triggerOnce>
                <div className="w-full flex justify-center gap-10 max-[1200px]:flex-wrap">
                    <div className="w-full">
                        <div className="w-full bg-white p-10 rounded-t-xl">
                            <div className="font-semibold text-3xl text-center flex gap-3 flex-col items-center justify-between">
                                <ShieldPlus
                                    width={72}
                                    height={72}
                                    strokeWidth={1.5}
                                />
                                Protects Student Safety and Well-being
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#fff"
                                fill-opacity="1"
                                d="M0,160L40,133.3C80,107,160,53,240,69.3C320,85,400,171,480,181.3C560,192,640,128,720,101.3C800,75,880,85,960,85.3C1040,85,1120,75,1200,106.7C1280,139,1360,213,1400,250.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                            ></path>
                        </svg>
                    </div>

                    <div className="w-full">
                        <div className="w-full bg-white p-10 rounded-t-xl">
                            <div className="font-semibold text-3xl text-center flex gap-3 flex-col items-center justify-between">
                                <School
                                    width={72}
                                    height={72}
                                    strokeWidth={1.5}
                                />
                                Promotes a Positive Campus Culture
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#fff"
                                fill-opacity="1"
                                d="M0,288L40,250.7C80,213,160,139,240,90.7C320,43,400,21,480,58.7C560,96,640,192,720,213.3C800,235,880,181,960,186.7C1040,192,1120,256,1200,256C1280,256,1360,192,1400,160L1440,128L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                            ></path>
                        </svg>
                    </div>

                    <div className="w-full">
                        <div className="w-full bg-white p-10 rounded-t-xl">
                            <div className="font-semibold text-3xl text-center flex gap-3 flex-col items-center justify-between">
                                <Scale
                                    width={72}
                                    height={72}
                                    strokeWidth={1.5}
                                />
                                Ensures Legal Compliance
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#fff"
                                fill-opacity="1"
                                d="M0,224L40,208C80,192,160,160,240,122.7C320,85,400,43,480,42.7C560,43,640,85,720,122.7C800,160,880,192,960,213.3C1040,235,1120,245,1200,261.3C1280,277,1360,299,1400,309.3L1440,320L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                            ></path>
                        </svg>
                    </div>

                    <div className="w-full">
                        <div className="w-full bg-white p-10 rounded-t-xl">
                            <div className="font-semibold text-3xl text-center flex gap-3 flex-col items-center justify-between">
                                <HandHeart
                                    width={72}
                                    height={72}
                                    strokeWidth={1.5}
                                />
                                Fosters Mutual Respect and Inclusion
                            </div>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                        >
                            <path
                                fill="#fff"
                                fill-opacity="1"
                                d="M0,256L40,245.3C80,235,160,213,240,186.7C320,160,400,128,480,144C560,160,640,224,720,250.7C800,277,880,267,960,256C1040,245,1120,235,1200,197.3C1280,160,1360,96,1400,64L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                            ></path>
                        </svg>
                    </div>
                </div>
            </Fade>
        </div>
    );
};
