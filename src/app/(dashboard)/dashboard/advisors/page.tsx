import PageTitle from '@/components/ui/PageTitle';

const advisors = [
    {
        "name": "Dr. Rahman Hossain",
        "title": "Professor of Agricultural Sciences",
        "organization": "Bangladesh Agricultural University",
        "specialization": "Sustainable Crop Production",
        "email": "rahman.hossain@bau.edu.bd",
        "phone": "+880-1723-456789",
        "location": "Mymensingh, Bangladesh"
    },
    {
        "name": "Ms. Farhana Zaman",
        "title": "Senior Agronomist",
        "organization": "International Rice Research Institute (IRRI)",
        "specialization": "Rice Cultivation & Water Management",
        "email": "farhana.zaman@irri.org.bd",
        "phone": "+880-1911-234567",
        "location": "Dhaka, Bangladesh"
    },
    {
        "name": "Dr. Abdullah Al Mamun",
        "title": "Soil Scientist",
        "organization": "Soil Resource Development Institute",
        "specialization": "Soil Fertility & Land Management",
        "email": "abdullah.mamun@sri.gov.bd",
        "phone": "+880-1834-765432",
        "location": "Chattogram, Bangladesh"
    },
    {
        "name": "Engr. Kazi Saiful Islam",
        "title": "Agricultural Engineer",
        "organization": "Bangladesh Agricultural Research Institute",
        "specialization": "Agro-machinery Development",
        "email": "kazi.saiful@bari.gov.bd",
        "phone": "+880-1755-654321",
        "location": "Gazipur, Bangladesh"
    },
    {
        "name": "Prof. Shahana Akter",
        "title": "Plant Pathologist",
        "organization": "Sher-e-Bangla Agricultural University",
        "specialization": "Plant Disease Management",
        "email": "shahana.akter@sau.edu.bd",
        "phone": "+880-1811-987654",
        "location": "Dhaka, Bangladesh"
    },
    {
        "name": "Mr. Jalal Uddin",
        "title": "Agriculture Extension Officer",
        "organization": "Department of Agricultural Extension (DAE)",
        "specialization": "Farm Advisory Services",
        "email": "jalal.uddin@dae.gov.bd",
        "phone": "+880-1777-543210",
        "location": "Rajshahi, Bangladesh"
    },
    {
        "name": "Dr. Nargis Rahman",
        "title": "Horticulture Specialist",
        "organization": "Hortex Foundation",
        "specialization": "Fruit and Vegetable Production",
        "email": "nargis.rahman@hortex.org.bd",
        "phone": "+880-1611-678912",
        "location": "Sylhet, Bangladesh"
    },
    {
        "name": "Mr. Aminul Haque",
        "title": "Fishery Scientist",
        "organization": "Bangladesh Fisheries Research Institute",
        "specialization": "Aquaculture & Fish Breeding",
        "email": "aminul.haque@fri.gov.bd",
        "phone": "+880-1922-765432",
        "location": "Mymensingh, Bangladesh"
    },
    {
        "name": "Dr. Tasnim Jahan",
        "title": "Entomologist",
        "organization": "Bangladesh Agricultural Research Council",
        "specialization": "Insect Pest Control",
        "email": "tasnim.jahan@barc.gov.bd",
        "phone": "+880-1733-987654",
        "location": "Khulna, Bangladesh"
    },
    {
        "name": "Dr. Rashedul Karim",
        "title": "Climate Change Specialist",
        "organization": "Bangladesh Centre for Advanced Studies",
        "specialization": "Climate-Resilient Agriculture",
        "email": "rashedul.karim@bcas.org.bd",
        "phone": "+880-1622-543210",
        "location": "Dhaka, Bangladesh"
    }
];


const page = () => {
    return (
        <main className="lg:px-16">
            <PageTitle title="Advisors" />

            <div className="grid grid-cols-1 lg:grid-cols-3">
                {
                    advisors?.map((advisor, index) => (
                        <div key={index} className="border-b border-slate-200 p-5">
                            <div className="flex flex-col">
                                <h3 className='text-xl font-bold'>{index + 1}.{advisor.name}</h3>
                                <p>{advisor.title}</p>
                            </div>
                            <div className="flex-shrink-0">
                                <a href={`mailto:${advisor.email}`} className="text-primary">
                                    {advisor?.email}
                                </a>
                                <p>{advisor?.phone}</p>
                            </div>
                        </div>
                    ))

                }
            </div>
        </main>
    );
};

export default page;