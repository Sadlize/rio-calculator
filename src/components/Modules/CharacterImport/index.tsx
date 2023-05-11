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
    search: string;
    empty: string;
  };
};

function CharacterImport({ translations }: TImportForm) {
  const [characterName, setCharacterName] = useState('');
  const characterNameMinLength = characterName.length >= 2;
  const [suggestions, setSuggestions] = useState<Array<TSuggestions>>([]);
  const [searchStatus, setSearchStatus] = useState<
    undefined | 'start' | 'finish' | 'empty'
  >(undefined);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getCharacterSuggestions = async () => {
      const response = await fetch(`api/search/${characterName}`);
      const characters = getCharactersFromSearch(await response.json());
      if (isEmpty(characters)) {
        return setSearchStatus('empty');
      }
      setSuggestions(characters as Array<TSuggestions>);
      return setSearchStatus('finish');
    };

    if (characterNameMinLength) {
      setSearchStatus('start');
      const timeOutId = setTimeout(() => getCharacterSuggestions(), 500);
      return () => clearTimeout(timeOutId);
    }

    setSearchStatus(undefined);
    return setSuggestions([]);
  }, [characterName, characterNameMinLength]);

  const importSelectedCharacter =
    (region: string, realm: string, name: string) => async () => {
      const response = await characterRIOData.get(region, realm, name);
      if (!response.data) {
        return;
      }

      const data = refactorRIOData(response.data as RIOData);
      dispatch(setImportScore(data.scores));
      dispatch(setImportKeyLevel(data.keyLevels));
      dispatch(setImportTimestamp(data.timestamps));

      setCharacterName('');
    };

  const inputChangeHandle = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length <= 12) {
      setCharacterName(inputValue);
    }
  };

  const suggestionsList = () => {
    switch (searchStatus) {
      case 'start':
        return <div>{translations.search}</div>;
      case 'empty':
        return <div>{translations.empty}</div>;
      case 'finish':
        return suggestions.map((s) => {
          const { name, data } = s;
          const { region, realm, id } = data;
          return (
            <li key={id}>
              <Button
                className={styles.suggestion}
                onClick={importSelectedCharacter(region.slug, realm.slug, name)}
              >
                {`${name} ${region.slug.toUpperCase()}-${realm.name}`}
              </Button>
            </li>
          );
        });
      default:
        return undefined;
    }
  };

  return (
    <div className={styles.base}>
      <form className={styles.form}>
        <input
          type="text"
          value={characterName}
          placeholder={`${translations.inputPlaceholder}`}
          className={styles.item}
          onChange={inputChangeHandle}
        />
      </form>
      {searchStatus && (
        <ul className={styles.suggestionsTooltip}>{suggestionsList()}</ul>
      )}
    </div>
  );
}

export default CharacterImport;
