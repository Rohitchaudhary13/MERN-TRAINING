import logo from './logo.svg';
import './App.css';
import curtain from '../src/images/curtain.png';
import Masonry from '@mui/lab/Masonry';
import {FiArrowRight} from 'react-icons/fi';
import { useEffect, useState } from 'react';

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
//     title: 'Snacks',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
//     title: 'Tower',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
//     title: 'Tree',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
//     title: 'Camping Car',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
//     title: 'Mountain',
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//   },
// ];

function App() {

  const [img, setImg] = useState("");
  const [res, setRes] = useState([]); 

  const fetchRequest = async() => {
    const data = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=YOUR_ACCESS_KEY`);
    const dataJ = await data.json();
    const result = await dataJ.results;
    setRes(result);
    console.log(res);
  }
  const submit = () => {
    fetchRequest();

  }

  useEffect(() => {
    fetchRequest();
  }, [])



  return (
    <div className='bg-[#184642] text-[#978d61]'>
      <img src={curtain} alt="curtain" className='absolute' />
      <h1 className='text-9xl grid place-items-center h-screen milky'>Anushri</h1>
      <div className='text-center poppins'>
        <input placeholder='Enter Anything...' className='bg-transparent rounded-full p-4 text-[#978d61]' value={img} onChange={(e) => setImg(e.target.value)}/>
        <button className='ml-4' onClick={submit}><FiArrowRight size={30} /></button>
      </div>
      <div className='mt-12'>
      <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3 }} spacing={{ xs: 1, sm: 2, md: 3 }}>
        {res.map((item, index) => (
          <div key={index}>
            <img
              src={`${item.urls.raw}?w=162&auto=format`}
              srcSet={`${item.urls.raw}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
      </div>
    </div>
  );
}

export default App;
