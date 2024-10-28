
import {Poppins} from 'next/font/google'

const font = Poppins({
    subsets: ['latin'],
    weight: ['400', '700','200',
        '300', '500', '600', '800', '900'],
  
   
})

export const Logoo = ()=>{
    return(
        <div className="">
            Logo
        </div>
    )
}

