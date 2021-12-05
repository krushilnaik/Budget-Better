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

function format_cents(amount) {
	let cents = amount.slice(-2);
	if (cents === "00") {
		let noCents = amount.split(".")[0];
		return noCents;
	}
	else {
		return amount;
	}
};

module.exports = {
	format_money,
	format_date,
	format_cents
};
