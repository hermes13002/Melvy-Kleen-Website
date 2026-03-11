# Melvy Kleen Website

This is the frontend and admin dashboard for Melvy Kleen, a premium cleaning service company.

## Tech Stack
- React 18
- Vite
- TypeScript
- Tailwind CSS
- Firebase (Firestore & Authentication)
- Framer Motion

## Features
- Landing page with animated sections (hero, services, results, contact).
- Multi-step booking wizard that saves directly to Firestore and formats a WhatsApp message for final confirmation.
- Secure admin dashboard (locked behind Firebase Authentication) to view all bookings and manage their status.

## Getting Started

1. Clone the repository.
2. Run `npm install` to grab dependencies.
3. Ensure you have the `.env.local` or `.env` file with the correct Firebase configuration variables (VITE_FIREBASE_API_KEY, etc.).
4. Run `npm run dev` to start the local development server.

## Deployment

The app is configured to deploy to Firebase Hosting from the root directory.

To deploy a live update:
1. `npm run build`
2. `firebase deploy --only hosting`

## Admin Access

Once admin account is created, admins can log in at `/admin/login`.
