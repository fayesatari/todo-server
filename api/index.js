module.exports = (req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.end('API is running...');
  } else if (req.method === 'GET' && req.url === '/api') {
    res.end('hi');
  } else if (req.method === 'GET' && req.url === '/api/healthy') {
    res.end('OK-It is healthy');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
};