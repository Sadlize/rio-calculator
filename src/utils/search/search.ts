export type TSuggestions = {
  type: string;
  name: string;
  data: {
    region: { slug: string };
    realm: { slug: string; name: string };
  };
};

export const getCharactersFromSearch = (searchResponse: {
  matches: Array<TSuggestions>;
}): object => searchResponse.matches.filter((e) => e.type === 'character');
