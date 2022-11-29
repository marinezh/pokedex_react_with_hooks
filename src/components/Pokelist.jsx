import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
import classes from "./Pokelist.module.css";
import axios from "axios";

const Pokelist = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
      .then((res) => {
        const fetches = res.data.results.map((p) => {
          return axios.get(p.url).then((res) => res.data);
        });

        Promise.all(fetches).then((res) => {
          setData(res);
          setIsLoading(false);
        });
      });
  }, []);

  return (
    <div className={classes.cards}>
      {data.map((card) => (
        <Card
          key={card.name}
          name={card.name}
          image={card.sprites.other.dream_world.front_default}
        />
      ))}
    </div>
  );
};

export default Pokelist;
