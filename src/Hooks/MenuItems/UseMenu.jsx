import React, { useEffect, useState } from 'react'

export default function UseMenu() {
    const [ menu, setMenu ] = useState([]);
    const [loading, setLoading] = useState(true);

       useEffect(() => {
            fetch('menu.json')
                .then(response => response.json())
                .then(data => {
                    setMenu(data);
                })
        }, [])

  return [menu, loading];
}
