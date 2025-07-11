// api.js
export const getPosts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/job/', {
        method: "GET"
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
     
  
      return data; // use this if data is already an array
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  };
  