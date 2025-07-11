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
/**
* @export
* @enum {string}
*/
export var SamlWriteSsoServiceUrlRequestClientTypeEnum;
(function (SamlWriteSsoServiceUrlRequestClientTypeEnum) {
    SamlWriteSsoServiceUrlRequestClientTypeEnum["CLI"] = "cli";
    SamlWriteSsoServiceUrlRequestClientTypeEnum["BROWSER"] = "browser";
})(SamlWriteSsoServiceUrlRequestClientTypeEnum || (SamlWriteSsoServiceUrlRequestClientTypeEnum = {}));
/**
 * Check if a given object implements the SamlWriteSsoServiceUrlRequest interface.
 */
export function instanceOfSamlWriteSsoServiceUrlRequest(value) {
    if (!('clientChallenge' in value) || value['clientChallenge'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    return true;
}
export function SamlWriteSsoServiceUrlRequestFromJSON(json) {
    return SamlWriteSsoServiceUrlRequestFromJSONTyped(json, false);
}
export function SamlWriteSsoServiceUrlRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'acsUrl': json['acs_url'] == null ? undefined : json['acs_url'],
        'clientChallenge': json['client_challenge'],
        'clientType': json['client_type'] == null ? undefined : json['client_type'],
        'role': json['role'],
    };
}
export function SamlWriteSsoServiceUrlRequestToJSON(json) {
    return SamlWriteSsoServiceUrlRequestToJSONTyped(json, false);
}
export function SamlWriteSsoServiceUrlRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'acs_url': value['acsUrl'],
        'client_challenge': value['clientChallenge'],
        'client_type': value['clientType'],
        'role': value['role'],
    };
}
