# AI-Based Email Assistant

## Overview
This project is an AI-based Email Assistant designed to help users generate instant replies to emails with just one click. Users can adjust the tone of the message to be **Professional, Casual, or Friendly**.

The assistant is built as a **Chrome extension for Gmail**, using **Spring AI with Gemini AI** for intelligent response generation.

## Features
- Instant email replies with one click
- Tone adjustment options: Professional, Casual, Friendly
- Integration with Gmail via a Chrome extension
- Backend powered by **Spring AI and Gemini AI**
- Frontend built with **React, Vite.js, and Axios**

## Technology Stack
- **Backend:** Spring AI, Gemini AI
- **Frontend:** React, Vite.js, Axios
- **Chrome Extension Files:** Located in `email-write-ext`
- **API Requirement:** Gemini AI API Key (currently free to use)

## Project Structure

```
Email-Writer-Sb/
├── email-react-front/
│   ├── dist 
│   ├── node_modules
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
├── email-writer-ext/
│   ├── content.css
│   ├── content.js
│   └── manifest.json
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── ai/
│   │   │           └── SpringAiDemo/
│   │   │               ├── EmailGeneratorController.java
│   │   │               ├── EmailGeneratorService.java
│   │   │               ├── EmailRequest.java
│   │   │               └── EmailWriterSbApplication.java
│   │   └── resources/
│   │       ├── static
│   │       ├── templates
│   │       └── application.properties.yml
│   └── test
├── target
├── .gitignore
├── .gitattributes
├── mvnw
├── mvnw.cmd
└── pom.xml
```

## Installation & Setup
### 1. Backend Setup
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd email-writer-sb
   ```
2. Set up your Gemini AI API key in the backend configuration.
3. Run the Spring Boot application:
   ```sh
   ./mvnw spring-boot:run
   ```

### 2. Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd emailAi-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```

### 3. Chrome Extension Setup
1. Open **Chrome** and navigate to `chrome://extensions/`
2. Enable **Developer Mode** (toggle in the top right corner)
3. Click **Load unpacked** and select the `email-write-ext` folder
4. The extension will be added to Chrome

## Usage
- Open Gmail and compose a new email
- Click the AI Assistant button to generate an instant reply
- Select the desired tone (Professional, Casual, Friendly)
- The AI will generate a response accordingly

## Contributing
Feel free to contribute by submitting **issues** and **pull requests**!

## License
This project is open-source. You are free to use and modify it as needed.

---
If you have any issues or need assistance, feel free to reach out!

