/* export async function getStaticProps({ params }) {
  const res = await fetch('http://localhost:8080/resident', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const data = await res.json()
  console.log(data)
  return {
    props: {
      data
    }
  }
} */