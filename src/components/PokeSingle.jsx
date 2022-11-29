import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import classes from "./PokeSingle.module.css";


const PokeSingle = () => {
    const params = useParams();
    const navigate = useNavigate();
  console.log(params);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
        });
    
  }, []);

  return (
    <div className="classes.single-card" >
          <h2>{data.name}</h2>
          <p>{data.id}</p>
          <p>{data.height}</p>
          <p>{data.types?.type.name }</p>
      <img
        src={data.sprites?.other.dream_world.front_default}
        alt={data.name}
          />
          <button onClick={()=> navigate(-1)}>Go back</button>
    </div>
  );
};

export default PokeSingle;
