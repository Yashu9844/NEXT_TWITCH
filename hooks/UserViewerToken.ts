import { useEffect, useState } from "react"
import { toast } from "sonner"



export const useViewerToken = async(hostIdentity:string)=>{
    const [name,setName] = useState("")
    const [token,setToken] = useState("")
    const [identity,setIdentity] = useState("")

 useEffect(()=>{
    const createToken = async ()=>{
        try {
            const viewerToken = await createVieweToken()
        } catch (error) {
            toast.error("Something went while creating token")
        }
    }
 })
  

}