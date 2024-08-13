import { PenLine } from "lucide-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export const FileComplaint = () => {
    return (
        <div className="w-full min-h-screen bg-white text-[#003A6B] px-10 py-8 flex flex-col gap-10 items-center">
            <PenLine width={72} height={72} color="#003a6b" />
            <Fade className="text-5xl font-bold text-center">
                Fill your Complaint
            </Fade>
            <Fade triggerOnce>
                <div className="flex gap-14 md:flex-wrap">
                    <Link
                        href={
                            "https://www.antiragging.in/affidavit_registration_disclaimer.html"
                        }
                        className="w-[300px] h-[300px] bg-[#003A6B] pb-2 border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] rounded-xl flex flex-col gap-3 text-white hover:bg-white hover:text-[#003a6b] transition-colors"
                    >
                        <img
                            src="https://www.antiragging.in/assets/img/index/register.webp"
                            className="h-[250px] rounded-t-xl"
                        />
                        <p className="rounded-b-xl text-xl font-semibold text-center">
                            Fill Undertaking
                        </p>
                    </Link>

                    <Link
                        href={
                            "https://www.antiragging.in/compliance_desclaimer.html"
                        }
                        className="w-[300px] h-[300px] bg-[#003A6B] pb-2 border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] rounded-xl flex flex-col gap-3 text-white hover:bg-white hover:text-[#003a6b] transition-colors"
                    >
                        <img
                            src="https://www.antiragging.in/assets/img/index/compliance.webp"
                            className="h-[250px] rounded-t-xl"
                        />
                        <p className="rounded-b-xl text-xl font-semibold text-center">
                            Fill Compliance
                        </p>
                    </Link>

                    <Link
                        href={"/file-a-complaint"}
                        className="w-[300px] h-[300px] bg-[#003A6B] pb-2 border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] rounded-xl flex flex-col gap-3 text-white hover:bg-white hover:text-[#003a6b] transition-colors"
                    >
                        <img
                            src="https://www.antiragging.in/assets/img/index/being-ragged.webp"
                            className="h-[250px] rounded-t-xl"
                        />
                        <p className="rounded-b-xl text-xl font-semibold text-center">
                            Register Complaint
                        </p>
                    </Link>

                    <Link
                        href={
                            "https://www.antiragging.in/undertaking_request.php"
                        }
                        className="w-[300px] h-[300px] bg-[#003A6B] pb-2 border-2 border-[#003A6B] outline-2 outline outline-offset-4 outline-[#003A6B] rounded-xl flex flex-col gap-3 text-white hover:bg-white hover:text-[#003a6b] transition-colors"
                    >
                        <img
                            src="https://www.antiragging.in/assets/img/index/get_document.webp"
                            className="h-[250px] rounded-t-xl"
                        />
                        <p className="rounded-b-xl text-xl font-semibold text-center">
                            Undertaking Document
                        </p>
                    </Link>
                </div>
            </Fade>
        </div>
    );
};
