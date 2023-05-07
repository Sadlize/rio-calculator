import { NextResponse } from 'next/server';

type TParams = {
  params: {
    term: string;
  };
};

// eslint-disable-next-line import/prefer-default-export
export async function GET(request: Request, { params }: TParams) {
  const { term } = params;
  const res = await fetch(`https://raider.io/api/search?term=${term}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();

  return NextResponse.json(data);
}
