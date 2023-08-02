# Marvel Characters Searcher

The Marvel Characters Searcher is a web application that allows users to explore a vast collection of Marvel comic book characters. Users can search for their favorite characters by name or keyword, view their details, and discover related comic books in which they appear. The application leverages the Marvel API to provide real-time data on various Marvel characters and comics.

## Functionalities

1. **Search Characters:** Users can search for Marvel characters by their names or keywords using the search bar. The application fetches and displays relevant characters as the user types.

2. **Random Character Display:** Upon the initial visit to the website or page refresh, the application randomly displays eight different Marvel characters, providing users with an exciting and ever-changing experience.

3. **Character Details:** Clicking on a character card reveals detailed information about the selected character, including their name, description, and thumbnail image.

4. **Comic Book Information:** The character details page also displays a list of comic books in which the selected character appears. Users can click on a comic book to view its cover image and title.

5. **Favorite Characters:** Users can mark characters as favorites by clicking on an empty star icon displayed on each character card. The application uses Jotai for state management, ensuring that the list of favorite characters persists across sessions.

6. **Favorites Section:** The application includes a dedicated section where users can find all their favorite Marvel characters. The favorites section enables quick access to their preferred characters without having to search for them again.

7. **Responsive Design:** The Marvel Characters Searcher is fully responsive, providing an optimal viewing experience across various devices, including desktops, tablets, and mobile phones.

## Installation

1. Clone the repository.
2. Install the dependencies using npm or yarn:


## How to Use

To run the Marvel Characters Searcher locally, follow these steps:

1. Clone the repository: `git clone git@github.com:IsabellaChiaradia/LenioFinalProject-MarvelCharacters.git`

2. Install dependencies: `npm install`

3. Start the development server: `npm run start`

The application will be accessible at `http://localhost:3000/`.

## Credits

- This project uses the Marvel API to fetch character and comic book data. For more information, visit [https://developer.marvel.com](https://developer.marvel.com).

- The application is built with React.js.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).