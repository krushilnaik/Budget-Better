/**
 * @param {number} amount
 */
function format_money(amount) {
	return amount.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = {
	format_money
};
