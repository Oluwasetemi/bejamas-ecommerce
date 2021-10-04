/* eslint-disable import/order */
import styled from '@emotion/styled';
import useWindowSize from 'hooks/useWindowSize';
import React from 'react';
import Modal from 'react-modal';
import { OneProduct } from '.';
import Filter from './Filter';
import type { ProductType } from './OneProduct';
import Pagination from './Pagination';
import Sort from './Sort';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		zIndex: 999999999,
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');

type FilterModalProp = {
	category: string[];
	setCategory: React.Dispatch<React.SetStateAction<string[]>>;
	priceRange: string;
	setPriceRange: React.Dispatch<React.SetStateAction<string>>;
	openModal: React.Dispatch<React.SetStateAction<boolean>>;
	closeModal: () => void;
	modalIsOpen: boolean;
};

const ModalStyles = styled.div`
	.modal-buttons {
		display: flex;
		gap: 10px;
		button {
			width: 100%;
			border-radius: 0px;
			padding: 10px 5px;
		}
		button.save {
			color: white;
			background: black;
		}
	}
`;

function FilterMobileModal({
	category,
	setCategory,
	priceRange,
	setPriceRange,
	closeModal,
	modalIsOpen,
}: FilterModalProp) {
	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Filter Modal"
			>
				<ModalStyles>
					<Filter
						cat={category}
						setCat={setCategory}
						priceRange={priceRange}
						setPriceRange={setPriceRange}
					/>
					<div className="modal-buttons">
						<button onClick={closeModal}>CLEAR</button>
						<button className="save" onClick={closeModal}>
							SAVE
						</button>
					</div>
				</ModalStyles>
			</Modal>
		</div>
	);
}

const AllProductStyles = styled.div`
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	h2 {
		font-weight: 700;
	}
	h2 span {
		color: var(--secondaryText);
		font-weight: 200;
	}
	.product-listing-and-filter {
		display: grid;
		grid-template-columns: 1fr 3fr;
		/* justify-content: flex-start; */
		margin-top: 30px;
	}
	.all-products {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 0px 46px;
	}
	img[alt='sort-modal-button'] {
		width: 30px;
		height: 30px;
	}
	@media screen and (min-device-width: 320px) and (max-device-width: 768px) {
		h2 {
			font-size: 15px;
		}
		h2 span {
			font-size: 15px;
		}
		.all-products {
			grid-template-columns: 1fr;
		}
		.product-listing-and-filter {
			grid-template-columns: 1fr;
		}
	}
`;

type AllProductProps = {
	products: ProductType[];
	count: number;
	page: number;
	category: string[];
	setCategory: React.Dispatch<React.SetStateAction<string[]>>;
	priceRange: string;
	setPriceRange: React.Dispatch<React.SetStateAction<string>>;
	sortBy: string;
	setSortBy: React.Dispatch<React.SetStateAction<string>>;
	sort: string;
	setSort: React.Dispatch<React.SetStateAction<string>>;
};

export default function AllProduct({
	products,
	count,
	page,
	category,
	setCategory,
	priceRange,
	setPriceRange,
	sortBy,
	setSortBy,
	sort,
	setSort,
}: AllProductProps) {
	const { width } = useWindowSize();
	let isMobile = width < 768;
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<AllProductStyles>
			<FilterMobileModal
				modalIsOpen={modalIsOpen}
				openModal={openModal}
				closeModal={closeModal}
				category={category}
				setCategory={setCategory}
				priceRange={priceRange}
				setPriceRange={setPriceRange}
			/>

			<div className="header">
				<h2>
					Photography / <span>Premium Photos</span>
				</h2>
				{isMobile ? (
					<img
						onClick={openModal}
						src="./mobilesort.svg"
						alt="sort-modal-button"
						loading="lazy"
					/>
				) : (
					<Sort
						sortBy={sortBy}
						setSortBy={setSortBy}
						sort={sort}
						setSort={setSort}
					/>
				)}
			</div>
			<div className="product-listing-and-filter">
				{!isMobile && (
					<Filter
						cat={category}
						setCat={setCategory}
						priceRange={priceRange}
						setPriceRange={setPriceRange}
					/>
				)}
				<div className="all-products">
					{products &&
						products.map((product) => {
							return (
								<div
									className="container"
									key={`${product.name}-${product.id}`}
								>
									<OneProduct product={product} />
								</div>
							);
						})}
				</div>
				{!isMobile && <div />}
				<Pagination count={count} page={page} />
			</div>
		</AllProductStyles>
	);
}
