import { useState } from "react"




const useTask = (initialValue) => {
    const [taskId, setTaskId] = useState(initialValue)
    console.log("INSIDE CUSTOM HOOK")
}

export default useTask