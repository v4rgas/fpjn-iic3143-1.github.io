
// ToDo: Hacer esta card responsiva frente a @media.
// ToDo: manejar overflow texto cdo nombre receta es muy grande
// ToDo: se debería poder hacer click cdo la entrada es una receta!!

import HeartButton from "./heartButton";

export default function DataCard({boxWidth, leftRowInfo, rightRowInfo, useHearts = false}) {

    return (
      <div className="container bg-[#A3BE8C] flex justify-center items-center h-[170px] rounded-[20px] text-[#182F40]"
            style={{ width: boxWidth }}>


        {useHearts ? <div className="leftRow flex flex-col items-center font-bold pr-[40px]"> 
          {leftRowInfo.map((leftInfo, index) => (
            <HeartButton key={index}/>
          ))}
        </div>: null }
        
        <div className="leftRow flex flex-col items-center font-bold pr-[40px]">
          {leftRowInfo.map((leftInfo, index) => (
            <div key={index} className="leftItem mt-[5px] mb-[5px]">
              {leftInfo}
            </div>
          ))}
        </div>

        <div className="rightRow flex flex-col items-start">
          {rightRowInfo.map((rightInfo, index) => (
            <div key={index} className="rightRow mt-[5px] mb-[5px]">
              {rightInfo}
            </div>
          ))}
        </div>
      </div>
    )


}