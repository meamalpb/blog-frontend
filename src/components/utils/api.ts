async function sendDataToRails(method: string, route: string, bodyData: any) {
    const url = `http://localhost:3000${route}`;
  
    const requestOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json', // Set appropriate content type
      },
      body: JSON.stringify(bodyData), // Convert body data to JSON string
    };
  
    try {
      const response = await fetch(url, requestOptions);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log('Response from Rails:', data);
      return data; // Return response data if needed
    } catch (error:any) {
      console.error('There was a problem with your fetch operation:', error.message);
      throw error;
    }
  }

  export { sendDataToRails };