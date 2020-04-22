module.exports = app=>
{
	app.get("/rasks",(req,res)=>
	{
		res.json(
		{
			tasks:
			[
				{title: "Fazer compras"},
				{title: "Consertar 0 pc"},
			]
		});
	});
}
