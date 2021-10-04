import styled from '@emotion/styled';
import React from 'react';

const SortStyles = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		height: 12px;
		width: 12px;
	}
	select {
		border: 0;
		margin-left: 10px;
		background: var(--bg);
		text-transform: capitalize;
	}

	select:focus {
		outline: none;
	}

	span {
		margin-left: 10px;
		color: var(--secondaryText);
	}
`;

type SortProp = {
	sortBy: string;
	setSortBy: React.Dispatch<React.SetStateAction<string>>;
	sort: string;
	setSort: React.Dispatch<React.SetStateAction<string>>;
};

export default function Sort({ setSortBy, sort, setSort }: SortProp) {
	// const [sortBy, setSortBy] = React.useState('price');
	// const [sort, setSort] = React.useState('ASC');

	return (
		<SortStyles>
			<img
				src="./sort.svg"
				loading="lazy"
				alt="logo"
				onClick={() => {
					if (sort === 'ASC') setSort('DESC');
					if (sort === 'DESC') setSort('ASC');
				}}
			/>
			<span>Sort By</span>
			<select
				name="sortBy"
				id="sortBy"
				onChange={(e) => setSortBy(e.target.value)}
			>
				<option value="price">price</option>
				<option value="alphabetically">alphabetically</option>
			</select>
		</SortStyles>
	);
}
