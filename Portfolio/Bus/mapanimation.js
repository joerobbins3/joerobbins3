async function run(){
    const locations = await fetchBuslocations();
    setTimeout(run, 15000);
}
async function fetchBuslocations(){
    const url = '';
    const response = await fetch(url);
    const json = await response.json();
    return json.data;
}
run();