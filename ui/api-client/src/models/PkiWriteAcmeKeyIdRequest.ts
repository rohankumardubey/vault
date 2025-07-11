/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PkiWriteAcmeKeyIdRequest
 */
export interface PkiWriteAcmeKeyIdRequest {
    /**
     * The status of the account.
     * @type {string}
     * @memberof PkiWriteAcmeKeyIdRequest
     */
    status: PkiWriteAcmeKeyIdRequestStatusEnum;
}

/**
* @export
* @enum {string}
*/
export enum PkiWriteAcmeKeyIdRequestStatusEnum {
    VALID = 'valid',
    REVOKED = 'revoked'
}


/**
 * Check if a given object implements the PkiWriteAcmeKeyIdRequest interface.
 */
export function instanceOfPkiWriteAcmeKeyIdRequest(value: object): value is PkiWriteAcmeKeyIdRequest {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function PkiWriteAcmeKeyIdRequestFromJSON(json: any): PkiWriteAcmeKeyIdRequest {
    return PkiWriteAcmeKeyIdRequestFromJSONTyped(json, false);
}

export function PkiWriteAcmeKeyIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteAcmeKeyIdRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

export function PkiWriteAcmeKeyIdRequestToJSON(json: any): PkiWriteAcmeKeyIdRequest {
    return PkiWriteAcmeKeyIdRequestToJSONTyped(json, false);
}

export function PkiWriteAcmeKeyIdRequestToJSONTyped(value?: PkiWriteAcmeKeyIdRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
    };
}

