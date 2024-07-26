# LeetCode Profile Search

A web application that allows users to search for LeetCode profiles, view user statistics, and see the list of solved problems. The application uses HTML, CSS, and JavaScript to create an interactive and user-friendly interface.

## Features

- Search for a LeetCode user profile by username.
- View user profile information such as ranking, total solved problems, and problem breakdown (easy, medium, hard).
- Display a list of solved problems in a table format.
- Responsive design that adapts to various screen sizes.

## Technologies Used

- **HTML**: For structuring the web pages.
- **CSS**: For styling the user interface.
- **JavaScript**: For fetching and displaying data from the APIs.
- **LeetCode Stats API**: To fetch user profile data.
- **Placeholder Image**: Used in place of user avatars.

## Setup and Installation

To get started with the project, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/leetcode-profile-search.git
   Navigate to the Project Directory

bash
Copy code
cd leetcode-profile-search
Open the index.html File

You can use a live server to view the project in your browser. If you have the Live Server extension for VS Code installed, you can right-click on index.html and select "Open with Live Server".

Ensure API Endpoints Are Correct

Update the API endpoints in script.js if necessary to match the current LeetCode API endpoints or any custom backend you are using.

Usage
Enter a LeetCode Username

In the input field, enter the LeetCode username you want to search for.

Click "Request Data"

Click the "Request Data" button to fetch and display the profile information and the list of solved problems.

View Profile Information

The profile section will display the user's avatar, name, ranking, total solved problems, and problem breakdown.

View Solved Problems

The list of solved problems will be displayed in a table format.

API Endpoints
The application uses the following API endpoints:

LeetCode Profile API: https://leetcode-stats-api.herokuapp.com/{username}
LeetCode Problems API: https://leetcode-problems-api.herokuapp.com/{username} (Please note that this API may not be available due to CORS issues.)
Known Issues
CORS Policy: If you encounter CORS issues when fetching data, you might need to use a CORS proxy or configure the server to allow CORS.
Avatar Images: If user avatars are not available, a placeholder image is used.
