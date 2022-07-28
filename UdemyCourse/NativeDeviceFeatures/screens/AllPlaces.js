import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { fetchPlaces } from "../utils/database";

function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      fetchPlaces();
      setLoadedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, [isFocused, route]);
  return <PlacesList places={loadedPlaces} />;
}
export default AllPlaces;
