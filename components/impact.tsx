import { HeartPulse, Library, Tablets } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export const Impact = () => {
    return (
        <>
            <Fade className="text-4xl font-bold text-[#003A6B] text-center">
                Impact on Students
            </Fade>
            <Fade triggerOnce>
                <div className="w-full flex justify-between text-center gap-10 px-10 max-[1000px]:flex-wrap">
                    <div className="w-full bg-slate-200 p-10 rounded-xl">
                        <div className="font-semibold text-3xl flex gap-3 flex-col items-center justify-between">
                            <HeartPulse
                                width={72}
                                height={72}
                                strokeWidth={1.5}
                            />
                            Psychological Trauma
                        </div>
                    </div>
                    <div className="w-full bg-slate-200 p-10 rounded-xl">
                        <div className="font-semibold text-3xl flex gap-3 flex-col items-center justify-between">
                            <Library width={72} height={72} strokeWidth={1.5} />
                            Academic Disruption
                        </div>
                    </div>
                    <div className="w-full bg-slate-200 p-10 rounded-xl">
                        <div className="font-semibold text-3xl flex gap-3 flex-col items-center justify-between">
                            <Tablets width={72} height={72} strokeWidth={1.5} />
                            Physical Harm
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};
