import mongoose from "mongoose";
import Book from "@/models/book"
import { dbConnection } from "@/lib/dbConnection";


const primaryDataSamples = async () => {
  try {
     dbConnection()
    await Book.insertMany([
        {
            "name": "The Silent Patient",
            "author": "Alex Michaelides",
            "genres": "Thriller, Mystery",
            "summary": "A gripping psychological thriller about a woman who stops speaking after a crime.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "Atomic Habits",
            "author": "James Clear",
            "genres": "Self-Help, Productivity",
            "summary": "A guide to building good habits and breaking bad ones through small, incremental changes.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "Where the Crawdads Sing",
            "author": "Delia Owens",
            "genres": "Drama, Mystery",
            "summary": "A tale of isolation and resilience as a young woman grows up alone in the marshlands.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "Dune",
            "author": "Frank Herbert",
            "genres": "Science Fiction, Fantasy",
            "summary": "A saga of politics, religion, and ecology on the desert planet of Arrakis.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "Educated",
            "author": "Tara Westover",
            "genres": "Memoir, Non-Fiction",
            "summary": "A powerful memoir about a woman overcoming her survivalist upbringing to achieve an education.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "Circe",
            "author": "Madeline Miller",
            "genres": "Fantasy, Mythology",
            "summary": "A feminist retelling of the story of Circe, the witch from Greek mythology.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "Becoming",
            "author": "Michelle Obama",
            "genres": "Biography, Inspirational",
            "summary": "The memoir of Michelle Obama, chronicling her journey from childhood to the White House.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "The Night Circus",
            "author": "Erin Morgenstern",
            "genres": "Fantasy, Romance",
            "summary": "A magical competition between two young illusionists within a mysterious circus.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "The Song of Achilles",
            "author": "Madeline Miller",
            "genres": "Fantasy, Romance",
            "summary": "A tragic love story between Achilles and Patroclus set in ancient Greece.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "Project Hail Mary",
            "author": "Andy Weir",
            "genres": "Science Fiction",
            "summary": "A lone astronaut must save Earth from an impending disaster in this thrilling space adventure.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "The Midnight Library",
            "author": "Matt Haig",
            "genres": "Fiction, Fantasy",
            "summary": "A story about a library where every book represents a different life path.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "A Court of Thorns and Roses",
            "author": "Sarah J. Maas",
            "genres": "Fantasy, Romance",
            "summary": "A young huntress is drawn into a world of faeries and danger.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "The Alchemist",
            "author": "Paulo Coelho",
            "genres": "Fiction, Inspirational",
            "summary": "A shepherd’s journey to fulfill his dreams and find treasure in Egypt.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "It Ends With Us",
            "author": "Colleen Hoover",
            "genres": "Romance, Contemporary",
            "summary": "A touching story about love, heartbreak, and finding strength in the most challenging situations.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          },
          {
            "name": "The 48 Laws of Power",
            "author": "Robert Greene",
            "genres": "Self-Help, Non-Fiction",
            "summary": "A guide to understanding and navigating power dynamics in life and work.",
            "rating": [],
            "comments": [],
            "image": "https://via.placeholder.com/150"
          }
    ])
    console.log("Sample Data added Successfully");
  } catch (error) {
    console.error("Sample Data adding error", error);
    
  }
}


primaryDataSamples()
