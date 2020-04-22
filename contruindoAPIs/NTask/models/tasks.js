module.express = app=>
{	
	return
	{
		findAll: (params,callback)=>
		{
			return callback(
			[
					{title: "Fazer compras"},
					{title: "Consertar o pc"},
			]);
		}
	};
};
