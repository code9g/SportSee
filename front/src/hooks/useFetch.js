import { useEffect, useState } from "react";

function useFetch(id, api, title, defaultData = []) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    api(id)
      .then((data) => {
        setData(data);
        console.log(`Données '${title}':`, data);
      })
      .catch((e) => {
        setError(`Echec de chargement des données '${title}' `);
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, title, api]);

  return { data, isLoading, error };
}

export default useFetch;
