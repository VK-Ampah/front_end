// import React from 'react';

import {PlayerDetails} from '@/constant/types'; // Import the missing module

type CardProps = {
  player: PlayerDetails;
};

const Card = ({ player }: CardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-full mx-auto">
      <h3 className="text-xl font-bold mb-2">{`${player.position}: ${player.jerseyNumber}`}</h3>
      <p className="text-gray-700"><span className="font-semibold">Height:</span> {`${player.height}m`}</p>
      <p className="text-gray-700"><span className="font-semibold">Weight:</span> {`${player.weight}kg`}</p>

    </div>
  );
};

export default Card;
