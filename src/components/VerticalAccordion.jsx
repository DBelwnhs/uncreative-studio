import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import { useState } from "react";

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className="p-4 bg-[#1b1a24] h-[80vh] flex place-items-center ">
      <div className="flex flex-col lg:flex-row h-fit lg:h-[650px] w-full  xl:max-w-[1600px] mx-auto shadow overflow-hidden">
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              title={item.title}
              bgColor={item.bgColor}
              content={item.content}
            />
          );
        })}
      </div>
    </section>
  );
};

const Panel = ({ open, setOpen, id, title, bgColor, content }) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className="hover:bg-opacity-90 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-center items-center gap-4 relative group"
        onClick={() => setOpen(id)}
        style={{
          backgroundColor: bgColor,
        }}
      >
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className="hidden lg:block text-xl font-light rotate-180"
        >
          {title}
        </span>
        <span className="block lg:hidden text-xl font-light">{title}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              backgroundColor: bgColor,
            }}
            className="w-full h-full overflow-hidden relative flex items-center justify-center"
          >
            <motion.div
              variants={descriptionVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="w-full h-full p-6 text-white"
            >
              {content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0 },
};

const items = [
  {
    id: 1,
    title: "BRAND",
    bgColor: "#2455E9",
    content: (
      <div className="py-5 ml-24 flex flex-col">
        <h2 className="text-4xl font-bold my-4 font-sans">BRAND IDENTITY </h2>
        <p className="max-w-[500px] font-sans font-light text-xl ">
          Where your values, mission, and conscious efforts come to life — our
          brand strategy and identity design gives your business a thoughtfully
          designed brand founded on meaning. <br />
          <br />
          Starting with creative direction, it helps us create all the elements
          of your brand identity, style guide, and supporting collateral to help
          you make the best impression on your customers.
        </p>
        <button className="mt-7 mr-44 align-middle">Περισσοτερα</button>
      </div>
    ),
  },
  {
    id: 2,
    title: "PACKAGING",
    bgColor: "#F8F8EF",
    content: (
      <div className="py-5 ml-24 flex flex-col">
        <h2 className="text-4xl font-bold my-4 font-sans">PACKAGING </h2>
        <p className="max-w-[500px] font-sans font-light text-xl ">
          Packaging is how your brand identity tangibly manifests. We’ll
          carefully guide you through choosing the right materials and textures
          to create a visually enjoyable and tactile experience for your
          customers that always evokes the ideal emotions.
        </p>
        <button className="mt-7 mr-44 align-middle">Περισσοτερα</button>
      </div>
    ),
  },
  {
    id: 3,
    title: "WEB DESIGN",
    bgColor: "#2E2D2D",
    content: (
      <div className="py-5 ml-24 flex flex-col">
        <h2 className="text-4xl font-bold my-4 font-sans">WEB DESIGN </h2>
        <p className="max-w-[500px] font-sans font-light text-xl ">
          We’ll create a beautiful and helpful online home where your customers
          can connect to your mission, values, and peruse your offerings with
          ease. From semi-custom to full bespoke design, we ensure your online
          home reflects your new identity seamlessly.
        </p>
        <button className="mt-7 mr-44 align-middle">Περισσοτερα</button>
      </div>
    ),
  },
  {
    id: 4,
    title: "SOCIAL MEDIA",
    bgColor: "#C6D0D2",
    content: (
      <div className="py-5 ml-24 flex flex-col">
        <h2 className="text-4xl font-bold my-4 font-sans">
          SOCIAL MEDIA MANAGMENT
        </h2>
        <p className="max-w-[500px] font-sans font-light text-xl ">
          Where your values, mission, and conscious efforts come to life — our
          brand strategy and identity design gives your business a thoughtfully
          designed brand founded on meaning. Starting with creative direction,
          it helps us create all the elements of your brand identity, style
          guide, and supporting collateral to help you make the best impression
          on your customers.
        </p>
        <button className="mt-7 mr-44 align-middle">Περισσοτερα</button>
      </div>
    ),
  },
];
