import React,{useState,useEffect} from "react";

const StudentTable =() => {

const [data, setData] = useState([
    {id:1,Name:'Amol',mark:45},
    {id:2,Name:'pritiki',mark:55},
    {id:3,Name:'sameer',mark:24},
    {id:4,Name:'Trupti',mark:78},
    {id:5,Name:'vijay',mark:74},
    {id:6,Name:'rashmi',mark:30},
])


const FilterandSortedData = data
.filter(student => student.mark >35)
.sort((a,b) => a.mark-b.mark)


    return(
        <div>
         <h2>Student Table</h2>
         <table>
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
            </thead>
            <tbody>
              {FilterandSortedData.map((student,index)=>(
                <tr>
                <td>{index+1}</td>
                <td>{student.Name}</td>
                <td>{student.mark}</td>
               </tr>
              ))

              }  
            </tbody>
         </table>
        </div>
    )

}

export default StudentTable;






