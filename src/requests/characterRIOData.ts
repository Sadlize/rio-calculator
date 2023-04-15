import appFetch from 'utils/fetch/appFetch';
import { FetchResponse } from 'utils/fetch/fetch';

const get = async (
  region: string,
  realm: string,
  name: string,
): Promise<FetchResponse> =>
  appFetch(
    `https://raider.io/api/v1/characters/profile?region=${region}&realm=${realm}&name=${name}&fields=mythic_plus_best_runs%2Cmythic_plus_alternate_runs`,
  );

const methods = {
  get,
};

export default methods;
