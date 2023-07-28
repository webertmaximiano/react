import React from "react"

export default function App() {
    const [data, setData] = React.useState({})

    return (
        <div>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
