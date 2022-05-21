import { useState, useEffect } from "react";
import statesData from "./StatesData";

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

const useStateData = (stateName) => {
  stateName = stateName.toTitleCase();

  const [data, setData] = useState(undefined);

  const found = statesData.find((e) => e.statename === stateName);

  useEffect(() => {
    setData(found);
  }, [found]);

  return data;
};

export default useStateData;