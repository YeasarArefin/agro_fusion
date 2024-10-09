
import getQuery from '@/lib/functions/FetchQuery';

export default async function SoilActivityState() {
    const x = await getQuery("https://api.openepi.io/soil/type?lon=87&lat=23.8221");

    return x?.properties?.most_probable_soil_type;
}
