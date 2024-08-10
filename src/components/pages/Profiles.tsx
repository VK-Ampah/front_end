// import React from 'react'

import { useEffect, useState } from 'react';
import axios from 'axios';

import { Profile } from '@/constant/types.d';

const Profiles = () => {
  const [players, setPlayers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get<Profile[]>('http://54.226.29.123:80/profile/all');
        setPlayers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch players:', error);
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);
  return (
    <div className="min-h-screen">
      
        <section className="mb-8 flex flex-col items-center justify-center text-white">
          <h2 className="text-xl font-bold mb-4">Photo Gallery</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-1">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="border border-slate-700 w-40 hover:border-red-400 hover:border-4 animate-pulse">
                  <div className="bg-slate-700 w-40 h-20"></div>
                  <div className="space-y-2 p-2">
                    <div className="h-4 bg-slate-700 rounded"></div>
                    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                    <div className="h-4 bg-blue-800 rounded w-1/2"></div>
                  </div>
                </div>
              ))
            ) : (
              players.map(player => (
                <div key={player.id} className="border w-24 md:w-40 hover:border-blue-500/50 hover:border-4 shadow-lg shadow-blue-500/50">
                  <div>
                    <h1 className="ml-2 text-xs md:text-sm font-thin md:font-medium">
                      {player.firstname} {player.lastname}
                    </h1>
                    <p className="ml-2 text-xs md:text-sm font-thin md:font-medium">@{player.username}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
    </div>
  )
}

export default Profiles