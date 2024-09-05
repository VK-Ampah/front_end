import { useEffect, useState } from 'react';
import axios from 'axios';
// import Footer from '../shared/Footer';

import { Profile } from '@/constant/types.d';

const Home = () => {
  const [players, setPlayers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get<Profile[]>('http://localhost:8080/profile/all');
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
    <div className="bg-gray-100">
      <header>
        <nav className="navbar">
          {/* Navbar*/}
        </nav>
      </header>
      <main className="p-4 w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to the 1949 Intermediate Soccer TEAM
        </h1>
        <p className="mb-4 text-center">
          Your ultimate destination for everything soccer!
        </p>

        {/* About Us Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">About Us</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 bg-slate-900 text-white">
            <div className="p-2">
              <p className="mb-2">
                Founded in the heart of St. John's, 1949-FC embodies the spirit of unity through diversity. Our club
                represents a tapestry of cultures, bringing together players from various backgrounds with a shared
                passion for soccer.
              </p>
              <p className="mb-2">
                At 1949-FC, we believe that diversity strengthens us on and off the field. Each player's unique story
                contributes to the rich fabric of our team, fostering a deep sense of belonging and community.
              </p>
            </div>
            <div className="p-2">
              <p className="mb-2">
                Our mission extends beyond winning matches; we aim to promote inclusivity, respect, and understanding
                through the universal language of soccer. By celebrating our differences, we inspire others to embrace
                diversity as a source of strength and unity.
              </p>
              <p>
                As we continue to grow, 1949-FC remains committed to creating an environment where every player feels
                valued and empowered to reach their full potential. Join us as we pave the way for a more inclusive and
                interconnected world through the beautiful game.
              </p>
            </div>
          </div>
        </section>

        {/* Latest News Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* News Article */}
            <article className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">News Title Here</h3>
              <p className="text-sm">Brief summary of the news article. Try and read through...</p>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Read More
              </a>
            </article>
          </div>
        </section>

        {/* Upcoming Matches Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Upcoming Matches</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Match</th>
                  <th className="px-4 py-2">Time</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="bg-white">
                  <td className="border px-4 py-2">April 10, 2024</td>
                  <td className="border px-4 py-2">1949-FC vs Sea Eagles</td>
                  <td className="border px-4 py-2">15:00</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">April 17, 2024</td>
                  <td className="border px-4 py-2">Harbor United vs 1949-FC</td>
                  <td className="border px-4 py-2">17:00</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-2">April 24, 2024</td>
                  <td className="border px-4 py-2">1949-FC vs Mount Pearl</td>
                  <td className="border px-4 py-2">19:00</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border px-4 py-2">May 1, 2024</td>
                  <td className="border px-4 py-2">City Wanderers vs 1949-FC</td>
                  <td className="border px-4 py-2">20:00</td>
                </tr>
                <tr className="bg-white">
                  <td className="border px-4 py-2">May 8, 2024</td>
                  <td className="border px-4 py-2">1949-FC vs Coastal Strikers</td>
                  <td className="border px-4 py-2">18:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Team Information Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Team Information</h2>
          <p>
            Information about the soccer teams, including history, achievements, roster, etc.
          </p>
        </section>

        {/* Photo Gallery Section */}
        <section className="mb-8 flex flex-col items-center justify-center bg-slate-800 text-white">
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

        {/* Fan Engagement Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-2">Join Our Community</h2>
          <p>Engage with other fans, participate in discussions, and stay updated with newsletters.</p>
          {/* Engagement Form or Social Media Links */}
        </section>
      </main>
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Home;
