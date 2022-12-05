import { useState, useEffect } from "react";
//Testing: https://jestjs.io/docs/asynchronous
export function FetchData() {
  // {"type":"hello","greeting":"Salam Alaykum","language":"Somali"}
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  function handleErrors(response) {
    console.log(response);
    if (!response.ok) {
      if (response.status === 404) {
        setError("Not found");
        throw Error("Not found");
      } else if (response.status === 403) {
        setError("Forbiden for you");
        throw Error("Forbiden for you");
      }
      setError(response.status);
      throw Error(response.status);
    }
    return response;
  }

  useEffect(() => {
    fetch("https://www.greetingsapi.com/random")
      .then(handleErrors)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch(() => setError("Something went wrong"));
    // .catch(setError);
  }, []);

  return (
    <div>
        <h2>{error}</h2>
        <h2>Fetch info:</h2>
        <h2>{data.type}</h2>
        <h3>
           {data.greeting} ({data.language})
        </h3>
    </div>
  )
//   if (data) {
//     return (
//       <>
//         <h2>{error}</h2>
//         <h2>Fetch info:</h2>
//         <h2>{data.type}</h2>
//         <h3>
//           {data.greeting} ({data.language})
//         </h3>
//       </>
//     );
//   } else {
//     return <>{<h2>No DATA</h2>}</>;
//   }
}
