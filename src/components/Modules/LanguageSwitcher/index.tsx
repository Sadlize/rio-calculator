"use client";

import cx from "clsx";
import styles from "./LanguageSwitcher.module.css";
import Link from "next/link";
import { i18n, Locale, localeFullName } from "@/projectSettings";
import Image from "components/Elements/Image";
import { useEffect, useRef, useState } from "react";
import { checkClickOutsideRef } from "utils/checkClickOutsideRef";
import { Transition } from "react-transition-group";
import { DropdownChevron } from "components/Elements/Icons";

const LanguageSwitcher = ({ locale }: { locale: Locale }) => {
  const altLocales = i18n.locales.filter(item => {
    return item !== locale;
  });

  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const $languageSwitcherNode = useRef(null);
  const $alternativeLanguagesMenuNode = useRef(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (checkClickOutsideRef(e, $languageSwitcherNode)) {
        setLanguageMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [languageMenuOpen]);

  return (
    <div ref={$languageSwitcherNode} className={styles.base}>
      <button
        className={cx(styles.dropdown__handle, {
          [styles.dropdown__handle_open]: languageMenuOpen,
        })}
        onClick={() => {
          setLanguageMenuOpen(!languageMenuOpen);
        }}
      >
        <Image
          src={`/images/languages/${locale}.jpg`}
          className={styles.dropdown__flag}
          width={128}
          height={128}
          alt={`${locale} flag`}
        />
        {localeFullName[locale]}
        <DropdownChevron
          reverse={languageMenuOpen}
          className={styles.chevron}
        />
      </button>

      <Transition
        mountOnEnter
        unmountOnExit
        nodeRef={$alternativeLanguagesMenuNode}
        in={languageMenuOpen}
        timeout={{
          appear: 0,
          exit: 300,
        }}
      >
        {status => (
          <div
            ref={$alternativeLanguagesMenuNode}
            className={cx(styles.dropdown__content, {
              [styles.dropdown__content_show]: status === "entered",
            })}
          >
            {(altLocales || []).map((locale, index) => (
              <Link
                key={index}
                href={`./${locale}`}
                className={styles.dropdown__content_item}
              >
                <Image
                  src={`/images/languages/${locale}.jpg`}
                  className={styles.dropdown__flag}
                  width={128}
                  height={128}
                  alt={`${locale} flag`}
                />
                {localeFullName[locale]}
              </Link>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default LanguageSwitcher;
