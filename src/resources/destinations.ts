// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Destinations extends APIResource {
  /**
   * Add a new holiday destination to the database.
   */
  create(body: DestinationCreateParams, options?: Core.RequestOptions): Core.APIPromise<Destination> {
    return this._client.post('/destinations', { body, ...options });
  }

  /**
   * Retrieve details of a specific holiday destination by its ID.
   */
  retrieve(destinationId: number, options?: Core.RequestOptions): Core.APIPromise<Destination> {
    return this._client.get(`/destinations/${destinationId}`, options);
  }

  /**
   * Update details of a specific holiday destination by its ID.
   */
  update(
    destinationId: number,
    body: DestinationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Destination> {
    return this._client.put(`/destinations/${destinationId}`, { body, ...options });
  }

  /**
   * Retrieve a list of all holiday destinations in the database, optionally filtered
   * by minimum rating.
   */
  list(
    query?: DestinationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DestinationListResponse>;
  list(
    query: DestinationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DestinationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/destinations', { query, ...options });
  }

  /**
   * Remove a holiday destination from the database by its ID.
   */
  delete(destinationId: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/destinations/${destinationId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

/**
 * Represents a holiday destination.
 */
export interface Destination {
  /**
   * The country where the destination is located.
   */
  country: string;

  /**
   * A brief description of the destination.
   */
  description: string;

  /**
   * The name of the holiday destination.
   */
  name: string;

  /**
   * Rating of the destination (0 to 5).
   */
  rating: number;
}

export type DestinationListResponse = Array<Destination>;

export interface DestinationCreateParams {
  /**
   * The country where the destination is located.
   */
  country: string;

  /**
   * A brief description of the destination.
   */
  description: string;

  /**
   * The name of the holiday destination.
   */
  name: string;

  /**
   * Rating of the destination (0 to 5).
   */
  rating: number;
}

export interface DestinationUpdateParams {
  /**
   * The country where the destination is located.
   */
  country: string;

  /**
   * A brief description of the destination.
   */
  description: string;

  /**
   * The name of the holiday destination.
   */
  name: string;

  /**
   * Rating of the destination (0 to 5).
   */
  rating: number;
}

export interface DestinationListParams {
  /**
   * Filter destinations by minimum rating (0 to 5).
   */
  min_rating?: number;
}

export declare namespace Destinations {
  export {
    type Destination as Destination,
    type DestinationListResponse as DestinationListResponse,
    type DestinationCreateParams as DestinationCreateParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationListParams as DestinationListParams,
  };
}
