"use client"
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Image from "next/image";

import { useSession, signIn, signOut } from "next-auth/react"


export default function Component() {
  const { data: session } = useSession()
  const route = useRouter()

  if (session) {
    return <>
      <div className='flex justify-between bg-amber-900 p-4 rounded-b-lg '>

        <div>
          Hello!  {session.user.name} <br />
        </div>

        <button onClick={() => signOut()}>Sign out</button>
      </div>


    </>
  }
  return <>
    <Navbar />
    <div className="flex flex-col justify-center gap-6 items-center text-center my-14">

      <div >Indian AntiQue QuesT</div>
      <Image className="rounded-2xl w-[80vw]" src="/1.jpg" alt="" />
    </div>
    <hr />

    <div className="container grid grid-cols-3 h-20 gap-10 p-8">

      {/* container 1 */}
      <div className="innerContainer1">

        <div className=" w-full m-6">
          <Image className="rounded-lg object-fill w-full h-80" src="/2.jpg" alt="" />
          <h1 className="text-gray-600">Antique Name</h1>
          <h1 className="text-gray-600">Description</h1>
          <p className="text-xs">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia?"</p>
          <div className="flex justify-around">
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold cursor-pointer" onClick={() => route.push('/buy')}>Buy</button>
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold cursor-pointer" onClick={() => route.push('/about')}>About</button>
           

          
          </div>

        </div>
      </div>
      {/* container 2 */}
      <div className="innerContainer2">

        <div className=" w-full m-6">
          <Image className="rounded-lg w-full h-80 object-fill" src="/3.jpeg" alt="" />
          <h1 className="text-gray-600">Antique Name</h1>
          <h1 className="text-gray-600">Description</h1>
          <p className="text-xs">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia?"</p>
          <div className="flex justify-around">
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold">Buy</button>
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold" onClick={() => route.push('/about')}>About</button>

          </div>
        </div>

      </div>
      {/* container 3 */}
       <div className="innerContainer3">

        <div className=" w-full m-6">
          <Image className="rounded-lg w-full h-80 object-fill" src="/4.jpg" alt="" />
          <h1 className="text-gray-600">Antique Name</h1>
          <h1 className="text-gray-600">Description</h1>
          <p className="text-xs">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia?"</p>
          <div className="flex justify-around">
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold">Buy</button>
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold" onClick={() => route.push('/about')}>About</button>

          </div>
        </div>

      </div>
      {/* container 4 */}
       <div className="innerContainer4">

        <div className=" w-full m-6">
          <Image className="rounded-lg w-full h-80 object-fill" src="/5.webp" alt="" />
          <h1 className="text-gray-600">Antique Name</h1>
          <h1 className="text-gray-600">Description</h1>
          <p className="text-xs">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia?"</p>
          <div className="flex justify-around">
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold">Buy</button>
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold" onClick={() => route.push('/about')}>About</button>

          </div>
        </div>

      </div>
      {/* container 5 */}
       <div className="innerContainer5">

        <div className=" w-full m-6">
          <Image className="rounded-lg w-full h-80 object-fill" src="/2.jpg" alt="" />
          <h1 className="text-gray-600">Antique Name</h1>
          <h1 className="text-gray-600">Description</h1>
          <p className="text-xs">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia?"</p>
          <div className="flex justify-around">
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold">Buy</button>
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold" onClick={() => route.push('/about')}>About</button>

          </div>
        </div>

      </div>
      {/* container 6 */}
       <div className="innerContainer6">

        <div className=" w-full m-6">
          <Image className="rounded-lg w-full h-80 object-fill" src="/2.jpg" alt="" />
          <h1 className="text-gray-600">Antique Name</h1>
          <h1 className="text-gray-600">Description</h1>
          <p className="text-xs">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, mollitia?"</p>
          <div className="flex justify-around">
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold">Buy</button>
          <button className=" border-2 my-4 border-green-500 bg-green-500 px-4 py-2  rounded-lg hover:font-bold" onClick={() => route.push('/about')}>About</button>

          </div>
        </div>

      </div>
     
      
    </div>

  </>

}

