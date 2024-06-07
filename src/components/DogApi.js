import { useEffect, useState } from "react";

const DogAPI = ({ breed, requestType }) => {
  const [dogImageUrl, setDogImageUrl] = useState();
  const [breedList, setBreedList] = useState();

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch(
          `https://api.thedogapi.com/v1/images/search?breed_ids=${breed}`,
          {
            headers: {
              'x-api-key': 'REACT_APP_DOG_API_KEY'
            }
          }
        );
        const data = await response.json();
        if (data && data.length > 0) {
          setDogImageUrl(data[0].url);
          data.forEach(obj => {
            console.log(obj);
          });
        }
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    fetchDogImage();
  }, [breed]);

  useEffect(() => {
    const fetchBreedInfo = async () => {
      try {
        const response = await fetch(
          `https://api.thedogapi.com/v1/breeds/${breed}`,
          {
            headers: {
              'x-api-key': 'REACT_APP_DOG_API_KEY'
            }
          }
        );
        const data = await response.json();
        if (data) {
          setBreedList(data);
        } else {
          console.log(`No dog breed returned`);
        }
      } catch (error) {
        console.error('Error fetching breed info:', error);
      }
    };

    fetchBreedInfo();
  }, [breed, setBreedList]); // Added setBreedList as a dependency

  if (requestType === "image") {
    return (
      <>
        <img className="dog-api" src={dogImageUrl} alt="random dog image" />
        <p>Featured Dog!</p>
      </>
    );
  }

  if (requestType === "info") {
    if(!breedList){

    }
    else{
      console.log(breedList);
      return(
        <>
          <h2>{breedList.name}</h2>
          <p>{breedList.temperament}</p>
        </>
      )
    }
  } else {
    return null;
  }
};

export default DogAPI;
