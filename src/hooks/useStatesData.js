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

const useStatesData = (stateName) => {
  stateName = toTitleCase(stateName);

  const [data, setData] = useState(undefined);

  const found = statesData.find((e) => e.state === stateName);

  useEffect(() => {
    setData(found);
  }, [found]);

  return data;
};

export default useStatesData;
