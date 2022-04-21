import React,{useState,useEffect} from 'react';
import './App.css';
import axios from "axios";

function App() {

 const [record,setRecord]=useState(null);
 const [data,setData]=useState([]);


  useEffect(() => {
// CALL FOR ADD RECORD
  if(record!=null)
  {
    const num=Math.floor(Math.random() * 11);
    const fetchData = async () => {
      axios
        .get(`https://swapi.dev//api/people/${num}`)
        .then((item ) => {

          const newItem={
            id:record,
            name:item.data.name
          };

          if(!data)
            setData(newItem);
          else
          setData([...data,newItem]);

        });
    };

    fetchData();
  }

  }, [record]);




  const handleClick=(id)=>{
    //DELETING A RECORD
   const newData=data.filter(function(item){return item.id!==id} );
   setData([...newData]);
   return;
  }

  return (
    <div className="App">
      <div className="add_record_btn" onClick={()=>{setRecord(record+1)}}>Add Record</div>
      <div className="record">
         <div className="rcd_heading">Records</div>
         <div className="rcd_result">
         {data && data.map((dt)=>(
             <div key={dt.id}className="rcd_result_item">
                <div>{dt.name}</div>
                <div className="delete_record" onClick={()=>{handleClick(dt.id)}}>delete</div>
             </div>))
        }
         </div>
      </div>
    </div>
  );
}

export default App;
