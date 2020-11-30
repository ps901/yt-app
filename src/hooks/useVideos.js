import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

//all the code related to fetching can be reused(main property of hook and functional components)
// you give a default term i give you output (videos and method to set videos)

const useVideos = (defaultSearchTerm) => {
  const [videos, setvidoes] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setvidoes(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
