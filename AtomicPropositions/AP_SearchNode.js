/* -------------------------------------------
	FMOD Studio Atomic Propositions:
	Search for groups by name
	Search for events by prefix

	Author: Lorenzo Salvadori
   -------------------------------------------
*/

module.exports = {
	BusSearch: function(node, nodeName)
	{
		if(node != null && node.name != null && node.name == nodeName)
		{
			return node;
		}

		if (node.input != null)
		{
			for (var i = 0; i < node.input.length; i++)
			{
				var child = BusSearch(node.input[i], nodeName);
				if (child != null)
					return child;
			}
		}

		return null;
	},

	EventSearch: function(node, prefix)
	{
		eventName = node.name;
		eventprefix = eventName.substring(0, eventName.indexOf("-"));

		if(node != null && node.name != null && eventprefix == prefix)
		{
			return node;
		}

		if (node.items != null)
		{
			for (var i = 0; i < node.items.length; i++)
			{
				var child = EventSearch(node.items[i], prefix);
				if (child != null)
					return child;
			}
		}

		return null;
	},
};