

## Getting Started

This is a [`nextjs`](https://nextjs.org/) for an interview test for the role of Frontend Developer @ [bejamas](https://bejamas.io/)

## Task description

As an assignment, you need to create a PoC of the e-commerce solution. One of our clients wants to have an application where he could sell images and artworks. He gave us designs and we need to transfer his vision to real code.

## Scoring

To meet requirements you need to accomplish between 3 and 7 features (when 3 is a minimum and 7 is a maximum). Tech Stack
We want to encourage you to use libraries and tools that you feel comfortable with. Our favorite stack is Next.JS + Typescript but you can propose your own solutions. The only thing that is mandatory is the usage of React.JS.

## Database Design
You can create your own database of products or use our schema proposition. Create min 20 products. You could get images from https://www.pexels.com/search/lifestyle/

```json
{
	"products": [
		{
			"id": "xy123",
			"name": "Samurai King Resting",
			"category": "landmarks",
			"bestseller": true,
			"price": 101,
			"currency": "USD",
			"image": {
				"width": 1200,
				"height": 700,
				"src": "/featured.png",
				"alt": "featured samurai"
			},
			"size": 15000,
			"description": "<p>So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock, a 15th century typesetter likely scrambled part of Cicero's De Finibus in order to provide placeholder</p><p> text to mockup various fonts for a type specimen book.So how did the classical Latin become so incoherent? According to McClintock.</p> ",
			"recommendations": [
				{
					"src": "https://images.pexels.com/photos/1153369/pexels-photo-1153369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
					"alt": "woman-slicing-gourd"
				},
				{
					"src": "https://images.pexels.com/photos/610293/pexels-photo-610293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					"alt": "woman-leaning-back-on-tree-trunk-using-black-dslr-camera-during-day-610293/"
				},
				{
					"src": "https://images.pexels.com/photos/698170/pexels-photo-698170.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					"alt": "white-and-black-laptop-computer-on-brown-wooden-stool-near-pile-books-698170"
				}
			]
		}
	]
}
```

## Features:
### FeaturedProduct
One of the products should have a flag that it's a featured artwork. It should be displayed above the product list.

### ProductList
The product list should contain 6 artworks. After hovering over the image, you should display the "add to cart" bar.
Remember that some products have the bestseller flag.

### AddtoCart
After clicking "Add to cart" in the cart icon in the header should appear the badge with the counter of elements in the cart. Each 'Add to cart' action should open the cart dropdown with items. The dropdown should be also visible after clicking the basket icon in the header. Clicking in the "Clear" button should remove items from the cart and hide the dropdown.

### Pagination
Products should be paginated. On one page should be 6 items. The pagination should show the current page. Hide
the 'prev' arrow on the first page and hide the 'next' arrow on the last page 

## Sorting
Implement 2 types of sorting: alphabetically or by price. Use basic HTML select. Clicking on arrows should change the order to 'ascending' or 'descending'.

### Filtering
Products should be filterable. You can filter products by multiple categories (multiple filters) and only one price range (single filter). Using filters should affect the pagination. Try to build filter options dynamically (don't hardcode them).

### Webperformance*
 
Optimise Your website using lighthouse reports. Try to achieve 80 score in web core vitals. (mobile and desktop) 

### API implementation*
Try to implement your own database solution. You can use tools like Fauna, Hasura, Amplify, Firebase)

### Designs:
https://www.figma.com/file/wYrjKlxB3g80yge1kcahWx/Bejamas-Recruitment-task?node-id=7%3A376.

Sent the finished solution as a .zip file to hr@bejamas.io

## Setup
First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Open http://localhost:8001

To build the app

```bash
npm run build
# or
yarn build
```

To start the app in production mode

```bash
npm run start
# or
yarn start
```

To run lint - eslint, prettier and typescript

```bash
npm run lint
# or
yarn lint
```

To run test - jest, @testing-library/react, cypress

## Submission url

[https://bejamas.oluwasetemi.dev](https://bejamas.oluwasetemi.dev)
