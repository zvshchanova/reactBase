import { fetchData } from './fetchFunction'


//  test('testing fetch data.login', async () =>{
//     const data = await fetchData();
//     expect(data.login).toBe('pjhyett');

//     return fetchData().then((data) => {
//         expect(data.login).toBe('pjhyett')
//     })
//        await expect(fetchData().login).toBe('pjhyett')
     
//  } )

//  test ('testing fetch fails with an error', async () => {
//     expect.assertions(1);
//     try {
//       await fetchData();
//     } catch (e) {
//       expect(e).toMatch('error');
//     }
//   });
//   test('the data is peanut butter', async () => {
//     await expect(fetchData()).resolves.toBe('pjhyett');
//   });
  
//   test('the fetch fails with an error1', async () => {
//     await expect(fetchData()).rejects.toMatch('error');
//   });

//   test('the fetch fails with an error2', () => {
//     return expect(fetchData()).rejects.toMatch('error');
//   });

//   test('the data login ', () => {
//     return expect(fetchData()).resolves.toBe('pjhyett');
//   });

test('testinig fetchData toThrow', () => {
  // expect(() => fetchData()).toThrow();
  expect(() => fetchData()).toThrow(Error);
  expect(() => fetchData()).toThrow(/HTTP error/);
}
)

 

//Function 5
//Testing: https://jestjs.io/docs/asynchronous

// export async function fetchData() {
//     const response = await fetch("https://api.github.com/users/pjhyett");
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();

//     return data;
