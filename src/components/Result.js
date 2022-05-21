import React from "react";

const Result = ({
  state,
  population,
  biggestCity,
  capital,
  governor,
  senators,
  electoralVotes,
  nickName,
  dateAdmitted,
  nthState,
  stateImage,
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <h5 className="text-gray-900 text-xl font-medium mb-2 text-center border-b-1">
            {state}
          </h5>
          <img className="rounded-t-lg my-2" src={stateImage} alt={state} />
          <div className="grid grid-cols-2">
            <p className="text-gray-700 text-base mb-4">
              Population: {population}
            </p>
            <p className="text-gray-700 text-base mb-4">
              Biggest City: {biggestCity}
            </p>
            <p className="text-gray-700 text-base mb-4">Capital: {capital}</p>
            <p className="text-gray-700 text-base mb-4">Governor: {governor}</p>
            <p className="text-gray-700 text-base mb-4">Senators: {senators}</p>
            <p className="text-gray-700 text-base mb-4">
              Electoral Votes: {nthState}
            </p>
            <p className="text-gray-700 text-base mb-4">
              Admitted: {dateAdmitted}
            </p>
            <p className="text-gray-700 text-base mb-4">nthState: {nthState}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
