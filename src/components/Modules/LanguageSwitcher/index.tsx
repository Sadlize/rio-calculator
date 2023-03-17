import cx from "clsx";
import styles from "./LanguageSwitcher.module.css";
import Link from "next/link";
import { i18n, Locale, localeFullName } from "@/projectSettings";
import Image from "components/Elements/Image";

const LanguageSwitcher = ({ locale }: { locale: Locale }) => {
  const altLocales = i18n.locales.filter(item => {
    return item !== locale;
  });

  return (
    <div className={cx(styles.base, styles.dropdown, styles.dropdown__open)}>
      <div className={cx(styles.dropdown_handle, styles.base__handle)}>
        <Image
          src={`/images/languages/${locale}.jpg`}
          className={styles.base__flag}
          width={128}
          height={128}
          alt={`${locale} flag`}
        />
        {localeFullName[locale]}
        {/*<img*/}
        {/*  src="https://dt-cdn.net/images/chevron-down-fdc0c33ccb.svg"*/}
        {/*  className={styles.dropdown_arrow}*/}
        {/*/>*/}
      </div>
      <div className={cx(styles.dropdown_content, styles.base__content)}>
        {(altLocales || []).map((locale, index) => (
          <Link
            key={index}
            href={`./${locale}`}
            className={styles.base__content_item}
          >
            <Image
              src={`/images/languages/${locale}.jpg`}
              className={styles.base__flag}
              width={128}
              height={128}
              alt={`${locale} flag`}
            />
            {localeFullName[locale]}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
