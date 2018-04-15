import { object } from 'prop-types';
import Head from 'next/head';

import NormalizeCSS from '../../CSS/NormalizeCSS';
import SkeletonCSS from '../../CSS/SkeletonCSS';

import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => (
	<div>
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta charSet="utf-8" />
			<title>grantsreminder.com</title>
		</Head>
		{NormalizeCSS}
		{SkeletonCSS}
		<div className="wrapper">
			<Nav user={props.user} />
			<div className="content">
				{props.children}
				<Footer />
			</div>
		</div>
		<style jsx global>{`
		
		.wrapper {
			background: white;
			max-width: 1000px;
			margin: auto;
		}

		.content {
			padding: 20px;
		}
		`}</style>
	</div>
)

Nav.propTypes = {
	user: object,
}

export default Layout;