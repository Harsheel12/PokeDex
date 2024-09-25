# PokeDex Website

## Description

The PokeDex website is a user-friendly platform that allows users to explore and discover various Pokémon. It provides an interactive interface to view detailed information about each Pokémon, including their image, type, weight, height, and more.

## Features

### Filters

- Sort Pokemon by weight, height, and number in ascending or descending order
- Filter Pokemon by type (e.g. grass, fire, water, etc)

### Search Bar

- Quickly search for specific Pokemon by name or number, making it easier to find your favorite Pokemon

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) 
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) 

### Running the Project

1. Clone the Repository

```sh
git clone https://github.com/Harsheel12/PokeDex.git
```

2. Create and Setup Backend .env files in the `backend` Folder

```
PORT=4000
CORS_ORIGIN=http://localhost:5173
```

3. On a terminal, install the necessary Backend packages and start the Backend express server (Terminal 1)

**NOTE:** The 3 commands below should be run on the `Pokedex\backend` directory

```sh
cd backend
```

```sh
yarn install
```

```sh
yarn run dev
```

You should see a `Server running on port 4000` to verify that your backend is running correctly

4. Create and Setup Frontend .env files in the `frontend` Folder

```
VITE_API_URL=http://localhost:4000
```

5. On a new terminal, install the necessary Frontend packages and start the Frontend (Terminal 2)

**NOTE:** The 3 commands below should be run on the `Pokedex\frontend` directory

```sh
cd frontend
```

```sh
yarn install
```

```sh
yarn run dev
```

You should see a `http://localhost:5173/` URL link which you can click to launch the frontend