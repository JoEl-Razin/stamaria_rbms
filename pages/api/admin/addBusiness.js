export default async function addProfile({businessName, businessAddress, businessType, businessPermit, name, contactNo, address}) {
  const credentials = JSON.stringify({
    businessName,
    businessAddress,
    businessType,
    businessPermit,
    owner: {
      name,
      contactNo,
      address,
    }
  })

  await fetch('http://localhost:8080/business', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: credentials,
  }).then((res) => res.json())
}