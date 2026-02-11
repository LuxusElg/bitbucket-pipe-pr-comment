import { getOptionalValue } from "./utils";

export type AuthConfig = Readonly<{
  username?: string;
  password?: string;
  token?: string;
}>;

export function getAuthConfig(): AuthConfig {
  return {
    username: getOptionalValue("BITBUCKET_USERNAME", undefined),
    password: getOptionalValue("BITBUCKET_APP_PASSWORD", undefined),
    token: getOptionalValue("BITBUCKET_TOKEN", undefined),
  };
}
