# My Hooks

Aprendiendo sobre los hooks de react

## useState
El mas  usato de los hooks, nos permite tener un estado en un componente funcional
el seCount es una funcion que nos permite cambiar el estado del componente
```jsx
import React, { useState } from 'react';
const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
``` 
## useEffect
Nos permite tener efectos secundarios en un componente funcional
también nos permite ejecutar acciones cuando se monta el componente, cuando se actualiza o cuando se desmonta
como cuando aparece o desaparece un mensaje de error en un formulario
```jsx
import React, { useState, useEffect } from 'react';
const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
## useFetch
Nos permite hacer peticiones a una API
```jsx
import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch();
    }, [url]);

    const loadingTrue = () => {
        setState({
            data: null,
            loading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async () => {
        loadingTrue();
        const response = await fetch(url);
        const data = await response.json();
        if(!response.ok){
            setState({
                data: null,
                loading: false,
                hasError: true,
                error: data.message
            });
        }
        setState({
            data,
            loading: false,
            hasError: false,
            error: null
        });
    }

    return {
        ...state
    }
}
```

