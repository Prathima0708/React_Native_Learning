import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../utils/database";

function AddPlace({ navigation }) {
  function createPlaceHandler(place) {
    // await insertPlace(place);
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}
export default AddPlace;
