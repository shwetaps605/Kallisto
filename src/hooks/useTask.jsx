import { useState } from "react"

const useTask = (id) => {
    const [taskId, setTaskId] = useState(null)
    console.log("INSIDE CUSTOM HOOK")
}

export default useTask