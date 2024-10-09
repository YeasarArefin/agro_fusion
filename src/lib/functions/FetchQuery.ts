export default async function getQuery(url: string) {
    const response = await fetch(url, { cache: 'no-cache' });
    return response.json();
}