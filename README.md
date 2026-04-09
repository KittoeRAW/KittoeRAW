# Kittoe Removals and Waste - Website

This is a full-stack website for Kittoe Removals and Waste, featuring a professional frontend and an Express.js backend for handling contact form emails.

## Local Setup Instructions

### 1. Install Dependencies
Open your terminal in the project folder and run:
```bash
npm install
```

### 2. Configure Environment Variables
Create a file named `.env` in the root directory and add your Resend API key:
```env
RESEND_API_KEY=your_api_key_here
NODE_ENV=development
```
*You can get a free API key from [Resend.com](https://resend.com).*

### 3. Run the Development Server
To start the site with live reloading:
```bash
npm run dev
```
The site will be available at `http://localhost:3000`.

## Production Deployment

To prepare the site for a live server:

1. **Build the frontend**:
   ```bash
   npm run build
   ```
2. **Start the production server**:
   ```bash
   npm start
   ```

The server is configured to serve the static files from the `dist` folder and handle the email API routes automatically.
