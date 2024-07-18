# React simple toast

[![npm](https://img.shields.io/npm/v/react-simple-toast)](https://www.npmjs.com/package/react-simple-toast)
[![npm](https://img.shields.io/npm/dt/react-simple-toast)](https://www.npmjs.com/package/react-simple-toast)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-simple-toast)](https://bundlephobia.com/result?p=react-simple-toast)
[![npm](https://img.shields.io/npm/l/react-simple-toast)](https://www.npmjs.com/package/react-simple-toast)

A simple toast component for React.

## Installation

```bash
npm install react-simple-toast
```

## Usage

```jsx
import React from "react";
import { ToastProvider, useToast } from "react-simple-toast";

function App() {
  const { showToast } = useToast();

  return (
    <div>
      <button onClick={() => showToast("Hello, world!")}>Show toast</button>
    </div>
  );
}

export default function AppWithToast() {
  return (
    <ToastProvider>
      <App />
    </ToastProvider>
  );
}
```
