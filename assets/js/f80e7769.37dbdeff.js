"use strict";(self.webpackChunkparasola=self.webpackChunkparasola||[]).push([[167],{2427:function(e){e.exports=JSON.parse('{"type":"object","content":{"openapi":"3.1.0","info":{"title":"Peridio API","version":"0.1.0"},"servers":[{"url":"https://api.peridio.com/","description":"Production."},{"url":"https://api.staging.peridio.com/","description":"Staging."}],"tags":[{"name":"Authentication","x-traitTag":true,"description":"[API keys](/reference/api-keys) are used to authenticate requests. They are included with requests by way of [HTTP Basic Authentication](https://en.wikipedia.org/wiki/Basic_access_authentication).\\n\\n```\\nAPI Key username:\\nf183e95f0e5d4428a22d984f9c52338ePOj0C2MHm+thjebPLep0\\n\\nAPI Key password:\\nP67eBJ2lbU6UnhGOFQLOHa23KY9tgo/o/J2ypQE2\\n\\nString to encode with Base64:\\nf183e95f0e5d4428a22d984f9c52338ePOj0C2MHm+thjebPLep0:P67eBJ2lbU6UnhGOFQLOHa23KY9tgo/o/J2ypQE2\\n\\nResulting Base64 encoded string:\\nZjE4M2U5NWYwZTVkNDQyOGEyMmQ5ODRmOWM1MjMzOGVQT2owQzJNSG0rdGhqZWJQTGVwMDpQNjdlQkoybGJVNlVuaEdPRlFMT0hhMjNLWTl0Z28vby9KMnlwUUUy\\n\\nResulting request header:\\nAuthorization: Basic ZjE4M2U5NWYwZTVkNDQyOGEyMmQ5ODRmOWM1MjMzOGVQT2owQzJNSG0rdGhqZWJQTGVwMDpQNjdlQkoybGJVNlVuaEdPRlFMT0hhMjNLWTl0Z28vby9KMnlwUUUy\\n```\\n"},{"name":"Element Types"},{"name":"Errors","x-traitTag":true,"description":"Peridio uses conventional HTTP response codes to indicate the success or failure of an API request.\\n\\nIn general:\\n\\n- `2xx` indicate success.\\n- `4xx` indicate an error due to the request itself.\\n- `5xx` indicate an error with Peridio\'s servers.\\n\\nIn particular:\\n\\n- `200 OK` - Everything worked as expected.\\n- `401 Unauthorized` - No valid API Key provided.\\n- `403 Forbidden` - The request is unauthorized.\\n- `404 Not Found` - The requested resource doesn\'t exist.\\n- `409 Conflict` - The request is using a stale resource hash.\\n- `422 Unprocessable Entity` - The request was understood but is semantically invalid.\\n- `429 Too Many Requests` - Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.\\n- `500 Internal Server Error` - Something went wrong on Peridio\'s end.\\n"}],"x-tagGroups":[{"name":"Overview","tags":["Authentication","Errors"]},{"name":"Endpoints","tags":["Identity","Elements"]}],"paths":{"/identity":{"get":{"summary":"Retrieve","description":"Retrieves information identifying the API Key used to authenticate the request, the Functional Account it is a part of, and the Member it belongs to if applicable.\\n","tags":["Identity"],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/identity"}}}}}}},"/elements":{"post":{"summary":"Create Element","tags":["Elements"],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"name":{"$ref":"#/components/schemas/name"}},"required":["name"]}}}},"responses":{"201":{"description":"Created.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/element"}}}}}},"get":{"summary":"Retrieve Elements","tags":["Elements"],"parameters":[{"name":"element_ids","in":"query","schema":{"$ref":"#/components/schemas/comma-delimited-ids"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/array-of-elements"}}}},"404":{"description":"Not found."}}}},"/elements/{element_id}/versions":{"post":{"summary":"Create version","tags":["Elements"],"requestBody":{"required":true,"content":{"application/json":{"schema":{"properties":{"binaries_scope":{"$ref":"#/components/schemas/element-version-binaries-scope"},"name":{"$ref":"#/components/schemas/element-version-name"}},"required":["binaries_scope","name"]}}}},"responses":{"201":{"description":"Created.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/element-version"}}}}}},"get":{"summary":"Retrieve versions","tags":["Elements"],"parameters":[{"name":"element_version_ids","in":"query","schema":{"$ref":"#/components/schemas/comma-delimited-ids"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/array-of-element-versions"}}}},"404":{"description":"Not found."}}}},"/elements/{element_id}/versions/{version_id}/binaries":{"post":{"summary":"Create binary","tags":["Elements"],"requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"json":{"type":"object","properties":{"node_type_id":{"$ref":"#/components/schemas/node-type-id"},"node_id":{"$ref":"#/components/schemas/node-id"}}},"data":{"$ref":"#/components/schemas/element-version-binary-data"}},"required":["json","data"]}}}},"responses":{"201":{"description":"Created.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/element-version-binary"}}}}}},"get":{"summary":"Retrieve binaries","tags":["Elements"],"parameters":[{"name":"element_version_binary_ids","in":"query","schema":{"$ref":"#/components/schemas/comma-delimited-ids"}}],"responses":{"200":{"description":"Ok.","content":{"application/json":{"schema":{"$ref":"#/components/schemas/array-of-element-versions"}}}},"404":{"description":"Not found."}}}}},"components":{"schemas":{"comma-delimited-ids":{"type":"string","description":"Comma delimited set of IDs to filter by."},"api-key-id":{"type":"string","format":"uuid"},"array-of-element-version-binaries":{"type":"array","minItems":0,"maxItems":100,"items":{"$ref":"#/components/schemas/element-version-binary"}},"array-of-element-versions":{"type":"array","minItems":0,"maxItems":100,"items":{"$ref":"#/components/schemas/element-version"}},"array-of-elements":{"type":"array","minItems":0,"maxItems":100,"items":{"$ref":"#/components/schemas/element"}},"element":{"allOf":[{"type":"object","properties":{"created_at":{"type":"string","format":"date-time"},"id":{"$ref":"#/components/schemas/element-id"},"name":{"$ref":"#/components/schemas/name"},"updated_at":{"type":"string","format":"date-time"}}}]},"element-id":{"type":"string","format":"uuid"},"element-version":{"allOf":[{"type":"object","properties":{"binaries_scope":{"$ref":"#/components/schemas/element-version-binaries-scope"},"created_at":{"type":"string","format":"date-time"},"element_id":{"$ref":"#/components/schemas/element-id"},"id":{"$ref":"#/components/schemas/element-version-id"},"name":{"$ref":"#/components/schemas/element-version-name"},"updated_at":{"type":"string","format":"date-time"}}}]},"element-version-binary":{"allOf":[{"type":"object","properties":{"created_at":{"type":"string","format":"date-time"},"id":{"$ref":"#/components/schemas/element-version-binary-id"},"element_version_id":{"$ref":"#/components/schemas/element-version-id"},"updated_at":{"type":"string","format":"date-time"}}}]},"element-version-binary-id":{"type":"string","format":"uuid"},"element-version-binary-data":{"type":"string","format":"binary"},"element-version-binaries-scope":{"type":"string","enum":["element_version","node_type","node"]},"element-version-id":{"type":"string","format":"uuid"},"element-version-name":{"type":"string"},"functional-account-id":{"type":"string","format":"uuid"},"identity":{"type":"object","properties":{"api_key_id":{"$ref":"#/components/schemas/api-key-id"},"functional_account_id":{"$ref":"#/components/schemas/functional-account-id"},"member_id":{"$ref":"#/components/schemas/member-id"}}},"member-id":{"type":"string","format":"uuid"},"name":{"type":"string","minLength":1,"maxLength":128},"node-id":{"type":"string","format":"uuid"},"node-type-id":{"type":"string","format":"uuid"}}}}}')}}]);