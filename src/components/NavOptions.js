import React, {useState, useEffect} from 'react'
import data from '../data/data.json'
import NavCard from './NavCard.js'
import "../styles/NavOptions.css"


const NavOptions = () => {

  const [miPhoneToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessToggle, setFitnessToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
        return setMiPhoneToggle(true)
    }

    if (window.location.pathname === "/redmiphones") {
        return setRedmiPhoneToggle(true)
    }

    if (window.location.pathname === "/tv") {
        return setTvToggle(true)
    }

    if (window.location.pathname === "/laptops") {
        return setLaptopToggle(true)
    }

    if (window.location.pathname === "/lifestyle") {
        return setFitnessToggle(true)
    }

    if (window.location.pathname === "/home") {
        return setHomeToggle(true)
    }
    
    if (window.location.pathname === "/audio") {
        return setAudioToggle(true)
    }

    if (window.location.pathname === "/accessories") {
        return setAccessoriesToggle(true)
    }
  }, [])
  return (
    <div className='navOptions'>
      {miPhoneToggle? data.miPhones.map((item) =>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {redmiPhoneToggle? data.redmiPhones.map((item) =>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {tvToggle? data.tv.map((item) =>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {laptopToggle? data.laptop.map((item) =>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}
      
      {fitnessToggle? data.fitnessAndLifeStyle.map((item) =>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {homeToggle? data.home.map((item) =>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {audioToggle? data.audio.map((item) =>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}

      {accessoriesToggle? data.accessories.map((item) =>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
      )) : null}
    </div>
  )
}

export default NavOptions
