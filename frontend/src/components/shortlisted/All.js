import React from 'react';
import Rectangle from "@/components/Rectangle";

function All({data,setData}) {
  return (
    <>
      {data.map((res,index)=>{
        return(
            ((index%2==0) ?
                <Rectangle id={`rect${index + 1}`} key={`rec-${index}`} index={index} data={data[index]} allData={data} setData={setData} altRect />
                :
                <Rectangle id={`rect${index + 1}`} key={`rec-${index}`} index={index} data={data[index]} allData={data} setData={setData} />
            )
        )
      })}
    </>
  )
}

export default All