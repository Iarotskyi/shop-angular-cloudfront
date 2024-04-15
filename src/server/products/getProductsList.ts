import { mockProducts } from '../mocks/products';
import { APIGatewayProxyResult } from 'aws-lambda';

export const getProductsListHandler =
  async (): Promise<APIGatewayProxyResult> => {
    try {
      return {
        statusCode: 200,
        body: JSON.stringify(mockProducts),
      };
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: ' Internal Server Error' }),
      };
    }
  };
