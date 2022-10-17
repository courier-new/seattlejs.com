export async function get () {
  return {
    json: { speakers }
  }
}

export const speakers = [
  {
    "id": "amber-hoak",
    "name": "Amber Hoak",
    "company": "Microsoft Research",
    "twitter": "amber_hoak",
    "photo": "amber-hoak.jpg",
  },
  {
    "id": "jamund-ferguson",
    "name": "Jamund Ferguson",
    "company": "PayPal",
    "twitter": "xjamundx",
    "photo": "jamund-ferguson.jpg",
  },
  {
    "id": "rachel-lee-nabors",
    "name": "Rachel Lee Nabors",
    "company": "AWS Amplify",
    "twitter": "rachelnabors",
    "photo": "rachel-lee-nabors.jpg",
  } 
]