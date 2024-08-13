import { Fade } from "react-awesome-reveal";

export const Contact = () => {
    return (
        <div className="w-full bg-[#003A6B] text-white py-8 px-10 flex flex-col gap-10 items-center">
            <Fade className="text-5xl font-bold text-center">
                Need Urgent Help?
            </Fade>
            <Fade triggerOnce>
                <div className="text-3xl text-center flex flex-col gap-4 font-extrabold">
                    <p>24x7 Toll Free Number</p>
                    <p>1800-180-5522</p>
                    <p>helpline@antiragging.in</p>
                </div>
            </Fade>
        </div>
    );
};
