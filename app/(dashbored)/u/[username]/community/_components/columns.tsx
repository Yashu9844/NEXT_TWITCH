"use client"

import UserAvatar from "@/app/(browser)/_components/sidebar/UserAvatar"
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
    cell:({row})=>(
        <div className="flex items-center gap-x-4">
            <UserAvatar
            username={row.original.username}
            imageUrl={row.original.imageUrl}
            />
            <span>{row.original.username}</span>
        </div>
    )
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
