import user from "../model/user.js"; // Import the User model

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    // Create a new user
    const newUser = new User({ username, password });
    await newUser.save(); // Save to MongoDB

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};
export default {
  createUser,
};
