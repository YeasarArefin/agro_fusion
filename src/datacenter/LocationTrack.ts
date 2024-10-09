import { getData } from "@/datacenter/esp32";

let latitude = 0;
let longitude = 0;

async function fetchData() {
	try {
		const data = await getData();
		latitude = data?.Latitude;
		longitude = data?.Longitude;


	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
fetchData();
export { latitude, longitude };


