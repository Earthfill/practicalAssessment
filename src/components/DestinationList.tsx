import { DestinationListProps } from "../types";
import '../assets/styles/destinationList.css';

const DestinationList: React.FC<DestinationListProps> = ({ destinations, removeDestination, markAsVisited }) => {
  return (
    <div className="list-container">
      {destinations.map((dest) => (
        <div
          key={dest.id}
          className={`destination-item ${dest.visited ? 'visited' : 'non-visited'}`}
        >
          <div className="destination-info">
            <h3>{dest.name}</h3>
            <p>{dest.country}</p>
            <p>{dest.description}</p>
          </div>
          <button onClick={() => markAsVisited(dest.id)}>
            {dest.visited ? 'Unmark' : 'Mark as Visited'}
          </button>
          <button onClick={() => removeDestination(dest.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;