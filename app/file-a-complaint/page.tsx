"use client";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { ChatBot } from "@/components/chatbot";
import { Header } from "@/components/header";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Component() {
    const [saving, setSaving] = useState(false);
    async function hanldeReport(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSaving(true);
        const formData = new FormData(e.currentTarget);
        const abuse = formData.get("abuse");
        const action = formData.get("action");
        const description = formData.get("description");
        const evidenceLink = formData.get("evidenceLink");
        const location = formData.get("location");
        const parties = formData.get("parties");
        const severity = formData.get("severity");
        const title = formData.get("title");
        console.log(abuse);
        console.log(action);
        console.log(description);
        console.log(evidenceLink);
        console.log(location);
        console.log(parties);
        console.log(severity);
        console.log(title);

        // alert("I am working");
        const res = await fetch(`/api/report`, {
            method: "POST",
            body: JSON.stringify({
                abuse,
                action,
                description,
                evidenceLink,
                location,
                parties,
                severity,
                title,
            }),
        });
        if (!res.ok) {
            setSaving(false);
        }
        const response = await res.json();
        console.log(response);
        setSaving(false);
        alert(`Report No: ${response.report.report.id}`);
    }

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between pt-16">
            <ChatBot />
            <Header />
            <form onSubmit={hanldeReport} className="w-full my-10 px-16">
                <fieldset disabled={saving}>
                    <Card className="w-full mx-auto">
                        <CardHeader>
                            <CardTitle>File a Complaint</CardTitle>
                            <CardDescription>
                                Use this form to report an incident and request
                                appropriate action.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="w-full flex gap-6">
                            <div className="w-full flex flex-col gap-3 text-lg">
                                <div className="grid gap-2">
                                    <label
                                        className="font-medium"
                                        htmlFor="title"
                                    >
                                        Title
                                    </label>
                                    <Textarea
                                        id="title"
                                        name="title"
                                        placeholder="Briefly describe the incident"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="font-medium"
                                        htmlFor="incident-type"
                                    >
                                        Type of Incident
                                    </label>
                                    <Select name="abuse">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select incident type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="verbal-abuse">
                                                Verbal Abuse
                                            </SelectItem>
                                            <SelectItem value="physical-abuse">
                                                Physical Abuse
                                            </SelectItem>
                                            <SelectItem value="cyberbullying">
                                                Cyberbullying
                                            </SelectItem>
                                            <SelectItem value="harassment">
                                                Harassment
                                            </SelectItem>
                                            <SelectItem value="intimidation">
                                                Intimidation
                                            </SelectItem>
                                            <SelectItem value="other">
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="grid gap-2">
                                    <label
                                        className="font-medium"
                                        htmlFor="location"
                                    >
                                        Location of Incident
                                    </label>
                                    <Input
                                        id="location"
                                        name="location"
                                        placeholder="Classroom, Hostel, Cafeteria, Library, etc."
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="font-medium"
                                        htmlFor="description"
                                    >
                                        Description of Incident
                                    </label>
                                    <Textarea
                                        name="description"
                                        id="description"
                                        placeholder="Provide details about what happened"
                                        className="min-h-[150px]"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-3 text-lg">
                                <div className="grid gap-2">
                                    <label
                                        className="font-medium"
                                        htmlFor="involved-parties"
                                    >
                                        Involved Parties
                                    </label>
                                    <Select name="parties">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select involved parties" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="student">
                                                Student
                                            </SelectItem>
                                            <SelectItem value="faculty">
                                                Faculty
                                            </SelectItem>
                                            <SelectItem value="staff">
                                                Staff Member
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="font-medium"
                                        htmlFor="severity"
                                    >
                                        Severity of Incident
                                    </label>

                                    <Select name="severity">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select severity of incident" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="low">
                                                Low
                                            </SelectItem>
                                            <SelectItem value="medium">
                                                Medium
                                            </SelectItem>
                                            <SelectItem value="high">
                                                High
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="font-medium"
                                        htmlFor="evidence"
                                    >
                                        Supporting Evidence
                                    </label>
                                    <Input
                                        name="evidenceLink"
                                        id="evidence"
                                        type="url"
                                        placeholder="Link to files, images, or videos"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="font-medium"
                                        htmlFor="preferred-action"
                                    >
                                        Preferred Action
                                    </label>
                                    <Select name="action">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select preferred action" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="just-report">
                                                Just Report
                                            </SelectItem>
                                            <SelectItem value="require-attention">
                                                Require Immediate Attention
                                            </SelectItem>
                                            <SelectItem value="discuss-authorities">
                                                Want to Discuss with Authorities
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button
                                type="submit"
                                variant={"destructive"}
                                className="text-2xl font-semibold w-full py-3"
                            >
                                {saving ? "Submitting..." : "File a Complaint"}
                            </Button>
                        </CardFooter>
                    </Card>
                </fieldset>
            </form>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#003A6B"
                    fill-opacity="1"
                    d="M0,96L40,117.3C80,139,160,181,240,170.7C320,160,400,96,480,96C560,96,640,160,720,208C800,256,880,288,960,256C1040,224,1120,128,1200,90.7C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                ></path>
            </svg>
            <Contact />
            <Footer />
        </main>
    );
}
