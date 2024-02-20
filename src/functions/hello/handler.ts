import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';

import schema from './schema';
import { convertPoundToKilogram } from "@libs/converter";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  try {
    const valueInKilogram = convertPoundToKilogram(event.body.value);

    return formatJSONResponse({
      valueInPound: event.body.value,
      valueInKilogram: valueInKilogram,
    });
  } catch (e: any) {
    console.error(e)
  }

  return formatJSONResponse({
    message: "Fail to convert the value in kilogram.",
  }, 400);
}

export const main = middyfy(hello);
