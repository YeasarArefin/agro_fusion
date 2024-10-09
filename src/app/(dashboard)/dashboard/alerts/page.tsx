import AlertsComp from "@/components/alerts/AlertsComp";
import PageTitle from "@/components/ui/PageTitle";
import getQuery from "@/lib/functions/FetchQuery";


export default async function page() {
    const { data: alerts } = await getQuery('https://agro-fusion.vercel.app/api/alert/');


   
    return (
        <main className="lg:px-16">
        <PageTitle title="Alerts" />

        <div className="flex flex-col space-y-2 py-8">
            <AlertsComp data={alerts}/>
        </div>
    </main>
    );
}
