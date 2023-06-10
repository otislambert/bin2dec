function validateInput(str: string): boolean {
	if (str.length < 1 || str.length > 8) return false;
	if (str.match(/^[01]+$/)) return true;
	return false;
}

export { validateInput };
