import { Link,NavLink } from "react-router-dom"

export const Footer = () => {
  return (
   

      
<footer className="bg-white shadow m-4 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline"><Link>Cinemate™</Link></a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/priya_akki.neni/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
        </li>
        <li>
            <a href="linkedin.com/in/vara-devi-priya-akkineni-766376193" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Linkeldn</a>
        </li>
        <li>
            <a href="https://www.youtube.com/channel/UCyCwaNF6pG5oWdAafSnMFrA" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Youtube</a>
        </li>
        <li>
            <a href="https://github.com/varadevipriya" target="_blank" rel="noreferrer" className="hover:underline">Github</a>
        </li>
    </ul>
    </div>
</footer>

  
  )
}
