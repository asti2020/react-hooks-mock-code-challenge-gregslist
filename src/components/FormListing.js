import {React, useState} from 'react'

function FormListing ({newListing}) {
    const[description, setDescription] = useState("");
    const[image, setImage] = useState("");
    const[location, setLocation] = useState("");

    const handleDescription =(e) =>{
        setDescription(e.target.value)
    }

    const handleImage =(e) =>{
        setImage(e.target.value)
    }
    const handleLocation =(e) =>{
        setLocation(e.target.value)
    }
    const handleSubmit =(e) =>{
        e.preventDefault()
       fetch("http://localhost:6001/listings" ,{
        method: "POST",
            headers: {
                "content-type": "application/json",
            }, body: JSON.stringify({
                description: description,
                image: image,
                location: location
            }),
       })
       .then((res) => res.json())
       .then((list) => {
        newListing(list)
       })
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleDescription} type="text" placeholder="description" value={description} />
        <input onChange={handleImage} type="src" placeholder="image" value={image} />
        <input onChange={handleLocation} type="lcation" placeholder="Location" value={location}/>
        <button type="submit">post</button>
    </form>
  )
}

export default FormListing
