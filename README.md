# 🛒 E-Commerce Website (MERN Stack)

This is a full-featured **E-Commerce Website** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It supports user authentication, cart management, product browsing, image uploading, and more.

## 🚀 Features

### 🧑‍💻 User Side

- 🔐 User Authentication (Login / Signup with JWT)
- 🛍️ Product Listings by Categories (Men, Women, Kids)
- 🖼️ Image Upload for Products (using `multer`)
- 🛒 Add to Cart / Remove from Cart
- 🛒 Saved Cart per User (Persistent via DB)
- 💻 Admin APIs to Add / Remove Products
- 📂 Organized Codebase with Component-based React
- ⚙️ MongoDB Database Integration
- 🌐 Responsive UI
- ⚡ Fast and smooth UX

### 🛠️ Admin Panel

- ➕ Add New Products
- ❌ Remove Products
- 🖼️ Upload Product Images
- 🗃️ Automatically assign Product IDs
- 💾 Admin functionality via secure backend APIs

---

## 🧩 Tech Stack

| Technology | Usage |
|-----------|--------|
| **MongoDB** | Database |
| **Express.js** | Backend Server |
| **React.js** | Frontend Framework |
| **Node.js** | Runtime Environment |
| **JWT** | Authentication |
| **Multer** | Image Uploading |
| **CSS / JS** | Styling & Interactivity |

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
### 2. Backend Setup : 
cd backend<br>
npm install<br>
To start server : node .\index.js<br>
### 3. Frontend Setup :
cd frontend<br>
npm install<br>
npm start<br>
### 4. Admin Panel Setup:
cd admin<br>
npm run dev<br>

🛠️ Admin Access
No separate admin login UI — but admin functions (like addproduct, removeproduct) are available through the backend via tools like Postman, or a simple admin page (if you’ve added it in frontend).

POST /addproduct — Add a product

POST /removeproduct — Remove product by id

---

## 📸 Screenshots

![Screenshot (243)](https://github.com/user-attachments/assets/46474664-a15d-4f4a-beaa-6bfd8d6ebfee)
![Screenshot (244)](https://github.com/user-attachments/assets/88e4aa31-dd2e-495a-93c2-695f73caa720)
![Screenshot (245)](https://github.com/user-attachments/assets/1b799328-01df-4cc3-a348-78a12ebc8f9a)
![Screenshot (246)](https://github.com/user-attachments/assets/6f13fa7b-f799-4793-a2a4-d8835cca2a85)
![Screenshot (247)](https://github.com/user-attachments/assets/329575cb-5a56-483e-8ebf-e60f8f8a47e0)
![Screenshot (248)](https://github.com/user-attachments/assets/fcb8af13-a445-4980-a03d-2e016b5093e6)
![Screenshot (249)](https://github.com/user-attachments/assets/33637b2d-31e6-4409-852f-ea62a2567928)
![Screenshot (250)](https://github.com/user-attachments/assets/95031b47-810d-4f56-9667-4d1d941819dc)
![Screenshot (251)](https://github.com/user-attachments/assets/e769596c-97c3-4d5d-8e60-f4c773c8c96e)
![Screenshot (252)](https://github.com/user-attachments/assets/b6a58297-d1b5-46aa-a00c-39301151bdce)
![Screenshot (253)](https://github.com/user-attachments/assets/bfe1af89-3c2c-4527-b909-c554b63abaa0)
![Screenshot (254)](https://github.com/user-attachments/assets/5799fbbc-1785-4472-a9d2-a2cb77679fcf)
![Screenshot (255)](https://github.com/user-attachments/assets/13e68bfa-09d6-43e4-90e8-221acc697e80)
![Screenshot (256)](https://github.com/user-attachments/assets/888297dc-efa1-455a-a0f5-27835bb53f6e)
![Screenshot (257)](https://github.com/user-attachments/assets/907064b1-1c73-41fa-8ff2-d6aea2c4804c)
![Screenshot (258)](https://github.com/user-attachments/assets/026c4fbc-60c5-46e4-bc2c-d29f8615b681)

---

📌 Future Improvements you can try :
✅ Admin panel UI

🧾 Product search & filter

❤️ Wishlist

💳 Payment Integration

📦 Order Tracking

---

👤 Author
Prajwal P B

Student @ Atria Institute of Technology, Bangalore<br>
LinkedIn : https://www.linkedin.com/in/prajwalpb



