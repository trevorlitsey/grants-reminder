import { object } from 'prop-types';
import Head from 'next/head';

import NormalizeCSS from '../CSS/NormalizeCSS';
import SkeletonCSS from '../CSS/SkeletonCSS';

import Nav from './Nav';

const Layout = (props) => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<title>grantsreminder.com</title>
		</Head>
		<Nav user={props.user} />
		{NormalizeCSS}
		{SkeletonCSS}
		<style jsx global>{`
			body {
				
			}

			.wrapper {
				padding: 20px;
				max-width: 1000px;
				margin: 15px auto;
			}
		`}</style>
		<div className="wrapper">
			{props.children}
		</div>
	</div>
)

Nav.propTypes = {
	user: object,
}

export default Layout;