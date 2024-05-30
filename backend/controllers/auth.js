import brycpt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js'

/* REGISTER USER */
export const register = async (req, res) => {
  try {
		const {
			firstName,
			lastName,
			email,
			password,
			picturePath,
			connections,
			location,
			occupation
		} = req.body;

		const salt = await brycpt.genSalt();
		const passwordHash = await brycpt.hash(password, salt);

		const newUser = newUser({
			firstName,
			lastName,
			email,
			password: passwordHash,
			picturePath,
			connections,
			location,
			occupation,
			viewedProfile: Math.floor(Math.random() * 1000),
			impressions: Math.floor(Math.random() *10000)
		});
		const savedUser = await newUser.save();
		res.status(201).json(savedUser);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

/* LOGIN USER */
export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email: email });
		if (!user)
			return res.status(400).json({ msg: "User does not exist. "});

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
		delete user.password;
		res.status(200).json({ token, user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};