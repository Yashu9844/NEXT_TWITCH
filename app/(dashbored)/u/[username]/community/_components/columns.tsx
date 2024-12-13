"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Blockedusers = {
  id: string
  userId:string
  imageUrl:string
  username: string
  createdAt: string
}

export const columns: ColumnDef<Blockedusers>[] = [
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "createdAt",
    header: "Date Blocked",
  },
  {
    id: "actions",
   cell:()=><Button>Unblock</Button>
  },
]
