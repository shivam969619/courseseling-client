import { styles } from "@/app/styles/style";
import { FaRegCircle } from "react-icons/fa";
import React, { FC } from "react";
import toast from "react-hot-toast";

//ea2e68244c584caba1251498856f1361

type Props = {
  benefits: { title: string }[];
  setBenefits: (benefits: { title: string }[]) => void;
  prerequisites: { title: string }[];
  setPrerequisites: (prerequisites: { title: string }[]) => void;
  active: number;
  setActive: (active: number) => void;
};

const CourseData: FC<Props> = ({
  setBenefits,
  benefits,
  setActive,
  active,
  prerequisites,
  setPrerequisites,
}) => {
  const handleBenefitChange = (index: number, value: any) => {
    const updatedBenefits = [...benefits];
    updatedBenefits[index].title = value;
    setBenefits(updatedBenefits);
  };

  const handleAddBenefit = () => {
    setBenefits([...benefits, { title: "" }]);
  };

  const handlePrerequisitesChange = (index: number, value: any) => {
    const updatedPrerequisites = [...prerequisites];
    updatedPrerequisites[index].title = value;
    setPrerequisites(updatedPrerequisites);
  };

  const handleAddPrerequisites = () => {
    setPrerequisites([...prerequisites, { title: "" }]);
  };
  const prevButton = () => {
    setActive(active - 1);
  };
  const handleOptions = () => {
    if (
      benefits[benefits.length - 1]?.title !== "" &&
      prerequisites[prerequisites.length - 1]?.title !== ""
    ) {
      setActive(active + 1);
    } else {
      toast.error("Please fill the feilds first");
    }
  };
  return (
    <div className="w-[80%] ml-4 block">
      <div className="w-[80%] mt-10 block">
        <label htmlFor="" className={`${styles.label} text-[20px]`}>
          What are the Benefits of this course?
        </label>
        <br />
        {benefits.map((benefit: any, index: number) => (
          <input
            type="text"
            key={index}
            name="Benefit"
            placeholder="You will be able to build a full stack application.."
            required
            className={`${styles.input} my-2`}
            value={benefit.title}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}

        <FaRegCircle
          style={{ margin: "10px 0px ", cursor: "pointer", width: "30px" }}
          onClick={handleAddBenefit}
        />
      </div>

      {/* prerequisite */}
      <div>
        <label htmlFor="email" className={`${styles.label} text-[20px]`}>
          What are the Prerequisites of this course?
        </label>
        <br />
        {prerequisites.map((prerequisite: any, index: number) => (
          <input
            type="text"
            key={index}
            name="Prerequisite"
            placeholder="lund"
            required
            className={`${styles.input} my-2`}
            value={prerequisite.title}
            onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
          />
        ))}
        <FaRegCircle
          style={{ margin: "10px 0px ", cursor: "pointer", width: "30px" }}
          onClick={handleAddPrerequisites}
        />
      </div>

      {/*button*/}
      <div className="w-full flex items-center justify-between">
        <div className="w-[50%]">
          <input
            type="submit"
            value="Previous"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded-mt-8 cursor-pointer"
            onClick={() => prevButton()}
          />
        </div>
        <div className="w-[50%]">
          <input
            type="submit"
            value="Next"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded-mt-8 cursor-pointer"
            onClick={() => handleOptions()}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseData;
