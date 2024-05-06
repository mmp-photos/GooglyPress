import { useEffect, useState } from "react";

const DogAPI = () => {
    const [ catImageUrl, setCatImageUrl ] = useState();

    useEffect(() => {
        const fetchCatImage = async () => {
          try {
            const response = await fetch('https://api.thedogapi.com/v1/images/search?breed_ids=50', {
              headers: {
                'x-api-key': 'REACT_APP_DOG_API_KEY' // Replace YOUR_API_KEY with your actual API key
              }
            });
            const data = await response.json();
            if (data && data.length > 0) {
              setCatImageUrl(data[0].url);
              console.log(`${data[0]}`)
            }
          } catch (error) {
            console.error('Error fetching cat image:', error);
          }
        };
    
        fetchCatImage();
      }, []); // Empty dependency array means this effect runs once after the initial render

      
    return(
      <>
        <img className="dog-api" src={catImageUrl} alt="random dog image" />
        <p>Featured Dog!</p>
      </>
    )
};

export default DogAPI;