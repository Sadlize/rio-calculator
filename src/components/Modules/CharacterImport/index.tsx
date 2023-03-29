import { TLocale } from "@/projectSettings";
import Button from "components/Elements/Button";
import { getDictionary } from "utils/dictionaries";

const CharacterImport = async ({ locale }: { locale: TLocale }) => {
  const dict = await getDictionary(locale);
  return (
    <div>
      <Button>{dict.Buttons.import}</Button>
    </div>
  );
};

export default CharacterImport;
