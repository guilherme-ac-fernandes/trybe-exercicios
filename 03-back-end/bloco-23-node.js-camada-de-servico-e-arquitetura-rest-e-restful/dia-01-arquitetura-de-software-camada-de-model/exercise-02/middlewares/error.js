module.exports = (err, _req, res, _next) => {
	if (err.status) return res.status(err.status).json({ message: err.message });
	
	if (err.isJoi) return res.status(400).json({ message: err.details[0].message });
	
	// Caso o erro não seja de nenhum dos dois tipos acima, ele é um erro desconhecido
	// Imprimimos o erro no console para que possamos debugá-lo
	console.error(err);
	res.status(500).json({ message: 'Erro interno do servidor' });
};