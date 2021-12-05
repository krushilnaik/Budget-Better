/**
 * @param {number} amount
 */
function format_money(amount) {
	return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
};

function format_date(date) {
	const formattedDate = new Date(date).toDateString();
	return formattedDate;
};

module.exports = {
	format_money,
	format_date,
	format_cents
};
