module.exports = app=>
{
	app.listen(app.get("port"),()=>
	{
		console.log('NTask API= porta %s',app.get("port"));
	});
}
