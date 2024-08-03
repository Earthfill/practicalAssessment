# Travel Destination Wishlist

## Description

This is a unique and visually striking web application for maintaining a wishlist of travel destinations. Users can add new destinations, remove existing ones, mark destinations as visited, and filter the list to show all, visited, or non-visited destinations. The design features bold colors, large typography, and a card-based layout.

## Instructions

### How to Use the Web App

1. **Add a Destination**:
    - Fill in the form at the top of the page with the destination's name, country, and a brief description.
    - Click the "Add Destination" button to add the destination to your wishlist.

2. **Remove a Destination**:
    - Each destination in the list has a "Remove" button.
    - Click the "Remove" button to delete the destination from your wishlist.

3. **Mark as Visited**:
    - Each destination in the list has a "Mark as Visited" button.
    - Click the button to toggle the visited status of the destination.

4. **Filter Destinations**:
    - Use the filter buttons (All, Visited, Non-Visited) to filter the list of destinations.

### Deployment Link

The web app is deployed at: [Practical Assessment](https://practicalassessment.netlify.app)

## Assumptions and Additional Features

- **Local Storage**: The application uses local storage to persist the list of destinations across sessions.
- **Responsive Design**: The app is designed to be responsive and usable on both desktop and mobile devices.
- **Error Handling**: Basic form validation is implemented to ensure that all fields are filled out before adding a new destination.

## If I Had More Time

Given more time, I would consider adding the following improvements and features:

- **Advanced Filtering**: Add more advanced filtering options such as filtering by country or date added.
- **Sorting**: Implement sorting options to sort destinations alphabetically or by date added.
- **User Authentication**: Add user authentication to allow multiple users to maintain their own wishlists.
- **Detailed Views**: Add a detailed view for each destination, including more information and possibly images.

## Running Locally

To run the application locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Earthfill/practicalAssessment.git
    ```

2. Navigate to the project directory:
    ```bash
    cd practicalAssessment
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. Open your browser and go to:
    ```bash
    http://localhost:5173
    ```