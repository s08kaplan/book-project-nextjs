import Book from "@/models/book"
import User from "@/models/user";
import { dbConnection } from "@/lib/dbConnection";
import {faker} from '@faker-js/faker';

const createFakeUsers = async (count=10) => {
  try {
    await User.deleteMany({})
     console.log("Users deleted");
    const users = []
    for (let i = 0; i < count; i++) {
      const user = {
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(), 
        isActive: faker.datatype.boolean(),
        isAdmin: faker.datatype.boolean(),
        gender: faker.helpers.arrayElement(['male', 'female', 'other']),
        image: faker.image.avatar(),
      };

      users.push(user);
    }
    await User.insertMany(users)
  } catch (error) {
    console.error('Error creating fake users:', error);
  }
}


export const primaryDataSamples = async () => {
  try {
    console.log("Connecting to database...");
    await dbConnection()

    await createFakeUsers()
     

     await Book.deleteMany({});
     console.log("Existing data cleared.");

    await Book.insertMany([
        {
            "name": "The Silent Patient",
            "author": "Alex Michaelides",
            "genres": "Thriller, Mystery",
            "summary": "A gripping psychological thriller about a woman who stops speaking after a crime.",
            "description": "In this chilling and intricately crafted thriller, Alicia Berenson is a celebrated artist who appears to have the perfect life—until one shocking night when she shoots her husband and becomes silent, refusing to speak another word. As a psychotherapist named Theo Faber becomes obsessed with uncovering the truth behind her silence, dark secrets from both their lives emerge. The novel masterfully blends psychological depth and suspense to deliver a story that keeps readers guessing until the final page.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/91BbLCJOruL.jpg"
          },
          {
            "name": "Atomic Habits",
            "author": "James Clear",
            "genres": "Self-Help, Productivity",
            "summary": "A guide to building good habits and breaking bad ones through small, incremental changes.",
            "description":"This transformative book delves into the science of habit formation and offers practical strategies for creating lasting change. James Clear explains how tiny improvements, compounded over time, can lead to remarkable results. Through real-life examples, research, and actionable tips, readers learn how to design environments that foster good habits, overcome obstacles, and reframe their mindset for long-term success.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81F90H7hnML.jpg"
          },
          {
            "name": "Where the Crawdads Sing",
            "author": "Delia Owens",
            "genres": "Drama, Mystery",
            "summary": "A tale of isolation and resilience as a young woman grows up alone in the marshlands.",
            "description":"Set in the hauntingly beautiful marshes of North Carolina, this novel intertwines a coming-of-age story with a compelling murder mystery. Kya Clark, the 'Marsh Girl,' grows up abandoned by her family, learning to survive on her own in the wilderness. As she comes of age, her life intersects with two young men, leading to a tragic event that puts her on trial for murder. With lush descriptions of nature and profound insights into human relationships, this story explores themes of loneliness, resilience, and the power of the natural world.",
            "rating": [],
            "comments": [],
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1MvpyqtgEYzrVbWSW99XRgjDkPCc032pKw&s"
          },
          {
            "name": "Dune",
            "author": "Frank Herbert",
            "genres": "Science Fiction, Fantasy",
            "summary": "A saga of politics, religion, and ecology on the desert planet of Arrakis.",
            "description":"Widely regarded as one of the greatest science fiction novels of all time, Dune transports readers to the desert planet of Arrakis, the only source of the precious 'spice' that powers the universe. The story follows Paul Atreides, a young nobleman whose family becomes embroiled in a deadly political struggle. As Paul discovers his destiny amidst a backdrop of ecological challenges, intricate political schemes, and ancient religious prophecies, Dune presents a richly layered epic that examines power, survival, and humanity's relationship with the environment.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/91bNnC0hTFL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "Educated",
            "author": "Tara Westover",
            "genres": "Memoir, Non-Fiction",
            "summary": "A powerful memoir about a woman overcoming her survivalist upbringing to achieve an education.",
            "description":"Tara Westover recounts her extraordinary journey from growing up in a strict, survivalist family in rural Idaho to earning a PhD from Cambridge University. Denied access to formal education as a child, she teaches herself basic math and grammar, eventually gaining admission to college. Along the way, Tara confronts the conflicting forces of loyalty to her family and her desire for self-discovery. Her story is both a harrowing and inspiring exploration of resilience, education, and the transformative power of knowledge.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71-4MkLN5jL.jpg"
          },
          {
            "name": "Circe",
            "author": "Madeline Miller",
            "genres": "Fantasy, Mythology",
            "summary": "A feminist retelling of the story of Circe, the witch from Greek mythology.",
            "description":"Madeline Miller breathes new life into the myth of Circe, the misunderstood witch of ancient Greek lore. Banished to a remote island for defying the gods, Circe hones her magical powers and discovers her independence. Along the way, she encounters legendary figures such as Odysseus, Hermes, and the Minotaur. Through vivid prose and deep emotional resonance, this novel reexamines themes of power, identity, and the enduring struggle of a woman finding her place in a world ruled by men and gods.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/91r0y3YEfGL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "Becoming",
            "author": "Michelle Obama",
            "genres": "Biography, Inspirational",
            "summary": "The memoir of Michelle Obama, chronicling her journey from childhood to the White House.",
            "description":"In this deeply personal and reflective memoir, Michelle Obama shares the experiences that shaped her life, from her upbringing on the South Side of Chicago to her role as the First Lady of the United States. With warmth and candor, she offers insights into her career, family life, and her advocacy for education and health initiatives. The book is an inspiring testament to resilience, self-discovery, and the enduring pursuit of a meaningful life.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81KGjsBXQ7L._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "The Night Circus",
            "author": "Erin Morgenstern",
            "genres": "Fantasy, Romance",
            "summary": "A magical competition between two young illusionists within a mysterious circus.",
            "description":"Step into the enchanting world of the Night Circus, a magical realm that appears without warning and defies the laws of reality. Behind the mesmerizing performances, two young illusionists, Celia and Marco, are pitted against each other in a competition orchestrated by their mentors. As their rivalry deepens into love, the stakes grow higher, and the circus itself hangs in the balance. Erin Morgenstern weaves a spellbinding tale of love, sacrifice, and the power of imagination.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81wHpiNObnL.jpg"
          },
          {
            "name": "The Song of Achilles",
            "author": "Madeline Miller",
            "genres": "Fantasy, Romance",
            "summary": "A tragic love story between Achilles and Patroclus set in ancient Greece.",
            "description":"This lyrical and heart-wrenching novel retells the epic tale of the Iliad through the eyes of Patroclus, the loyal companion of the legendary warrior Achilles. As their friendship blossoms into a profound and forbidden love, the two must navigate the perils of war, fate, and their own flaws. Madeline Miller's poetic prose brings to life a timeless story of love and loss amidst the grandeur of Greek mythology.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81msb6gUBTL.jpg"
          },
          {
            "name": "Project Hail Mary",
            "author": "Andy Weir",
            "genres": "Science Fiction",
            "summary": "A lone astronaut must save Earth from an impending disaster in this thrilling space adventure.",
            "description":"Ryland Grace awakens aboard a spaceship with no memory of who he is or why he’s there. As he pieces together his mission, he discovers that he is humanity's last hope for survival against a cosmic threat. Andy Weir combines humor, hard science, and nail-biting suspense in this gripping tale of ingenuity and survival in the face of impossible odds.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/91vS2L5YfEL._UF894,1000_QL80_.jpg"
          },
          {
            "name": "The Midnight Library",
            "author": "Matt Haig",
            "genres": "Fiction, Fantasy",
            "summary": "A story about a library where every book represents a different life path.",
            "description":"Nora Seed finds herself in the Midnight Library, a magical place between life and death. Each book allows her to explore a different version of her life based on the choices she could have made. As she navigates alternate realities, Nora learns profound lessons about regret, happiness, and the meaning of life. Matt Haig crafts a heartwarming and philosophical tale about second chances and self-acceptance.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71FsIkGF3pL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "A Court of Thorns and Roses",
            "author": "Sarah J. Maas",
            "genres": "Fantasy, Romance",
            "summary": "A young huntress is drawn into a world of faeries and danger.",
            "description":"Feyre Archeron’s life takes a dramatic turn when she kills a wolf in the forest, only to be dragged into the magical realm of the fae as punishment. As she learns about this dangerous and alluring world, Feyre discovers that her captor, Tamlin, hides secrets that could save or doom their worlds. Sarah J. Maas delivers a thrilling blend of romance, action, and fantasy in this captivating series opener.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81rJtdRBSFL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "The Alchemist",
            "author": "Paulo Coelho",
            "genres": "Fiction, Inspirational",
            "summary": "A shepherd’s journey to fulfill his dreams and find treasure in Egypt.",
            "description":"Santiago, a young Andalusian shepherd, dreams of discovering treasure buried in the Egyptian pyramids. Guided by a mysterious alchemist, he embarks on a spiritual journey filled with profound encounters and life lessons. Along the way, Santiago learns the importance of pursuing one's 'Personal Legend,' listening to the heart, and recognizing the interconnectedness of all things. Paulo Coelho’s The Alchemist is a timeless allegory about ambition, faith, and self-discovery that continues to inspire readers worldwide.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81FPzmB5fgL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "It Ends With Us",
            "author": "Colleen Hoover",
            "genres": "Romance, Contemporary",
            "summary": "A touching story about love, heartbreak, and finding strength in the most challenging situations.",
            "description":"Lily Bloom’s life seems to be falling into place when she meets the charming and enigmatic Ryle Kincaid. However, as their relationship deepens, she must confront painful truths about love, abuse, and resilience. Drawing from her own experiences, Colleen Hoover delivers a raw and emotional narrative that explores the complexities of relationships and the courage it takes to break cycles of pain and build a better future.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/817vqET828L._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "The 48 Laws of Power",
            "author": "Robert Greene",
            "genres": "Self-Help, Non-Fiction",
            "summary": "A guide to understanding and navigating power dynamics in life and work.",
            "description":"In this provocative and insightful guide, Robert Greene distills centuries of power dynamics into 48 concise laws. Drawing on historical examples, Greene provides strategies to outmaneuver rivals, gain influence, and protect oneself from manipulation. Whether you aim to rise in the workplace, negotiate effectively, or simply understand human behavior better, this book offers actionable insights into the subtle art of power. Though controversial in its approach, it has become a modern classic for those seeking personal and professional success.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/61J3Uu4jOLL.jpg"
          }
    ])
    console.log("Sample Data added Successfully");
  } catch (error) {
    console.error("Sample Data adding error", error);
    
  }
}



