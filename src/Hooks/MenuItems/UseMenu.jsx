import React, { useEffect, useState } from 'react'

export default function UseMenu() {
    const [ menu, setMenu ] = useState([]);
    const [loading, setLoading] = useState(true);

       useEffect(() => {
            fetch(`${import.meta.env.VITE_dataApi}/menu`)
                .then(response => response.json())
                .then(data => {
                    setMenu(data);
                })
        }, [])

  return [menu, loading];
}
