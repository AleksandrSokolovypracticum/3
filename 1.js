// Define an async function named fetchData
async function fetchData() {
  // Use the fetch method to send a GET request to the specified URL and wait for the response
    const response = await fetch('https://70c2607f-86eb-48eb-9b65-fd867e948f59.serverhub.practicum-services.com/api/v1/warehouses');
    // Use the json method on the response object to extract the data from the response body and wait for it to be parsed
    const data = await response.json();    
    console.log(data);
}

// Call the fetchData function to execute it
fetchData(); 