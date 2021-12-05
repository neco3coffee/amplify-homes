// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Card, Home } = initSchema(schema);

export {
  Card,
  Home
};