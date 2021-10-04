import styled from '@emotion/styled';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { perPage } from '../../config';

const PaginationStyles = styled.div`
  text-align: center;
  margin-bottom: 40px;
  span {
    padding: 0.2em;
    color: #b4b4b4;
  }
  a {
    text-decoration: none;
  }
  a.current span {
    color: #000000;
  }
`;

export default function Pagination({
  count,
  page = 1,
}: {
  count: number;
  page: number;
}) {
  const pages = Math.ceil(count / perPage);
  if (page > pages) page = pages;
  return (
    <PaginationStyles>
      <Head>
        <title>
          Bejamas_ Page {page} of {pages}
        </title>
      </Head>
      {page > 1 && (
        <Link
          href={{
            pathname: '',
            query: { page: page - 1 },
          }}
        >
          <a className="prev" aria-disabled={page <= 1}>
            <span>&lt;</span>
          </a>
        </Link>
      )}
      {Array.from({ length: pages }, (_, index) => index + 1).map((each) => {
        return (
          <Link
            key={each}
            href={{
              pathname: '',
              query: { page: each },
            }}
          >
            <a
              aria-disabled={each === page}
              className={each === page ? 'current' : ''}
            >
              <span>{each}</span>
            </a>
          </Link>
        );
      })}
      {page < pages && (
        <Link
          href={{
            pathname: '',
            query: { page: page + 1 },
          }}
        >
          <a className="next" aria-disabled={page >= pages}>
            <span>&gt;</span>
          </a>
        </Link>
      )}
    </PaginationStyles>
  );
}
