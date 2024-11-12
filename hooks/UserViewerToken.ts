// /hooks/useViewerToken.ts

import { createVieweToken } from "@/actions/token";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import  { jwtDecode, JwtPayload } from "jwt-decode";

export const useViewerToken = (hostIdentity: string) => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");
  const [identity, setIdentity] = useState("");

  useEffect(() => {
    const createToken = async () => {
      try {
        const viewerToken = await createVieweToken(hostIdentity);
        setToken(viewerToken);

        const decodedToken = jwtDecode<JwtPayload & { name?: string }>(viewerToken);
        
        // Log the entire token and specific fields separately
        

        const name = decodedToken.name || "Anonymous";
        const identity = decodedToken.jti || decodedToken.sub || "";

        if (name) {
          setName(name);
        }
        if (identity) {
          setIdentity(identity);
        }
      } catch (error) {
        console.error("Token creation error:", error);
        toast.error("Something went wrong while creating token");
      }
    };

    createToken();
  }, [hostIdentity]);

  return {
    token,
    name,
    identity,
  };
};
