// import { places } from '../../../lib/db';
import Place from '../../../lib/models/Place';
import dbConnect from '../../../lib/dbConnect';

// export default function handler(request, response) {
//   return response.status(200).json(places);
// }

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const places = await Place.find({});
    response.status(200).json(places);
  } else {
    response.status(400).json({ message: "Wrong HTTP method" });
  }
}