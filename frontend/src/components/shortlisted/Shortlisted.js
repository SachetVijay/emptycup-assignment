import React, {useEffect, useState} from 'react';
import Rectangle from "@/components/Rectangle";

function Shortlisted({data,setData}) {
  let ind = -1;
  useEffect(()=>{
      ind = -1;
  },[data])
  return (
      <>
        {
          data.map((res, index) => {
            if(res.shortlisted) {
              ind = ind + 1;
            }
            return (
                (res.shortlisted ? ((ind % 2 == 0) ?
                        <Rectangle id={`rect${index + 1}`} key={`rec-${index}`} index={index} data={data[index]}
                                   allData={data} setData={setData} altRect/>
                        :
                        <Rectangle id={`rect${index + 1}`} key={`rec-${index}`} index={index} data={data[index]}
                                   allData={data} setData={setData}/>
                ) : <></>)
            )
          })
        }
      </>
  )
}

export default Shortlisted