import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '1a53c19bb975a079fa3865d58e658ee199427f27', queries,  });
export default client;
  