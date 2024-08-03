import { useEffect, useState } from "react";
import { Destination } from "./types";
import { AddDestinationForm, DestinationList } from "./components";

const App: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    const storedDestinations = JSON.parse(localStorage.getItem('destinations') || '[]');
    if (storedDestinations.length) {
      setDestinations(storedDestinations);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('destinations', JSON.stringify(destinations));
  }, [destinations]);

  const addDestination = (destination: Destination) => {
    setDestinations([...destinations, destination]);
  };

  const removeDestination = (id: string) => {
    setDestinations(destinations.filter(dest => dest.id !== id));
  };

  const markAsVisited = (id: string) => {
    setDestinations(destinations.map(dest =>
      dest.id === id ? { ...dest, visited: !dest.visited } : dest
    ));
  };

  const filteredDestinations = destinations.filter(dest => {
    if (filter === 'visited') return dest.visited;
    if (filter === 'non-visited') return !dest.visited;
    return true;
  });

  return (
    <div className="App">
      <h1>Travel Destination Wishlist</h1>
      <AddDestinationForm addDestination={addDestination} />
      <div className="filter-container">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('visited')}>Visited</button>
        <button onClick={() => setFilter('non-visited')}>Non-Visited</button>
      </div>
      <DestinationList
        destinations={filteredDestinations}
        removeDestination={removeDestination}
        markAsVisited={markAsVisited}
      />
    </div>
  );
}

export default App
