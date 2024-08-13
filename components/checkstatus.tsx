"use client";
import { CircleCheckBig, PenLine } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FormEvent } from "react";

export const CheckStatus = () => {
    const hanldeReportStatus = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const id = formData.get("id");
        const res = await fetch(`/api/report/${id}`);
        const response = await res.json();
        console.log(response);
        alert(response.data.report.status);
    };
    return (
        <div className="w-full min-h-screen text-[#003A6B] px-10 py-8 ">
            <div className="bg-[#89CFF1] flex flex-col gap-10 items-center rounded-xl p-8">
                <CircleCheckBig width={72} height={72} color="#003a6b" />
                <Fade className="text-5xl font-bold text-center">
                    Check your Complaint Status
                </Fade>

                <div className="bg-white w-full rounded-lg flex justify-center gap-10 md:flex-wrap">
                    <div className="p-4 flex flex-col justify-center gap-5">
                        <p className="text-xl font-medium">
                            Complaints registered after{" "}
                            <span className="font-bold text-[#">
                                After April 2024
                            </span>
                        </p>
                        <form
                            onSubmit={hanldeReportStatus}
                            className="w-full flex flex-col justify-center gap-5"
                        >
                            <Input
                                type="text"
                                placeholder="Complaint Number"
                                name="id"
                            />
                            <Button variant={"destructive"} type="submit">
                                Check Status
                            </Button>
                        </form>
                    </div>
                    <img
                        src="https://www.antiragging.in/assets/img/index/complaint-status.png"
                        className="w-auto h-[400px]"
                    />
                </div>
            </div>
        </div>
    );
};
