const myHeaders = new Headers();
myHeaders.append("Cookie", "XSRF-TOKEN=eyJpdiI6IjY0U1gvKytWd2xqeHdmMHNja3NkeHc9PSIsInZhbHVlIjoiVEx0OXFJdERBZ2pBWFpOcjNNK1FaazFvaC8vSTRZaDMzaHRCWVkrbUxDeld4djFJVkZ5anhuSWc2R3JHY1MwWW9sQkROdDJBTmZ6UkNqbXNoRWJSQWJ3S2g3T1h1SW95REwzUVAvTldmMDhHOVhCd0RFV2NEazk0UzVYc3FqNDciLCJtYWMiOiJhOTg3Y2NjNzQxNTk5NDYxNGNjYmM1ZmUxMWViMDM1ZjYyMmY0OWZhOGI4MDI0YzRmN2MyMThiOWRiMDU3NmI2IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InhpdEpyWGN3WjhUVmJnT24xUnZkU0E9PSIsInZhbHVlIjoicXdSQml5cndOTVp6eWZVTzNCcGFQRk16cjV0ZXdCekZWbHZLam5jbHpIcVRWVmRGbiswR21rdmpLbmJuZzM0OHJZWFR5N2J1MHRLWWRYSGI5djdCQjZTZjR0VHAwM3dmRnprZXNOTWF4UWhwWHNrOXAyV3dQMm5xZllIY2pzOWgiLCJtYWMiOiIxMjJmOGVlODY2ZDgwNTNiMWRjODJiZjJmOTViZTcwZGJlZWIwN2ZiNmFmMWFjYjg4YjA2Mjc2OWFmNGFjODZlIiwidGFnIjoiIn0%3D");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://api.biblesupersearch.com/api?data_format=raw&reference=psalm63:1-2", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));