function convertBinaryToString(str: string): number {
	// validation
	if (str.length <= 0) throw new Error('Empty String Received');
	if (str.length > 8) throw new Error('More than 8 Characters Received');
	if (!str.match(/^[01]+$/)) throw new Error('Non Binary Character Received');

	// initialize total
	let total = 0;

	//loop through values
	for (let i = 0; i < str.length; i++) {
		total = total * 2 + Number(str[i]);
	}

	// return total
	return total;
}

export { convertBinaryToString };
