
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import './App.css'
export default function App() {
  const result: UseQueryResult<any, Error> = useQuery({
    queryKey: ['Posts'],
    queryFn: async function(): Promise<any> {
      const data: Response = await fetch('https://jsonplaceholder.typicode.com/posts');
      return data.json();
    }
  });

 if (result.isLoading) {
   return <h1>Loading...</h1>;
 }

  return (
    <>
      <ul>
        {result.data.map((e:any)=><li key={e.id}>{e.title}</li>)}
      </ul>
       
    </>
  )
}


