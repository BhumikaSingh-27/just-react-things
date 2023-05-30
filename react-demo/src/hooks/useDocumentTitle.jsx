import { useEffect } from "react"

export const useDocumentTitle = (counter)=>{
    useEffect(() => {
        document.title = `Count - ${counter}`;
      }, [counter]);
}