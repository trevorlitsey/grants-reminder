import React from 'react';
import { object } from 'prop-types';
import Link from 'next/link';

import { signOut } from '../../base';

const Nav = (props) => {

	const { user } = props;

	return (
		<div>
			<ul>
				<Link href="/">
					<a><li>GrantsReminder</li></a>
				</Link>
				{user && <a><li onClick={signOut} data-test="sign-out">Sign Out</li></a>}
			</ul>
			<style jsx>{`

			div {
				border-top: 4px solid HSLA(206, 100%, 50%, .8);
			}

			ul {
				border-top: 1px solid HSLA(0, 0%, 87%, .7);
				border-bottom: 1px solid HSLA(0, 0%, 87%, .7);
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
				padding: 0 10px;
				color: black;
				font-weight: bold;
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