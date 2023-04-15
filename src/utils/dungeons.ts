import { TDungeonImage } from 'components/Elements/Image';
import { TLocale } from '@/projectSettings';
import getDictionary from 'utils/dictionaries';

export const dungeonMaxTimestamp = {
  AA: 1920999,
  COS: 1800999,
  HOV: 2280999,
  RLP: 1800999,
  SBG: 1980999,
  TJS: 1800999,
  AV: 2130999,
  NO: 2400999,
};

export type TDungeonKeys = keyof typeof dungeonMaxTimestamp;
export type TDungeonWeeks = 'Tyrannical' | 'Fortified';

export type TDungeonCard = {
  id: number;
  abbreviation: TDungeonKeys;
  name: string;
  imgBackground: TDungeonImage;
};

export const getDungeons = async (
  locale: TLocale,
): Promise<Array<TDungeonCard>> => {
  const dict = await getDictionary(locale);
  return [
    {
      id: 0,
      abbreviation: 'AA',
      name: dict.Dungeons.algethar_academy,
      imgBackground: {
        src: 'https://res.cloudinary.com/dq4lsz5od/image/upload/q_auto/v1679668716/algethar-academy.webp',
        blurDataUrl:
          'data:image/webp;base64,UklGRqADAABXRUJQVlA4WAoAAAAgAAAARAEAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggsgEAANAYAJ0BKkUBtwA+7XaxVimnJCOgKSkwHYlpbuAFK92j9oHFpt50+wBJCAzOOsW9ecgpdxt1tft/ruoQmHUCcHeav67UceSmfPKBqfi/tgeSaXqyubN/Yu8jU/F3KEstiH3RDI74v435yCpn9xRiPeoM82u4fdogqjKJMztTshB3XUryZae8nfezsqUWZ+s6IsvAylE892s9WKTIEPfZ//xKbV619bWOs9At7gDcAW/H73UPASBWUd5lBJ5k9SxkEIIQP7Gjo0gbI0HgJARgAAD+796o+IYjYW1wdQBwL3dgW6fya3as0atNotucBFPl1v5/ytpZViEL9zzbL0UVZUtd+7AFNBsG7VZN2sjo28CFiSvvWmwBN5uMv8bJYW3gHfF4cS7PIdaU9SIAgqhDQmJM4gqX1xsNPi7C1anpz5N2I4qI2oRGc5iaKbTbbArOFZCBk/nQjv1gubfyLjxG40FUQTgap/Y8gsoxCKoQNbj7+ZnKUp5SBceem7nocxos8q0TydfwgANkCvO8nEDhumNOJYASRRAAg65Au3FjsObgdREgQAIdwcpxR1SJ7YAAAAAA',
        alt: dict.Dungeons.algethar_academy,
      },
    },
    {
      id: 1,
      abbreviation: 'TJS',
      name: dict.Dungeons.temple_of_the_jade_serpent,
      imgBackground: {
        src: 'https://res.cloudinary.com/dq4lsz5od/image/upload/q_auto/v1679668716/temple-of-the-jade-serpent.webp',
        blurDataUrl:
          'data:image/webp;base64,UklGRlwEAABXRUJQVlA4WAoAAAAgAAAARAEAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggbgIAAJAcAJ0BKkUBtwA+7XSxUronKiKj86uLQB2JaW7eUguOLqkiHEz130vOn2DzwsCpR5wt52+XfQmDNUMqNN0Nk4EONY7db+JPIWstMogf8+ChsnlGDgQnutWV7jF0aR897Vvyu0JFYthF53vi+V6N6H/UxVd3XIWVevS58EhiMX+x1Op5iICfN975CIPbmADgjN8XpY2GyT5Z0LYQm0ZPDUmEnnOEXfHBVhc/1I7jLHU4IjAhr4O2WHX0IvbOlbwgibUvgTSHnbUgWd9CKurVBL5mQUlX5rtNpYPWmglMCg8NelyGIrKg7/BE2sCTAAD+tniaCt3bFYnYRMUxmUd6Hxwkb3r2KIKnrf/ARpYW72bnSN3u04ChOEuHVCfDYxQ19Z22EzBR/Im74HgAORPx3m5SyTq6AwYQHnaVBaMbPH3MB2RgKu07vy1Zg6bq2GJI9EAw5O87x/OJvXZee7omQwBTAioiRMhgtR9wmfMhooxgpEWJPNZjrF36Y2Zk8gthlAojzbF1Jjzw6LyGjw5xnzQWJ6hnXb8O7mF24Tf7zjx/E2vNm6ic+J0pwEIWTtAUlEKSMMIU9zCeSfR/0mYA+8i04tdAGsQOStk1ameE9K+Va920T1qHRhoNTH/ocUH23eyDODGBMUAAfrwVyNmggPBiRoXJA9aa8/9NMi2GaGCGeUSu7oAATphJlkSaS5CmXpQkvEHLivtAsvQ7mFTlkD7uRAAPQRtC5GnyRbPERoVDRuxf7STvNDG4QP1fWwAARnRx/BASJEw27xQajGiLFUelpnMU0RlWREgAAL6o2OaCKaupv8G6QNFkiAAAAAA=',
        alt: dict.Dungeons.temple_of_the_jade_serpent,
      },
    },
    {
      id: 2,
      abbreviation: 'SBG',
      name: dict.Dungeons.shadowmoon_burial_grounds,
      imgBackground: {
        src: 'https://res.cloudinary.com/dq4lsz5od/image/upload/q_auto/v1679668715/shadowmoon-burial-grounds.webp',
        blurDataUrl:
          'data:image/webp;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACGAUUDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBv/EABYQAQEBAAAAAAAAAAAAAAAAAAARAf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A5IBoUBRVRRFAVFVFUAAUAQRUAABEVBURUQTU1dRFZ1NXU1nREVGVAFAAABBQAVUVpBUUABRQBVAUVUVUUARVRVABUUAAEAABEVEVEVEE1NXWdRU1NXWdZ1RAQAQFEAUAFEUFVFVBUVQABRFFFRVFVFVFEVUVUUBUFFAEEVAAQBFQVEVNQTWdXU1FTWdXU1nVQBkEAAABUAVUUwVUGkUBRRARQEaVWVUaEVUVUVUURVFEUABUAAEBBEVBURU1BNZ1dTUVNZXUZ1RFRkAAAAAAVWVUVUVUURVAAQEVlpVZVRoRVRVZVoaEBGhBRRARRBQBEUQQDU01EU1nV1nUUQGdEAZAAAAAABUAVUVpFEFFABFZVhVVlVGlZGkaVlao0JSqjQlKCiUqiiUAKlKAhUqAmiaKIImqIDGgAgAAAAAAAAKgCqgtRRAoCCKqsqC1ayq1GqtZGhqrWaURqlSlUapWaUGqlSlBalSlFKlKgLUQSqCDO6ACAAAAAAAAAAAAAAAAAAAACiKAqBUWrUFotWsi0aoypQKgUWoIUVBCqqAyAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAIoAACgACACoAgAAAAAAAAAAAAAAAAAAAAAA//Z',
        alt: dict.Dungeons.shadowmoon_burial_grounds,
      },
    },
    {
      id: 3,
      abbreviation: 'NO',
      name: dict.Dungeons.the_nokhud_offensive,
      imgBackground: {
        src: 'https://res.cloudinary.com/dq4lsz5od/image/upload/q_auto/v1679668715/the-nokhud-offensive.webp',
        blurDataUrl:
          'data:image/webp;base64,UklGRgAFAABXRUJQVlA4WAoAAAAgAAAARAEAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggEgMAANAeAJ0BKkUBtwA+7W6vUj+9M6Km8vuL8B2JZ27gAW+gYhzXy7pUnembK1rpLNO34EV/Nm32c0OldO30eTvwyGarr7mDAJzvM40Q0pQiaYjjWH7rqpQWdhH5XJCT9MrdSFOmyqk/Yyzg/XIu4YBDXR3cmNoUZOZJVupDax9FfKReM6aHTJK/jZ2tHs1nSQk8xq8gZ9SL07W2n8OPKT6L0J+yBgjlQOknUNaeQlfKshyijvLUrIzsjO4rhJJqleW8Bf6yvYCunTDQlw8nxuo+M94t4FuyT1iA+n/k+J7fmIn3fVp0POS4bKwcI0baKboIQ2zVrADlAcyT33VTx5MuoAD+3rj7QVEvLqG4mTYPkajRXgwGSTxt3Ph8lxaWc3xzT9d6NboJHtYmxh6mf5KHB4udSa/GvMtZ0CMXS9cK8F4A3hSqjST2R2mqHw4g/zZTBc/e/66I3TQKHHBON2eJXJJ3teglvTeUkIaynoFxGHVng/lDe/AfbCqASt53S/OLSEsMKsng7c2gY3a9tS1u3kvFgW2MF5hT2cTa2qlXDp5xfq3dbTfb6EMB2C4FY4tpDx9yAVPUZ1y3cFy9C5ljjpn1d4IRf9SFCq8P4RjPrfDawkXDt0oUeVUcv7CPEmsGgr4t4FyHbbLa7dCO/gABgX82MU2M012l3Mc+9pcHS6uN0Z3FJ0adWmfRg3YL4xyBfkwTN8DkoqjEXe75L4AAMdCoIonWcMtaDPKebIAvboOmUU8n2l11FndL2LZH2MufEYgz16AsgKbEE4/pLOAAAKnHgbAdvvW+qX9aw1rbjvfHQRt1o5BoG+VmCTu73LIAAAyMYfS1eIMk9IPdR54tY08cuYfWPgN+xkM8MpCLiy4AAZyD+cW7vk9cSYW5pHGntHUapj19pL/qKocQckHJpciWWurTs82xe8AG9P1qOJadkSwZGIvGw3gkc0zGx+XppipZOeYgmyZ6mxe1dJovRQgu7DbX8tAC3JwSVU3E0IlYkvZrqqqeg34EBJ9IbwN8d5gwF8c8PQAu6sk5mXvjQAqAAA==',
        alt: dict.Dungeons.the_nokhud_offensive,
      },
    },
    {
      id: 4,
      abbreviation: 'COS',
      name: dict.Dungeons.court_of_stars,
      imgBackground: {
        src: 'https://res.cloudinary.com/dq4lsz5od/image/upload/q_auto/v1679668716/court-of-stars.webp',
        blurDataUrl:
          'data:image/webp;base64,UklGRlQDAABXRUJQVlA4WAoAAAAgAAAARAEAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggZgEAAHAUAJ0BKkUBtwA+7Xa3VqmnJSOgKAEwHYlpbt+2ibzMwd+wBaWych77ZOQ99tjlNnqKoBW4s+oh6MCQwJWUItb6XCoCTeeaXd6G7z3U0ClXzNUqjqAqybeVNQwrm0vVws7+yHiHeVhcjnpx8R0MRvRRS4tRzqHCFuu40tPopheMpdr2iGncJqG+WIcHNoxYaJy7SltkrhzvWXCQY4QJEbB/WpZX+ZplRvlh6AAA/u2Q8lXS1ypgrEbhy1M8jUrfHUGPAhkjdViqiljvC2YuTlFM+v8eiFyNf7PQGUpefvlX+kJrDipXyAZEuwb01r8hBl9pO68QBNRFtPNC+bvErNXCz8dUqhVtXkwJ/BUfwtJOb3p602N7GpDPWghZ3Hg73gPLcQWStH7GYcWA4tA7iB+6PEmIQJHW+h1TsEdOaQwSgZK3lBu9de0+OYwgt9JUYGzyiCC9dxjvIFakxAvYPc58IAAAAAA=',
        alt: dict.Dungeons.court_of_stars,
      },
    },
    {
      id: 5,
      abbreviation: 'RLP',
      name: dict.Dungeons.ruby_life_pools,
      imgBackground: {
        src: 'https://res.cloudinary.com/dq4lsz5od/image/upload/q_auto/v1679668716/ruby-life-pools.webp',
        blurDataUrl:
          'data:image/webp;base64,UklGRkIDAABXRUJQVlA4WAoAAAAgAAAARAEAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggVAEAAHAWAJ0BKkUBtwA+7XawVimnJCOgKLEwHYlpbt1fdJog/IAoVjyQb3e5Gf1zZzFGvNwQoFli+37iNSPrcdqHunA0Sp2IjzcE0iNUeNmNdQmzn0a2IjrPYq6Fb8XLFsPvsVAgnxRvBHTYu4y7oKs3hZ1bV+gl5WCic19M+3fzBoc1k9wdFPZ9N8R0aD/kDaRqpufiagXMRhf4CthKR/ZB+hz4+tKhhEtzUm8Us7h9uUYPrImXtZl2pp8kHBsAAP7v3h3FWYxDA2B0ZJfYSqC76xNIXWkuYmtG66Q0haZXsTcVQVkhvdfxaRwfnCUox0IIvVEPI3asZOiOyM813Fm+FhSRi6pa5P2ykYTE0DyblcNsDc5SyKges1MihEapB8Z9vv9xHC+n+dNNOFy9iC1WTxkBAFfLgIRxMMA7OYlMpOAOOJfSjvw/9KUmBADym74EgAAAAAA=',
        alt: dict.Dungeons.ruby_life_pools,
      },
    },
    {
      id: 6,
      abbreviation: 'AV',
      name: dict.Dungeons.the_azure_vault,
      imgBackground: {
        src: 'https://res.cloudinary.com/dq4lsz5od/image/upload/q_auto/v1679668152/the-azure-vault.webp',
        blurDataUrl:
          'data:image/webp;base64,UklGRiwFAABXRUJQVlA4WAoAAAAgAAAAiQIAsAAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggPgMAANAqAJ0BKooCsQA+7XayVimnJCOgKIkwHYlpbuDCeOL+1fxbtAsC40feOTy/9gCfV4hcb6mqhMs+tjQ0270zR4QhBhvqbWbqz5KXVbgNc0tx4yhoeGRSKtV1SnI2Ey1PIqRrPkdVu3Z5YXzhMAQRw/jdy7o9pdtv2rBXM+R1W4Dj2kx8fj8g9DSrU4cdERIvg+ttyL8r7REtJepoHgEI5HBnWZW7QuPj8gkX7g02xyBslDvV4zO2Zw5u2n/G9vyVCVgBBNaXD1OJg2IWimrmfI7ukhO7jC0EadzQ/Ot+IxNQxyn7Ylm/R+Px+PAsgGMBEleWVDI6wz/q6MM90jEpIOPD8fj78x1BZANmzhXz0Ek4imVNixQJNH512cwEnlCBWVAYv1sK/JCJY9PB5ffAWyEdXYHiTV0SoCkSkaenm1P5/Bi1TT02Bxs5ni7N1ujGAQ/DZZYHjOaVLN9S5PjKgAD+sF4G02EN3gON+3gfW2RIlChr3LKA4aX6Eos++TheiTRiEKCio2zOsx478ltB/1C/9yhNkYydU+K4nP9jgMY5S1hz4GwauEgRiBuJFQSBxz0TDpYDQogCrqCR0GaRux+ed0Vitis9JmKZSHqdcpdiQ+jTYi6fxg1hNl37jyZJAkdm9DzkotnjvwkEQUljAmXn24AvxM2RDqSnempMtbpXQ7+001dJCtnp1THSCvXeAZwfioGu0ak2D+KEkSp/M4E+Sc9ll5jCFoQUXi2ZrXNG/fwm4KLMrzEp/qLzANp0GLimFZAoZt38mvvSsu0FYim1HWoN0f8EAlx3GtEdpLdhHl+ETEac68CIAEZ91iLK40D0AWIK7WX19S68+B4KL7+KLtkUqEljzbewP9JImiAB3qI3rS2ciqB+jFqWDAAy8JhBOldv6atpB8+MQfH8YbvU7czufL0steQa2fWkwonYtBXq4Bkp6DGvS9IARcUmMFiQNYkSxXbK6JjB9kBnvWkRoMokCNPvZ9C8BAGkNo1ocCEqsi+TLm/9Z/S9O2644sRbuepYjLtSmJnxMWmVQDsv1UjsIkLBXiiKz4e4jWrSI7AAAKAjzK28I3iYVkDLLBwkt7UDShugAAvMAAAA',
        alt: dict.Dungeons.the_azure_vault,
      },
    },
    {
      id: 7,
      abbreviation: 'HOV',
      name: dict.Dungeons.halls_of_valor,
      imgBackground: {
        src: 'https://res.cloudinary.com/dq4lsz5od/image/upload/q_auto/v1679668716/halls-of-valor.webp',
        blurDataUrl:
          'data:image/webp;base64,UklGRtgEAABXRUJQVlA4WAoAAAAgAAAARAEAtgAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDgg6gIAAJAgAJ0BKkUBtwA+7XCuUb++JKKnFGtr8B2JZ27f/s+ULO1/scH/lNlLpf1fkCmEAUDpuWY9KaF1tN/2AUSbKXLiKXd9y8D7GCLKDhahNcVURTU/+AtE64FQbs/x9PEZRmGwagSE+WAnttsW2AdnRJcqEmqTowMBgJh3vvj9yCCCfx/TIrRhcbhaBFN9IS0lZDpXA+wwwwwwwoshnkIsLY/s8D7dFOY79BwrKumIILKws7qchD4/DroAgHa/t+DNm7FlEC1iiuIUat8pw79K2PT6cXFLuYvCOcyTWEeMqoeJUceZmEHvDq+Mpw79LiJzXnNXAvTZ0iMYX3CPGVTZtmbzu1R/i9Teo9JrCPDwAP5h5+GSmK97el58sV2JGbbMquf13KnETMa07gSEKV4BK+XXIRZtT31zqfK/i8Mg27TU9q3JefAwI3WqegGlx9Fy4gUOASqQdhVJwotgwn1nSKdAvDS9aUEgLlDsNnqS5t5YpA6CqUz4ieppVdm/lNtyw9sKc9dy+G7hs7lV3SPqauT3PFvlpb9Ouv0JDUNDzlYP53uhVI0M7pyooyNB1tG4VyWGcUWpLIpZ10XI6D18Ei72CH6z6+9kVBySsYXXVAODqPnljoZBKWf3dXoc0pQlNQLPmtR6YGwVPppaiR4rycY7ioHjgEBeUbVUAx+oBmW6MCOYeIUgSCZd8JCsWHKxCSwhEgwa9HsGDtLFq2Ntl4rDsmSoxcgfi6XQqvJdjOhCUq8GTRvZ91OKOHiZUFQHNaXrjlZNtg+QK8706Nz+AlRxj58kPgAAGd7qN4W7DzUsafSj31fI0Osz6ssMizosKbZJqiG7CRc8qQ9vDyPuloAAvxSNCi2zpXaWu42hhzCMNSfZtS4WhGM+x1YEdeWoAALXaju8UG3RIuWZUVNbfgAHAWLcgxRxlmsQAA3SW+zj+aFVAi58Pe7CATjh/s34d52CAAA1s4AO1Rt7QHACj54KoWnkAAAAAAAA',
        alt: dict.Dungeons.halls_of_valor,
      },
    },
  ];
};
