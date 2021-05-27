export async function getStaticProps() {
  const res = await fetch('http://localhost:8080/resident')
  const residents = await res.json()

  console.log(residents)
  return {
    props: {
      residents,
    }
  }
}