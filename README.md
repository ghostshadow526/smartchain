# ECNFOUNDATION - Crypto Trading Platform

This is a Next.js application for a cryptocurrency trading platform, bootstrapped with Firebase Studio. It features user authentication, real-time crypto price tracking, a trading interface, and KYC verification functionality.

## Getting Started Locally

To run the application in a local development environment, follow these steps:

1.  **Install Dependencies:**
    Open your terminal and run the following command to install the necessary packages:
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    Once the installation is complete, start the Next.js development server:
    ```bash
    npm run dev
    ```

3.  **Open the Application:**
    Open your web browser and navigate to `http://localhost:9002` to see the application running.

## Deploying to Render

You can deploy this Next.js application to [Render](https://render.com/), a platform that makes it easy to host web services.

### 1. Push to a Git Repository

Before deploying, make sure your code is pushed to a GitHub, GitLab, or Bitbucket repository.

### 2. Create a Render Account

If you don't have one already, sign up for a free account on [Render](https://render.com/).

### 3. Create a New Web Service

1.  From your Render dashboard, click **New +** and select **Web Service**.
2.  Connect your Git repository where the project code is hosted.
3.  On the settings page, configure the following:
    *   **Name:** Give your service a unique name (e.g., `ecnfoundation-app`).
    *   **Region:** Choose a region close to your users.
    *   **Branch:** Select the branch you want to deploy (e.g., `main`).
    *   **Runtime:** Render should automatically detect `Node`.
    *   **Build Command:** `npm install && npm run build`
    *   **Start Command:** `npm start`
    *   **Instance Type:** `Free` is sufficient for development and small projects.

### 4. Add Environment Variables

For the application to connect to your Firebase project, you need to add your Firebase configuration as environment variables.

1.  In your Render service settings, go to the **Environment** tab.
2.  Click **Add Environment Variable** and add the following keys with their corresponding values from your Firebase project's web app configuration.

    *   `NEXT_PUBLIC_FIREBASE_API_KEY`: Your Firebase API Key
    *   `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Your Firebase Auth Domain
    *   `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Your Firebase Project ID
    *   `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Your Firebase Storage Bucket
    *   `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase Messaging Sender ID
    *   `NEXT_PUBLIC_FIREBASE_APP_ID`: Your Firebase App ID
    *   `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`: Your Firebase Measurement ID (optional)

    **Note:** You can find these values in your Firebase project settings under **Project settings** > **General** > **Your apps** > **SDK setup and configuration**.

### 5. Deploy

Click the **Create Web Service** button. Render will automatically pull your code, install dependencies, build the project, and deploy it. The initial deployment may take a few minutes. Once it's live, you can access your application at the URL provided by Render.
