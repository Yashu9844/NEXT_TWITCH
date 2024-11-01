interface UserProps{
    params:{
        username:string;
    }
}


const Page = ({params} : UserProps) => {
  return (
    <div>
      Page {params.username}
    </div>
  );
};

export default Page;