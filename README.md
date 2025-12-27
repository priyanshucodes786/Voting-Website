# 🗳️ Vote Your Candidate

**Vote Your Candidate** is a simple, frontend-only voting simulation built using **HTML, CSS, and Vanilla JavaScript**.  
The project demonstrates how a basic digital voting flow works — from access control to vote selection and data persistence — without using any backend or database.

This project is designed primarily for **learning, demonstration, and small-scale internal use**.

---

## 🎯 Objective

The main objective of this project is to:

- Understand DOM manipulation and event handling
- Learn event delegation for handling nested click events
- Implement conditional UI rendering
- Store and persist data using browser `localStorage`
- Simulate a real-world voting experience in a controlled environment

---

## 🏫 Use Cases

This project can be used in the following scenarios:

### 🎓 Educational & Learning Purposes
- Practicing JavaScript fundamentals
- Understanding browser storage (`localStorage`)
- Learning how UI state is managed without a backend
- College mini projects and frontend assignments

### 🏫 Schools & Colleges (Internal Elections)
The application can be adapted by **schools and colleges** to conduct **internal cabinet or council elections**, such as:

- Student council elections
- School cabinet or college committee elections
- Class representative selection
- Club, society, or hostel leadership voting

In these cases, the system works well in:
- Computer labs
- Single-device or supervised environments
- Short-duration internal elections

⚠️ This project is suitable only for **small-scale, non-sensitive elections**.

---

## 🔐 How the Application Works

### 1️⃣ PIN-Based Access Control
- A random **4-digit PIN** is generated when the page loads
- The voting screen remains hidden initially
- Only users who enter the correct PIN can access the voting interface

**Purpose:**  
Demonstrates persistent data storage without a backend.

---

## 💾 Data Storage

The project uses **browser `localStorage`** to store vote counts.

### Stored Keys:
```js
countone  // Vote count for candidate one
counttwo  // Vote count for candidate two
localStorage.getItem('countone')
localStorage.getItem('counttwo')
```

© Copyright

© 2025 Priyanshu Kashyap.  
All rights reserved.

This project is intended for educational and non-commercial use.  
Permission is granted to use, modify, and share the code for learning purposes, provided proper credit is given to the author.
