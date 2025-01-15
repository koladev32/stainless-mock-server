// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class General extends APIResource {
  /**
   * Root endpoint, returns a friendly greeting.
   */
  greet(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/', options);
  }
}

export type GeneralGreetResponse = unknown;

export declare namespace General {
  export { type GeneralGreetResponse as GeneralGreetResponse };
}
