import React from 'react'

const Progress = ({taskNumbers=5,taskCompletedNumber=3}) => {
  return (
    <div className="progress flex flex-col gap-1.5">
      <div className="progress-value w-full flex justify-between">
        <span className="text-[13px] font-inter font-semibold mr-auto">Process</span>
        <span className="font-bold text-[13px] ml-auto font-inter">{taskCompletedNumber*100/taskNumbers}%</span>
      </div>
      <div className="progress-bar w-[300px] border rounded-xl h-[15px] relative overflow-hidden">
        <div className={`progress-fill h-full bg-primary rounded-xl w-[${taskCompletedNumber*100/taskNumbers}%]`}></div>
      </div>
    </div>
  );
};

export default Progress;
