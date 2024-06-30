import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BuyButton from './BuyButton';

const DogAPI = ({ breed, requestType, bookID }) => {
  const [dogImageUrl, setDogImageUrl] = useState();
  const [breedList, setBreedList] = useState();
  const [loading, setLoading] = useState(true);
  const [bookId, setBookId] = useState();

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
        // console.log(data);
        if (data && data.length > 0) {
          setDogImageUrl(data[0].url);
        }
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }

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
      setBookId(bookID);
      setLoading(false);
    };

    fetchDogImage();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (requestType === "image") {
    return (
      <>
        <img className="dog-api" src={dogImageUrl} alt="random dog" />
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
          <dl>
            <dt>Breed group:</dt>
            <dd>{breedList.breed_group}</dd>
            <dt>Height:</dt>
            <dd>{breedList.height.imperial}</dd>
            <dd>Bred for: {breedList.bred_for}</dd>
            <dt>Disposition:</dt>
            <dd>{breedList.temperament}</dd>
            </dl>
        </>
      )
    }
  } 

  if (requestType === "homepage") {
    if(!breedList){

    }
    else{
      return(
        <>
          <Link to={`/Book/${bookID}`} >
            <img className="dog-api" src={dogImageUrl} alt="random dog" />
          </Link>
          <BuyButton bookID={bookId} />
        </>
      )
    }
  }
  
};

export default DogAPI;
