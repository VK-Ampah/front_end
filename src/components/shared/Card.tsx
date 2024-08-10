// import React from 'react';

import {PlayerDetails} from '@/constant/types'; // Import the missing module

type CardProps = {
  player: PlayerDetails;
};

const Card = ({ player }: CardProps) => {
  return (
    <div className="bg-slate-500 text-white shadow-md rounded-lg p-6 mb-4 max-w-full  mx-2">
      {/* <h1 className="text-2xl font-bold mb-2">{`${player.firstname} ${player.lastname}`}</h1> */}
      <h1 className="text-2xl font-bold mb-2">{``}</h1>
      <p className=" font-bold mb-2">{`Player Position: ${player.position}`}</p>
      <p className=" mb-2">{`Jersy Number:  ${player.jerseyNumber}`}</p>
      <p className="text-gray-300"><span className="font-semibold">Height:</span> {`${player.height}m`}</p>
      <p className="text-gray-300"><span className="font-semibold">Weight:</span> {`${player.weight}kg`}</p>
    </div>
  );
};

export default Card;
