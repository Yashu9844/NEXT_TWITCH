import { getbockedUsers } from "@/lib/block-service";
import { columns,  } from "./_components/columns";
import { DataTable } from "./_components/data-table";
import { formatDate } from "date-fns";

const CommunityPage = async() => {
const blockedUSers = await getbockedUsers()

const formattedData = blockedUSers.map((block)=>({
    ...block,
    userId:block.blocked.id,
    imageUrl:block.blocked.imageUrl,
    username:block.blocked.username,
    createdAt:formatDate(new Date(block.blocked.createdAt),"dd/MM/yyyy")
}))
console.log({formattedData})
  return (
    <div className="p-6 ">
      <div className="mb-4 ">
        <h1 className="font-bold text-2xl">Community Settings</h1>
      </div>
      <DataTable columns={columns} data={formattedData} />
    </div>
  );
};

export default CommunityPage;

