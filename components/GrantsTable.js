import { string, number, func, bool, shape, object } from 'prop-types';
import Link from 'next/link';
import moment from 'moment';
import convertObjToArr from './helpers/convertObjToArr';

import EditGrantForm from './EditGrantForm';

const GrantsTableRow = (props) => (
	<tr className="card">
		<td>{moment(props.date).format('LL')}</td>
		<td className="grant-name">{props.name}</td>
		<td>{props.purpose}</td>
		<td className="notes">{props.notes}</td>
		<td><a onClick={() => props.updateGrantToEdit(props.id)}>edit</a></td>
	</tr>
)

class GrantsTable extends React.PureComponent {
	render() {
		const { grants } = this.props;
		return (
			<div className="u-full-width grants-table">
				<h4 className="title">Grants</h4>
				<table className="u-full-width">
					<thead>
						<tr>
							<th>date</th>
							<th>name</th>
							<th>purpose</th>
							<th className="notes">notes</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{convertObjToArr(grants)
							.sort((a, b) => a.date - b.date)
							.map(grant => {
								if (this.props.grantToEdit === grant.id) {
									return <EditGrantForm key={grant.id} grant={grant} updateGrantToEdit={this.props.updateGrantToEdit} updateGrant={this.props.updateGrant} changesPending={this.props.changesPending} purposes={this.props.purposes} />
								} else {
									return <GrantsTableRow key={grant.id} {...grant} updateGrantToEdit={this.props.updateGrantToEdit} />
								}
							})}
					</tbody>
					<style jsx global>{`

					.title {
						text-align: center;
						font-weight: 300;
						text-decoration: underline;
					}

					a {
						text-decoration: underline;
					}

					a:hover {
						cursor: pointer;
					}

					table {
					}

					th, td {
						padding: 10px 8px;
					}

					th {
						text-decoration: underline;
					}

					.grant-name {
						font-weight: 400;
					}

					@media (max-width: 550px) {
						.notes {
							display:none;
							width:0;
							height:0;
							opacity:0;
							visibility: collapse;
						}
					}

			`}</style>
				</table>
			</div>
		)
	}
}

GrantsTable.propTypes = {
	grants: shape({
		id: shape({
			id: string,
			date: number,
			name: string,
			notes: string,
			purpose: string,
			reminders: shape({
				twoMonths: bool,
				oneMonth: bool,
				twoWeeks: bool,
				oneWeek: bool,
			}),
		})
	}),
	grantToEdit: string.isRequired,
	updateGrantToEdit: func.isRequired,
	updateGrant: func.isRequired,
	changesPending: bool.isRequired,
	purposes: object.isRequired,
}

GrantsTableRow.propTypes = {
	date: number.isRequired,
	name: string.isRequired,
	notes: string.isRequired,
	id: string.isRequired,
}


export default GrantsTable