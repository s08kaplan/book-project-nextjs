import Book from "@/models/book"
import User from "@/models/user";
import { dbConnection } from "@/lib/dbConnection";
import {faker} from '@faker-js/faker';

const createFakeUsers = async (count=10) => {
  try {
    await User.deleteMany({})
     console.log("Users deleted");
    const users = []

    const generatePassword = (minLength = 6, maxLength = 16, includeSymbols = true) => {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const symbols = "@$!%*?&";
      const base = includeSymbols ? charset + symbols : charset;

      const length = maxLength
      ? faker.number.int({ min: minLength, max: maxLength })
      : minLength;
    
      return Array.from({ length }, () => base[Math.floor(Math.random() * base.length)]).join('');
    };

    for (let i = 0; i < count; i++) {
      const user = {
        username: faker.internet.username(),
        email: faker.internet.email(),
        // password: faker.internet.password(6, true, true), 
        password: generatePassword(6,15, true), 
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
            "image": "https://m.media-amazon.com/images/I/91CqNElQaKL.jpg"
          },
          {
            "name": "The 48 Laws of Power",
            "author": "Robert Greene",
            "genres": "Self-Help, Non-Fiction",
            "summary": "A guide to understanding and navigating power dynamics in life and work.",
            "description":"In this provocative and insightful guide, Robert Greene distills centuries of power dynamics into 48 concise laws. Drawing on historical examples, Greene provides strategies to outmaneuver rivals, gain influence, and protect oneself from manipulation. Whether you aim to rise in the workplace, negotiate effectively, or simply understand human behavior better, this book offers actionable insights into the subtle art of power. Though controversial in its approach, it has become a modern classic for those seeking personal and professional success.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/611X8GI7hpL.jpg"
          },
          {
            "name": "Crime and Punishment",
            "author": "Fyodor Dostoyevsky",
            "genres": "Philosophical, Psychological",
            "summary": "A man struggles with guilt and moral dilemmas after committing a murder.",
            "description": "The novel explores the psychological and moral turmoil of Raskolnikov, a former student in St. Petersburg, as he grapples with his crime and its justification. Dostoyevsky examines themes of redemption and human nature in this gripping narrative.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71O2XIytdqL.jpg"
          },
          {
            "name": "The Brothers Karamazov",
            "author": "Fyodor Dostoyevsky",
            "genres": "Philosophical, Family Drama",
            "summary": "A family conflict leads to murder and moral questioning.",
            "description": "Dostoyevsky's masterpiece delves into the lives of the Karamazov brothers as they confront issues of faith, doubt, and the existence of God. A profound exploration of morality and family dynamics.",
            "rating": [],
            "comments": [],
            "image": "https://cdn.kobo.com/book-images/1208ebc8-3b5d-40ef-ba2d-b5121520d7e2/1200/1200/False/the-brothers-karamazov-135.jpg"
          },
          {
            "name": "Great Expectations",
            "author": "Charles Dickens",
            "genres": "Coming-of-age, Classic",
            "summary": "An orphan’s journey from poverty to self-discovery.",
            "description": "Pip’s life changes forever when he receives unexpected financial support. Dickens paints a vivid portrait of Victorian England while exploring themes of ambition and personal growth.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/91LuvJHsbVL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "A Tale of Two Cities",
            "author": "Charles Dickens",
            "genres": "Historical, Drama",
            "summary": "A powerful story of love and sacrifice during the French Revolution.",
            "description": "Set against the backdrop of the French Revolution, Dickens tells the tale of Sydney Carton and his ultimate act of selflessness, capturing the turmoil and humanity of the era.",
            "rating": [],
            "comments": [],
            "image": "https://cdn.kobo.com/book-images/b6cc787d-79b3-4322-bfae-7bbf6ed59a77/1200/1200/False/a-tale-of-two-cities-431.jpg"
          },
          {
            "name": "Murder on the Orient Express",
            "author": "Agatha Christie",
            "genres": "Mystery, Crime",
            "summary": "A murder aboard a train leads to a classic whodunit.",
            "description": "Hercule Poirot investigates a complex murder on a luxury train in one of Christie’s most famous novels, filled with twists and turns.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/61rRmiz9HvL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "And Then There Were None",
            "author": "Agatha Christie",
            "genres": "Mystery, Thriller",
            "summary": "Ten strangers are stranded on an island, and one by one, they meet their end.",
            "description": "Christie weaves a tense narrative as the characters face a chilling rhyme predicting their demise in one of her most acclaimed mysteries.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81nChcVy7CL.jpg"
          },
          {
            "name": "Don't Tell Me You're Afraid",
            "author": "Mario Mazzanti",
            "genres": "Psychological, Thriller",
            "summary": "A gripping tale of a forensic doctor unraveling a brutal murder.",
            "description": "Mazzanti introduces the enigmatic Doctor Claps in a fast-paced narrative that blends medical science with detective work, offering a chilling exploration of human nature.",
            "rating": [],
            "comments": [],
            "image": "https://cdn03.ciceksepeti.com/cicek/kcm91048170-1/XL/olumle-randevu-mario-mazzanti-kcm91048170-1-9ce7d124ab81421885d9d97a13e6cd4e.jpg"
          },
          {
            "name": "A Novel Crime",
            "author": "Mario Mazzanti",
            "genres": "Mystery, Thriller",
            "summary": "A crime writer finds himself entangled in a real-life murder.",
            "description": "Mazzanti crafts an intricate tale of deception, weaving the lives of his protagonist with a mystery that blurs the lines between fiction and reality.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/51RrNmUReeL._SY315__.jpg"
          },
          {
            "name": "The Firm",
            "author": "John Grisham",
            "genres": "Legal, Thriller",
            "summary": "A young lawyer uncovers a deadly conspiracy at his firm.",
            "description": "Grisham delivers a taut legal thriller as Mitch McDeere discovers his dream job may come at a terrible cost. A race against time ensues.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/91Ge-6fN0YL.jpg"
          },
          {
            "name": "A Time to Kill",
            "author": "John Grisham",
            "genres": "Legal, Drama",
            "summary": "A lawyer defends a man who takes justice into his own hands.",
            "description": "Set in the racially charged Deep South, Grisham's debut novel examines themes of justice and morality through the lens of a controversial trial.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81RLP4ed1QL._AC_UF894,1000_QL80_.jpg"
          },
          {
            "name": "The Shining",
            "author": "Stephen King",
            "genres": "Horror, Psychological",
            "summary": "A family’s stay at an isolated hotel turns into a nightmare.",
            "description": "Jack Torrance takes his family to the Overlook Hotel, where supernatural forces manipulate his fragile mind, leading to a terrifying descent into madness.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/91U7HNa2NQL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "It",
            "author": "Stephen King",
            "genres": "Horror, Supernatural",
            "summary": "A group of friends confronts a monstrous evil that resurfaces every 27 years.",
            "description": "King masterfully blends horror and friendship in this epic tale of childhood trauma and the power of facing one's fears.",
            "rating": [],
            "comments": [],
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg/800px-It_%281986%29_front_cover%2C_first_edition.jpg"
          },
          {
            "name": "Pride and Prejudice",
            "author": "Jane Austen",
            "genres": "Romance, Classic",
            "summary": "Elizabeth Bennet navigates love and societal expectations in Regency England.",
            "description": "Austen’s timeless exploration of manners, marriage, and morality features one of literature's most beloved couples, Elizabeth and Mr. Darcy.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/61vrbLFc8oL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "Sense and Sensibility",
            "author": "Jane Austen",
            "genres": "Romance, Classic",
            "summary": "Two sisters navigate love and heartbreak in Georgian England.",
            "description": "Austen contrasts the rationality of Elinor Dashwood with the passion of her sister Marianne in this poignant tale of love and loss.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/7161NWQ0jrL.jpg"
          },
          {
            "name": "Norwegian Wood",
            "author": "Haruki Murakami",
            "genres": "Romance, Drama",
            "summary": "A nostalgic story of love and loss in 1960s Japan.",
            "description": "Toru Watanabe recalls his youth and a deeply moving love story, set against the backdrop of student protests in Tokyo.",
            "rating": [],
            "comments": [],
            "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1713542603i/11297.jpg"
          },
          {
            "name": "Kafka on the Shore",
            "author": "Haruki Murakami",
            "genres": "Magical Realism, Fantasy",
            "summary": "Two interwoven stories of a runaway boy and a man with a mystical connection to cats.",
            "description": "Murakami crafts a surreal and imaginative narrative, filled with mysterious events and philosophical musings.",
            "rating": [],
            "comments": [],
            "image": "https://hive.dmmserver.com/media/640/97814735/9781473582538.jpg"
          },
          {
            "name": "The Trial",
            "author": "Franz Kafka",
            "genres": "Philosophical, Dystopian",
            "summary": "A man is arrested and prosecuted by an enigmatic authority.",
            "description": "Kafka's dark and surreal exploration of guilt and bureaucracy unfolds as Josef K. struggles to understand his mysterious trial.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71X73uwgd1L.jpg"
          },
          {
            "name": "Metamorphosis",
            "author": "Franz Kafka",
            "genres": "Absurdism, Classic",
            "summary": "A man wakes up to find he has turned into a giant insect.",
            "description": "Kafka's haunting novella captures themes of alienation, identity, and existential anxiety as Gregor Samsa transforms into a monstrous creature.",
            "rating": [],
            "comments": [],
            "image": "https://img.chirpbooks.com/image/upload/f_auto,q_auto:low,w_660,h_660/v1723826755/cover_images/spotify/5019727.jpg"
          },
          {
            "name": "The Old Man and the Sea",
            "author": "Ernest Hemingway",
            "genres": "Adventure, Classic",
            "summary": "An old fisherman battles a giant marlin in the open sea.",
            "description": "A poignant tale of struggle, resilience, and human spirit, Hemingway's novella won the Pulitzer Prize and solidified his literary legacy.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71RXc0OoEwL.jpg"
          },
          {
            "name": "A Farewell to Arms",
            "author": "Ernest Hemingway",
            "genres": "War, Romance",
            "summary": "A love story unfolds against the backdrop of World War I.",
            "description": "Hemingway's semi-autobiographical novel explores love, war, and disillusionment through the eyes of an American ambulance driver in Italy.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/719VFUyk9GL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "Hamlet",
            "author": "William Shakespeare",
            "genres": "Tragedy, Classic",
            "summary": "A Danish prince seeks revenge for his father's murder.",
            "description": "One of Shakespeare's most celebrated plays, Hamlet is a profound exploration of revenge, madness, and existential despair.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71yRNTLFrxL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "Romeo and Juliet",
            "author": "William Shakespeare",
            "genres": "Romance, Tragedy",
            "summary": "A tragic love story of two young lovers from feuding families.",
            "description": "Shakespeare's timeless tale of love and fate continues to captivate audiences with its poetic language and universal themes.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/61LQf6GWT4L._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "My Name Is Red",
            "author": "Orhan Pamuk",
            "genres": "Historical, Mystery",
            "summary": "A murder mystery set in 16th-century Istanbul’s art world.",
            "description": "Pamuk weaves a rich tapestry of love, art, and religion as the characters navigate a shifting cultural landscape.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/91kTY85M-xL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "Snow",
            "author": "Orhan Pamuk",
            "genres": "Political, Drama",
            "summary": "A Turkish poet returns home and faces political and personal dilemmas.",
            "description": "Pamuk's novel offers a nuanced look at Turkey’s modern struggles with identity, tradition, and politics.",
            "rating": [],
            "comments": [],
            "image": "https://apa.si.edu/bookdragon/wp-content/uploads/sites/10/2011/08/Snow.jpg"
          },
          {
            "name": "Wuthering Heights",
            "author": "Emily Brontë",
            "genres": "Romance, Gothic",
            "summary": "A passionate yet destructive love story set on the Yorkshire moors.",
            "description": "Brontë's only novel is a haunting tale of love, revenge, and obsession, told through the intertwined lives of Heathcliff and Catherine.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81unikMK30L._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "The Picture of Dorian Gray",
            "author": "Oscar Wilde",
            "genres": "Philosophical, Gothic",
            "summary": "A young man’s portrait ages while he remains youthful.",
            "description": "Wilde’s dark and witty tale explores themes of vanity, morality, and the price of eternal youth.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71fm0Ap7JcL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "Les Misérables",
            "author": "Victor Hugo",
            "genres": "Historical, Drama",
            "summary": "The lives of several characters intersect in 19th-century France.",
            "description": "Hugo’s magnum opus is a sweeping tale of justice, love, and redemption, set against a backdrop of social and political unrest.",
            "rating": [],
            "comments": [],
            "image": "https://cdn.kobo.com/book-images/a6bdd3f5-ba60-4ad3-8f6b-5f1427021961/1200/1200/False/les-miserables-305.jpg"
          },
          {
            "name": "The Kite Runner",
            "author": "Khaled Hosseini",
            "genres": "Drama, Historical",
            "summary": "A story of friendship and redemption in Afghanistan.",
            "description": "Hosseini’s heart-wrenching tale follows Amir and Hassan through betrayal and forgiveness, set against the backdrop of Afghanistan’s turbulent history.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/81N++5NzORL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "A Thousand Splendid Suns",
            "author": "Khaled Hosseini",
            "genres": "Drama, Historical",
            "summary": "The intertwined lives of two women in war-torn Afghanistan.",
            "description": "Hosseini delivers a moving portrayal of love, sacrifice, and resilience in the face of adversity.",
            "rating": [],
            "comments": [],
            "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655336738i/128029.jpg"
          },
          {
            "name": "Along Came a Spider",
            "author": "James Patterson",
            "genres": "Thriller, Mystery",
            "summary": "A detective races to catch a psychopathic kidnapper.",
            "description": "Patterson’s Alex Cross series begins with a gripping tale of suspense and psychological drama.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/51LvN+Yd+HL._SL500_.jpg"
          },
          {
            "name": "The Notebook",
            "author": "Sarah Jio",
            "genres": "Romance, Contemporary",
            "summary": "A rediscovered journal leads to a journey of self-discovery.",
            "description": "Jio’s tender story weaves the past and present into a poignant narrative about love and second chances.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71DsBjSrN-L._AC_UF894,1000_QL80_.jpg"
          },
          {
            "name": "The Forgotten",
            "author": "David Baldacci",
            "genres": "Thriller, Crime",
            "summary": "A man investigates a web of secrets in a small coastal town.",
            "description": "Baldacci delivers a riveting thriller filled with twists, betrayal, and a compelling protagonist.",
            "rating": [],
            "comments": [],
            "image": "https://www.hachettebookgroup.com/wp-content/uploads/2017/06/9781455523153.jpg"
          },
          {
            "name": "The Hard Way",
            "author": "Lee Child",
            "genres": "Action, Thriller",
            "summary": "Jack Reacher is drawn into a high-stakes kidnapping case.",
            "description": "Child’s fast-paced novel sees Reacher facing danger at every turn, delivering a classic dose of action and suspense.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/51J5UNSlgYL._AC_UF1000,1000_QL80_.jpg"
          },
          {
            "name": "The Snowman",
            "author": "Jo Nesbo",
            "genres": "Mystery, Crime",
            "summary": "Detective Harry Hole hunts a serial killer in Oslo.",
            "description": "Nesbo’s chilling mystery combines relentless suspense with a gripping investigation.",
            "rating": [],
            "comments": [],
            "image": "https://m.media-amazon.com/images/I/71lUS4qgqpL._AC_UF1000,1000_QL80_.jpg"
          }
    ])
    console.log("Sample Data added Successfully");
  } catch (error) {
    console.error("Sample Data adding error", error);
    
  }
}



