<div align="center">

## 🚀 DevStack Builder

<p> A modern and interactive <strong>Technology Stack Builder</strong> built with <strong>React</strong> and <strong>TypeScript</strong>. Explore different technologies, view their categories, difficulty levels, ratings and descriptions, and create your own personalized technology stack with just a few clicks. </p>

</div>

✨ Features

<table> <tr> <td width="50%" valign="top">

🔍 Explore Technologies

Browse different technologies with their icons, descriptions, categories, difficulty levels and ratings.

</td>

<td width="50%" valign="top">

🧩 Build Your Own Stack

Add technologies to your personal stack and see your selected technologies instantly.

</td> </tr>

<tr> <td width="50%" valign="top">

🗑️ Manage Your Stack

Remove individual technologies or clear the entire stack with a single click.

</td>

<td width="50%" valign="top">

🔔 Interactive Notifications

Get instant success and information notifications when adding, removing or clearing technologies.

</td> </tr>

<tr> <td colspan="2" valign="top">

⚡ Dynamic Data Loading

Technology information is loaded asynchronously from a JSON data source with React Suspense.

</td> </tr> </table>


<div align="center">

🛠️ Technologies Used

<table> <thead> <tr> <th>Technology</th> <th>Purpose</th> </tr> </thead> <tbody> <tr> <td>⚛️ <strong>React.js</strong></td> <td>Building the user interface and reusable components</td> </tr> <tr> <td>📘 <strong>TypeScript</strong></td> <td>Type-safe development</td> </tr> <tr> <td>🎨 <strong>Tailwind CSS</strong></td> <td>Modern UI styling</td> </tr> <tr> <td>⚡ <strong>React Suspense</strong></td> <td>Handling asynchronous technology data</td> </tr> <tr> <td>🔔 <strong>React Toastify</strong></td> <td>User-friendly notifications</td> </tr> <tr> <td>🟢 <strong>Vite</strong></td> <td>Fast development and build tooling</td> </tr> <tr> <td>📄 <strong>JSON</strong></td> <td>Storing technology information</td> </tr> </tbody> </table>

</div>



<br>
<br>
<br>


## ❓ React FAQ

### **1. What is JSX, and why is it used in React?**

**Answer:** JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes the UI easier to write and understand.

### **2. What is the difference between props and state?**

**Answer:** Props are used to pass data from a parent component to a child component and are read-only. State is data managed inside a component that can change and cause the component to re-render.

### **3. What does the `useState` hook do, and where did you use it in this project?**

**Answer:** `useState` is used to create and manage changing data in a component. I used it in the `Technologies` component to store the selected technologies.

```tsx
const [selectedTechArr, setSelectedTechArr] = useState<TechnologyType[]>([]);
```

### **4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

**Answer:** `useEffect` is used to perform side effects such as fetching data, updating the document or working with external systems. I did not use it in this project because I used `Suspense` and `use()` to load the JSON data.

### **5. Why does every item in a `.map()` list need a unique `key` prop?**

**Answer:** React uses the `key` to identify each item in a list. It helps React understand which items were added, removed, or changed.

### **6. What is conditional rendering?**

**Answer:** Conditional rendering means showing different UI based on a condition. I used it to show `EmptyStack` when no technology is selected.

### **7. How does parent-child data communication work?**

**Answer:** The parent passes data to the child through props. The child can send changes back by calling a function passed through props.
