export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  visited: boolean;
}

export interface DestinationListProps {
  destinations: Destination[];
  removeDestination: (id: string) => void;
  markAsVisited: (id: string) => void;
}

export interface AddDestinationFormProps {
  addDestination: (destination: { id: string; name: string; country: string; description: string; visited: boolean; }) => void;
}