import React from "react";
import { twMerge } from "tailwind-merge";
import { MotionConfig, motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export const SpringCards = () => {
  return (
    <section className="px-8 py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2">
        <Card
          title="SOCIAL MEDIA MANAGEMENT"
          subtitle={
            <>
               We design purposeful online brand presences through expert social media management and graphic design. By crafting cohesive visual identities and engaging content, we showcase your values, connect with your audience, and boost brand awareness and engagement.
            </>
          }
          className="bg-[#F8F8EF]"
        />
        <Card
          title="WEB DESIGN"
          subtitle={
            <>
              We’ll create a beautiful and helpful online home where your customers 
can connect to your mission, values, and peruse your offerings 
with ease. From semi-custom to full bespoke design, 
we ensure your online home reflects your new identity seamlessly.
            </>
          }
          className="bg-[#F8F8EF] sm:-translate-y-6"
        />
        <Card
          title="BRAND IDENTITY"
          subtitle={
            <>
              Where your values, mission, and conscious efforts come to life 
— our brand strategy and identity design gives your business a 
thoughtfully designed brand founded on meaning. <br />
<br />

Starting with creative direction, it helps us create all the elements
of your brand identity, style guide, and supporting collateral to help 
you make the best impression on your customers.
            </>
          }
          className="bg-[#F8F8EF]"
        />
        <Card
          title="PACKAGING"
          subtitle={
            <>
              Packaging is where your brand identity comes to life
We’ll expertly guide you in selecting the right materials and textures 
to create packaging that reflects your brand identity. 

Our goal is to deliver a visually engaging and tactile experience
for your customers that evokes the perfect emotions, reinforcing 
your brand strategy and enhancing customer engagement.
            </>
          }
          className="bg-[#F8F8EF] sm:-translate-y-6"
        />
      </div>
    </section>
  );
};

const Card = ({ title, subtitle, className }) => {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        bounce: 0.5,
      }}
    >
      <motion.div
        whileHover="hovered"
        className={twMerge(
          "group w-full border-2 border-black bg-emerald-300",
          className
        )}
      >
        <motion.div
          initial={{
            x: 0,
            y: 0,
          }}
          variants={{
            hovered: {
              x: -8,
              y: -8,
            },
          }}
          className={twMerge(
            "-m-0.5 border-2 border-black bg-emerald-300",
            className
          )}
        >
          <motion.div
            initial={{
              x: 0,
              y: 0,
            }}
            variants={{
              hovered: {
                x: -8,
                y: -8,
              },
            }}
            className={twMerge(
              "relative -m-0.5 flex h-80 flex-col justify-between overflow-hidden border-2 border-black bg-emerald-300 p-8",
              className
            )}
          >
            <p className="flex items-center text-xl font-light font-lemon uppercase leading-tight">
              <FiArrowRight className="-ml-8 mr-2 opacity-0 transition-all duration-300 ease-in-out group-hover:ml-0 group-hover:opacity-100 " />
              {title}
            </p>
            <div>
              <p className="transition-[margin] duration-300 ease-in-out group-hover:mb-10 text-[14px]">
                {subtitle}
              </p>
              {/* <button className="absolute bottom-2 left-2 right-2 translate-y-full border-2 border-black bg-white px-4 py-2 text-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 ">
                LET'S GO
              </button> */}
            </div>

            <motion.svg
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
              }}
              style={{
                top: "0",
                right: "0",
                x: "50%",
                y: "-50%",
                scale: 0.75,
              }}
              width="200"
              height="200"
              className="pointer-events-none absolute z-10 rounded-full"
            >
              <path
                id="circlePath"
                d="M100,100 m-100,0 a100,100 0 1,0 200,0 a100,100 0 1,0 -200,0"
                fill="none"
              />
              <text>
                <textPath
                  href="#circlePath"
                  fill="black"
                  className="fill-black text-2xl font-black uppercase opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                >
                  LEARN MORE • LEARN MORE • LEARN MORE • LEARN MORE •
                </textPath>
              </text>
            </motion.svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};
