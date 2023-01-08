import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const headers = {
    "content-type": "application/json",
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET
  };
  const endpoint = process.env.HASURA_ENDPOINT;

  const { id, name, email, image } = req.body;
  const graphqlQuery = {
    query: `mutation($id: String!,$name:String!,$image:String!,$username:String,$email:String!) {
  insert_users_one(object:
    {
      name: $name,
      email:$email,
      image: $image, 
    username: $username,
      id:$id
    }) {
    username
    id

  }
}

`,

    variables: {
      id,
      name,
      email,
      image,
      username: email.split("@")[0]
    }
  };

  // console.log("BBODY", req.body);
  try {
    const response = await axios({
      url: endpoint,
      method: "POST",
      headers: headers,
      data: graphqlQuery
    });
    console.log("data", response.data); // data
  } catch (error) {
    console.log(" error", error);
  }
};
