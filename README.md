# ChessWebApp

A web-based chess application built with Spring Boot and Angular, offering an interactive platform for playing chess online.

## Features (Planned)

- Interactive chess board with drag-and-drop piece movement
- Legal move validation
- Game state management
- User authentication and profiles
- Match history tracking
- Real-time multiplayer support
- Chess engine integration for playing against AI

## Technology Stack

### Backend
- Java 21
- Spring Boot 3.4.4
- Spring Security with JWT
- MySQL Database
- Maven for dependency management
- RESTful API architecture

### Frontend
- Angular 17
- TypeScript
- Bootstrap for responsive design
- Angular Material components
- RxJS for reactive programming

## Prerequisites

Before you begin, ensure you have the following installed:
- Java Development Kit (JDK) 21 or later
- Node.js 18.x or later
- npm (Node Package Manager)
- MySQL 8.0 or later
- Maven 3.9.x or later

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend/chess-backend
   ```

2. Build the project:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

The backend server will start on http://localhost:8080

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve --proxy-config proxy.conf.json
   ```

The frontend application will be available at http://localhost:4200

## Project Structure

```
chess-webapp/
├── backend/
│   └── chess-backend/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/
│       │   │   │   └── com/chess/backend/
│       │   │   │       ├── controllers/
│       │   │   │       ├── services/
│       │   │   │       ├── models/
│       │   │   │       ├── repositories/
│       │   │   │       ├── security/
│       │   │   │       └── config/
│       │   │   └── resources/
│       │   └── test/
│       └── pom.xml
└── frontend/
    ├── src/
    │   ├── app/
    │   ├── assets/
    │   └── environments/
    ├── package.json
    └── angular.json
```

## Development

- The project follows a modular architecture with clear separation of concerns
- Backend implements RESTful APIs using Spring Boot
- Frontend uses Angular's component-based architecture
- Authentication is handled using JWT tokens
- Database interactions are managed through Spring Data JPA

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please open an issue in the repository.
