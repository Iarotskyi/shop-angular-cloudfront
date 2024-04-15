import { mockProduct, mockProducts } from '../mocks/products';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const getProductsByIdHandler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  const productId = event.pathParameters['productId'];

  if (!productId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'No product id in the request' }),
    };
  }

  try {
    const filteredProduct: mockProduct = mockProducts.filter(
      (product) => product.id.toString() === productId,
    )[0];

    if (filteredProduct) {
      return {
        statusCode: 200,
        body: JSON.stringify(filteredProduct),
      };
    } else {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'Product not found' }),
      };
    }
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: ' Internal Server Error' }),
    };
  }
};
