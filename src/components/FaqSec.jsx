import React,{useState} from 'react'
import Title from './Title'
import { faqItems } from '../constant/data';
import { RiAddLine } from '@remixicon/react';

//import motion
import { motion } from 'motion/react'
import * as variants from "../motion/animation";
 
const FaqSec = () => {
    const [openId,setOpenId]=useState(faqItems[0].id ?? null);
    const handleClick=(id)=>{
        setOpenId( openId === id ? null: id);
    }
  return (
    <section className='section pb-[90px] lg:mb-[160px]'>
      <motion.div 
       variants={variants.staggerContainer}
           initial="hidden"
           viewport={{once:true}}
           whileInView="show"
      className='container'>
        <div  className='grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-start bg-white rounded-lg md:p-10'>
            {/* Title */}
            <Title title="Frequently Asked Questions"
             text="Still you have any questions? Contact our Team via Jimcaalekadar42@gmail.com" 
             link="See All FAQ’s"/>
             {/* Question Wrapper */}
             <div  className='border border-white-95 grid p-6'>
                {faqItems.map(item=>(
                    // Question
                    <motion.div variants={variants.fadeIn} className="space-y-5" key={item.id}>
                        {/* title */}
                        <div className=" flex items-center justify-between gap-12 border-b border-white-95 pb-3 md:px-5">
                            <h4 className='text-lg sm:text-xl '>{item.title}</h4>
                            <button className='h-10 w-10 bg-orange-75 flex items-center justify-center aspect-square rounded-lg
                            hover:bg-orange-75/80 transition-colors
                            ' onClick={() => handleClick(item.id)}>
                                <RiAddLine className={`transition ${
                                  openId === item.id ? "rotate-45" : ""
                                }`} 
                                size={30}/>
                            </button>
                        </div>
                        {/* text */}
                        <div className={`max-h-0 overflow-y-hidden transition-all ${
                          openId === item.id ? "max-h-[200px]":""
                        }`}>
                          <p className='px-5 pb-3'>{item.text}</p>
                            </div>
                    </motion.div>
                ))}
             </div>
        </div>
      </motion.div>
    </section>
  )
}

export default FaqSec
