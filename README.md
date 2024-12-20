![Project Status](https://img.shields.io/badge/Status-In%20Progress-yellow)
## 🌐 Live link: [Live Demo](https://planet-media.vercel.app/auth)

# 🛒 Buy and Sell Platform

## 📝 Project Overview

A comprehensive Buy and Sell platform built with React.js, allowing users to register, create, view, and manage advertisements.

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 🚀 Features

### 🔐 Authentication
- 🔑 User Registration
- 🔐 User Login
- 🚪 Secure Authentication Flow
- 🔒 JWT Token Management

### 📋 Advertisements
- 📝 Create Advertisements
- 👀 View Public Advertisements
- 🗑️ Delete Personal Advertisements
- 🖼️ Image Upload Support

### 👤 User Profile
- 📊 View Profile Details
- ✏️ Edit Profile Information

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **State Management**: React Context API
- **Authentication**: JWT

## 📦 Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## 🔧 Installation

1. Clone the repository
```bash
git clone https://github.com/vivek20Eng/PlanetMedia.git
```

2. Navigate to project directory
```bash
cd buy-and-sell-platform
```

3. Install dependencies
```bash
npm install
```

4. Create `.env` file
```bash
REACT_APP_API_BASE_URL=https://ads.planetmedia.app
REACT_APP_API_KEY=a6a76927-6234-4bfe-98c1-c81b9e5f9f44
```

5. Start the development server
```bash
npm start
```

## 📁 Project Structure



## 🔑 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `REACT_APP_API_BASE_URL` | Base URL for the API | `https://ads.planetmedia.app` |
| `REACT_APP_API_KEY` | API Key for authentication | `a6a76927-6234-4bfe-98c1-c81b9e5f9f44` |

## 🧪 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |

## 🔒 Authentication Flow

1. User registers with username, email, password
2. Backend generates JWT token
3. Token stored in local storage
4. Protected routes require valid token

## 🌐 API Endpoints

- `/api/auth/local/register` - User Registration
- `/api/auth/local` - User Login
- `/api/advertisements` - Create/List Advertisements
- `/api/profile` - User Profile Management

## 🚧 Error Handling

- Centralized error handling in `utils/api.js`
- Toast notifications for user feedback
- Graceful error messages


## 📞 Contact

Vivek - Vivek20sv@gmail.com

Project Link: [https://github.com/vivek20Eng/PlanetMedia](https://github.com/vivek20Eng/PlanetMedia)

## 🙏 Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)

---

🌟 Don't forget to star the repository! 🌟