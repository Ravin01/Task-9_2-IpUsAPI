// Main function
async function show() {
    // fetch the data
    let res = await fetch('https://ipapi.co/8.8.8.8/json/');
    let res1 = await res.json();
    console.log(res1);
    // creating paragraph tag for display the information
    let para1 = document.createElement('p');
    para1.innerHTML = `Country Name : ${res1.country_name}`;
    let para2 = document.createElement('p');
    para2.innerHTML = `IP : ${res1.ip}`;
    let para3 = document.createElement('p');
    para3.innerHTML = `Country Population : ${res1.country_population}`;
    let para4 = document.createElement('p');
    para4.innerHTML = `Language : ${res1.languages}`;
    let para5 = document.createElement('p');
    para5.innerHTML = `City : ${res1.city}`;
    let para6 = document.createElement('p');
    para6.innerHTML = `Currency : ${res1.currency_name}`;
    let para7 = document.createElement('p');
    para7.innerHTML = `Capital : ${res1.country_capital}`;
    let para8 = document.createElement('p');
    para8.innerHTML = `Longitude : ${res1.longitude}`;
    let para9 = document.createElement('p');
    para9.innerHTML = `Latitude : ${res1.latitude}`;
    let para10 = document.createElement('p');
    para10.innerHTML = `Region : ${res1.region}`;

    // change the content of information paragraph 
    let info = document.getElementById('info');
    info.innerHTML = 'Here you can see some information about US';
    // append
    container.append(para1, para2, para3, para4, para5, para6, para7, para8, para9, para10);
}