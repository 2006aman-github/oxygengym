'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function OneLiner() {
const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ['start end', 'end start'], // Starts when the bottom of OneLiner hits the bottom of the viewport
});

const backgroundPosition = useTransform(
scrollYProgress,
[0, 1],
['0% 50%', '100% 50%']
);

return ( <section
   ref={ref}
   className="
     relative
     w-full
     py-20
     overflow-hidden
     flex
     justify-center
     items-center
     bg-background
   "
 >
<motion.h2
initial={{
opacity: 0,
filter: 'blur(12px)',
y: 24,
}}
whileInView={{
opacity: 1,
filter: 'blur(0px)',
y: 0,
}}
viewport={{ once: true, amount: 0.1 }}
transition={{
duration: 1.1,
ease: [0.22, 1, 0.36, 1],
}}
className="
max-w-[16ch]
text-[clamp(3rem,7vw,7rem)]
leading-[0.92]
tracking-[-0.06em]
font-normal
text-zinc-900
dark:text-zinc-100
"
>
A premium fitness destination <br />
to train, progress, and <br />


    <motion.span
      style={{
        backgroundPosition,
       backgroundImage: `
linear-gradient(
  90deg,
  currentColor 0%,
  currentColor 35%,

  rgba(200,50,30,0.35) 44%,
  rgba(220,65,40,0.65) 47%,

  #D63F28 50%,

  rgba(220,65,40,0.65) 53%,
  rgba(200,50,30,0.35) 56%,

  currentColor 65%,
  currentColor 100%
)
`,
      }}
      className="
        inline-block
        bg-[length:250%_100%]
        bg-clip-text
        text-transparent
        font-semibold
      "
    >
      become your strongest self.
    </motion.span>
  </motion.h2>
</section>


);
}
