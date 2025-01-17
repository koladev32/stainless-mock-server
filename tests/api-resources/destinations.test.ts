// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Destination from 'destination';
import { Response } from 'node-fetch';

const client = new Destination({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource destinations', () => {
  test('create: only required params', async () => {
    const responsePromise = client.destinations.create({
      country: 'Indonesia',
      description: 'Beautiful beaches and vibrant culture.',
      name: 'Bali',
      rating: 4.8,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.destinations.create({
      country: 'Indonesia',
      description: 'Beautiful beaches and vibrant culture.',
      name: 'Bali',
      rating: 4.8,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.destinations.retrieve(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.destinations.retrieve(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Destination.NotFoundError,
    );
  });

  test('update: only required params', async () => {
    const responsePromise = client.destinations.update(1, {
      country: 'Indonesia',
      description: 'Beautiful beaches and vibrant culture.',
      name: 'Bali',
      rating: 4.8,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.destinations.update(1, {
      country: 'Indonesia',
      description: 'Beautiful beaches and vibrant culture.',
      name: 'Bali',
      rating: 4.8,
    });
  });

  test('list', async () => {
    const responsePromise = client.destinations.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.destinations.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Destination.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.destinations.list({ min_rating: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Destination.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.destinations.delete(0);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.destinations.delete(0, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Destination.NotFoundError,
    );
  });
});
