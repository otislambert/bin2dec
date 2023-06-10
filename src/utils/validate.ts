function validateInput(str: string): boolean {
	if (str.match(/^[01]+$/)) return true;
	return false;
}

export { validateInput };
