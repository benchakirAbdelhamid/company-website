import React, { useEffect } from 'react'

const Loading = () => {

    useEffect(()=>{
        setTimeout(() => {
            const loaderWrapper = document.querySelector(".parent-loading");
            loaderWrapper.classList.add("fade");
          }, 1500);
    },[])


  return (
    <div className='parent-loading'>
        <div class="blob"></div>
    </div>
  )
}

export default Loading