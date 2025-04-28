# 📚 Repository: props-in-react

## 🎯 Project Overview

This project focuses on **practicing different concepts related to props** in **React + TypeScript**.  
The goal was to apply everything I learned about props, including passing, destructuring, default values, optional props, children, and props spreading.

I built two Profile components in this task:

- `Profile.tsx` for advanced props handling.
- `Profile2.tsx` for basic props practice.

---

## ✨ What Are Props in React?

> **Props** (short for **Properties**) are how data is passed from a parent component to a child component in React.  
> They act as inputs to components, allowing them to be dynamic and reusable.  
> Props are **read-only**, meaning a child component cannot modify the props it receives.

✅ In simple words:  
**Props are inputs that help components communicate and behave dynamically.**

---

## 🛠️ Key Concepts Practiced

- Passing props flexibly between components.
- Destructuring props inside function parameters.
- Setting default values for props.
- Handling optional props safely with TypeScript.
- Props spreading (`{...object}`) for efficient prop passing.
- Passing children elements inside components.
- Writing strong TypeScript types for props.

---

## 📖 Key Concepts - Definitions

| Concept         | Definition                                                                                                 |
| :-------------- | :--------------------------------------------------------------------------------------------------------- |
| Passing props   | Sending data from a parent component to a child component as attributes.                                   |
| Destructuring   | Extracting values directly from props inside the function parameters for cleaner code.                     |
| Default values  | Assigning a fallback value to a prop when it is not provided by the parent component.                      |
| Optional props  | Marking some props as not mandatory, allowing components to work even if they are not passed.              |
| Children        | A special prop that allows passing JSX elements or content between a component’s opening and closing tags. |
| Props spreading | Passing all properties of an object to a component at once instead of individually.                        |

---

## 📂 Project Structure

| File           | Purpose                                                                         |
| :------------- | :------------------------------------------------------------------------------ |
| `App.tsx`      | Displays multiple Profile components dynamically.                               |
| `Profile.tsx`  | Handles props with destructuring, default values, optional props, and children. |
| `Profile2.tsx` | Focuses on basic prop passing and destructuring practice.                       |

⚡ **Other generated files** (`main.tsx`, `vite-env.d.ts`, `App.css`, `index.css`) were created automatically by Vite and were not manually edited.

---

## 💡 Technical Stack

- **React 18**
- **Vite** for a fast project setup
- **TypeScript** for strong typing
- **CSS Modules** for simple and scoped styling
