/**
 * @param {number} amount
 */
function format_money(amount) {
	return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

function format_date(date) {
	return moment(date).format('MMMM Do, YYYY');
}

module.exports = {
	format_money
};
