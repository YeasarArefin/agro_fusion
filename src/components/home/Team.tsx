import icons from "@/constants/menuIcons";
import Image from "next/image";

export default function Team() {

    const teamData = [
        {
            name: 'S.M Abtahi Noor',
            designation: 'Team Leader & Software Developer',
            image: icons.abrahi,
        },
        {
            name: 'Yeasar Arefin',
            designation: 'Software Developer',
            image: icons.yeasar,
        },
        {
            name: 'Ragib Yasar Rahman',
            designation: 'Hardware Management',
            image: icons.ragib,
        },
        {
            name: 'Farhan Ishmam',
            designation: 'Hardware Management',
            image: icons.farhan,
        },
        {
            name: 'Abdul Munemul Talha',
            designation: 'Video Editor',
            image: icons.talha,
        },
        {
            name: 'Mst. Sumaiya',
            designation: 'UI/UX Designer',
            image: icons.sumaiya,
        },
    ];

    return (
        <div className="bg-[#f3fff5] border-b-2 border-primary mt-[300px] mb-[200px]">
            <div className="container pt-[100px]">
                <div className="text-center mb-20">
                    <h1 className="text-3xl font-bold mb-2">Meet Our Team</h1>
                    <p>Get to know the passionate team driving innovation and supporting sustainable farming</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-6 gap-y-[100px]">
                    {teamData.map(({ name, image, designation }) => <div key={name} className="flex flex-col justify-center items-center relative">
                        <Image src={image} alt={name} />
                        <Image src={icons.vector} alt="vector" className="absolute -bottom-5" />
                        <div className="text-center absolute -bottom-20">
                            <h1 className="text-primary font-bold">{name}</h1>
                            <h1 className="text-sm">{designation}</h1>
                        </div>
                    </div>)}
                </div>
            </div>

        </div>
    );
}
