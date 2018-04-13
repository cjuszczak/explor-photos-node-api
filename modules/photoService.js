// Remove photo by ID
exports.remove = function(model, id, res) { 
	console.log('Removing photo with ID: ' + id);
	model.findOne({ id: id }, function(error, data) {
		if(error) {
			if(res != null) {
				res.writeHead(500, { 'Content-Type': 'text/plain'});
				res.end('Internal server error');
			}
			return;
		} else {
			if(!data) {
				if(res != null) {
					res.writeHead(404, { 'Content-Type': 'text/plain' });
					res.end('Not Found');
				}
				return;
			} else {
				data.remove(function(error) {
					if(!error) {
						data.remove();
					} else {
						console.log(error);
					}
				});

				if(res != null) {
					res.writeHead(200, { 'Content-Type': 'text/plain' });
					res.send('Deleted');
				}

				return;
			}
		}
	});
});

