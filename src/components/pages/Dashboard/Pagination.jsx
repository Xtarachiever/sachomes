import React, { useEffect, useState } from 'react'

function Pagination({postPerPage, totalPosts,paginate,currentPage,setCurrentPage}) {
    const [arrOfCurrButton, setArrOfCurrButton] = useState([])
    const pageNumber = [];
    for(let i=1; i<= Math.ceil(totalPosts/postPerPage);i++){
        pageNumber.push(i)
    }
    useEffect(()=>{
        const dotsLeft = "..."
        const dotsRight = "..."
        const dotsInitial = "..."
        let tempArr = [...arrOfCurrButton]
        if(currentPage >= 1 && currentPage <= 3){
            tempArr = [1,2,3,4,dotsInitial,pageNumber.length]
        }
        else if(currentPage === 4){
            const sliced = pageNumber.slice(0,5)
            tempArr = [...sliced, dotsInitial, pageNumber.length]
        }
        else if(currentPage > 4 && currentPage< pageNumber.length -2 ){
            const sliced1 = pageNumber.slice(currentPage - 2,currentPage)
            const sliced2 = pageNumber.slice(currentPage,currentPage+1)
            tempArr = ['1',dotsLeft,...sliced1,...sliced2,dotsRight,pageNumber.length]
        }
        else if(currentPage > pageNumber.length - 3){
            const sliced = pageNumber.slice(pageNumber.length-4)
            tempArr = ['1',dotsLeft,...sliced]
        }
        else if(currentPage === dotsInitial){
            setCurrentPage(arrOfCurrButton[arrOfCurrButton.length-3]+1)
        }
        else if(currentPage === dotsRight){
            setCurrentPage(arrOfCurrButton[3] + 2)
        }
        else if(currentPage === dotsLeft){
            setCurrentPage(arrOfCurrButton[3] - 2)
        }
        setArrOfCurrButton(tempArr)
    },[currentPage])
  return (
    <div className='flex justify-center'>
        <ul className='flex flex-row w-full justify-center'>
            {
                arrOfCurrButton.map((eachPage,index)=>(
                    <li key={index} className="p-3 justify-around">
                        <a onClick={()=> paginate(eachPage)} href="#@">{eachPage}</a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Pagination