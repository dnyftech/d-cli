import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

templates/frontend-react/src/App.jsx

```jsx
function App() {
  return (
    <div>
      <h1>Dnyftech Frontend</h1>
      <p>Ready to build.</p>
    </div>
  );
}

export default App;
