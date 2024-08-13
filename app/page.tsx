"use client";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { FileComplaint } from "@/components/file-complaint";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Landing } from "@/components/landing";
import { Laws } from "@/components/laws";
import { Support } from "@/components/support";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between pt-16">
            <Header />
            <Landing />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#003A6B"
                    fill-opacity="1"
                    d="M0,32L12,64C24,96,48,160,72,202.7C96,245,120,267,144,240C168,213,192,139,216,112C240,85,264,107,288,117.3C312,128,336,128,360,106.7C384,85,408,43,432,32C456,21,480,43,504,64C528,85,552,107,576,117.3C600,128,624,128,648,112C672,96,696,64,720,74.7C744,85,768,139,792,170.7C816,203,840,213,864,229.3C888,245,912,267,936,234.7C960,203,984,117,1008,90.7C1032,64,1056,96,1080,117.3C1104,139,1128,149,1152,154.7C1176,160,1200,160,1224,154.7C1248,149,1272,139,1296,112C1320,85,1344,43,1368,74.7C1392,107,1416,213,1428,266.7L1440,320L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"
                ></path>
            </svg>
            <About />
            <FileComplaint />
            <Laws />
            <Support />
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
