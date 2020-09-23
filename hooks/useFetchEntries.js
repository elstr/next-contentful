import { useEffect, useState } from "react";
import contentful from "../config/contentful";

const useFetchEntries = (path = "/", content_type = "page") => {
  const [entries, setEntries] = useState([]);
  
  async function fetchEntries() {
    const entries = await contentful.getEntries({
      content_type,
      "fields.path": path,
      include: 4, // ??
    });
    // entries.items.length === 0 && 404 logic
    return entries.items[0];
  }
  
  useEffect(() => {
    async function getEntries() {
      const allEntries = await fetchEntries();
      console.log({allEntries})
      setEntries(allEntries);
    }
    getEntries();
  }, []);
  
  return entries
};

export default useFetchEntries;
