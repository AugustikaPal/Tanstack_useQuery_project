import React from 'react';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';



const Users = () => {

     const {data ,isLoading , isError,isFetching , error} = useQuery({
        queryKey:["users"],
        queryFn:()=>{
            const resp =  axios.get(`https://jsonplaceholder.typicode.com/users`);
            return resp.data;
        }
     })

     console.log(isLoading,isFetching);

     if (isLoading)
        return <div>Loading .....</div>
    if(isError)
        return <div>{error.message}</div>
 
  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        
        </tr>
      </thead>
      <tbody>
        {
            <tr>
                {
                    data.map((user)=>(
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                       
                        </tr>
                    ))
                }
            </tr>
        }
      </tbody>
      </table>
    </div>
  )
}

export default Users
