const moment = require("moment");

const header = `
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>some upcoming grant deadlines</title>
	</head>

	<body>
		<div class="banner">grantsreminder.com</div>
		<div class="wrapper">
			<p>Hello!</p>
	`;

renderGrantDetails = grant =>
  `<li><strong>${moment(grant.date).format("LL")} –– ${
    grant.name
  }</strong></li>`;

renderMsg = grants =>
  `	<p> You have some grant deadlines coming up:</p >
		<ul>
			${grants.map(renderGrantDetails).join("")}
		</ul>
	`;

const footer = `
			<p> best,
			<br> grants reminder
		</p>

		</div >

			<style>
				html {
					font - family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;
					font-weight: 200;
				}

			body {
				margin: 0px;
				border-top: 8px solid HSLA(209, 100%, 60%, 1.00);
			}

			.banner {
				border-bottom: 1px solid HSLA(225, 9%, 91%, 7.00);
				padding: 5px;
				text-align: center;
			}

			.wrapper {
				margin: 8%;
			}

			ul {
				list-style: circle inside; }
			ol {
				list-style: decimal inside; }
			ol, ul {
				padding-left: 0;
				margin-top: 0; }
			ul ul,
			ul ol,
			ol ol,
			ol ul {
				margin: 1.5rem 0 1.5rem 3rem;
				font-size: 90%; }
			li {
				margin-bottom: 1rem; }

				/* Base Styles
				–––––––––––––––––––––––––––––––––––––––––––––––––– */
				/* NOTE
				html is set to 62.5% so that all the REM measurements throughout Skeleton
				are based on 10px sizing. So basically 1.5rem = 15px :) */

				html {
					font-size: 62.5%; }
				body {
					font-size: 1em; /* currently ems cause chrome bug misinterpreting rems on body element */
					line-height: 1.6;
					font-weight: 300;
					font-family: "Raleway", "Helvetica Neue", Helvetica, Arial, sans-serif;
					color: #222; }


				/* Typography
				–––––––––––––––––––––––––––––––––––––––––––––––––– */
				h1, h2, h3, h4, h5, h6 {
					margin-top: 0;
					margin-bottom: 2rem;
					font-weight: 300; }
				h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}
				h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }
				h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }
				h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }
				h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }
				h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }

				/* Larger than phablet */
				@media (min-width: 550px) {
					h1 { font-size: 5.0rem; }
					h2 { font-size: 4.2rem; }
					h3 { font-size: 3.6rem; }
					h4 { font-size: 3.0rem; }
					h5 { font-size: 2.4rem; }
					h6 { font-size: 1.5rem; }
				}

				p {
					margin-top: 0; }


				/* Links
				–––––––––––––––––––––––––––––––––––––––––––––––––– */
				a {
					color: #1EAEDB; }
				a:hover {
					color: #0FA0CE; }

		</style>

	</body >

	</html >
			`;

renderEmailHTML = grants => header + renderMsg(grants) + footer;

module.exports = renderEmailHTML;
