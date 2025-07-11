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
 * @interface SealStatusResponse
 */
export interface SealStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    buildDate?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    clusterId?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    clusterName?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    hcpLinkResourceID?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    hcpLinkStatus?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SealStatusResponse
     */
    initialized?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SealStatusResponse
     */
    migration?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SealStatusResponse
     */
    n?: number;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    nonce?: string;
    /**
     * 
     * @type {number}
     * @memberof SealStatusResponse
     */
    progress?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SealStatusResponse
     */
    recoverySeal?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SealStatusResponse
     */
    sealed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    storageType?: string;
    /**
     * 
     * @type {number}
     * @memberof SealStatusResponse
     */
    t?: number;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof SealStatusResponse
     */
    version?: string;
}

/**
 * Check if a given object implements the SealStatusResponse interface.
 */
export function instanceOfSealStatusResponse(value: object): value is SealStatusResponse {
    return true;
}

export function SealStatusResponseFromJSON(json: any): SealStatusResponse {
    return SealStatusResponseFromJSONTyped(json, false);
}

export function SealStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SealStatusResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'buildDate': json['build_date'] == null ? undefined : json['build_date'],
        'clusterId': json['cluster_id'] == null ? undefined : json['cluster_id'],
        'clusterName': json['cluster_name'] == null ? undefined : json['cluster_name'],
        'hcpLinkResourceID': json['hcp_link_resource_ID'] == null ? undefined : json['hcp_link_resource_ID'],
        'hcpLinkStatus': json['hcp_link_status'] == null ? undefined : json['hcp_link_status'],
        'initialized': json['initialized'] == null ? undefined : json['initialized'],
        'migration': json['migration'] == null ? undefined : json['migration'],
        'n': json['n'] == null ? undefined : json['n'],
        'nonce': json['nonce'] == null ? undefined : json['nonce'],
        'progress': json['progress'] == null ? undefined : json['progress'],
        'recoverySeal': json['recovery_seal'] == null ? undefined : json['recovery_seal'],
        'sealed': json['sealed'] == null ? undefined : json['sealed'],
        'storageType': json['storage_type'] == null ? undefined : json['storage_type'],
        't': json['t'] == null ? undefined : json['t'],
        'type': json['type'] == null ? undefined : json['type'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function SealStatusResponseToJSON(json: any): SealStatusResponse {
    return SealStatusResponseToJSONTyped(json, false);
}

export function SealStatusResponseToJSONTyped(value?: SealStatusResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'build_date': value['buildDate'],
        'cluster_id': value['clusterId'],
        'cluster_name': value['clusterName'],
        'hcp_link_resource_ID': value['hcpLinkResourceID'],
        'hcp_link_status': value['hcpLinkStatus'],
        'initialized': value['initialized'],
        'migration': value['migration'],
        'n': value['n'],
        'nonce': value['nonce'],
        'progress': value['progress'],
        'recovery_seal': value['recoverySeal'],
        'sealed': value['sealed'],
        'storage_type': value['storageType'],
        't': value['t'],
        'type': value['type'],
        'version': value['version'],
    };
}

