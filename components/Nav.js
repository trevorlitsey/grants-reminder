import React from 'react';
import { object } from 'prop-types';
import Link from 'next/link';

import { signOut } from '../base';

const Nav = (props) => {

	const { user } = props;

	return (
		<div>
			<ul>
				<Link href="/">
					<a><li>Home</li></a>
				</Link>
				{user && <li onClick={signOut} data-test="sign-out">Sign Out</li>}
			</ul>
			<style jsx>{`
			ul {
				display: flex;
				justify-content: space-between;
				margin: 0;
				padding: 0 10px;
				background: HSLA(200, 6%, 93%, 1.00);
				color: black;
				font-weight: bold;
				text-transform: uppercase;
			}

      li {
				line-height: 4rem;
        list-style: none;
        margin: 0;
			}
			
			li:hover {
				cursor: pointer;
			}

      a {
        text-decoration: none;
        color: black;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
		</div>
	)
}

Nav.propTypes = {
	user: object,
}

export default Nav;