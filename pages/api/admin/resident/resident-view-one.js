


export default async function ViewResident({id}) {
  await fetch(`http://localhost:8080/resident/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
    .then((result) => {
      console.log(result) 
    })
}

