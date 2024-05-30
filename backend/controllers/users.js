import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
		const { id } = req.params;
		const user = await User.findById(id);
		res.status(200).json(user);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}

export const getUserConnections = async(req, res) => {
	try {
			const { id } = req.params;
	const user = await User.findById(id);

	const connections = await Promise.all(
		user.connection.map((id) => User.findById(id))
	);
	const formattedConnections = connections.map(
		({ _id, firstName, lastName, occupation, location, picturePath }) => {
			return { _id, firstName, lastName, occupation, location, picturePath };
		}
	);
	res.status(200).json(formattedConnections);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
};

/* UPDATE */
export const addRemoveConnection = async (req, res) => {
	try {
		const { id, connectionId } = req.params;
		const user = await User.findById(id);
		const connection = await User.findById(connectionId);

		if (user.connections.includes(connectionId)) {
			user.connections = user.connections.filter((id) => id !== connectionId);
			connection.connections = connection.connections.filter((id) => id !== Id);
		} else {
			user.connections.push(connectionId);
			connection.connections(id);
		}
		await user.save();
		await connection.save();

		const connections = await Promise.all(
			user.connections.map((id) => User.findById(id))
		);
		const formattedConnections = connections.map(
			({ _id, firstName, lastName, occupation, location, picturePath }) => {
				return { _id, firstName, lastName, occupation, location, picturePath };
			}
		);

		res.status(200).json(formattedConnections);
	} catch (err) {
		res.status(404).json({ message: err.message });
	}
}