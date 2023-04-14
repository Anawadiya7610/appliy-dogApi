// import logo from './logo.svg';
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [src, setSrc] = useState(); // [], {name: 's', s:'sds'}, 
  const [list, setList] = useState(null);

  

  const getImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    setSrc(data.message);
    console.log(data);
  };
   
  const getImageByBreed = async (breed) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    setSrc(data.message);
    console.log(data);
  };

  const listBreed = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    setSrc(data.message);
    return Object.keys(data.message);
  };

  useEffect(() => {
    async function fetchData() {
      const breeds = await listBreed();
      setList(
        breeds.map((breed) => (
         
            <button onClick={e =>getImageByBreed(breed)}>{breed}</button>
       
        ))
      );
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Image generater</h1>
      <div>
        <button onClick={(e) => getImage()}>Get Image</button>
      </div>
      <div>
        <img src={src} alt="" />
        {list}
      </div>
    </div>
  );
}

export default App;
