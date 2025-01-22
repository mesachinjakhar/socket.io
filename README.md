# Real-time Chat Application

A full-stack web application that enables real-time communication between users using Socket.IO. Users can participate in broadcast messaging, private chats, and monitor active user counts.

## Features

- Real-time message broadcasting to all connected users
- Private messaging between users
- Active users counter
- Modern responsive UI built with React
- Real-time updates using Socket.IO

## Tech Stack

### Frontend
- React (Vite)
- Socket.IO Client
- HTML/CSS
- JavaScript

### Backend
- Node.js
- Socket.IO
- Express.js

## Project Structure

```
├── client/             # Frontend React application
│   ├── src/           # Source files
│   ├── public/        # Public assets
│   └── package.json   # Frontend dependencies
│
├── server/            # Backend Node.js application
│   ├── app.js         # Main server
│   └── package.json  # Backend dependencies
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/mesachinjakhar/socket.io
cd socket.io
```

2. Install backend dependencies
```bash
cd server
npm install
```

3. Install frontend dependencies
```bash
cd ../client
npm install
```

### Running the Application

1. Start the backend server
```bash
cd server
npm start
```

2. Start the frontend development server
```bash
cd client
npm run dev
```

The application should now be running at `http://localhost:5173`.

## Usage

1. Open the application in your browser
2. Start sending messages in the broadcast channel
3. To send a private message, enter recipient ID
4. Monitor the active users count in real-time

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Name - Sachin Jakhar
Project Link: [https://github.com/mesachinjakhar/socket.io
