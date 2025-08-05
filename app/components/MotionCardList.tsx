import { Link } from "@remix-run/react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { useState } from "react";
import { ExamListType } from "~/lib/types";

const MotionCardList = ({ data }: { data: ExamListType[] }) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });
  };

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center w-full h-[25vh]">
      <m.div
        className="w-[2.6vw] h-[2.6vw] border-[3px] border-[#eee] border-t-[#ff0088] rounded-full will-change-transform"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
  return (
    <LazyMotion features={domAnimation}>
      <div className="w-full mx-auto py-[10vw]">
        <div className="w-full px-[4vw] flex justify-start items-center flex-wrap">
          {data.map((item, index) => (
            <m.div
              key={index}
              className="w-[23%] cursor-pointer mx-2 mb-[1.1vw]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`${item.link}`}
                className="flex justify-center items-center flex-wrap backdrop-blur-sm border group border-gray-200/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden rounded-2xl"
              >
                <div className="flex flex-wrap justify-center items-center bg-[rgba(255,255,255,0.8)] ">
                  <div className="flex justify-center items-center w-full h-[45%] overflow-hidden">
                    {!loadedImages.has(index) && <LoadingSpinner />}
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.desc}`}
                      width="400"
                      height="300"
                      className={`w-full h-[25vh] object-cover group-hover:scale-[1.2] duration-300 ${
                        loadedImages.has(index)
                          ? "opacity-100"
                          : "opacity-0 absolute"
                      }`}
                      onLoad={() => handleImageLoad(index)}
                      onError={() => handleImageLoad(index)}
                      loading={index < 4 ? "eager" : "lazy"}
                      decoding="async"
                    />
                  </div>
                  <div className="w-full flex justify-start items-center flex-wrap text-[1.2vw] font-[500] px-[1vw] py-[3vw]">
                    <div className="flex justify-center items-center text-[1vw] text-[#7531ad] bg-[#f3e7ff] px-[0.6vw] rounded-2xl">
                      {item.category}
                    </div>
                    <div className="w-full text-[2vw] font-[700] mt-[1vw]">
                      {item.title}
                    </div>
                    <div className="w-full text-[1.2vw] mt-[1vw] break-keep">
                      {item.desc}
                    </div>
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>
      </div>
    </LazyMotion>
  );
};

export default MotionCardList;
