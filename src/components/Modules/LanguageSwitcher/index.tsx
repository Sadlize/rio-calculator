"use client";
import cx from "clsx";
import styles from "./LanguageSwitcher.module.css";
import Link from "next/link";
import { i18n, Locale, localeFullName } from "@/projectSettings";
import Image from "components/Elements/Image";
import { useEffect, useRef, useState } from "react";
import { checkClickOutsideRef } from "utils/checkClickOutsideRef";

const LanguageSwitcher = ({ locale }: { locale: Locale }) => {
  const altLocales = i18n.locales.filter(item => {
    return item !== locale;
  });

  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuNode = useRef(null);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (checkClickOutsideRef(e, languageMenuNode)) {
        setLanguageMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [languageMenuOpen]);

  return (
    <div
      ref={languageMenuNode}
      className={cx(styles.base, styles.dropdown, styles.dropdown__open)}
    >
      <button
        className={cx(styles.dropdown_handle, styles.base__handle)}
        onClick={() => {
          setLanguageMenuOpen(!languageMenuOpen);
        }}
      >
        <Image
          src={`/images/languages/${locale}.jpg`}
          className={styles.base__flag}
          width={128}
          height={128}
          alt={`${locale} flag`}
        />
        {localeFullName[locale]}
      </button>

      {/*<img*/}
      {/*  src="https://dt-cdn.net/images/chevron-down-fdc0c33ccb.svg"*/}
      {/*  className={styles.dropdown_arrow}*/}
      {/*/>*/}
      {languageMenuOpen && (
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
      )}
    </div>
  );
};

export default LanguageSwitcher;
