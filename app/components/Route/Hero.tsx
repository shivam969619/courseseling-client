import React, { FC } from "react";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import bannerimg from "../../../public/bannerimg.jpg";
import Link from "next/link";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";

type Props = {};

const Hero: FC<Props> = (props) => {
  const { data, refetch } = useGetHeroDataQuery("Banner", {});

  return (
    <>
      <div className="w-full 1000px:flex items-center h ">
        <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10 ">
          <Image
            src={data?.layout?.banner?.image?.url || bannerimg}
            width={400}
            height={400}
            className=" object-contain 1100px:max-w-[90%] 1500px:max-w-[85%] h-[auto] z-[10] rounded-full "
            alt="banerimage"
          />
        </div>
        <div className="flex-col justify-center items-baseline ml-40">
          <h1 className="font-Josefin dark:text-[#edfff4] text-[#000000b3] md:pl-3 text-[50px] font-[600]">
            {data?.layout?.banner?.title}
            Improve Your Online <br />
            Learning Experience <br />
            Better Instantly
          </h1>
          <h3 className="font-Josefin dark:text-[#edfff4] text-[#000000b3] md:pl-3 text-[18px] font-[600]">
            We have 40k+ Online courses &500k+Online Registered student. <br />
            Find Your desired Courses for them.
          </h3>
          <br />
          <div className="flex-col color-red">
            <div className="flex items-center relative">
              <input
                type="text"
                className="bg-transparent border dark:border-none dark:bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full outline-none text-[#0000004e] dark:text-[#ffffffe6] text-[20px] font-[500] font-Josefin"
                placeholder="Search Courses"
              />
              <BiSearch className="h-full absolute right-2 top-1/2 transform -translate-y-1/2 text-sky dark:text-black" />
            </div>
          </div>
          <br />
          <br />
          <p className="font-Josefin dark:text-[#edfff4] text-[#000000b3] md:pl-3 text-[18px] font-[600]">
            500k+ People already trusted us.
            <Link
              href="/courses"
              className="dark:text-[#46e256] text-[crimson]"
            >
              View Courses
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
