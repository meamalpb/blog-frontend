import { useEffect } from "react";
export default function Test() {
  const fetchData = async () => {
    try {
      const responseData = await fetch(`http://localhost:3000/posts`, {method: "GET",
      headers: {
        'Content-Type': 'application/json', // Set appropriate content type
      }});
      const response = await responseData.json();
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>Test</div>
  );
}
