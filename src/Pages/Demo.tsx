// import React from "react";
import { useEffect } from "react";
import API from "../Lib/axiosInstace";

const Demo = () => {

    const getData = async()=>{

        try {
          const response = await API.get("/api.php", {
            params: {
              amount: 5,
            },
          });
      
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
    }

   useEffect(() => {
  getData();
}, []);






  return <div>Demo</div>;
};

export default Demo;
