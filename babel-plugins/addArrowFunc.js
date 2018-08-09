module.exports = function({
	types: t
}) {
	return {
		visitor: {
			ArrayExpression(path) {
				let program = path.findParent(isProgram);
debugger;
				console.log("--FunctionDeclaration--");
				console.log(program);

				program.unshiftContainer('body',
					t.variableDeclaration('let', [
						t.variableDeclarator(
							t.identifier('myName'),
							t.arrowFunctionExpression(
								[],
								t.blockStatement([], []),
							),
						),
					]),
				);

				function isProgram(path) {
					return path.isProgram();
				}

/*				var ident = t.identifier("varDecl");
				//console.log("ident__", ident);
				path.unshiftContainer('body',
					t.variableDeclaration("let", [
						t.variableDeclarator(
							ident
						)
					])
				)*/

			}
		}
	};
};