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
 *
 * @export
 * @interface AppRoleWriteSecretIdTtlRequest
 */
export interface AppRoleWriteSecretIdTtlRequest {
    /**
     * Duration in seconds after which the issued SecretID should expire. Defaults to 0, meaning no expiration.
     * @type {string}
     * @memberof AppRoleWriteSecretIdTtlRequest
     */
    secretIdTtl?: string;
}
/**
 * Check if a given object implements the AppRoleWriteSecretIdTtlRequest interface.
 */
export declare function instanceOfAppRoleWriteSecretIdTtlRequest(value: object): value is AppRoleWriteSecretIdTtlRequest;
export declare function AppRoleWriteSecretIdTtlRequestFromJSON(json: any): AppRoleWriteSecretIdTtlRequest;
export declare function AppRoleWriteSecretIdTtlRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppRoleWriteSecretIdTtlRequest;
export declare function AppRoleWriteSecretIdTtlRequestToJSON(json: any): AppRoleWriteSecretIdTtlRequest;
export declare function AppRoleWriteSecretIdTtlRequestToJSONTyped(value?: AppRoleWriteSecretIdTtlRequest | null, ignoreDiscriminator?: boolean): any;
