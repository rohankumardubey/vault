"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfSystemDeleteSyncGithubAppsNameResponse = instanceOfSystemDeleteSyncGithubAppsNameResponse;
exports.SystemDeleteSyncGithubAppsNameResponseFromJSON = SystemDeleteSyncGithubAppsNameResponseFromJSON;
exports.SystemDeleteSyncGithubAppsNameResponseFromJSONTyped = SystemDeleteSyncGithubAppsNameResponseFromJSONTyped;
exports.SystemDeleteSyncGithubAppsNameResponseToJSON = SystemDeleteSyncGithubAppsNameResponseToJSON;
exports.SystemDeleteSyncGithubAppsNameResponseToJSONTyped = SystemDeleteSyncGithubAppsNameResponseToJSONTyped;
/**
 * Check if a given object implements the SystemDeleteSyncGithubAppsNameResponse interface.
 */
function instanceOfSystemDeleteSyncGithubAppsNameResponse(value) {
    return true;
}
function SystemDeleteSyncGithubAppsNameResponseFromJSON(json) {
    return SystemDeleteSyncGithubAppsNameResponseFromJSONTyped(json, false);
}
function SystemDeleteSyncGithubAppsNameResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'appId': json['app_id'] == null ? undefined : json['app_id'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
function SystemDeleteSyncGithubAppsNameResponseToJSON(json) {
    return SystemDeleteSyncGithubAppsNameResponseToJSONTyped(json, false);
}
function SystemDeleteSyncGithubAppsNameResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'app_id': value['appId'],
        'name': value['name'],
    };
}
