import { Link } from "@remix-run/react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ExamListType } from "~/lib/types";

const MotionCardList = ({ data }: { data: ExamListType[] | null }) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const imageRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    imageRefs.current.forEach((img, idx) => {
      if (img?.complete) handleImageLoad(idx);
    });
  }, [data]);

  const registerImage = (index: number) => (node: HTMLImageElement | null) => {
    if (!node) return;
    imageRefs.current[index] = node;
    if (node.complete) handleImageLoad(index);
  };

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      if (prev.has(index)) return prev;
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
      <div className="w-full mx-auto lg:py-[10vw] py-[18.75vw]">
        <div className="w-full lg:px-[4.01vw] px-[7.52vw] flex lg:justify-start justify-center items-center flex-wrap">
          {data?.map((item, index) => (
            <m.div
              key={index}
              className="lg:w-[23%] md:w-[45%] w-[80%] cursor-pointer lg:mx-[0.42vw] mx-[0.78vw] lg:mb-[1.1vw] mb-[5vw]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`${item.link}`}
                className="flex justify-center items-center flex-wrap backdrop-blur-sm border group border-gray-200/20 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden rounded-2xl"
              >
                <div className="flex flex-wrap justify-center items-center bg-[rgba(255,255,255,0.8)]">
                  <div className="flex justify-center items-center w-full h-[45%] overflow-hidden">
                    {!loadedImages.has(index) && <LoadingSpinner />}
                    <img
                      ref={registerImage(index)}
                      onLoadCapture={() => handleImageLoad(index)}
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
                  <div className="w-full flex justify-start items-center flex-wrap  font-[500] lg:px-[1.04vw] px-[1.95vw] lg:py-[3.02vw] py-[5.66vw]">
                    <div className="flex justify-center items-center lg:text-[1.04vw] text-[1.95vw] text-[#7531ad] bg-[#f3e7ff] lg:px-[0.63vw] px-[1.17vw] lg:rounded-[0.83vw] rounded-[1.56vw]">
                      {item.category}
                    </div>
                    <div className="w-full lg:text-[1.98vw] text-[3.71vw] font-[700] lg:mt-[0.99vw] mt-[1.86vw] lg:min-h-full md:min-h-[11vw] min-h-full">
                      {item.title}
                    </div>
                    <div className="w-full lg:text-[1.2vw] text-[2.25vw] lg:mt-[0.99vw] mt-[1.86vw] break-keep">
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
