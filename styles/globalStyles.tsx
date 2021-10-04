import { css, Global } from '@emotion/react';

export const globalStyles = (
	<Global
		styles={css`
			@font-face {
				font-family: Archivo;
				/* src: url('./fonts/Archivo-Italic-VariableFont_wdth,wght.ttf'); */
				src: url('./fonts/Archivo-VariableFont_wdth,wght.ttf');
				font-style: normal;
				font-weight: 100 1000;
				font-display: swap;
			}

			:root {
				--spacing: 30px;
				--paddingLeft: 90px;
				--paddingRight: 65px;
				--bg: #ffffff;
				--primaryText: #656565;
				--secondaryText: #9b9b9b;
			}

			html,
			body {
				box-sizing: border-box;
				margin-top: 10px;
				margin-left: var(--spacing, 22px);
				margin-right: var(--spacing, 20px);
				margin-bottom: 10px;
				background: var(--bg);
				min-height: 100%;
				font-family: Archivo, Helvetica, Arial, sans-serif;
				font-size: 17px;
				line-height: 1.5;
			}

			p {
				font-weight: 400;
				color: var(--primaryText);
			}

			span {
				color: var(--primaryText);
			}

			img {
				max-width: 100%;
			}

			a[aria-disabled='true'] {
				color: grey;
				pointer-events: none;
			}

			@media screen and (min-device-width: 320px) and (max-device-width: 768px) {
				body {
					--spacing: 4px;
				}
			}
		`}
	/>
);

export const buttonStyles = css`
	background-color: #000000;
	color: #ffffff;
	border: 1px solid transparent;
	transition: all 0.1s linear;
	/* margin: 3rem 0; */
	padding: 0.5rem 2.5rem;
	text-transform: uppercase;
	letter-spacing: 2px;
	&:hover {
		box-shadow: 5px 5px 0 0 grey;
		outline-offset: 1px;
		/* border: 2px solid white; */
		outline: 2px solid black;
	}
`;
