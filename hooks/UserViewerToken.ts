import { createVieweToken } from "@/actions/token"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import {jwtDecode,JwtPayload} from 'jwt-decode'


export const useViewerToken = async(hostIdentity:string)=>{
    const [name,setName] = useState("")
    const [token,setToken] = useState("")
    const [identity,setIdentity] = useState("")

 useEffect(()=>{
    const createToken = async ()=>{
        try {
            const viewerToken = await createVieweToken(hostIdentity)
            setToken(viewerToken)

const decodedToken = jwtDecode(viewerToken) as JwtPayload &{name?:string}
 const name = decodedToken.name;
 const identity= decodedToken.jti

  if(name){
    setName(name)
    
  }
  if(identity){
    setIdentity(identity)
  }


        } catch (error) {
            toast.error("Something went while creating token")
        }
    }
    createToken()
 },[hostIdentity])
  return {
    token,
    name,
    identity,
  }

}