Careplexus Pharmacy
Overview
Careplexus Pharmacy is a startup online e-commerce platform revolutionizing access to pharmaceutical products and healthcare services. Founded by Chukwuyem Obiazi, our mission is to provide a seamless, reliable, and secure way for customers to purchase medications and health products from the comfort of their homes.
This project consists of two repositories:

Frontend: epharm-client (Built with React and Vite)
Backend: epharm-backend (Built with Django and REST API)

Features

Intuitive Shopping Experience: Browse, search, and purchase medications with ease.
Product Catalog: Includes prescription drugs, over-the-counter medications, and wellness products.
Secure Payments: Encrypted payment gateways for safe transactions.
Order Management: Track orders in real-time and manage prescriptions.
API-Driven Backend: RESTful API for seamless communication between frontend and backend.
Customer Support: Assistance for orders, prescriptions, and inquiries.

Tech Stack

Frontend: React (Vite for fast development and build)
Backend: Django with Django REST Framework
Database: (Specify your database, e.g., PostgreSQL, SQLite, etc., or update later)
API: REST API for communication between client and server
Hosting: (Specify if applicable, e.g., AWS, Heroku, or update later)

Getting Started
Prerequisites

Node.js and npm (for frontend)
Python 3.x and pip (for backend)
A modern web browser (e.g., Chrome, Firefox, Safari)
(Optional) Docker, if you plan to use containerization
A code editor (e.g., VS Code)

Frontend Setup (epharm-client)

Clone the frontend repository:git clone https://github.com/careplexus-pharmacy/epharm-client.git


Navigate to the project directory:cd epharm-client


Install dependencies:npm install


Start the development server:npm run dev


Open http://localhost:5173 (or the port specified by Vite) in your browser.

Backend Setup (epharm-backend)

Clone the backend repository:git clone https://github.com/careplexus-pharmacy/epharm-backend.git


Navigate to the project directory:cd epharm-backend


Create a virtual environment:python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate


Install dependencies:pip install -r requirements.txt


Apply database migrations:python manage.py migrate


Start the Django development server:python manage.py runserver


Access the backend API at http://localhost:8000.

Environment Variables
Create a .env file in both repositories for configuration:

Frontend (epharm-client/.env):VITE_API_URL=http://localhost:8000/api


Backend (epharm-backend/.env):SECRET_KEY=your-django-secret-key
DEBUG=True
DATABASE_URL=your-database-url



Usage

Customers: Browse the catalog, add items to the cart, upload prescriptions, and complete purchases via the frontend.
Administrators: Use the Django admin panel (/admin) to manage products, orders, and user data.
Developers: Interact with the REST API endpoints (e.g., /api/products, /api/orders) for custom integrations.

API Documentation
The backend provides a REST API for managing pharmacy operations. Key endpoints include:

GET /api/products/: List all products
POST /api/orders/: Create a new order
POST /api/prescriptions/: Upload prescriptions(Provide detailed API documentation in a separate file or tool like Swagger, if available.)

Contributing
As a startup, we welcome contributions to make Careplexus Pharmacy better! To contribute:

Fork the repository (epharm-client or epharm-backend).
Create a feature branch (git checkout -b feature/your-feature-name).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature-name).
Open a pull request.

Please follow our Contributing Guidelines and Code of Conduct.
License
This project is licensed under the MIT License. See the LICENSE file for details.
Contact
For inquiries or support:

Founder & CEO: Chukwuyem Obiazi
Email: support@careplexuspharmacy.com
Website: epharm.careplexus.com 

Thank you for supporting Careplexus Pharmacy, your trusted online pharmacy startup!