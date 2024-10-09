import icons from "@/constants/menuIcons";
import Image from "next/image";

const Spinner = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen relative">
            <div className="logo_font text-3xl absolute">
                <Image src={icons.brandLogo} width={140} alt="loader" />
            </div>
            <div className="w-[170px] h-[170px] border-4 border-primary border-dashed rounded-full animate-spin" />
        </div>
    );
};

export default Spinner;