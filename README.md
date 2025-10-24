# Hair 2 Hair Studio Website

A modern, responsive website for Hair 2 Hair Studio - Non-Surgical Hair Replacement Services.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Email integration with nodemailer
- **Multiple Branches**: Information for both Khammam and Dilshuknagar, Hyderabad branches
- **Interactive Navigation**: Compact navigation bar with dropdown menus
- **Gallery**: Showcase of services and results
- **Booking System**: Easy appointment booking

## Branches

### Khammam Branch
- **Address**: 2nd floor, Star complex, Near new bus stand, Khammam, Telangana 507002
- **Phone**: +91 81219 99243
- **Email**: hair2hairstidio2024@gmail.com

### Dilshuknagar, Hyderabad Branch
- **Address**: 1st Floor, Hair 2 Hair studio - Non Surgical Hair Replacement Services, beside Sai Baba Temple, Dilsukhnagar, Hyderabad, Telangana 500060
- **Google Maps**: [Get Directions](https://www.google.com/maps/dir/17.598009,79.992184/1st+Floor,+Hair+2+Hair+studio+-+Non+Surgical+Hair+Replacement+Services,+beside+Sai+Baba+Temple,+Dilsukhnagar,+Hyderabad,+Telangana+500060/@17.5646473,77.9319743,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bcb9937bba96ce7:0xb89467620dad619d!2m2!1d78.5315941!2d17.3684658?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D)

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons

### Backend
- Node.js with Express
- Nodemailer for email functionality
- CORS for cross-origin requests

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd satishanna_office/SatishAnna-office
```

2. Install dependencies:
```bash
npm install
```

3. Set up the backend:
```bash
cd backend
npm install
```

4. Create environment file:
Create a `.env` file in the `backend` directory:
```
EMAIL_PASSWORD=your_gmail_app_password_here
NODE_ENV=development
PORT=3001
```

### Running the Application

#### Development Mode
Run both frontend and backend simultaneously:
```bash
npm run dev:full
```

Or run them separately:

Frontend only:
```bash
npm run dev
```

Backend only:
```bash
npm run server
```

#### Production Mode
1. Build the frontend:
```bash
npm run build
```

2. Start the backend:
```bash
npm run server
```

## Email Setup

To enable email functionality:

1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an App Password for "Mail"
4. Set the `EMAIL_PASSWORD` environment variable with this password

## Project Structure

```
SatishAnna-office/
├── src/
│   ├── components/          # Reusable components
│   ├── pages/              # Page components
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Entry point
├── backend/
│   ├── server.js           # Express server
│   ├── package.json        # Backend dependencies
│   └── README.md           # Backend setup instructions
├── public/
│   └── Data/               # Static assets
└── dist/                   # Built files
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start backend server
- `npm run dev:full` - Start both frontend and backend
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Contact

For any questions or support, please contact:
- **Email**: hair2hairstidio2024@gmail.com
- **Phone**: +91 81219 99243
- **Website**: [Hair 2 Hair Studio](https://your-domain.com)

## License

This project is proprietary software for Hair 2 Hair Studio.