export type Level = "easy" | "medium" | "hard";
export type Category = "general" | "cs" | "current";
export type QType = "mcq" | "truefalse";

export interface Question {
  id: string;
  category: Category;
  level: Level;
  type: QType;
  text: string;
  options: string[];
  correct: number;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  general: "General Knowledge",
  cs: "Computer Science",
  current: "Science & World Affairs",
};

export const LEVEL_LABELS: Record<Level, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

const tf = ["True", "False"];

export const QUESTIONS: Question[] = [
  // ---------- GENERAL KNOWLEDGE ----------
  { id: "g1", category: "general", level: "easy", type: "mcq", text: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Mercury"], correct: 1 },
  { id: "g2", category: "general", level: "easy", type: "mcq", text: "What is the capital city of Japan?", options: ["Osaka", "Kyoto", "Tokyo", "Nagoya"], correct: 2 },
  { id: "g3", category: "general", level: "easy", type: "mcq", text: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], correct: 2 },
  { id: "g4", category: "general", level: "easy", type: "truefalse", text: "The Pacific Ocean is the largest ocean on Earth.", options: tf, correct: 0 },
  { id: "g5", category: "general", level: "easy", type: "truefalse", text: "The Great Wall of China is located in India.", options: tf, correct: 1 },
  { id: "g6", category: "general", level: "easy", type: "mcq", text: "Which language has the most native speakers worldwide?", options: ["English", "Hindi", "Spanish", "Mandarin Chinese"], correct: 3 },
  { id: "g7", category: "general", level: "easy", type: "mcq", text: "What is the currency of the United Kingdom?", options: ["Euro", "Pound sterling", "Franc", "Krona"], correct: 1 },
  { id: "g8", category: "general", level: "easy", type: "truefalse", text: "Mount Everest lies on the border of Nepal and China.", options: tf, correct: 0 },
  { id: "g9", category: "general", level: "medium", type: "mcq", text: "Who wrote the play 'Macbeth'?", options: ["Charles Dickens", "William Shakespeare", "John Milton", "Oscar Wilde"], correct: 1 },
  { id: "g10", category: "general", level: "medium", type: "mcq", text: "Which river flows through the city of Cairo?", options: ["Congo", "Niger", "Nile", "Zambezi"], correct: 2 },
  { id: "g11", category: "general", level: "medium", type: "mcq", text: "In which year did the Second World War end?", options: ["1943", "1944", "1945", "1946"], correct: 2 },
  { id: "g12", category: "general", level: "medium", type: "truefalse", text: "The Louvre Museum is located in Rome.", options: tf, correct: 1 },
  { id: "g13", category: "general", level: "medium", type: "mcq", text: "Which country gifted the Statue of Liberty to the United States?", options: ["France", "Spain", "Italy", "Netherlands"], correct: 0 },
  { id: "g14", category: "general", level: "medium", type: "mcq", text: "What is the largest country in the world by land area?", options: ["Canada", "China", "United States", "Russia"], correct: 3 },
  { id: "g15", category: "general", level: "medium", type: "truefalse", text: "Canberra, not Sydney, is the capital of Australia.", options: tf, correct: 0 },
  { id: "g16", category: "general", level: "medium", type: "mcq", text: "Which instrument measures atmospheric pressure?", options: ["Hygrometer", "Barometer", "Anemometer", "Altimeter"], correct: 1 },
  { id: "g17", category: "general", level: "hard", type: "mcq", text: "The Treaty of Westphalia (1648) ended which conflict?", options: ["The Hundred Years' War", "The Thirty Years' War", "The Napoleonic Wars", "The War of the Roses"], correct: 1 },
  { id: "g18", category: "general", level: "hard", type: "mcq", text: "Who was the first Secretary-General of the United Nations?", options: ["Dag Hammarskjöld", "U Thant", "Trygve Lie", "Kurt Waldheim"], correct: 2 },
  { id: "g19", category: "general", level: "hard", type: "mcq", text: "Which ancient city was destroyed by the eruption of Mount Vesuvius in 79 AD?", options: ["Carthage", "Pompeii", "Ephesus", "Troy"], correct: 1 },
  { id: "g20", category: "general", level: "hard", type: "truefalse", text: "The Magna Carta was sealed in the year 1215.", options: tf, correct: 0 },
  { id: "g21", category: "general", level: "hard", type: "mcq", text: "Which strait separates Asia from North America?", options: ["Strait of Malacca", "Bering Strait", "Strait of Hormuz", "Bosphorus"], correct: 1 },
  { id: "g22", category: "general", level: "hard", type: "mcq", text: "Who painted 'The Persistence of Memory'?", options: ["Pablo Picasso", "Salvador Dalí", "René Magritte", "Joan Miró"], correct: 1 },
  { id: "g23", category: "general", level: "hard", type: "truefalse", text: "Istanbul was historically known as Constantinople.", options: tf, correct: 0 },
  { id: "g24", category: "general", level: "hard", type: "mcq", text: "Which economist wrote 'The Wealth of Nations'?", options: ["David Ricardo", "John Maynard Keynes", "Adam Smith", "Karl Marx"], correct: 2 },

  // ---------- COMPUTER SCIENCE ----------
  { id: "c1", category: "cs", level: "easy", type: "mcq", text: "What does 'HTML' stand for?", options: ["Hyper Transfer Markup Language", "HyperText Markup Language", "High Level Text Machine Language", "Hyperlink Text Management Layer"], correct: 1 },
  { id: "c2", category: "cs", level: "easy", type: "mcq", text: "Which of these is a programming language?", options: ["HTTP", "Python", "JPEG", "FTP"], correct: 1 },
  { id: "c3", category: "cs", level: "easy", type: "truefalse", text: "RAM is a type of volatile memory.", options: tf, correct: 0 },
  { id: "c4", category: "cs", level: "easy", type: "mcq", text: "How many bits are there in one byte?", options: ["4", "8", "16", "32"], correct: 1 },
  { id: "c5", category: "cs", level: "easy", type: "mcq", text: "Which company originally developed the Java programming language?", options: ["Microsoft", "IBM", "Sun Microsystems", "Apple"], correct: 2 },
  { id: "c6", category: "cs", level: "easy", type: "truefalse", text: "CSS is used to describe the presentation of a web page.", options: tf, correct: 0 },
  { id: "c7", category: "cs", level: "easy", type: "mcq", text: "What does 'CPU' stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Control Program Utility", "Central Power Unit"], correct: 0 },
  { id: "c8", category: "cs", level: "easy", type: "truefalse", text: "A compiler translates source code into machine code.", options: tf, correct: 0 },
  { id: "c9", category: "cs", level: "medium", type: "mcq", text: "What is the average time complexity of binary search on a sorted array?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correct: 1 },
  { id: "c10", category: "cs", level: "medium", type: "mcq", text: "Which data structure follows the Last-In-First-Out principle?", options: ["Queue", "Stack", "Linked list", "Heap"], correct: 1 },
  { id: "c11", category: "cs", level: "medium", type: "mcq", text: "In SQL, which clause is used to filter grouped rows?", options: ["WHERE", "ORDER BY", "HAVING", "LIMIT"], correct: 2 },
  { id: "c12", category: "cs", level: "medium", type: "truefalse", text: "HTTP is a stateless protocol.", options: tf, correct: 0 },
  { id: "c13", category: "cs", level: "medium", type: "mcq", text: "Which port is used by HTTPS by default?", options: ["21", "80", "443", "8080"], correct: 2 },
  { id: "c14", category: "cs", level: "medium", type: "mcq", text: "What does 'API' stand for?", options: ["Applied Program Interface", "Application Programming Interface", "Automated Process Integration", "Application Process Identifier"], correct: 1 },
  { id: "c15", category: "cs", level: "medium", type: "truefalse", text: "In JavaScript, 'const' prevents reassignment of the variable binding.", options: tf, correct: 0 },
  { id: "c16", category: "cs", level: "medium", type: "mcq", text: "Which sorting algorithm has the best worst-case time complexity?", options: ["Bubble sort", "Quick sort", "Merge sort", "Insertion sort"], correct: 2 },
  { id: "c17", category: "cs", level: "hard", type: "mcq", text: "Which normal form removes transitive dependencies on the primary key?", options: ["First normal form", "Second normal form", "Third normal form", "Boyce-Codd normal form"], correct: 2 },
  { id: "c18", category: "cs", level: "hard", type: "mcq", text: "What is the space complexity of a standard recursive depth-first search on a graph with V vertices?", options: ["O(1)", "O(log V)", "O(V)", "O(V²)"], correct: 2 },
  { id: "c19", category: "cs", level: "hard", type: "mcq", text: "Which algorithm finds shortest paths from a single source in a graph with negative edge weights?", options: ["Dijkstra's algorithm", "Bellman-Ford algorithm", "Prim's algorithm", "Kruskal's algorithm"], correct: 1 },
  { id: "c20", category: "cs", level: "hard", type: "truefalse", text: "Every problem in P is also in NP.", options: tf, correct: 0 },
  { id: "c21", category: "cs", level: "hard", type: "mcq", text: "In operating systems, which condition is NOT required for deadlock to occur?", options: ["Mutual exclusion", "Hold and wait", "Preemption of resources", "Circular wait"], correct: 2 },
  { id: "c22", category: "cs", level: "hard", type: "mcq", text: "Which hashing approach resolves collisions by storing entries in the next free slot?", options: ["Separate chaining", "Open addressing", "Perfect hashing", "Consistent hashing"], correct: 1 },
  { id: "c23", category: "cs", level: "hard", type: "truefalse", text: "TCP guarantees ordered, reliable delivery of a byte stream.", options: tf, correct: 0 },
  { id: "c24", category: "cs", level: "hard", type: "mcq", text: "What does the 'volatile' keyword typically indicate in C?", options: ["The value is constant", "The value may change outside program control", "The variable is stored on the heap", "The variable is thread-local"], correct: 1 },

  // ---------- SCIENCE & WORLD AFFAIRS ----------
  { id: "s1", category: "current", level: "easy", type: "mcq", text: "Which gas do plants primarily absorb during photosynthesis?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], correct: 2 },
  { id: "s2", category: "current", level: "easy", type: "mcq", text: "What is the chemical symbol for gold?", options: ["Go", "Gd", "Ag", "Au"], correct: 3 },
  { id: "s3", category: "current", level: "easy", type: "truefalse", text: "The World Health Organization is an agency of the United Nations.", options: tf, correct: 0 },
  { id: "s4", category: "current", level: "easy", type: "mcq", text: "How many bones does an adult human body typically have?", options: ["186", "206", "226", "256"], correct: 1 },
  { id: "s5", category: "current", level: "easy", type: "mcq", text: "Which organ pumps blood around the human body?", options: ["Liver", "Lungs", "Heart", "Kidneys"], correct: 2 },
  { id: "s6", category: "current", level: "easy", type: "truefalse", text: "Solar panels convert sunlight into electrical energy.", options: tf, correct: 0 },
  { id: "s7", category: "current", level: "easy", type: "mcq", text: "Which currency is used across most of the European Union?", options: ["Euro", "Dollar", "Pound", "Franc"], correct: 0 },
  { id: "s8", category: "current", level: "easy", type: "truefalse", text: "Water boils at 100 °C at standard atmospheric pressure.", options: tf, correct: 0 },
  { id: "s9", category: "current", level: "medium", type: "mcq", text: "Which greenhouse gas is the main driver of human-caused global warming?", options: ["Methane", "Carbon dioxide", "Ozone", "Nitrous oxide"], correct: 1 },
  { id: "s10", category: "current", level: "medium", type: "mcq", text: "How many permanent members does the UN Security Council have?", options: ["3", "5", "7", "10"], correct: 1 },
  { id: "s11", category: "current", level: "medium", type: "mcq", text: "Which international agreement, adopted in 2015, aims to limit global warming to well below 2 °C?", options: ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Rio Declaration"], correct: 2 },
  { id: "s12", category: "current", level: "medium", type: "truefalse", text: "The Euro is the official currency of Switzerland.", options: tf, correct: 1 },
  { id: "s13", category: "current", level: "medium", type: "mcq", text: "Which element has the atomic number 6?", options: ["Oxygen", "Carbon", "Nitrogen", "Helium"], correct: 1 },
  { id: "s14", category: "current", level: "medium", type: "mcq", text: "Where is the headquarters of the World Trade Organization located?", options: ["Brussels", "New York", "Geneva", "Vienna"], correct: 2 },
  { id: "s15", category: "current", level: "medium", type: "truefalse", text: "DNA carries genetic information in most living organisms.", options: tf, correct: 0 },
  { id: "s16", category: "current", level: "medium", type: "mcq", text: "Which renewable source generates the most electricity worldwide?", options: ["Solar", "Wind", "Hydropower", "Geothermal"], correct: 2 },
  { id: "s17", category: "current", level: "hard", type: "mcq", text: "Which particle mediates the electromagnetic force?", options: ["Gluon", "Photon", "W boson", "Graviton"], correct: 1 },
  { id: "s18", category: "current", level: "hard", type: "mcq", text: "The Bretton Woods conference of 1944 established which two institutions?", options: ["WTO and OECD", "IMF and World Bank", "UN and NATO", "BIS and G7"], correct: 1 },
  { id: "s19", category: "current", level: "hard", type: "mcq", text: "What is the approximate age of the universe according to current cosmological models?", options: ["4.5 billion years", "9.2 billion years", "13.8 billion years", "21.4 billion years"], correct: 2 },
  { id: "s20", category: "current", level: "hard", type: "truefalse", text: "The ozone layer is mainly found in the stratosphere.", options: tf, correct: 0 },
  { id: "s21", category: "current", level: "hard", type: "mcq", text: "Which enzyme unwinds the DNA double helix during replication?", options: ["Ligase", "Helicase", "Polymerase", "Primase"], correct: 1 },
  { id: "s22", category: "current", level: "hard", type: "mcq", text: "Which treaty forms the legal basis of the European Union's single currency?", options: ["Treaty of Rome", "Maastricht Treaty", "Lisbon Treaty", "Schengen Agreement"], correct: 1 },
  { id: "s23", category: "current", level: "hard", type: "truefalse", text: "Absolute zero is defined as 0 kelvin, equal to about −273.15 °C.", options: tf, correct: 0 },
  { id: "s24", category: "current", level: "hard", type: "mcq", text: "Which scientist proposed the general theory of relativity?", options: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"], correct: 2 },
];
