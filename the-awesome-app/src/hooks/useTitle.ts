import { useEffect } from "react";

export function useTitle(title: string){

    const originalDocumentTitle = document.title;
    useEffect(() => {

        document.title = "React App: " + title;

        return () => {
            document.title = originalDocumentTitle;
        }

    }, [])

}