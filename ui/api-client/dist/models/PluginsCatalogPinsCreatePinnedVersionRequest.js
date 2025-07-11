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
exports.instanceOfPluginsCatalogPinsCreatePinnedVersionRequest = instanceOfPluginsCatalogPinsCreatePinnedVersionRequest;
exports.PluginsCatalogPinsCreatePinnedVersionRequestFromJSON = PluginsCatalogPinsCreatePinnedVersionRequestFromJSON;
exports.PluginsCatalogPinsCreatePinnedVersionRequestFromJSONTyped = PluginsCatalogPinsCreatePinnedVersionRequestFromJSONTyped;
exports.PluginsCatalogPinsCreatePinnedVersionRequestToJSON = PluginsCatalogPinsCreatePinnedVersionRequestToJSON;
exports.PluginsCatalogPinsCreatePinnedVersionRequestToJSONTyped = PluginsCatalogPinsCreatePinnedVersionRequestToJSONTyped;
/**
 * Check if a given object implements the PluginsCatalogPinsCreatePinnedVersionRequest interface.
 */
function instanceOfPluginsCatalogPinsCreatePinnedVersionRequest(value) {
    return true;
}
function PluginsCatalogPinsCreatePinnedVersionRequestFromJSON(json) {
    return PluginsCatalogPinsCreatePinnedVersionRequestFromJSONTyped(json, false);
}
function PluginsCatalogPinsCreatePinnedVersionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'version': json['version'] == null ? undefined : json['version'],
    };
}
function PluginsCatalogPinsCreatePinnedVersionRequestToJSON(json) {
    return PluginsCatalogPinsCreatePinnedVersionRequestToJSONTyped(json, false);
}
function PluginsCatalogPinsCreatePinnedVersionRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'version': value['version'],
    };
}
