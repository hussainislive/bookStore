import Book from "../models/book.model.js";

// Get all books
export const getBook = async (req, res) => {
  try {
    const book = await Book.find(); // Fetch all books from the database
    res.status(200).json(book); // Send books as a JSON response with a 200 status
  } catch (error) {
    console.error("Error fetching books:", error.message); // Log a more descriptive error message
    res.status(500).json(error.message); // Include a user-friendly message
  }
};
