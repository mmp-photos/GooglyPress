import { useEffect, useState } from "react";

const DogAPI = () => {
    const [ catImageUrl, setCatImageUrl ] = useState();

    useEffect(() => {
        const fetchCatImage = async () => {
          try {
            const response = await fetch('https://api.thedogapi.com/v1/images/search', {
              headers: {
                'x-api-key': 'REACT_APP_DOG_API_KEY' // Replace YOUR_API_KEY with your actual API key
              }
            });
            const data = await response.json();
            if (data && data.length > 0) {
              setCatImageUrl(data[0].url);
            }
          } catch (error) {
            console.error('Error fetching cat image:', error);
          }
        };
    
        fetchCatImage();
      }, []); // Empty dependency array means this effect runs once after the initial render

      
    return(
      <>
        <img src={catImageUrl} alt="random dog image" />
      </>
    )
};

export default DogAPI;