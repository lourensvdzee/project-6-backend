// import { places } from '../../../../lib/db.js';
import Place from "../../../../lib/models/Place";
import dbConnect from "../../../../lib/dbConnect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  if (request.method === "GET") {
    const place = await Place.findById(id);
    if (!place) {
      return response.status(404).json({ status: "Not Found" });
    }
    response.status(200).json(joke);
  }

  // if (!id) {
  //   return;
  // }

  // const place = places.find((place) => place.id === id);

  // if (!place) {
  //   return response.status(404).json({ status: 'Not found' });
  // }

  // response.status(200).json(place);
}

