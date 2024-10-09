// import icons from "@/constants/menuIcons";
// import Image from "next/image";

import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function Hero() {
    return (
        <header>
            <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center mt-[50px] mb-[120px]">

                <div className="relative">
                    <div className="text-6xl font-bold flex mb-[8%]">
                        <h1 className="text-primary">Agro</h1>
                        <span>Fusion</span>
                    </div>
                    <p>Empowering farmers with real-time insights to protect crops, manage resources, and thrive in any condition</p>
                    <div className="hidden lg:block w-[600px] h-[600px] bg-primary absolute filter opacity-10 -top-[400px] rotate-45 -left-[200px] blur-3xl"></div>
                </div>

                <div>
                    <Image src={icons.farmer_2} alt="frame" />
                </div>

            </div>
        </header>
    );
}