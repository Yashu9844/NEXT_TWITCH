
import {Poppins} from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const font = Poppins({
    subsets: ['latin'],
    weight: ['400', '700','200',
        '300', '500', '600', '800', '900'],
  
   
})

export const Logoo = ()=>{
    return(
      <Link href={"/"}>
        <div className=" items-center gap-2 p-3 lg:p-5 hidden lg:flex ">
            <Image
            src={"/twitch.svg"}
            height={"50"}
            width={"50"}
            alt='images'
            />
             <div className="flex flex-col items-center">
                 <h1 className={font.className}>Twitch</h1>
                 <p className={font.className}>Baby</p>
             </div>
        </div></Link>
    )
}

