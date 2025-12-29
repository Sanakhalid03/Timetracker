import React from 'react';
import { motion,type  Variants } from 'framer-motion';
import {User, LogOut } from 'lucide-react';
import { IoIosTimer } from 'react-icons/io';
import {format} from "date-fns"
// --- HoverGradientNavBar Component ---

interface HoverGradientMenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
  iconMobile?: boolean;
}

const rightmenuItems: HoverGradientMenuItem[] = [
  { icon: <User className="h-5 w-5" />, label: "Sana", href: "#", gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)", iconColor: "group-hover:text-red-500 dark:group-hover:text-red-400" ,iconMobile:true},
 
  { icon: <LogOut className="h-5 w-5" />, label: "Logout", href: "#", gradient: "radial-gradient(circle, rgba(161,98,7,0.15) 0%, rgba(133,77,14,0.06) 50%, rgba(100,62,8,0) 100%)", iconColor: "group-hover:text-amber-600 dark:group-hover:text-amber-400" },
];
const leftmenuItems: HoverGradientMenuItem[] = [
  { icon: <IoIosTimer className="h-5 w-5" />, label: "Attendance", href: "#", gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)", iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400" },
];

// Animation variants
const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};
const today= format(new Date(), "EEEE, MMMM d, yyyy")
function HoverGradientNavBar(): React.JSX.Element {
  return (
    <div className="relative w-full  ">
      <motion.nav
        className="w-full md:w-[70vw] lg:w-[60vw] mx-auto px-2 md:px-4 py-2 md:py-3 rounded-none md:rounded-3xl 
        bg-white dark:bg-black/80 backdrop-blur-lg 
        border-t md:border border-gray-200/80 dark:border-gray-800/80 
        shadow-lg md:shadow-xl relative"
        initial="initial"
        whileHover="hover"
      >
        <ul className="flex items-center justify-between gap-1 md:gap-3 relative z-10">
          <div >
              {leftmenuItems.map((item: HoverGradientMenuItem) => (
            <motion.li key={item.label} className="relative flex-1 md:flex-none">
              <motion.div
                className="block rounded-xl md:rounded-2xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                {/* Per-item glow */}
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none rounded-xl md:rounded-2xl"
                  variants={glowVariants}
                  style={{
                    background: item.gradient,
                    opacity: 0,
                  }}
                />
                {/* Front-facing */}
                <motion.a
                  href={item.href}
                  className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-3
                  px-2 py-1.5 md:px-4 md:py-2 relative z-10 
                  bg-transparent text-gray-600 dark:text-gray-300 
                  group-hover:text-gray-900 dark:group-hover:text-white 
                  transition-colors rounded-xl md:rounded-2xl text-xs "
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom"
                  }}
                >
                    <span className={`transition-colors duration-300 ${item.iconColor}`}>
                    {item.icon}
                  </span>
                    <div className='flex flex-col justify-center  gap-2'>
                       <span className="hidden md:inline font-bold text-xl">{item.label}</span>
                    </div>
                
                 
                 
                </motion.a>
                {/* Back-facing */}
                <motion.a
                  href={item.href}
                  className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-3 
                  px-2 py-1.5 md:px-4 md:py-2 absolute inset-0 z-10 
                  bg-transparent text-gray-600 dark:text-gray-300 
                  group-hover:text-gray-900 dark:group-hover:text-white 
                  transition-colors rounded-xl md:rounded-2xl text-xs "
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    transform: "rotateX(90deg)"
                  }}
                >
                   <span className={`transition-colors duration-300  ${item.iconColor}`}>
                    {item.icon}
                  </span>
                  <div className='flex flex-col gap-1'>
                      <span className="hidden md:inline font-bold text-xl">{item.label}</span>
                          <span className=" md:inline whitespace-nowrap">
                            {today}
                          </span>
                    
                  </div>
                
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
          </div>
         

         <div className='flex items-center gap-3'>
                 {rightmenuItems.map((item: HoverGradientMenuItem) => (
            <motion.li key={item.label} className="relative flex-1 md:flex-none">
              <motion.div
                className="block rounded-xl md:rounded-2xl overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                {/* Per-item glow */}
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none rounded-xl md:rounded-2xl"
                  variants={glowVariants}
                  style={{
                    background: item.gradient,
                    opacity: 0,
                  }}
                />
                {/* Front-facing */}
                <motion.a
                  href={item.href}
                  className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-2 
                  px-2 py-1.5 md:px-4 md:py-2 relative z-10 
                  bg-transparent text-gray-600 dark:text-gray-300 
                  group-hover:text-gray-900 dark:group-hover:text-white 
                  transition-colors rounded-xl md:rounded-2xl text-xs md:text-sm"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom"
                  }}
                >
                    <span className={`transition-colors duration-300 ${item.iconColor} ${item.iconMobile ? "hidden md:inline":""}`}>
                    {item.icon}
                  </span>
                
                      <span className="hidden md:inline font-medium">{item.label}</span>
                 
                 
                </motion.a>
                {/* Back-facing */}
                <motion.a
                  href={item.href}
                  className="flex flex-col md:flex-row items-center justify-center gap-0.5 md:gap-2 
                  px-2 py-1.5 md:px-4 md:py-2 absolute inset-0 z-10 
                  bg-transparent text-gray-600 dark:text-gray-300 
                  group-hover:text-gray-900 dark:group-hover:text-white 
                  transition-colors rounded-xl md:rounded-2xl text-xs md:text-sm"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    transform: "rotateX(90deg)"
                  }}
                >
            
                      <span className={`transition-colors duration-300 ${item.iconColor} ${item.iconMobile ? "hidden md:inline":""}`}>
                    {item.icon}
                  </span>
                    
             
                  <span className="hidden md:inline font-medium">{item.label}</span>
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
         </div>
         
        </ul>
      </motion.nav>
    </div>
  );
}

export default HoverGradientNavBar;
