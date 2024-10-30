import { type Component } from 'solid-js';

const Navbar: Component = () => {
  return (
    <nav class="fixed md:static bottom-0 left-0 right-0 z-50 md:z-auto">
      <div class="md:static w-full md:w-auto">
    
        <div class="bg-[#161B22]/80 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none border-t md:border border-white/10 md:border-none px-4 py-3">
          <ul class="flex items-center justify-around md:justify-center gap-8 max-w-screen-lg mx-auto">
            <li>
              <a href="/" class="flex flex-col md:flex-row items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-xs md:text-sm">Home</span>
              </a>
            </li>
            <li>
              <a href="/events" class="flex flex-col md:flex-row items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span class="text-xs md:text-sm">Events</span>
              </a>
            </li>
            <li>
              <a href="/about" class="flex flex-col md:flex-row items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M10.425 1.414a3.33 3.33 0 0 1 3.026-.097l.19.097l6.775 3.995l.096.063l.092.077l.107.075a3.22 3.22 0 0 1 1.266 2.188l.018.202l.005.204v7.284c0 1.106-.57 2.129-1.454 2.693l-.17.1l-6.803 4.302c-.918.504-2.019.535-3.004.068l-.196-.1l-6.695-4.237a3.23 3.23 0 0 1-1.671-2.619L2 15.502V8.217c0-1.106.57-2.128 1.476-2.705zM12 11h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"/></svg>
                <span class="text-xs md:text-sm">About</span>
              </a>
            </li>
            <li>
              <a href="/contact" class="flex flex-col md:flex-row items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
              
              <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"><path fill="currentColor" d="M3 3a2 2 0 1 1 4 0a2 2 0 0 1-4 0m6.779 1.584l.042.032a2 2 0 1 0-.042-.032M6.268 6A2 2 0 1 1 9.73 7.998A2 2 0 0 1 6.268 6M2.5 6h2.67a3.01 3.01 0 0 0 .594 3H5.5a2.5 2.5 0 0 0-2.355 1.658a3.7 3.7 0 0 1-.933-.543C1.46 9.51 1 8.616 1 7.5A1.5 1.5 0 0 1 2.5 6m8 3c1.085 0 2.009.691 2.355 1.658c.34-.139.654-.32.933-.543C14.54 9.51 15 8.616 15 7.5A1.5 1.5 0 0 0 13.5 6h-2.67c.11.313.17.65.17 1a3 3 0 0 1-.764 2zm1.387 1.928c.073.176.113.37.113.572c0 1.116-.459 2.01-1.212 2.615C10.047 14.71 9.053 15 8 15s-2.047-.29-2.788-.885C4.46 13.51 4 12.616 4 11.5A1.496 1.496 0 0 1 5.5 10h5a1.5 1.5 0 0 1 1.387.928"/></svg>
                <span class="text-xs md:text-sm">Contact</span>
              </a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;