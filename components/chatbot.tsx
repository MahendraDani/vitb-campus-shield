import { FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MessageCircleMore } from "lucide-react";

export const ChatBot = () => {
    const [show, setShow] = useState(false);
    const [aiResponse, setAIResponse] = useState("");
    const handleChat = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get("query");
        console.log(query);
        const res = await fetch(`/api/chat?query=${query}`);
        if (!res.ok) {
            alert("Something went wong");
            return;
        }

        const response = await res.json();
        console.log(response);
        setAIResponse(response.chat);
    };
    return (
        <div className="fixed right-4 bottom-4 z-[10]">
            {show ? (
                <div className="w-[28rem] h-[36rem] bg-white z-10 rounded-sm p-4 flex flex-col gap-4 border-2 border-black">
                    <div>
                        <label className="font-bold text-xl">
                            Ask any questions to AI?
                        </label>
                        <form onSubmit={handleChat}>
                            <fieldset className="flex flex-col gap-3 mt-3">
                                <Input name="query" />
                                <Button
                                    type="submit"
                                    className="bg-[#89CFF1] text-black font-semibold w-full"
                                >
                                    Submit
                                </Button>
                            </fieldset>
                        </form>
                    </div>
                    <div>{aiResponse}</div>
                    <Button
                        className="font-semibold w-full"
                        variant={"destructive"}
                        onClick={() => setShow(false)}
                    >
                        Close
                    </Button>
                </div>
            ) : (
                <button
                    className="w-16 h-16 rounded-full bg-[#89CFF1] text-[#003A6B] flex items-center justify-center"
                    onClick={() => setShow(true)}
                >
                    <MessageCircleMore width={32} height={32} />
                </button>
            )}
        </div>
    );
};
