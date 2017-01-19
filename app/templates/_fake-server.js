const express = require('express');
const app = express();

app.post('/api/alguma-coisa', (req, res) => {
  res.end();
});

app.get('/api/outra-coisa', (req, res) => {
  res.json({
		yo: true
	});
});

app.listen(1234);
