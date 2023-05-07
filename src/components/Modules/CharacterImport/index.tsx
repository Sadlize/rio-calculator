'use client';

import { useEffect, useState } from 'react';
import { isEmpty } from 'utils/helpers';
import Button from 'components/Elements/Button';
import characterRIOData from 'requests/characterRIOData';
import refactorRIOData, { RIOData } from 'utils/search/refactorRIOData';
import { setImportScore } from 'redux/slices/scoreSlice';
import { setImportKeyLevel } from 'redux/slices/keyLevelSlice';
import { setImportTimestamp } from 'redux/slices/timestampSlice';
import { useAppDispatch } from 'redux/store';
import { getCharactersFromSearch, TSuggestions } from 'utils/search/search';
import styles from './CharacterImport.module.scss';

type TImportForm = {
  translations: {
    inputPlaceholder: string;
    // suggestion: string;
  };
};

function CharacterImport({ translations }: TImportForm) {
  const [characterName, setCharacterName] = useState('');
  const [suggestions, setSuggestions] = useState<Array<TSuggestions>>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCharacterSuggestions = async () => {
      const response = await fetch(`api/search/${characterName}`);
      const characters = getCharactersFromSearch(await response.json());
      setSuggestions(characters as Array<TSuggestions>);
    };

    if (characterName.length >= 2) {
      const timeOutId = setTimeout(() => getCharacterSuggestions(), 500);
      return () => clearTimeout(timeOutId);
    }

    return setSuggestions([]);
  }, [characterName]);

  const test = (region: string, realm: string, name: string) => async () => {
    const response = await characterRIOData.get(region, realm, name);
    if (!response.data) {
      return;
    }

    const data = refactorRIOData(response.data as RIOData);
    dispatch(setImportScore(data.scores));
    dispatch(setImportKeyLevel(data.keyLevels));
    dispatch(setImportTimestamp(data.timestamps));
  };

  return (
    <div className={styles.base}>
      <form className={styles.form}>
        <input
          type="text"
          value={characterName}
          placeholder={`${translations.inputPlaceholder}`}
          className={styles.item}
          onChange={(e) => {
            setCharacterName(e.target.value);
          }}
        />
      </form>
      {!isEmpty(suggestions) && (
        <div className={styles.suggestionsTooltip}>
          {suggestions.map((s) => {
            const { name, data } = s;
            const { region, realm } = data;
            return (
              <Button
                key={Math.random()}
                onClick={test(region.slug, realm.slug, name)}
              >
                {`${name} ${region.slug.toUpperCase()}-${realm.name}`}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterImport;
