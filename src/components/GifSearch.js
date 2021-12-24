
import { useState } from "react";
import GifGrid from "./GifGrid";

export default function GifSearch() {
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState();
    const [searchTerm, setSearchTerm] = useState();

    const onSearchHandler = () => {
        if(!searchTerm) return;
        setLoading(true);

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=yRQqdakswGWwwSCrDtn7IzJGVKZ5qonG&q=${searchTerm}&limit=20`
        )
          .then(res => res.json())
          .then((res) => {
          setResponse(res.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
    return(
    <div>
        <input
            onChange={e => setSearchTerm(e.target.value)}
          />
        <button onClick={onSearchHandler}>search</button>
        {loading && <div>loading</div>}
        {(response && !loading) && <GifGrid gifsData={response}/>}
    </div>
    );
  }
  
