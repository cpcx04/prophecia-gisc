import {poppins} from './fonts'

export default function Navbar(){
 

    return(
        <div>
            <nav className="bg-[#087021] border-gray-200">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="" className="flex items-center space-x-3 ">
                        <span className={`${poppins.className} self-center text-xl font-semibold whitespace-nowrap text-white`}>PROPHECIA</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

                    </a>
                    <div className="flex items-center space-x-6 ">
                        <a href="#" className="text-sm  text-white hover:underline">Dr. John Doe</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}