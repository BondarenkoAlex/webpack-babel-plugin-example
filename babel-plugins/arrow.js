module.exports = function({
	types: t
}) {
	return {
		visitor: {
			ArrowFunctionExpression(path, file) {
				console.log("--ArrowFunctionExpression--");
			}
		}
	};
};