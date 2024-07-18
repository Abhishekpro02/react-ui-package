# React Button Package

A customizable button component for React with support for variants, custom colors, and additional styles.

[![npm](https://img.shields.io/npm/v/react-simple-toast)](https://www.npmjs.com/package/react-simple-toast)
[![npm](https://img.shields.io/npm/dt/react-simple-toast)](https://www.npmjs.com/package/react-simple-toast)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-simple-toast)](https://bundlephobia.com/result?p=react-simple-toast)
[![npm](https://img.shields.io/npm/l/react-simple-toast)](https://www.npmjs.com/package/react-simple-toast)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Props](#props)

## Installation

To install the package, you can use npm or yarn:

```bash
npm install npm i abhi-react-lib
# or
yarn add npm i abhi-react-lib
```

## Usage

```jsx
import React from "react";
import { Button } from "your-button-package";

const App = () => {
  return (
    <div>
      <Button onClick={() => alert("Default Button")}>Default Button</Button>
      <Button variant="success" onClick={() => alert("Success Button")}>
        Success Button
      </Button>
      <Button variant="danger" onClick={() => alert("Danger Button")}>
        Danger Button
      </Button>
      <Button color="#ff6600" onClick={() => alert("Custom Color Button")}>
        Custom Color Button
      </Button>
      <Button
        style={{ padding: "15px 30px", fontSize: "1.5em" }}
        onClick={() => alert("Styled Button")}
      >
        Styled Button
      </Button>
      <Button disabled onClick={() => alert("This should not alert!")}>
        Disabled Button
      </Button>
    </div>
  );
};

export default App;
```

### API

`Button`

A customizable button component.

### Props

- `children` (ReactNode): The content to be displayed inside the button.
- `onClick` (function): An optional click event handler.
- `color` (string): An optional prop to set a custom background color.
- `variant` ("default" | "success" | "danger"): An optional prop to set - predefined color variants. Defaults to "default".
- `style` (React.CSSProperties): An optional prop to pass additional styles to the button.
- `disabled` (boolean): An optional prop to disable the button.
