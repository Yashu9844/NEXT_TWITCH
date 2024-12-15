"use client"

import UserAvatar from "@/app/(browser)/_components/sidebar/UserAvatar"
import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import UnblockButton from "./unblock-button"

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
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Usernamee
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
        cell: ({ row }) => (
          <div className="flex items-center gap-x-4">
            <UserAvatar
              username={row.original.username}
              imageUrl={row.original.imageUrl}
            />
            <span>{row.original.username}</span>
          </div>
        ),
      },
      {
        accessorKey: "createdAt",
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Date blocked
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        ),
      },
  {
    id: "actions",
   cell:({row})=><UnblockButton userId={row.original.userId}/>
  },
]
