const myHeaders = new Headers();
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IlJxbXZwbjVMcmIzaVlsdE14SlRjaEE9PSIsInZhbHVlIjoiaVZLN1B5NFYyRlh6OHdSTTRpalBKRFdRV3h3NklUNDBnQ2FQc3dRTGpadS9uUlpsc0Z6V1N5UWE1RG1wdjJCTXMxbkhmRUxFaUpPUUVLUXRMTWZtVTVnVURPMkEycFZJTDJLL09zUFBBRnVRN3ZWbCt1QkdqUHE1bUlLQytGWGMiLCJtYWMiOiI5ZjVkODc1ZDkzYzljYjc1ODg2MDEwYjZkNDI2ZTQ1MDcxOWE3ZDlmNDhiNDFjZGYxYmE3NTM2NmY3ODZhNWJmIiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IldTYW5YYThVdWxDcVpQamN6WTdDWWc9PSIsInZhbHVlIjoicVdCQWdxQkwrZkc1ODVLcEVWL2xtSXhWSFAwRjQyLzFHVUFYVTAvQkZ5ZzFqamk2VzVPbE9lNWkzb2FNL0drZkRrUFMzZ3lyL0R0cE9jaUcwQmNLemZEckFzZXJtS0wrNXBhai9tRUlGcTVtZHFRcGp1TDNBRlgxUDhkemhtS0MiLCJtYWMiOiJkNmIzN2I4YzdkMGEwMDdhMjkxYmY0MmViZmRiZjQ2NWI3ZjJmYjhlNTQ0ZTcxZDEyMDdkMDJlMjBmZWU0OWExIiwidGFnIjoiIn0%3D");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.biblesupersearch.com/api?request=John 3:16", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));