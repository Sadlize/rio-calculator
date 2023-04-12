'use client';

// import { TLocale } from '@/projectSettings';
import Button from 'components/Elements/Button';
// import { getDictionary } from 'utils/dictionaries';
import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';
import ImportForm from 'components/Modules/ImportForm';

// TODO: change translation type
function CharacterImport({ translations }: { translations: any }) {
  const $importMenuNode = useRef(null);
  const [importMenuOpen, setImportMenuOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setImportMenuOpen(!importMenuOpen);
        }}
      >
        {translations.Buttons.import}
      </Button>
      <Transition
        mountOnEnter
        unmountOnExit
        nodeRef={$importMenuNode}
        in={importMenuOpen}
        timeout={{
          appear: 0,
          exit: 300,
        }}
      >
        {(status) => <ImportForm Ref={$importMenuNode} status={status} />}
      </Transition>
    </>
  );
}

export default CharacterImport;
