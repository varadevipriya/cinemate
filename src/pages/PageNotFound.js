import {Link} from 'react-router-dom'
import LogoImage from "../assets/images/pagenotfound.png"
export const PageNotFound = () => {
  return (
    <main>
        <section className="flex flex-col jsutify-center px-2">
            <div className="flex flex-col items-center my-4">
                <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, OOPS!</p>
                <div className="max-w-lg">
                <img className="rounded" src={LogoImage} alt="404 Not Found"/>
                </div>
            </div>
            <div className='flex justify-center my-4'>
                <Link to ="/">
                <button type="button" class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... rounded-lg px-5 py-2.5 text-white mr-2 mb-2 font-medium">
             Back To Cinemate
                    </button>
                </Link>
                
            
        </div>
        </section>
        
    </main>
  )
}
