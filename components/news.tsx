import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export const News = () => {
    return (
        <>
            <Fade className="text-4xl font-bold text-[#003A6B] text-center mt-10">
                Ragging Spreads in India
            </Fade>
            <div className="w-full px-10 mb-16 flex justify-center gap-10 md:flex-wrap">
                <Link
                    href={
                        "https://www.deccanherald.com/india/rajasthan/rajasthan-student-undergoes-dialysis-after-ragging-in-medical-college-3081467"
                    }
                    className="border-2 border-[#89CFF1] outline-dashed outline-2 outline-[#89CFF1] outline-offset-2 flex flex-col items-center gap-4 p-4 rounded-xl"
                >
                    <img
                        src="https://images.deccanherald.com/deccanherald%2F2024-06%2F21256482-2a4e-4330-93fe-4e01173cc534%2FiStock_1560100163.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.3"
                        className="w-[250px] h-[250px] object-cover rounded-lg"
                    />
                    <p className="text-xl text-center font-bold w-[230px]">
                        Rajasthan: Student undergoes dialysis after ragging in
                        medical college
                    </p>
                </Link>

                <Link
                    href={
                        "https://indianexpress.com/article/india/medical-student-ragged-to-the-point-of-hospitalisation-and-dialysis-fir-against-7-seniors-in-rajasthan-9419233/"
                    }
                    className="border-2 border-[#89CFF1] outline-dashed outline-2 outline-[#89CFF1] outline-offset-2 flex flex-col items-center gap-4 p-4 rounded-xl"
                >
                    <img
                        src="https://images.indianexpress.com/2024/06/Ragging.jpg?w=640"
                        className="w-[250px] h-[250px] object-cover rounded-lg"
                    />
                    <p className="text-xl text-center font-bold w-[230px]">
                        Medical student ragged to the point of hospitalisation
                        and dialysis, FIR against 7 seniors in Rajasthan
                    </p>
                </Link>

                <Link
                    href={
                        "https://www.hindustantimes.com/cities/chandigarh-news/tanda-medical-college-four-mbbs-students-expelled-fined-for-ragging-101718133395783.html"
                    }
                    className="border-2 border-[#89CFF1] outline-dashed outline-2 outline-[#89CFF1] outline-offset-2 flex flex-col items-center gap-4 p-4 rounded-xl"
                >
                    <img
                        src="https://www.hindustantimes.com/ht-img/img/2024/06/11/550x309/The-other-two-students-were-of-2021-batch---HT-Pho_1718133351195.jpg"
                        className="w-[250px] h-[250px] object-cover rounded-lg"
                    />
                    <p className="text-xl text-center font-bold w-[230px]">
                        Tanda Medical College: Four MBBS students expelled,
                        fined for ragging
                    </p>
                </Link>
            </div>
        </>
    );
};
