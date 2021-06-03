


export default async function ViewResident() {
  await fetch('http://localhost:8080/resident', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
    .then((result) => {
      return(result)
    })
}