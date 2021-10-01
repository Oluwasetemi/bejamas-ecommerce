import styled from '@emotion/styled';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Sample from '..';

it('should render the sample component', async () => {
  render(<Sample />);
  let helloEl = await screen.findByText(/hello/i);
  // @ts-ignore
  expect(helloEl).toBeInTheDocument();
});

it('should test css presence in component', () => {
  const Svg = styled('svg')`
    width: 100%;
  `;

  const Div = styled('div')`
    float: left;
    height: 80%;
    &:hover {
      width: 50px;
    }
    ${Svg} {
      fill: green;
    }
    span {
      color: yellow;
    }
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
  `;

  function TestComponent() {
    return (
      <Div>
        <Svg />
        <span>Test</span>
      </Div>
    );
  }

  const {
    container: { firstChild },
  } = render(<TestComponent />);

  // snapshot test works perfectly
  // expect(container).toMatchInlineSnapshot(`
  //   .emotion-0 {
  //     float: left;
  //     height: 80%;
  //   }

  //   .emotion-0:hover {
  //     width: 50px;
  //   }

  //   .emotion-0 .emotion-3 {
  //     fill: green;
  //   }

  //   .emotion-0 span {
  //     color: yellow;
  //   }

  //   @media screen and (max-width: 1200px) {
  //     .emotion-0 {
  //       font-size: 14px;
  //     }
  //   }

  //   .emotion-2 {
  //     width: 100%;
  //   }

  //   <div>
  //     <div
  //       class="emotion-0 emotion-1"
  //     >
  //       <svg
  //         class="emotion-2 emotion-3"
  //       />
  //       <span>
  //         Test
  //       </span>
  //     </div>
  //   </div>
  // `);
  // @ts-ignore
  expect(firstChild).toHaveStyleRule('float', 'left');
  // @ts-ignore
  expect((firstChild as HTMLElement).querySelector('svg')).toHaveStyleRule(
    'width',
    '100%'
  );
});
