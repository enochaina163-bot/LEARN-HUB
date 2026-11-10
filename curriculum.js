/**
 * LearnHub Educational Curriculum Database
 * Comprehensive Multi-Country & 3-Term (All-Year) Syllabus with:
 * - Country-specific education systems (Nigeria, Ghana, UK, USA, Kenya)
 * - Full Nigerian Senior Secondary & Junior Secondary 3-Term Courses (Term 1, Term 2, Term 3)
 * - Famous Science Pioneers & Experts Database with pictures, discoveries, and quotes
 * - Interactive lesson notes, objectives, formulas, assignments, and CBT quizzes
 */

const EDUCATIONAL_SYSTEMS = {
  Nigeria: {
    flag: "🇳🇬",
    description: "6-3-3-4 System (2026/2027 Session NERDC / WAEC / NECO / NUC Master Scheme of Work)",
    levels: {
      "Senior Secondary (SSS)": {
        description: "Senior Secondary School preparing for WAEC, NECO & UTME (JAMB)",
        classes: ["SSS 1", "SSS 2", "SSS 3"],
        streams: ["All Subjects", "Science", "Commercial / Business", "Arts & Humanities"],
        defaultSubjects: [
          "English Language",
          "General Mathematics",
          "Biology",
          "Chemistry",
          "Physics",
          "Economics",
          "Government",
          "Literature in English",
          "Financial Accounting",
          "Commerce",
          "Agricultural Science",
          "Computer Science / ICT",
          "Civic Education",
          "Further Mathematics"
        ]
      },
      "Junior Secondary (JSS)": {
        description: "Universal Basic Education (UBE) preparing for BECE / JSCE",
        classes: ["JSS 1", "JSS 2", "JSS 3"],
        streams: ["General Curriculum"],
        defaultSubjects: [
          "English Studies",
          "Mathematics",
          "Basic Science / Basic Technology",
          "Social Studies",
          "Civic Education",
          "Computer Studies / ICT",
          "Physical and Health Education",
          "Agricultural Science",
          "Creative Arts / Cultural and Creative Arts",
          "Religious Studies",
          "Yoruba Language",
          "Business Studies"
        ]
      },
      "Primary School": {
        description: "Universal Primary Education (Ages 5-11)",
        classes: ["Primary 1", "Primary 2", "Primary 3", "Primary 4", "Primary 5", "Primary 6"],
        streams: ["Foundation Curriculum"],
        defaultSubjects: [
          "English Studies",
          "Mathematics",
          "Basic Science and Technology",
          "Social Studies",
          "Civic Education",
          "Computer Studies / ICT",
          "Physical and Health Education",
          "Agricultural Science",
          "Creative Arts / Cultural and Creative Arts",
          "Religious Studies",
          "Yoruba Language"
        ]
      },
      "Nursery (Early Childhood)": {
        description: "Early Childhood Care & Development Education (Ages 2-5)",
        classes: ["Nursery 1", "Nursery 2", "Nursery 3"],
        streams: ["Early Years Foundation"],
        defaultSubjects: [
          "Language & Literacy",
          "Numeracy",
          "Basic Science & Environment",
          "Creative Arts",
          "Physical & Health Education",
          "Social & Moral Development"
        ]
      },
      "University / Tertiary Programme": {
        description: "Undergraduate Degree Framework (NUC Accreditation Standards)",
        classes: ["100 Level (Year 1)", "200 Level (Year 2)", "300 Level (Year 3)", "400 Level (Year 4)", "500 Level (Year 5)"],
        streams: ["All Programmes", "Computer Science", "Accounting", "Business Administration", "Economics", "Engineering", "Medicine / Health Sciences", "Education", "Law", "Mass Communication", "Political Science"],
        defaultSubjects: [
          "Computer Science",
          "Accounting",
          "Business Administration",
          "Economics",
          "Engineering",
          "Medicine / Health Sciences",
          "Education",
          "Law",
          "Mass Communication",
          "Political Science"
        ]
      }
    }
  },

  Ghana: {
    flag: "🇬🇭",
    description: "Ghana Education Service (NaCCA / WAEC GES curriculum)",
    levels: {
      "Senior High School (SHS)": {
        description: "Senior High School preparing for WASSCE",
        classes: ["SHS 1", "SHS 2", "SHS 3"],
        streams: ["General Science", "General Arts", "Business", "Home Economics"],
        defaultSubjects: [
          "Core Mathematics",
          "English Language",
          "Integrated Science",
          "Social Studies",
          "Elective Biology",
          "Elective Chemistry",
          "Elective Physics",
          "Economics",
          "Cost Accounting",
          "Government"
        ]
      },
      "Junior High School (JHS)": {
        description: "Junior High School preparing for BECE",
        classes: ["JHS 1", "JHS 2", "JHS 3"],
        streams: ["General Curriculum"],
        defaultSubjects: [
          "English Language",
          "Mathematics",
          "Integrated Science",
          "Social Studies",
          "ICT",
          "Career Technology",
          "Creative Arts and Design"
        ]
      },
      "Primary School": {
        description: "Basic School Standards (Basic 1 - 6)",
        classes: ["Basic 1", "Basic 2", "Basic 3", "Basic 4", "Basic 5", "Basic 6"],
        streams: ["Foundation Curriculum"],
        defaultSubjects: [
          "English Language",
          "Mathematics",
          "Science",
          "Our World and Our People (OWOP)",
          "Creative Arts",
          "Computing"
        ]
      }
    }
  },

  "United Kingdom": {
    flag: "🇬🇧",
    description: "National Curriculum for England (Key Stages, GCSE & A-Levels)",
    levels: {
      "Sixth Form (A-Levels)": {
        description: "Post-16 Advanced Level General Certificate of Education",
        classes: ["Year 12 (Lower Sixth)", "Year 13 (Upper Sixth)"],
        streams: ["STEM", "Humanities", "Business & Social Sciences"],
        defaultSubjects: [
          "A-Level Mathematics",
          "A-Level Further Mathematics",
          "A-Level Physics",
          "A-Level Chemistry",
          "A-Level Biology",
          "A-Level Economics",
          "A-Level English Literature",
          "A-Level History",
          "A-Level Computer Science"
        ]
      },
      "Secondary (GCSE)": {
        description: "Key Stage 4 preparing for GCSEs (Grades 9-1)",
        classes: ["Year 10", "Year 11", "Year 9"],
        streams: ["GCSE Core & Options"],
        defaultSubjects: [
          "GCSE English Language",
          "GCSE English Literature",
          "GCSE Mathematics",
          "GCSE Combined Science",
          "GCSE Biology",
          "GCSE Chemistry",
          "GCSE Physics",
          "GCSE Geography",
          "GCSE History",
          "GCSE Computer Science"
        ]
      },
      "Primary School (KS1-2)": {
        description: "Primary Key Stages 1 and 2 (Ages 5-11)",
        classes: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Year 6"],
        streams: ["National Curriculum"],
        defaultSubjects: [
          "English (Reading & Writing)",
          "Mathematics",
          "Science",
          "History",
          "Geography",
          "Computing"
        ]
      }
    }
  },

  "United States": {
    flag: "🇺🇸",
    description: "K-12 American System (Common Core & NGSS Standards)",
    levels: {
      "High School (9-12)": {
        description: "High School Diploma, AP (Advanced Placement) & SAT prep",
        classes: ["Grade 9 (Freshman)", "Grade 10 (Sophomore)", "Grade 11 (Junior)", "Grade 12 (Senior)"],
        streams: ["College Prep / AP", "STEM", "Liberal Arts"],
        defaultSubjects: [
          "English Language Arts (ELA)",
          "Algebra I & II",
          "Geometry & Precalculus",
          "Biology with Lab",
          "Chemistry",
          "Physics",
          "United States History",
          "American Government & Civics",
          "Economics",
          "AP Computer Science Principles"
        ]
      },
      "Middle School (6-8)": {
        description: "Intermediate Grades 6 through 8",
        classes: ["Grade 6", "Grade 7", "Grade 8"],
        streams: ["Middle School Core"],
        defaultSubjects: [
          "English Language Arts",
          "Foundations of Math & Pre-Algebra",
          "Physical & Life Science",
          "World Geography & Cultures",
          "Civics & US History"
        ]
      },
      "Elementary School (K-5)": {
        description: "Primary Foundations K through 5",
        classes: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5"],
        streams: ["Elementary Core"],
        defaultSubjects: [
          "Reading & Language Arts",
          "Mathematics",
          "General Science",
          "Social Studies",
          "Art & Health"
        ]
      }
    }
  },

  Kenya: {
    flag: "🇰🇪",
    description: "Competency Based Curriculum (CBC) 2-6-3-3-3 System",
    levels: {
      "Senior Secondary": {
        description: "Grades 10-12 Pathways (STEM, Social Sciences, Arts & Sports)",
        classes: ["Grade 10", "Grade 11", "Grade 12"],
        streams: ["STEM Pathway", "Social Sciences Pathway", "Arts & Sports Pathway"],
        defaultSubjects: [
          "English Language",
          "Mathematics",
          "Kiswahili",
          "Biology",
          "Chemistry",
          "Physics",
          "History and Citizenship",
          "Geography",
          "Business Studies",
          "Computer Science"
        ]
      },
      "Junior Secondary": {
        description: "Junior Secondary (Grades 7, 8, 9) KPSEA / KJSEA",
        classes: ["Grade 7", "Grade 8", "Grade 9"],
        streams: ["Core CBC"],
        defaultSubjects: [
          "English",
          "Mathematics",
          "Kiswahili",
          "Integrated Science",
          "Social Studies",
          "Pre-Technical Studies",
          "Agriculture and Nutrition"
        ]
      },
      "Primary School": {
        description: "Lower & Upper Primary (Grades 1 - 6)",
        classes: ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"],
        streams: ["Foundational Skills"],
        defaultSubjects: [
          "English Language",
          "Mathematics Activities",
          "Kiswahili Language",
          "Science and Technology",
          "Social Studies",
          "Creative Arts"
        ]
      }
    }
  }
};


/**
 * Famous Science Experts, Pioneers & Inventors Database
 */
const SCIENCE_PIONEERS = [
  {
    "id": "isaac-newton",
    "name": "Sir Isaac Newton",
    "era": "1643 – 1727",
    "nationality": "British 🇬🇧",
    "field": "Physics & Mathematics",
    "category": "physics",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg/440px-Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg",
    "fallbackIcon": "🍎",
    "majorWork": "Philosophiae Naturalis Principia Mathematica (1687) & Opticks (1704)",
    "keyDiscoveries": [
      "Three Laws of Motion (Inertia, F = ma, Action-Reaction)",
      "Universal Law of Gravitation (F = G*m1*m2/r²)",
      "Co-invented Infinitesimal Calculus",
      "Prismatic decomposition of white light into the spectrum",
      "Invented the first practical reflecting telescope"
    ],
    "famousQuote": "If I have seen further, it is by standing on the shoulders of giants.",
    "secondaryQuote": "Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things.",
    "relevance": "Core foundation of SSS 1-3 Physics kinematics, gravity, forces, mechanics, and Mathematics calculus."
  },
  {
    "id": "albert-einstein",
    "name": "Albert Einstein",
    "era": "1879 – 1955",
    "nationality": "German / American 🇩🇪 🇺🇸",
    "field": "Theoretical Physics",
    "category": "physics",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/440px-Albert_Einstein_Head.jpg",
    "fallbackIcon": "⚡",
    "majorWork": "Special and General Theory of Relativity (1905, 1915) & Photoelectric Effect (Nobel Prize 1921)",
    "keyDiscoveries": [
      "Mass-Energy Equivalence Principle (E = mc²)",
      "Special Relativity (Constancy of the speed of light & time dilation)",
      "General Relativity (Gravitation as curvature of spacetime)",
      "Explanation of the Photoelectric Effect proving photon quantization",
      "Theory of Brownian Motion confirming atomic theory"
    ],
    "famousQuote": "Imagination is more important than knowledge. Knowledge is limited, whereas imagination embraces the entire world.",
    "secondaryQuote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    "relevance": "Foundation of modern quantum physics, light-particle duality, and nuclear energy in SSS 3 Physics."
  },
  {
    "id": "marie-curie",
    "name": "Marie Skłodowska Curie",
    "era": "1867 – 1934",
    "nationality": "Polish / French 🇵🇱 🇫🇷",
    "field": "Chemistry & Physics",
    "category": "chemistry",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.png/440px-Marie_Curie_c1920.png",
    "fallbackIcon": "🧪",
    "majorWork": "Research on Radioactivity; Discovery of Polonium and Radium; First person to win two Nobel Prizes in two different scientific fields (Physics 1903, Chemistry 1911)",
    "keyDiscoveries": [
      "Coined the term 'Radioactivity'",
      "Isolated the radioactive elements Polonium and Radium",
      "Pioneered mobile X-ray units (Little Curies) during World War I",
      "First female professor at the University of Paris (Sorbonne)"
    ],
    "famousQuote": "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    "secondaryQuote": "I was taught that the way of progress was neither swift nor easy.",
    "relevance": "Central to SSS 3 Chemistry and Physics topics on Radioactivity, half-life, nuclear reactions, and atomic structure."
  },
  {
    "id": "michael-faraday",
    "name": "Michael Faraday",
    "era": "1791 – 1867",
    "nationality": "British 🇬🇧",
    "field": "Electromagnetism & Electrochemistry",
    "category": "physics",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/M_Faraday_Th_Phillips_oil_1842.jpg/440px-M_Faraday_Th_Phillips_oil_1842.jpg",
    "fallbackIcon": "🧲",
    "majorWork": "Experimental Researches in Electricity (1831–1855)",
    "keyDiscoveries": [
      "Discovery of Electromagnetic Induction (Faraday's Law)",
      "Invented the first electric motor and electromagnetic generator (dynamo)",
      "Faraday's Two Laws of Electrolysis (m = ZIt)",
      "Discovered Benzene and invented the system of oxidation numbers",
      "Invented the Faraday Cage for electrostatic shielding"
    ],
    "famousQuote": "Nothing is too wonderful to be true if it be consistent with the laws of nature.",
    "secondaryQuote": "Work, Finish, Publish.",
    "relevance": "Directly studied in SSS 2 & 3 Physics (Current Electricity, Transformers, Electromagnetic Induction) and Chemistry (Electrolysis)."
  },
  {
    "id": "philip-emeagwali",
    "name": "Dr. Philip Emeagwali",
    "era": "1954 – Present",
    "nationality": "Nigerian 🇳🇬",
    "field": "Computer Science & Mathematics",
    "category": "computer",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Philip_Emeagwali.jpg/440px-Philip_Emeagwali.jpg",
    "fallbackIcon": "💻",
    "majorWork": "Massively Parallel Supercomputing; Gordon Bell Prize (1989)",
    "keyDiscoveries": [
      "Harnessed 65,536 microprocessors to perform 3.1 billion calculations per second",
      "Pioneered hypercube supercomputer networks inspired by the geometry of bees' honeycombs",
      "Revolutionized oil reservoir simulation, allowing petroleum geologists to track underground oil flows accurately",
      "Celebrated as a pioneer of the Internet and high-performance computing in Africa"
    ],
    "famousQuote": "The human spirit is capable of doing anything. When we dare to dream and apply science, impossible boundaries vanish.",
    "secondaryQuote": "Science is the ultimate equalizer of nations. Those who harness knowledge control their destiny.",
    "relevance": "Featured in Computer Studies (Generations of Computers, Supercomputing, Networking) and Applied Mathematics."
  },
  {
    "id": "gregor-mendel",
    "name": "Gregor Johann Mendel",
    "era": "1822 – 1884",
    "nationality": "Austrian 🇦🇹",
    "field": "Genetics & Botany",
    "category": "biology",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Gregor_Mendel_2.jpg/440px-Gregor_Mendel_2.jpg",
    "fallbackIcon": "🌱",
    "majorWork": "Experiments on Plant Hybridization (1866) — The Father of Modern Genetics",
    "keyDiscoveries": [
      "Law of Segregation (Alleles separate during gamete formation)",
      "Law of Independent Assortment (Traits inherit independently)",
      "Concept of Dominant vs. Recessive traits",
      "Statistical monohybrid (3:1) and dihybrid (9:3:3:1) phenotypic ratios in Pisum sativum"
    ],
    "famousQuote": "My scientific studies have afforded me great gratification; and I am convinced that the whole world will one day acknowledge the results of my work.",
    "secondaryQuote": "Faith and natural law are both manifestations of divine harmony.",
    "relevance": "Central to SSS 2 and SSS 3 Biology curriculum on Genetics, Heredity, Punnett Squares, and plant breeding."
  },
  {
    "id": "charles-darwin",
    "name": "Charles Darwin",
    "era": "1809 – 1882",
    "nationality": "British 🇬🇧",
    "field": "Evolutionary Biology & Natural History",
    "category": "biology",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/440px-Charles_Darwin_seated_crop.jpg",
    "fallbackIcon": "🐢",
    "majorWork": "On the Origin of Species by Means of Natural Selection (1859)",
    "keyDiscoveries": [
      "Theory of Evolution by Natural Selection (Survival of the Fittest)",
      "Universal Common Descent from ancestral lineages",
      "Observations on the Galapagos Islands finches and tortoises",
      "The Mechanism of Adaptive Radiation in nature"
    ],
    "famousQuote": "It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change.",
    "secondaryQuote": "There is grandeur in this view of life, with its several powers, having been originally breathed into a few forms or into one.",
    "relevance": "Studied in SSS 3 Biology in the module on Evolution, Natural Selection, Adaptations, and Paleontology."
  },
  {
    "id": "rosalind-franklin",
    "name": "Rosalind Franklin",
    "era": "1920 – 1958",
    "nationality": "British 🇬🇧",
    "field": "Biophysics & X-Ray Crystallography",
    "category": "biology",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Rosalind_Franklin.jpg/440px-Rosalind_Franklin.jpg",
    "fallbackIcon": "🧬",
    "majorWork": "Photo 51 and the Molecular Structure of Deoxyribonucleic Acid (DNA)",
    "keyDiscoveries": [
      "Captured Photo 51 in 1952, the critical X-ray diffraction image showing the double-helical structure of DNA",
      "Discovered the helical density, diameter, and phosphate backbone geometry of DNA",
      "Pioneered structural analysis of the Tobacco Mosaic Virus (TMV) and RNA viruses"
    ],
    "famousQuote": "Science and everyday life cannot and should not be separated.",
    "secondaryQuote": "In my view, all that is necessary for faith is the belief that by doing our best we shall come nearer to success.",
    "relevance": "Crucial for SSS 3 Biology topics on DNA, RNA, Chromosomes, Molecular Genetics, and Biotechnology."
  },
  {
    "id": "dmitri-mendeleev",
    "name": "Dmitri Ivanovich Mendeleev",
    "era": "1834 – 1907",
    "nationality": "Russian 🇷🇺",
    "field": "Inorganic Chemistry",
    "category": "chemistry",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Dmitri_Mendeleev_1890s.jpg/440px-Dmitri_Mendeleev_1890s.jpg",
    "fallbackIcon": "📊",
    "majorWork": "Principles of Chemistry (1869) & Formulation of the Periodic Table",
    "keyDiscoveries": [
      "Formulated the Periodic Law (Properties of elements are periodic functions of their atomic weights)",
      "Constructed the first comprehensive Periodic Table of Elements",
      "Accurately predicted the existence and properties of undiscovered elements (Gallium, Scandium, Germanium)"
    ],
    "famousQuote": "Work, look for peace and calm in work: you will find it nowhere else.",
    "secondaryQuote": "I began to look about and write down the elements with their atomic weights and properties, and it became clear that periodic law governs the atoms.",
    "relevance": "Central to SSS 1-3 Chemistry for Periodic Table trends, electronic configurations, and chemical properties."
  },
  {
    "id": "ada-lovelace",
    "name": "Ada Lovelace (Countess of Lovelace)",
    "era": "1815 – 1852",
    "nationality": "British 🇬🇧",
    "field": "Computer Science & Mathematics",
    "category": "computer",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/440px-Ada_Lovelace_portrait.jpg",
    "fallbackIcon": "🖥️",
    "majorWork": "Notes on Charles Babbage's Analytical Engine (1843)",
    "keyDiscoveries": [
      "Created the world's very first computer algorithm (to compute Bernoulli numbers)",
      "First person to recognize that machines could manipulate symbols beyond numbers, anticipating music, graphics, and artificial intelligence",
      "Recognized globally as the first computer programmer in human history"
    ],
    "famousQuote": "That brain of mine is something more than merely mortal; as time will show.",
    "secondaryQuote": "The Analytical Engine weaves algebraical patterns just as the Jacquard-loom weaves flowers and leaves.",
    "relevance": "Studied in Computer Studies and ICT regarding the History of Computing, Algorithm Design, and Programming Concepts."
  },
  {
    "id": "galileo-galilei",
    "name": "Galileo Galilei",
    "era": "1564 – 1642",
    "nationality": "Italian 🇮🇹",
    "field": "Astronomy & Physics",
    "category": "physics",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/440px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg",
    "fallbackIcon": "🔭",
    "majorWork": "Sidereus Nuncius (1610) & Dialogue Concerning the Two Chief World Systems (1632)",
    "keyDiscoveries": [
      "Father of Modern Observational Astronomy and Modern Experimental Physics",
      "Telescopic discovery of Jupiter's four largest moons (Galilean moons), craters on the Moon, and phases of Venus",
      "Law of Falling Bodies (All objects accelerate at the same rate in a vacuum regardless of mass)",
      "Principle of Classical Relativity and Isochronism of the Pendulum"
    ],
    "famousQuote": "Measure what can be measured, and make measurable what cannot be measured.",
    "secondaryQuote": "All truths are easy to understand once they are discovered; the point is to discover them.",
    "relevance": "Foundational in SSS 1 Physics for Free Fall under gravity, kinematics, and optics."
  },
  {
    "id": "chike-obi",
    "name": "Prof. Chike Obi",
    "era": "1921 – 2008",
    "nationality": "Nigerian 🇳🇬",
    "field": "Pure Mathematics & Theoretical Physics",
    "category": "math",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Chike_Obi.jpg/440px-Chike_Obi.jpg",
    "fallbackIcon": "♾️",
    "majorWork": "Research on Non-Linear Differential Equations; Cambridge PhD (1950); Pioneer President of the Mathematical Association of Nigeria",
    "keyDiscoveries": [
      "First Nigerian to obtain a Doctorate in Mathematics (Cambridge University, 1950)",
      "Pioneered global breakthroughs in the existence and periodicity of solutions for non-linear third-order ordinary differential equations",
      "Awarded the prestigious Sigvard Eklund Prize by the International Centre for Theoretical Physics (ICTP) in 1985",
      "Championed mathematical excellence and indigenous STEM advancement across West Africa"
    ],
    "famousQuote": "Mathematics is the mother of all sciences, the language of the cosmos, and the foundation of all industrial progress.",
    "secondaryQuote": "Work hard, think deeply, and let the beauty of truth guide your inquiries.",
    "relevance": "Inspiring pioneer for General Mathematics, Further Mathematics, and STEM students across Nigeria and Africa."
  },
  {
    "id": "louis-pasteur",
    "name": "Louis Pasteur",
    "era": "1822 – 1895",
    "nationality": "French 🇫🇷",
    "field": "Microbiology & Chemistry",
    "category": "biology",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_crop.jpg/440px-Louis_Pasteur%2C_foto_av_Paul_Nadar%2C_crop.jpg",
    "fallbackIcon": "🔬",
    "majorWork": "Germ Theory of Disease & Development of Vaccines (1860–1885)",
    "keyDiscoveries": [
      "Disproved the doctrine of Spontaneous Generation through his famous swan-neck flask experiments",
      "Invented Pasteurization to destroy harmful microorganisms in milk and liquids",
      "Developed the first effective vaccines against Rabies and Anthrax",
      "Discovered molecular chirality and optical isomerism in tartaric acid crystals"
    ],
    "famousQuote": "In the fields of observation, chance favors only the prepared mind.",
    "secondaryQuote": "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
    "relevance": "Crucial for SSS 1 & 2 Biology (Microorganisms, Health and Diseases, Food Preservation) and Chemistry (Stereochemistry)."
  },
  {
    "id": "antoine-lavoisier",
    "name": "Antoine Lavoisier",
    "era": "1743 – 1794",
    "nationality": "French 🇫🇷",
    "field": "Chemistry & Stoichiometry",
    "category": "chemistry",
    "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/David_-_Portrait_of_Monsieur_de_Lavoisier_and_His_Wife_crop.jpg/440px-David_-_Portrait_of_Monsieur_de_Lavoisier_and_His_Wife_crop.jpg",
    "fallbackIcon": "⚖️",
    "majorWork": "Elements of Chemistry (1789) — The Father of Modern Chemistry",
    "keyDiscoveries": [
      "Formulated the Law of Conservation of Mass in chemical reactions ('Nothing is created, nothing is lost, everything is transformed')",
      "Identified and named Oxygen (1778) and Hydrogen (1783)",
      "Overthrew the Phlogiston theory by demonstrating the role of oxygen in combustion and respiration",
      "Helped construct the modern metric system and chemical nomenclature"
    ],
    "famousQuote": "Nothing is lost, nothing is created, everything is transformed.",
    "secondaryQuote": "The human mind cannot make any step in the pursuit of truth without experiencing the necessity of combining observation with reason.",
    "relevance": "Central to SSS 1 & 2 Chemistry for Stoichiometry, balancing chemical equations, and combustion reactions."
  }
];

/**
 * Rich Subject Catalog with All-Year (3-Term) Lesson Notes,
 * Worked Examples, Assignments, and CBT Quizzes.
 */
const SUBJECT_CATALOG = {
  "English Language": {
    "icon": "📚",
    "category": "core",
    "description": "Master vocabulary, lexis & structure, oral English, comprehension, essay writing, and summary skills across all 3 terms for WAEC/NECO/JAMB.",
    "topics": {
      "SSS 1": [
        {
          "id": "eng-sss1-t1-1",
          "title": "Parts of Speech & Grammatical Functions in Context",
          "term": "First Term • Week 1-3",
          "readTime": "8 min read",
          "objectives": [
            "Distinguish between open classes (nouns, verbs, adjectives, adverbs) and closed classes.",
            "Analyze the grammatical functions of words in sentence contexts.",
            "Identify tricky noun phrase modifiers and possessives.",
            "Apply lexical principles to eliminate grammatical ambiguities."
          ],
          "notes": "\n### 1. The Eight Parts of Speech\nIn English grammar, words function syntactically in eight major categories:\n1. **Nouns:** Naming words (Proper, Common, Abstract, Collective, Concrete).\n2. **Pronouns:** Replacements for nouns (Personal, Relative, Demonstrative, Indefinite, Reflexive).\n3. **Verbs:** Action or state-of-being words (Transitive, Intransitive, Auxiliary, Modal).\n4. **Adjectives:** Noun modifiers answering *which*, *what kind*, or *how many*.\n5. **Adverbs:** Modifiers of verbs, adjectives, or other adverbs (Time, Place, Manner, Degree).\n6. **Prepositions:** Relational words showing location, direction, or time (*in, through, upon*).\n7. **Conjunctions:** Connectives of clauses or words (Coordinating: FANBOYS, Subordinating).\n8. **Interjections:** Expressive exclamations (*Alas!, Eureka!*).\n\n### 2. Open vs. Closed Word Classes\n* **Open Classes:** Readily welcome new words (Nouns, Verbs, Adjectives, Adverbs).\n* **Closed Classes:** Fixed structural categories that rarely admit additions (Prepositions, Determiners, Pronouns, Conjunctions).\n          ",
          "summary": [
            "Open classes carry lexical meaning; closed classes provide structural glue.",
            "A word's part of speech depends on its syntactic function in a specific sentence.",
            "Beware of words that function as multiple parts of speech (e.g., 'fast' as noun, verb, adjective, adverb)."
          ],
          "flashcards": [
            {
              "q": "What is an open class of words?",
              "a": "A category that readily accepts new words, including Nouns, Verbs, Adjectives, and Adverbs."
            },
            {
              "q": "Identify the word class of 'fast' in 'He runs fast':",
              "a": "Adverb of manner modifying the verb 'runs'."
            }
          ],
          "assignment": {
            "title": "Lexical & Word Class Exercise",
            "instructions": "Identify word classes and justify your choices.",
            "tasks": [
              "Identify the word classes of 'round' in: a) 'A round ball', b) 'Come round the house', c) 'We round up our work'.",
              "Write two sentences showing 'before' as a preposition and as a conjunction."
            ],
            "sampleAnswer": "1. a) Adjective, b) Preposition, c) Verb.\n2. Preposition: 'He arrived before noon.' Conjunction: 'Wash your hands before you eat.'",
            "rubric": "10 marks. 5 pts each with clear syntactic justification."
          },
          "quiz": [
            {
              "question": "Choose the word class of 'under' in: 'The boat sailed under the bridge.'",
              "options": [
                "Adverb",
                "Preposition",
                "Conjunction",
                "Adjective"
              ],
              "answer": 1,
              "explanation": "'under' shows the spatial relationship between the boat and bridge, acting as a preposition."
            },
            {
              "question": "Which of the following belongs to a closed word class?",
              "options": [
                "Microscope",
                "Quickly",
                "Although",
                "Analyze"
              ],
              "answer": 2,
              "explanation": "'Although' is a subordinating conjunction, which belongs to a closed grammatical class."
            },
            {
              "question": "In 'The committee has submitted its report', the singular verb 'has' and pronoun 'its' indicate:",
              "options": [
                "The members acted individually",
                "The committee acted as a single unified unit",
                "Grammatical error",
                "Plural agreement"
              ],
              "answer": 1,
              "explanation": "Collective nouns take singular verbs when considered as one unified body."
            },
            {
              "question": "Which sentence contains a transitive verb?",
              "options": [
                "The baby slept peacefully.",
                "The bird flew away.",
                "Chidi kicked the football.",
                "She laughed loudly."
              ],
              "answer": 2,
              "explanation": "'kicked' is transitive because it transfers action directly to the direct object 'the football'."
            }
          ]
        },
        {
          "id": "eng-sss1-t1-2",
          "title": "Vowel Sounds: Monophthongs, Diphthongs & Word Stress",
          "term": "First Term • Week 4-6",
          "readTime": "9 min read",
          "objectives": [
            "Differentiate between 12 pure monophthongs (7 short, 5 long) and 8 gliding diphthongs.",
            "Apply two-syllable noun vs. verb stress shift rules.",
            "Identify suffixes that determine penultimate and antepenultimate stress.",
            "Master WAEC oral English phonetic transcription questions."
          ],
          "notes": "\n### 1. The 20 English Vowel Phonemes\n* **12 Monophthongs (Pure Vowels):**\n  - **7 Short vowels:** /ɪ/ (bit), /e/ (bed), /æ/ (cat), /ɒ/ (pot), /ʊ/ (put), /ʌ/ (cup), /ə/ (schwa: about).\n  - **5 Long vowels:** /iː/ (seat), /ɑː/ (father), /ɔː/ (port), /uː/ (fool), /ɜː/ (bird).\n* **8 Diphthongs (Gliding Vowels):**\n  - Centring: /ɪə/ (ear), /eə/ (hair), /ʊə/ (tour).\n  - Closing: /eɪ/ (day), /aɪ/ (my), /ɔɪ/ (boy), /əʊ/ (go), /aʊ/ (now).\n\n### 2. Syllable Stress Principles\n* **Noun vs. Verb rule (Two-syllable words):**\n  - Nouns stressed on 1st syllable: `PRE-sent`, `RE-cord`, `EX-port`.\n  - Verbs stressed on 2nd syllable: `pre-SENT`, `re-CORD`, `ex-PORT`.\n* **Suffixes putting stress on Penultimate syllable (2nd from last):**\n  - Words ending in *-tion, -sion, -ic*: `edu-CA-tion`, `geo-GRA-phic`.\n          ",
          "summary": [
            "20 vowels: 12 pure monophthongs (5 long, 7 short) and 8 diphthongs.",
            "Nouns typically take stress on the 1st syllable; verbs on the 2nd syllable.",
            "-tion/-sion/-ic suffixes shift stress to the penultimate syllable."
          ],
          "flashcards": [
            {
              "q": "What is the schwa sound?",
              "a": "/ə/ - the most common neutral unstressed vowel in English (e.g. *a*bout)."
            },
            {
              "q": "Where does stress fall in 'geographic'?",
              "a": "On the penultimate syllable: geo-GRAPH-ic."
            }
          ],
          "assignment": {
            "title": "Oral English Phonetic Exercise",
            "instructions": "Identify vowel sounds and stressed syllables.",
            "tasks": [
              "Group words under /iː/ vs /ɪ/: receipt, pin, leap, fill, machine, myth.",
              "Capitalize the stressed syllable: photographic, examination, import (verb), import (noun)."
            ],
            "sampleAnswer": "1. /iː/: receipt, leap, machine. /ɪ/: pin, fill, myth.\n2. photo-GRAPH-ic, exami-NA-tion, im-PORT, IM-port.",
            "rubric": "10 marks. 5 pts for phoneme grouping, 5 pts for syllable stress."
          },
          "quiz": [
            {
              "question": "Which of the following words contains the long vowel sound /ɜː/?",
              "options": [
                "heart",
                "work",
                "dark",
                "warm"
              ],
              "answer": 1,
              "explanation": "'work' contains /ɜː/ (/wɜːk/). 'heart' has /ɑː/, 'warm' has /ɔː/."
            },
            {
              "question": "Choose the word with primary stress on the FIRST syllable:",
              "options": [
                "Import (verb)",
                "Export (noun)",
                "Resign (verb)",
                "Contempt (noun)"
              ],
              "answer": 1,
              "explanation": "Two-syllable nouns like 'EX-port' carry primary stress on the first syllable."
            },
            {
              "question": "The vowel sound in 'plait' is:",
              "options": [
                "/eɪ/",
                "/æ/",
                "/e/",
                "/aɪ/"
              ],
              "answer": 1,
              "explanation": "In standard British/WAEC English, 'plait' is pronounced /plæt/ with the short /æ/ sound as in cat."
            },
            {
              "question": "In the word 'electricity', primary stress falls on:",
              "options": [
                "First",
                "Second",
                "Third (TRI)",
                "Fourth"
              ],
              "answer": 2,
              "explanation": "Suffix '-ity' places stress on the antepenultimate syllable: e-lec-TRI-ci-ty."
            }
          ]
        },
        {
          "id": "eng-sss1-t2-1",
          "title": "Rules of Grammatical Concord & Subject-Verb Agreement",
          "term": "Second Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Master core subject-verb concord rules in complex sentence patterns.",
            "Apply the principle of proximity to correlative conjunctions (either...or, neither...nor).",
            "Handle intervening parenthetical phrases and indefinite pronouns.",
            "Eliminate concord errors in WAEC essay and lexis sections."
          ],
          "notes": "\n### 1. Fundamental Concord Rule\nA singular subject takes a singular verb; a plural subject takes a plural verb.\n* *Example:* \"The boy **runs**\" vs. \"The boys **run**\".\n\n### 2. Tricky Special Concord Rules\n1. **Rule of Proximity (Either...or / Neither...nor):**\n   The verb agrees with the closer subject:\n   - \"Neither the teacher nor the students **were** present.\"\n   - \"Neither the students nor the teacher **was** present.\"\n2. **Intervening Parenthetical Expressions:**\n   Phrases like *together with, along with, as well as, accompanied by, in addition to* do NOT change the number of the main subject:\n   - \"The Governor, together with his commissioners, **was** (not *were*) commended.\"\n3. **Indefinite Pronouns:**\n   *Everyone, somebody, nobody, each, either, neither* always take singular verbs:\n   - \"Each of the candidates **has** (not *have*) an examination slip.\"\n4. **Plural Forms with Singular Meaning:**\n   Subjects like *Mathematics, Physics, Civics, News, Measles* take singular verbs:\n   - \"Mathematics **is** my favorite subject.\"\n          ",
          "summary": [
            "Concord requires strict subject-verb agreement.",
            "Parenthetical phrases like 'as well as' and 'together with' do not change the subject's grammatical number.",
            "In either/or and neither/nor, the verb agrees with the closest subject."
          ],
          "flashcards": [
            {
              "q": "What verb does 'Each of the boys' take?",
              "a": "Singular verb ('has', 'is', 'plays')."
            },
            {
              "q": "Correct: 'The captain as well as his crew were praised.'",
              "a": "'The captain as well as his crew WAS praised' (singular head subject 'captain')."
            }
          ],
          "assignment": {
            "title": "Grammatical Concord Correction",
            "instructions": "Identify and correct concord errors in each sentence.",
            "tasks": [
              "'One of the girls who participates in the debate are sick.' Correct and explain.",
              "'Neither the manager nor his assistants was available.' Correct and explain.",
              "'Bread and butter are his favorite breakfast.' Correct or justify."
            ],
            "sampleAnswer": "1. 'One of the girls who PARTICIPATE in the debate IS sick.' (Relative clause agrees with plural 'girls'; main verb agrees with 'One').\n2. 'Neither the manager nor his assistants WERE available.' (Proximity rule: 'assistants' is plural).\n3. 'Bread and butter IS his favorite breakfast' (Single conceptual dish/unit).",
            "rubric": "10 marks. 3-4 pts each with clear grammatical justifications."
          },
          "quiz": [
            {
              "question": "Neither the principal nor the teachers _____ in attendance yesterday.",
              "options": [
                "was",
                "were",
                "is",
                "has been"
              ],
              "answer": 1,
              "explanation": "Rule of proximity: 'teachers' is plural and closest to the verb, so 'were' is correct."
            },
            {
              "question": "The director, accompanied by his deputies, _____ arrived at the venue.",
              "options": [
                "have",
                "has",
                "are",
                "were"
              ],
              "answer": 1,
              "explanation": "'accompanied by' is parenthetical; the subject 'director' is singular, requiring 'has'."
            },
            {
              "question": "Ten kilometers _____ a long distance to walk.",
              "options": [
                "are",
                "is",
                "were",
                "have been"
              ],
              "answer": 1,
              "explanation": "Measurements of distance, time, and money are treated as single collective quantities."
            },
            {
              "question": "Each of the participants _____ given a certificate of merit.",
              "options": [
                "was",
                "were",
                "are",
                "have been"
              ],
              "answer": 0,
              "explanation": "'Each' is an indefinite pronoun requiring a singular verb ('was')."
            }
          ]
        },
        {
          "id": "eng-sss1-t2-2",
          "title": "Summary Writing & Reading Comprehension Strategies",
          "term": "Second Term • Week 4-6",
          "readTime": "9 min read",
          "objectives": [
            "Distinguish between main ideas (topic sentences) and supporting illustrations.",
            "Apply skimming and scanning techniques for reading comprehension passages.",
            "Write concise summary sentences strictly using own words without lifting.",
            "Avoid common WAEC summary pitfalls (preambles, grammatical slips, irrelevant details)."
          ],
          "notes": "\n### 1. Reading Comprehension Techniques\n* **Skimming:** Rapid reading of headers, first and last sentences to grasp the overarching theme.\n* **Scanning:** Looking specifically for key dates, names, figures, and definitions.\n* **Inferential Analysis:** Answering questions where answers are implied rather than stated verbatim.\n\n### 2. Summary Writing Golden Rules for WAEC / NECO\n1. **Identify the Core Point:** Strip away adjectives, adverbs, anecdotes, quotations, and statistical figures.\n2. **Avoid Mindless Lifting:** Rephrase the author's ideas in your own clear, grammatically sound English. Lifting verbatim incurs severe mark deductions.\n3. **Use Complete Sentences:** In WAEC, summary answers MUST be written in full, standalone grammatical sentences. Fragments lose half-marks.\n4. **Answer the Exact Question:** If asked for \"three reasons why...\", ensure each point states a clear reason.\n          ",
          "summary": [
            "Comprehension tests vocabulary in context and inferential reasoning.",
            "Summary requires identifying main points and expressing them in your own concise sentences.",
            "Never copy sentences verbatim from the passage in summary questions."
          ],
          "flashcards": [
            {
              "q": "What is the penalty for lifting in WAEC summary?",
              "a": "Substantial loss of marks for lack of original expression."
            },
            {
              "q": "Must summary answers be written in full sentences?",
              "a": "Yes, incomplete sentence fragments are penalized."
            }
          ],
          "assignment": {
            "title": "Summary Writing Practical",
            "instructions": "Summarize a 3-paragraph text into three concise sentences.",
            "tasks": [
              "Extract the three main causes of traffic congestion in metropolitan cities without copying passage text.",
              "Ensure each sentence begins with an active subject and finite verb."
            ],
            "sampleAnswer": "1. Poor road maintenance and potholes impede vehicular movement.\n2. Inadequate public mass transit forces too many private vehicles onto roadways.\n3. Reckless commercial driving and street trading block designated traffic lanes.",
            "rubric": "10 marks. 3 pts per sentence for grammatical correctness and independent phrasing."
          },
          "quiz": [
            {
              "question": "In WAEC summary writing, copying sentences word-for-word from the passage results in:",
              "options": [
                "Full marks for accuracy",
                "Severe penalties for verbatim lifting",
                "Bonus marks for loyalty to author",
                "Exemption from grammar checks"
              ],
              "answer": 1,
              "explanation": "Verbatim copying (lifting) is heavily penalized in WAEC/NECO summary marking schemes."
            },
            {
              "question": "What is the primary objective of skimming a comprehension passage?",
              "options": [
                "Memorizing every detail",
                "Getting the general overview and central theme quickly",
                "Checking for spelling errors",
                "Counting word length"
              ],
              "answer": 1,
              "explanation": "Skimming gives a fast, high-level grasp of the main topic and structure."
            },
            {
              "question": "Summary answers in WAEC must be presented in:",
              "options": [
                "Incomplete bullet points",
                "Complete grammatical sentences",
                "Single word keywords",
                "Lengthy paragraphs"
              ],
              "answer": 1,
              "explanation": "WAEC requires full, standalone sentences for each summary point."
            },
            {
              "question": "Which of the following should be EXCLUDED from a summary answer?",
              "options": [
                "The main argument",
                "Supporting anecdotes, examples, and rhetorical questions",
                "The primary subject",
                "The key conclusion"
              ],
              "answer": 1,
              "explanation": "Examples, anecdotes, and illustrations must be discarded in summaries."
            }
          ]
        },
        {
          "id": "eng-sss1-t3-1",
          "title": "Formal, Informal Letters & Argumentative Writing",
          "term": "Third Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Structure formal letters (two addresses, formal salutation, title, formal complimentary close).",
            "Structure informal letters (one address, conversational tone, personal close).",
            "Write persuasive argumentative essays stating clear claims and refuting counterarguments.",
            "Adhere to WAEC criteria for Content, Organization, Expression, and Mechanical Accuracy."
          ],
          "notes": "\n### 1. Letter Writing Formats\n* **Formal Letter:**\n  - **Two Addresses:** Sender's address on top right (with date); Receiver's address on left.\n  - **Salutation:** *Dear Sir* or *Dear Madam*.\n  - **Heading / Title:** Capitalized or underlined in Title Case.\n  - **Tone:** Objective, respectful, concise, no slang or contractions (*cannot*, not *can't*).\n  - **Complimentary Close:** *Yours faithfully,* followed by signature and full name.\n* **Informal Letter:**\n  - **One Address:** Sender's address on top right with date.\n  - **Salutation:** *Dear Tunde*, *Dearest Mother*.\n  - **Tone:** Warm, conversational, contractions permitted (*I'm, don't*).\n  - **Close:** *Yours affectionately,* *Your friend,*.\n\n### 2. The Four WAEC Continuous Writing Marking Criteria\n1. **Content (10 Marks):** Relevance to the topic, completeness of points.\n2. **Organization (10 Marks):** Paragraphing, logical sequencing, intro and conclusion.\n3. **Expression (20 Marks):** Vocabulary variety, sentence rhythm, avoidance of cliché.\n4. **Mechanical Accuracy (10 Marks):** Spelling, punctuation, capitalization, grammatical errors.\n          ",
          "summary": [
            "Formal letters require two addresses, title, and 'Yours faithfully'; informal letters require one address and personal tone.",
            "Essays are graded on Content (10), Organization (10), Expression (20), and Mechanical Accuracy (10) for 50 marks total.",
            "Avoid contractions and colloquialisms in formal writing."
          ],
          "flashcards": [
            {
              "q": "How many addresses does a formal letter have?",
              "a": "Two: the writer's address and the recipient's official address."
            },
            {
              "q": "What complimentary close is used with 'Dear Sir'?",
              "a": "'Yours faithfully,'."
            },
            {
              "q": "What four areas are evaluated in WAEC essays?",
              "a": "Content, Organization, Expression, and Mechanical Accuracy."
            }
          ],
          "assignment": {
            "title": "Formal Letter Writing Task",
            "instructions": "Write a letter to the Chairman of your Local Government Area.",
            "tasks": [
              "Format the two addresses, date, salutation, title, body, and complimentary close correctly.",
              "Detail three urgent infrastructural improvements needed in your community school."
            ],
            "sampleAnswer": "Includes writer's address top right, LGA Chairman's address left, 'Dear Sir,', Title: 'URGENT NEED FOR INFRASTRUCTURAL IMPROVEMENTS IN COMMUNITY SECONDARY SCHOOL', 3 detailed body paragraphs, and 'Yours faithfully, [Signature] Full Name'.",
            "rubric": "10 marks. 3 pts for layout/format, 4 pts for content and vocabulary, 3 pts for mechanical accuracy."
          },
          "quiz": [
            {
              "question": "Which complimentary close is paired with 'Dear Sir' in a formal business letter?",
              "options": [
                "Yours sincerely,",
                "Yours faithfully,",
                "Your friend,",
                "Best regards,"
              ],
              "answer": 1,
              "explanation": "When addressing an unnamed recipient as 'Dear Sir/Madam', use 'Yours faithfully,'."
            },
            {
              "question": "Contractions like 'don't' and 'can't' are strictly DISALLOWED in:",
              "options": [
                "Informal letters",
                "Formal letters and official reports",
                "Diary entries",
                "Friendly postcards"
              ],
              "answer": 1,
              "explanation": "Formal writing requires full grammatical forms (do not, cannot) without contractions."
            },
            {
              "question": "In the WAEC essay marking scheme, which category carries the highest weight (20 marks)?",
              "options": [
                "Content",
                "Organization",
                "Expression",
                "Mechanical Accuracy"
              ],
              "answer": 2,
              "explanation": "Expression carries 20 out of 50 marks, evaluating vocabulary and sentence variety."
            },
            {
              "question": "How many addresses are featured on an informal letter to a cousin?",
              "options": [
                "One (the writer's address)",
                "Two",
                "Three",
                "None"
              ],
              "answer": 0,
              "explanation": "An informal letter requires only the writer's address in the top right-hand corner."
            }
          ]
        },
        {
          "id": "eng-sss1-t3-2",
          "title": "Oral English: Intonation, Rhyme & Emphatic Stress",
          "term": "Third Term • Week 4-6",
          "readTime": "9 min read",
          "objectives": [
            "Distinguish between Falling Tune (statements, commands) and Rising Tune (yes/no questions).",
            "Identify rhyming words based on phonetic sounds, not spelling.",
            "Analyze emphatic stress to determine implied contrastive meaning.",
            "Score high in WAEC Test of Orals Paper 3."
          ],
          "notes": "\n### 1. English Intonation Patterns\n* **Falling Tune (↘):**\n  - Declarative statements: \"She has gone to school. ↘\"\n  - Wh-questions: \"Where are you going? ↘\"\n  - Commands: \"Close the door. ↘\"\n* **Rising Tune (↗):**\n  - Polar (Yes/No) questions: \"Are you coming today? ↗\"\n  - Requests: \"Could you pass the salt, please? ↗\"\n  - Listing items (rises until the final item which falls): \"Apples ↗, oranges ↗, and bananas. ↘\"\n\n### 2. Emphatic Stress & Contrastive Meaning\nIn WAEC oral tests, a capitalized word carries emphatic contrastive stress:\n* *\"BOLA bought the red car.\"* $\\implies$ Who bought the car? (Not Chidi, but Bola).\n* *\"Bola BOUGHT the red car.\"* $\\implies$ Did she steal it? (No, she purchased it).\n* *\"Bola bought the RED car.\"* $\\implies$ Which car? (Not the blue car, but the red one).\n* *\"Bola bought the red CAR.\"* $\\implies$ What did she buy? (Not a motorcycle, but a car).\n\n### 3. Rhymes\nWords rhyme when they share the exact same terminal vowel and consonant sounds:\n* *bough* rhymes with *plough* (/aʊ/).\n* *doubt* rhymes with *shout* (/aʊt/).\n          ",
          "summary": [
            "Falling intonation is used for statements, wh-questions, and commands.",
            "Rising intonation is used for Yes/No questions and polite requests.",
            "Emphatic stress highlights contrastive meaning contradicting false assumptions.",
            "Rhyme depends strictly on phonemes, not orthography (spelling)."
          ],
          "flashcards": [
            {
              "q": "What intonation tune is used for 'Did you eat breakfast?'",
              "a": "Rising tune (Yes/No question)."
            },
            {
              "q": "In 'ALI passed the exam', what question does this answer?",
              "a": "Did Musa pass the exam? (No, Ali did)."
            },
            {
              "q": "Does 'cough' rhyme with 'rough'?",
              "a": "No: 'cough' is /kɒf/ and 'rough' is /rʌf/."
            }
          ],
          "assignment": {
            "title": "Emphatic Stress & Intonation Analysis",
            "instructions": "Identify intonation tunes and explain contrastive stress.",
            "tasks": [
              "Indicate falling or rising intonation for: a) 'Where do you live?', b) 'Are you ready?', c) 'Stand up immediately!'",
              "Given: 'Musa travelled to ABUJA by train.' State the question that contradicts the emphasized word."
            ],
            "sampleAnswer": "1. a) Falling (wh-question), b) Rising (yes/no question), c) Falling (command).\n2. Question: Did Musa travel to Lagos by train? Answer: No, Musa travelled to ABUJA by train.",
            "rubric": "10 marks. 5 pts for intonation tunes, 5 pts for emphatic contrast formulation."
          },
          "quiz": [
            {
              "question": "Which sentence takes a RISING intonation tune?",
              "options": [
                "What is your name?",
                "Have you seen my keys?",
                "Shut the window.",
                "He lives in Ibadan."
              ],
              "answer": 1,
              "explanation": "Polar Yes/No questions take a rising intonation tune."
            },
            {
              "question": "In 'CHIDI washed the car', which question does the sentence answer?",
              "options": [
                "What did Chidi wash?",
                "Did Emeka wash the car?",
                "Did Chidi paint the car?",
                "Where is the car?"
              ],
              "answer": 1,
              "explanation": "Emphasizing CHIDI contradicts the assumption that someone else (e.g. Emeka) washed the car."
            },
            {
              "question": "Which of the following pairs of words RHYMES?",
              "options": [
                "bough / rough",
                "suite / sweet",
                "tomb / comb",
                "sew / few"
              ],
              "answer": 1,
              "explanation": "'suite' and 'sweet' are homophones both pronounced /swiːt/."
            },
            {
              "question": "Wh-questions (who, what, where, when, why) typically end with a:",
              "options": [
                "Falling tune",
                "Rising tune",
                "Monotone pitch",
                "Whistle"
              ],
              "answer": 0,
              "explanation": "Information-seeking wh-questions in English conclude with a falling intonation tune."
            }
          ]
        }
      ]
    }
  },
  "General Mathematics": {
    "icon": "📐",
    "category": "core",
    "description": "Full all-year senior secondary syllabus: Number bases, logarithms, quadratic equations, trigonometry, geometry, statistics & probability.",
    "topics": {
      "SSS 1": [
        {
          "id": "math-sss1-t1-1",
          "title": "Indices & Logarithms: Fundamental Laws & Exponential Equations",
          "term": "First Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Apply all laws of indices including negative and fractional exponents.",
            "Convert numbers between index and logarithmic forms.",
            "Use logarithmic laws to solve exponential equations.",
            "Evaluate numbers using characteristics and mantissas."
          ],
          "notes": "\n### 1. Fundamental Laws of Indices\nFor any positive real base $a$ and real powers $m, n$:\n1. $a^m \\times a^n = a^{m+n}$\n2. $a^m \\div a^n = a^{m-n}$\n3. $(a^m)^n = a^{mn}$\n4. $a^0 = 1 \\quad (a \\neq 0)$\n5. $a^{-n} = \\frac{1}{a^n}$\n6. $a^{m/n} = \\sqrt[n]{a^m} = (\\sqrt[n]{a})^m$\n\n### 2. Logarithm Laws & Identities\nIf $y = a^x$, then $\\log_a y = x$ (where $a > 0$ and $a \\neq 1$).\n* **Product Law:** $\\log_a (xy) = \\log_a x + \\log_a y$\n* **Quotient Law:** $\\log_a (x/y) = \\log_a x - \\log_a y$\n* **Power Law:** $\\log_a (x^k) = k \\log_a x$\n* **Base Change:** $\\log_b x = \\frac{\\log_a x}{\\log_a b}$\n\n### 3. Worked WAEC Example\nSolve: $2^{2x+1} - 9(2^x) + 4 = 0$\n* Let $u = 2^x$. Note that $2^{2x+1} = 2(2^x)^2 = 2u^2$.\n* $2u^2 - 9u + 4 = 0 \\implies (2u - 1)(u - 4) = 0$\n* $u = 1/2 \\implies 2^x = 2^{-1} \\implies x = -1$\n* $u = 4 \\implies 2^x = 2^2 \\implies x = 2$\n* **Solutions:** $x = -1$ or $x = 2$.\n          ",
          "summary": [
            "Indices rules: multiplication adds powers; division subtracts powers; fractional power denotes roots.",
            "Logarithms are inverse operations of exponents: log_a(y) = x <=> a^x = y.",
            "Substitute u = a^x to reduce complex exponential equations to standard quadratics."
          ],
          "flashcards": [
            {
              "q": "What is 16^(-3/4)?",
              "a": "1 / (16^(3/4)) = 1 / ((2^4)^(3/4)) = 1 / (2^3) = 1/8."
            },
            {
              "q": "What is log_10(0.001)?",
              "a": "-3, because 10^(-3) = 0.001."
            },
            {
              "q": "What is the change of base formula?",
              "a": "log_b(x) = log_a(x) / log_a(b)."
            }
          ],
          "assignment": {
            "title": "Indices & Logarithms Homework Set",
            "instructions": "Show full mathematical steps without skipping operations.",
            "tasks": [
              "Simplify: (81/16)^(-3/4) * (25/9)^(1/2).",
              "Solve for x: 3^(2x - 1) = 27^(x - 2).",
              "Evaluate log_2(64) - log_3(1/81) + log_10(100)."
            ],
            "sampleAnswer": "1. 40/81.\n2. 3^(2x-1) = 3^(3x-6) => 2x - 1 = 3x - 6 => x = 5.\n3. 6 - (-4) + 2 = 12.",
            "rubric": "10 marks total. Accurate exponent manipulation and correct algebraic working."
          },
          "quiz": [
            {
              "question": "Evaluate (64)^(-2/3):",
              "options": [
                "1/16",
                "1/4",
                "16",
                "-16"
              ],
              "answer": 0,
              "explanation": "64^(-2/3) = 1 / (64^(2/3)) = 1 / ((4^3)^(2/3)) = 1 / (4^2) = 1/16."
            },
            {
              "question": "If log_10(2) = 0.3010 and log_10(3) = 0.4771, find log_10(18):",
              "options": [
                "0.7781",
                "1.2552",
                "1.1091",
                "0.9542"
              ],
              "answer": 1,
              "explanation": "18 = 2 * 3^2. log(18) = log(2) + 2*log(3) = 0.3010 + 2(0.4771) = 1.2552."
            },
            {
              "question": "Solve for x: 5^(x+1) = 125:",
              "options": [
                "x = 1",
                "x = 2",
                "x = 3",
                "x = 4"
              ],
              "answer": 1,
              "explanation": "125 = 5^3. Therefore 5^(x+1) = 5^3 => x + 1 = 3 => x = 2."
            },
            {
              "question": "Simplify log_a(x^3) - 2 log_a(x):",
              "options": [
                "log_a(x)",
                "log_a(x^5)",
                "1",
                "3/2"
              ],
              "answer": 0,
              "explanation": "log_a(x^3) - log_a(x^2) = log_a(x^3 / x^2) = log_a(x)."
            }
          ]
        },
        {
          "id": "math-sss1-t1-2",
          "title": "Quadratic Equations: Factorization, Completing Square & Formula",
          "term": "First Term • Week 4-6",
          "readTime": "11 min read",
          "objectives": [
            "Derive the quadratic formula by completing the square.",
            "Solve equations by factorization, completing the square, and quadratic formula.",
            "Analyze the discriminant (D = b² - 4ac) to determine the nature of roots.",
            "Form quadratic equations given roots or their sum and product."
          ],
          "notes": "\n### 1. General Quadratic Form\nA quadratic equation in variable $x$ has the standard form:\n$$ax^2 + bx + c = 0 \\quad (a \\neq 0)$$\n\n### 2. The Quadratic Formula\n$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\n### 3. The Discriminant ($D = b^2 - 4ac$)\n* If $D > 0$: Two distinct real roots (rational if $D$ is a perfect square; irrational if not).\n* If $D = 0$: One repeated / equal real root ($x = -b/2a$).\n* If $D < 0$: No real roots (complex conjugate roots).\n\n### 4. Sum & Product of Roots\nLet roots be $\\alpha$ and $\\beta$:\n* $\\alpha + \\beta = -b/a$\n* $\\alpha \\beta = c/a$\n* Reconstructed equation: $x^2 - (\\alpha + \\beta)x + (\\alpha \\beta) = 0$\n          ",
          "summary": [
            "Formula: x = (-b ± √(b² - 4ac)) / (2a).",
            "Discriminant determines root nature: >0 (two real), =0 (equal), <0 (complex).",
            "Sum of roots = -b/a, Product = c/a."
          ],
          "flashcards": [
            {
              "q": "What is the discriminant of ax² + bx + c = 0?",
              "a": "b² - 4ac."
            },
            {
              "q": "What does b² - 4ac = 0 indicate?",
              "a": "The equation has real and equal roots."
            },
            {
              "q": "If roots are 4 and -3, what is the equation?",
              "a": "x² - (4 + (-3))x + (4*-3) = x² - x - 12 = 0."
            }
          ],
          "assignment": {
            "title": "Quadratic Equations Problem Set",
            "instructions": "Solve all questions showing step-by-step working.",
            "tasks": [
              "Solve 2x² - 7x + 3 = 0 using the quadratic formula.",
              "Find the values of k for which x² + (k - 2)x + 9 = 0 has equal roots.",
              "If α and β are roots of 3x² + 5x - 2 = 0, find α² + β²."
            ],
            "sampleAnswer": "1. x = 3 or x = 1/2.\n2. (k-2)² - 4(1)(9) = 0 => (k-2)² = 36 => k = 8 or k = -4.\n3. α² + β² = (α+β)² - 2αβ = (-5/3)² - 2(-2/3) = 25/9 + 4/3 = 37/9.",
            "rubric": "10 marks. 3 pts for #1, 3 pts for #2, 4 pts for #3."
          },
          "quiz": [
            {
              "question": "What is the discriminant of 3x² - 5x + 2 = 0?",
              "options": [
                "1",
                "49",
                "-1",
                "0"
              ],
              "answer": 0,
              "explanation": "b² - 4ac = (-5)² - 4(3)(2) = 25 - 24 = 1."
            },
            {
              "question": "The roots of 4x² - 12x + 9 = 0 are:",
              "options": [
                "Real and distinct",
                "Real and equal",
                "Imaginary",
                "Irrational"
              ],
              "answer": 1,
              "explanation": "D = (-12)² - 4(4)(9) = 144 - 144 = 0 => roots are real and equal."
            },
            {
              "question": "If α and β are roots of 2x² + 6x - 7 = 0, find α + β:",
              "options": [
                "-3",
                "3",
                "-7/2",
                "7/2"
              ],
              "answer": 0,
              "explanation": "Sum of roots α + β = -b/a = -6/2 = -3."
            },
            {
              "question": "Solve x² - 25 = 0:",
              "options": [
                "x = 5",
                "x = -5",
                "x = ±5",
                "x = 25"
              ],
              "answer": 2,
              "explanation": "x² = 25 => x = ±5."
            }
          ]
        },
        {
          "id": "math-sss1-t2-1",
          "title": "Simultaneous Equations: Linear & Quadratic Systems",
          "term": "Second Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Solve pairs of simultaneous linear equations using elimination and substitution.",
            "Solve systems consisting of one linear and one quadratic equation.",
            "Interpret simultaneous equations geometrically as points of intersection.",
            "Apply simultaneous equations to real-life word problems."
          ],
          "notes": "\n### 1. Methods for Simultaneous Linear Equations\n* **Elimination:** Multiply equations by constants so coefficients of one variable match, then add or subtract to eliminate it.\n* **Substitution:** Make one variable the subject in one equation and substitute into the second equation.\n\n### 2. Linear and Quadratic Simultaneous Systems\nSystem form:\n$$\\begin{cases} y - x = 2 & \\text{(Linear)} \\\\ y = x^2 - 4 & \\text{(Quadratic)} \\end{cases}$$\n1. From linear equation: $y = x + 2$.\n2. Substitute into quadratic: $x + 2 = x^2 - 4 \\implies x^2 - x - 6 = 0$.\n3. Factorize: $(x - 3)(x + 2) = 0 \\implies x = 3$ or $x = -2$.\n4. Calculate corresponding $y$:\n   * When $x = 3$: $y = 3 + 2 = 5 \\implies (3, 5)$\n   * When $x = -2$: $y = -2 + 2 = 0 \\implies (-2, 0)$\n5. **Geometric Meaning:** The straight line intersects the parabola at $(3, 5)$ and $(-2, 0)$.\n          ",
          "summary": [
            "Linear-quadratic systems typically produce two pairs of solutions (points of intersection).",
            "Always express one variable from the linear equation and substitute into the quadratic.",
            "Check solutions in both original equations."
          ],
          "flashcards": [
            {
              "q": "How many solutions can a linear and quadratic system have?",
              "a": "Up to two points of intersection (2 real solutions, 1 tangent solution, or 0 if they don't intersect)."
            },
            {
              "q": "What is the best method for linear-quadratic systems?",
              "a": "Substitution method."
            }
          ],
          "assignment": {
            "title": "Simultaneous Systems Problem Set",
            "instructions": "Find all pairs of (x, y) solutions clearly.",
            "tasks": [
              "Solve simultaneously: 2x + 3y = 13 and 5x - 2y = 4.",
              "Solve: x + y = 5 and x² + y² = 13.",
              "The perimeter of a rectangular garden is 28 m and its area is 48 m². Find its dimensions."
            ],
            "sampleAnswer": "1. x = 2, y = 3.\n2. y = 5 - x => x² + (5-x)² = 13 => 2x² - 10x + 12 = 0 => x = 3, y = 2 OR x = 2, y = 3.\n3. 2(L+W)=28 => L+W=14. L*W=48 => L(14-L)=48 => L=8 m, W=6 m.",
            "rubric": "10 marks. 3 pts for #1, 4 pts for #2, 3 pts for #3."
          },
          "quiz": [
            {
              "question": "Solve for (x, y): x - y = 1 and x + y = 7:",
              "options": [
                "(4, 3)",
                "(3, 4)",
                "(5, 2)",
                "(6, 1)"
              ],
              "answer": 0,
              "explanation": "Adding equations: 2x = 8 => x = 4. Then y = 7 - 4 = 3."
            },
            {
              "question": "Geometrically, solving simultaneous equations finds their:",
              "options": [
                "Slopes",
                "Point(s) of intersection",
                "Perimeter",
                "Y-intercepts only"
              ],
              "answer": 1,
              "explanation": "Simultaneous solutions correspond directly to the points where the graphs intersect."
            },
            {
              "question": "If y = 2x and x² + y² = 20, find positive values of (x, y):",
              "options": [
                "(2, 4)",
                "(4, 2)",
                "(1, 2)",
                "(3, 6)"
              ],
              "answer": 0,
              "explanation": "x² + (2x)² = 20 => 5x² = 20 => x² = 4 => x = 2, y = 4."
            },
            {
              "question": "A linear line that touches a parabola at exactly ONE point is called a:",
              "options": [
                "Secant",
                "Tangent",
                "Chord",
                "Radius"
              ],
              "answer": 1,
              "explanation": "A tangent line intersects a curve at exactly one point (discriminant = 0)."
            }
          ]
        },
        {
          "id": "math-sss1-t2-2",
          "title": "Trigonometry & Angles of Elevation and Depression",
          "term": "Second Term • Week 4-6",
          "readTime": "10 min read",
          "objectives": [
            "Apply basic trigonometric ratios (Sine, Cosine, Tangent: SOH-CAH-TOA).",
            "Recall exact values for special angles (30°, 45°, 60°).",
            "Solve practical word problems involving angles of elevation and depression.",
            "Calculate heights and distances using multi-step trigonometric triangles."
          ],
          "notes": "\n### 1. Trigonometric Ratios (Right-Angled Triangles)\n$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}, \\quad \\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}, \\quad \\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$\n*Mnemonic:* **SOH - CAH - TOA**\n\n### 2. Special Angles (Exact Surd Values)\n| Angle ($\\theta$) | $\\sin \\theta$ | $\\cos \\theta$ | $\\tan \\theta$ |\n| :--- | :--- | :--- | :--- |\n| **$30^\\circ$** | $1/2$ | $\\sqrt{3}/2$ | $1/\\sqrt{3} = \\sqrt{3}/3$ |\n| **$45^\\circ$** | $1/\\sqrt{2} = \\sqrt{2}/2$ | $1/\\sqrt{2} = \\sqrt{2}/2$ | $1$ |\n| **$60^\\circ$** | $\\sqrt{3}/2$ | $1/2$ | $\\sqrt{3}$ |\n\n### 3. Angles of Elevation vs. Depression\n* **Angle of Elevation:** The angle between the horizontal line of sight and the observer's line of sight up to an object.\n* **Angle of Depression:** The angle between the horizontal line of sight and the observer's line of sight down to an object.\n* **Alternate Angles Rule:** Angle of Depression from top to bottom = Angle of Elevation from bottom to top!\n          ",
          "summary": [
            "SOH-CAH-TOA governs right-angled triangle side lengths and angles.",
            "Angle of elevation looks upwards from horizontal; depression looks downwards.",
            "By alternate interior angles, angle of depression from A to B equals angle of elevation from B to A."
          ],
          "flashcards": [
            {
              "q": "What is sin(30°)?",
              "a": "1/2 (0.5)."
            },
            {
              "q": "What is tan(45°)?",
              "a": "1."
            },
            {
              "q": "Why does angle of depression equal angle of elevation?",
              "a": "Because horizontal observer lines are parallel, creating alternate interior angles."
            }
          ],
          "assignment": {
            "title": "Trigonometric Heights & Distances",
            "instructions": "Sketch the diagrams and calculate exact answers.",
            "tasks": [
              "From a point on the ground 30 m away from the base of a vertical cellular mast, the angle of elevation of the top is 60°. Calculate the height of the mast in surd form and to 2 decimal places.",
              "A man standing on top of a 50 m cliff observes a boat at an angle of depression of 30°. How far is the boat from the base of the cliff?"
            ],
            "sampleAnswer": "1. tan(60°) = h / 30 => h = 30 * √3 m ≈ 30 * 1.732 = 51.96 m.\n2. tan(30°) = 50 / d => d = 50 / (1/√3) = 50√3 m ≈ 86.60 m.",
            "rubric": "10 marks. 5 pts each with clear triangle diagrams."
          },
          "quiz": [
            {
              "question": "If tan(θ) = 3/4 in a right triangle, what is sin(θ)?",
              "options": [
                "3/5",
                "4/5",
                "5/3",
                "4/3"
              ],
              "answer": 0,
              "explanation": "Opposite = 3, Adjacent = 4 => Hypotenuse = √(9 + 16) = 5. sin(θ) = 3/5."
            },
            {
              "question": "What is the exact value of cos(60°)?",
              "options": [
                "1/2",
                "√3/2",
                "1",
                "√2/2"
              ],
              "answer": 0,
              "explanation": "cos(60°) = 1/2."
            },
            {
              "question": "The angle of elevation of the top of a tree from a point 10 m from its base is 45°. What is the height of the tree?",
              "options": [
                "10 m",
                "20 m",
                "14.14 m",
                "5 m"
              ],
              "answer": 0,
              "explanation": "tan(45°) = h / 10 => 1 = h / 10 => h = 10 m."
            },
            {
              "question": "If an observer looks DOWN from a balcony at a car on the road, the angle measured from the horizontal is the angle of:",
              "options": [
                "Elevation",
                "Depression",
                "Inclination",
                "Refraction"
              ],
              "answer": 1,
              "explanation": "Looking downwards from the horizontal line of sight defines the angle of depression."
            }
          ]
        },
        {
          "id": "math-sss1-t3-1",
          "title": "Statistics: Measures of Central Tendency & Grouped Data",
          "term": "Third Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Construct grouped frequency tables with class intervals and class boundaries.",
            "Calculate the Mean, Median, and Mode for grouped and ungrouped data.",
            "Draw and interpret Histograms and Cumulative Frequency Curves (Ogive).",
            "Estimate quartiles and percentiles from an Ogive."
          ],
          "notes": "\n### 1. Measures of Central Tendency\n1. **Mean ($\\bar{x}$):**\n   $$\\bar{x} = \\frac{\\sum f x}{\\sum f}$$\n   Where $x$ is the class midpoint and $f$ is the frequency.\n2. **Median:** The middle value dividing data into two equal halves. For grouped data:\n   $$\\text{Median} = L + \\left(\\frac{\\frac{N}{2} - F_b}{f_m}\\right)c$$\n   Where $L = \\text{lower boundary}$, $N = \\sum f$, $F_b = \\text{cumulative frequency before}$, $f_m = \\text{median frequency}$, $c = \\text{class width}$.\n3. **Mode:** The value with the highest frequency. From a histogram, it is the peak point of the highest bar.\n\n### 2. Cumulative Frequency (Ogive)\nAn S-shaped curve plotting Cumulative Frequency against Upper Class Boundaries.\n* Median = 50th percentile ($N/2$).\n* Lower Quartile ($Q_1$) = 25th percentile ($N/4$).\n* Upper Quartile ($Q_3$) = 75th percentile ($3N/4$).\n* Interquartile Range ($IQR$) = $Q_3 - Q_1$.\n          ",
          "summary": [
            "Mean = Σfx / Σf using class midpoints.",
            "Median is the 50% midpoint; Mode is the most frequent value.",
            "Ogive plots cumulative frequency against upper class boundaries to estimate median and quartiles."
          ],
          "flashcards": [
            {
              "q": "What is the formula for class midpoint?",
              "a": "(Lower class limit + Upper class limit) / 2."
            },
            {
              "q": "What is Interquartile Range (IQR)?",
              "a": "Q3 - Q1 (Upper quartile minus Lower quartile)."
            },
            {
              "q": "Which measure of central tendency is most affected by extreme outliers?",
              "a": "The Mean."
            }
          ],
          "assignment": {
            "title": "Grouped Statistics Calculations",
            "instructions": "Calculate mean, median, and modal class from frequency tables.",
            "tasks": [
              "Scores of 40 students: 1-10 (4), 11-20 (8), 21-30 (14), 31-40 (10), 41-50 (4). Calculate the estimated mean score.",
              "Identify the modal class and median class for the data above."
            ],
            "sampleAnswer": "1. Midpoints: 5.5, 15.5, 25.5, 35.5, 45.5. fx: 22, 124, 357, 355, 182. Σfx = 1040. Mean = 1040 / 40 = 26.0.\n2. Modal class = 21-30 (frequency 14). N/2 = 20 => Median class = 21-30.",
            "rubric": "10 marks. Accurate midpoint computation and tabular working."
          },
          "quiz": [
            {
              "question": "Find the median of: 3, 7, 8, 5, 12, 14, 21, 13, 18:",
              "options": [
                "8",
                "12",
                "10",
                "13"
              ],
              "answer": 1,
              "explanation": "Ordered: 3, 5, 7, 8, 12, 13, 14, 18, 21. Total n = 9. Middle (5th) value = 12."
            },
            {
              "question": "The modal class in a grouped frequency distribution is the class with the:",
              "options": [
                "Widest interval",
                "Highest frequency",
                "Lowest midpoint",
                "Median value"
              ],
              "answer": 1,
              "explanation": "The mode corresponds to the category with the highest frequency."
            },
            {
              "question": "What is plotted on the vertical axis of an Ogive curve?",
              "options": [
                "Class frequency",
                "Cumulative frequency",
                "Class midpoint",
                "Relative percentage only"
              ],
              "answer": 1,
              "explanation": "An Ogive curve plots Cumulative Frequency against Upper Class Boundaries."
            },
            {
              "question": "If Σf = 50 and Σfx = 1250, what is the mean?",
              "options": [
                "20",
                "25",
                "30",
                "50"
              ],
              "answer": 1,
              "explanation": "Mean = Σfx / Σf = 1250 / 50 = 25."
            }
          ]
        },
        {
          "id": "math-sss1-t3-2",
          "title": "Probability: Simple, Independent & Mutually Exclusive Events",
          "term": "Third Term • Week 4-6",
          "readTime": "10 min read",
          "objectives": [
            "Define probability and calculate probabilities of simple single events.",
            "Apply the Addition Rule for mutually exclusive events: P(A or B) = P(A) + P(B).",
            "Apply the Multiplication Rule for independent events: P(A and B) = P(A) * P(B).",
            "Construct probability tree diagrams for multi-stage experiments."
          ],
          "notes": "\n### 1. Definition of Probability\n$$\\text{Probability of Event } E: \\quad P(E) = \\frac{n(E)}{n(S)} = \\frac{\\text{Number of favorable outcomes}}{\\text{Total number of possible outcomes}}$$\n* Range: $0 \\le P(E) \\le 1$ ($0 = \\text{impossible}$, $1 = \\text{certain}$).\n* Complementary Event: $P(E') = 1 - P(E)$.\n\n### 2. Mutually Exclusive Events (Addition Law)\nTwo events $A$ and $B$ cannot happen at the same time:\n$$P(A \\cup B) = P(A) + P(B)$$\n* *Example:* Rolling a die, probability of rolling a 2 or a 5: $\\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$.\n\n### 3. Independent Events (Multiplication Law)\nOccurrence of event $A$ does not affect the occurrence of event $B$:\n$$P(A \\cap B) = P(A) \\times P(B)$$\n* *Example:* Tossing a fair coin and rolling a die: $P(\\text{Head and } 6) = \\frac{1}{2} \\times \\frac{1}{6} = \\frac{1}{12}$.\n          ",
          "summary": [
            "0 <= P(E) <= 1; P(not E) = 1 - P(E).",
            "For mutually exclusive events: P(A or B) = P(A) + P(B).",
            "For independent events: P(A and B) = P(A) * P(B)."
          ],
          "flashcards": [
            {
              "q": "What is P(A) + P(not A)?",
              "a": "1 (certainty)."
            },
            {
              "q": "What are independent events?",
              "a": "Events where the outcome of one does not affect the probability of the other."
            },
            {
              "q": "What is the probability of drawing an Ace from a standard 52-card deck?",
              "a": "4 / 52 = 1 / 13."
            }
          ],
          "assignment": {
            "title": "Probability Problem Solving",
            "instructions": "Show clear fraction calculations in simplest form.",
            "tasks": [
              "A bag contains 5 red balls, 4 blue balls, and 3 green balls. One ball is picked at random. Find the probability that it is: a) Blue, b) Not red.",
              "Two fair dice are thrown simultaneously. Find the probability of obtaining a total sum of 7 or 11."
            ],
            "sampleAnswer": "1. Total = 12. a) P(Blue) = 4/12 = 1/3. b) P(Not red) = (4+3)/12 = 7/12.\n2. Total outcomes = 36. Sum 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) = 6. Sum 11: (5,6),(6,5) = 2. P(7 or 11) = (6+2)/36 = 8/36 = 2/9.",
            "rubric": "10 marks. 5 pts each with proper sample space reduction."
          },
          "quiz": [
            {
              "question": "A fair six-sided die is rolled. What is the probability of rolling an EVEN number?",
              "options": [
                "1/6",
                "1/3",
                "1/2",
                "2/3"
              ],
              "answer": 2,
              "explanation": "Even numbers: {2, 4, 6} (3 outcomes). P = 3/6 = 1/2."
            },
            {
              "question": "If P(Rain) = 0.35, what is the probability that it will NOT rain?",
              "options": [
                "0.35",
                "0.65",
                "0.75",
                "1.35"
              ],
              "answer": 1,
              "explanation": "P(not Rain) = 1 - 0.35 = 0.65."
            },
            {
              "question": "Two independent coins are tossed. What is the probability of getting two Heads?",
              "options": [
                "1/2",
                "1/4",
                "3/4",
                "1/8"
              ],
              "answer": 1,
              "explanation": "P(H and H) = P(H) * P(H) = 1/2 * 1/2 = 1/4."
            },
            {
              "question": "Two events that CANNOT occur simultaneously are called:",
              "options": [
                "Independent",
                "Mutually Exclusive",
                "Equally likely",
                "Exhaustive"
              ],
              "answer": 1,
              "explanation": "Mutually exclusive events cannot happen at the same time (P(A and B) = 0)."
            }
          ]
        }
      ]
    }
  },
  "Physics": {
    "icon": "⚡",
    "category": "science",
    "description": "Complete senior secondary physics: Mechanics, vectors, thermal physics, waves, optics, electromagnetism & modern quantum physics.",
    "topics": {
      "SSS 1": [
        {
          "id": "phy-sss1-t1-1",
          "title": "Rectilinear Motion & Equations of Uniform Acceleration",
          "term": "First Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Distinguish between scalar and vector quantities in kinematics.",
            "Derive the four kinematic equations of uniformly accelerated motion.",
            "Calculate displacement and acceleration from velocity-time graphs.",
            "Solve problems involving vertical motion under gravity."
          ],
          "notes": "\n### 1. Fundamental Kinematics Definitions\n* **Displacement ($s$):** Distance moved in a specified direction (vector, meters $\\text{m}$).\n* **Velocity ($v$):** Rate of change of displacement: $v = \\Delta s / \\Delta t$ (vector, $\\text{m/s}$).\n* **Acceleration ($a$):** Rate of change of velocity: $a = (v - u) / t$ (vector, $\\text{m/s}^2$).\n\n### 2. The Four Equations of Motion\n1. $v = u + at$\n2. $s = \\left(\\frac{u + v}{2}\\right)t$\n3. $s = ut + \\frac{1}{2}at^2$\n4. $v^2 = u^2 + 2as$\n\n### 3. Motion Under Gravity (Free Fall)\n* Acceleration $a = g = 9.8 \\text{ m/s}^2 \\approx 10 \\text{ m/s}^2$.\n* At maximum vertical height: $v = 0$.\n* Time to reach maximum height: $t = u / g$.\n* Maximum height reached: $H_{\\max} = u^2 / (2g)$.\n\n> **🔬 Pioneer Spotlight: Galileo Galilei (1564–1642)**\n> Galileo dropped spheres of different masses from the Leaning Tower of Pisa, proving that in the absence of air resistance, all bodies fall with the exact same acceleration regardless of their weight!\n          ",
          "summary": [
            "Four equations: v = u+at; s = ((u+v)/2)t; s = ut + 0.5at²; v² = u² + 2as.",
            "Gradient of v-t graph = acceleration; Area under v-t graph = total distance.",
            "Under gravity: a = ±g, at apex v = 0, H_max = u² / 2g."
          ],
          "flashcards": [
            {
              "q": "What does the slope of a velocity-time graph represent?",
              "a": "Acceleration."
            },
            {
              "q": "What is an object's velocity at maximum height?",
              "a": "0 m/s momentarily before falling."
            },
            {
              "q": "State the equation relating v, u, a, and s without time t.",
              "a": "v² = u² + 2as."
            }
          ],
          "assignment": {
            "title": "Kinematics & Graph Analysis",
            "instructions": "Show algebraic substitutions and units.",
            "tasks": [
              "A car accelerates uniformly from rest at 3 m/s² for 8 seconds. Find: a) its final velocity, b) the distance travelled.",
              "A stone is thrown vertically upward with initial velocity 30 m/s. Taking g = 10 m/s², find the time taken to reach maximum height and the maximum height."
            ],
            "sampleAnswer": "1. a) v = u + at = 0 + 3(8) = 24 m/s. b) s = ut + 0.5at² = 0.5(3)(64) = 96 m.\n2. t = u/g = 30/10 = 3 s. H_max = u²/(2g) = 900/20 = 45 m.",
            "rubric": "10 marks. 5 pts per problem with proper dimensional units."
          },
          "quiz": [
            {
              "question": "A vehicle accelerates from rest to 24 m/s in 6 seconds. What is its acceleration?",
              "options": [
                "2 m/s²",
                "4 m/s²",
                "8 m/s²",
                "144 m/s²"
              ],
              "answer": 1,
              "explanation": "a = (v - u)/t = (24 - 0)/6 = 4 m/s²."
            },
            {
              "question": "The area under a velocity-time graph represents:",
              "options": [
                "Acceleration",
                "Impulse",
                "Displacement (Distance)",
                "Work done"
              ],
              "answer": 2,
              "explanation": "Area under a v-t curve equals total displacement."
            },
            {
              "question": "A stone dropped from a 45 m high bridge hits the water below in: (take g = 10 m/s²)",
              "options": [
                "2.0 s",
                "3.0 s",
                "4.5 s",
                "9.0 s"
              ],
              "answer": 1,
              "explanation": "s = 0.5gt² => 45 = 5t² => t² = 9 => t = 3 seconds."
            },
            {
              "question": "Which of the following is a vector quantity?",
              "options": [
                "Speed",
                "Electric charge",
                "Displacement",
                "Mass"
              ],
              "answer": 2,
              "explanation": "Displacement has both magnitude and direction."
            }
          ]
        },
        {
          "id": "phy-sss1-t1-2",
          "title": "Newton's Laws of Motion & Conservation of Linear Momentum",
          "term": "First Term • Week 4-6",
          "readTime": "11 min read",
          "objectives": [
            "State Newton's First, Second, and Third Laws of Motion.",
            "Derive the relationship F = ma from Newton's Second Law.",
            "Define linear momentum (p = mv) and impulse (I = FΔt).",
            "Apply the principle of conservation of linear momentum to collisions."
          ],
          "notes": "\n### 1. Newton's Three Laws of Motion\n1. **First Law (Inertia):** Every body continues in its state of rest or uniform motion in a straight line unless acted upon by an external net force.\n2. **Second Law (Force):** The rate of change of momentum of a body is directly proportional to the applied force and takes place in the direction of the force:\n   $$F = \\frac{dp}{dt} = \\frac{m(v - u)}{t} = ma$$\n3. **Third Law (Action & Reaction):** To every action, there is an equal and opposite reaction.\n\n### 2. Linear Momentum & Impulse\n* **Momentum ($p$):** $p = mv$ (unit: $\\text{kg}\\cdot\\text{m/s}$ or $\\text{N}\\cdot\\text{s}$).\n* **Impulse ($I$):** Product of force and time duration: $I = F \\Delta t = \\Delta p = m(v - u)$.\n\n### 3. Law of Conservation of Linear Momentum\nIn an isolated system of colliding bodies, total momentum before collision equals total momentum after collision:\n$$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$\n* In an **inelastic collision** where bodies stick together:\n$$m_1 u_1 + m_2 u_2 = (m_1 + m_2)V$$\n\n> **🔬 Pioneer Spotlight: Sir Isaac Newton (1643–1727)**\n> Published *Principia Mathematica* in 1687, unifying terrestrial and celestial mechanics under his Three Laws of Motion and Law of Universal Gravitation!\n          ",
          "summary": [
            "Newton's 1st law: Inertia; 2nd law: F = ma; 3rd law: Action = -Reaction.",
            "Impulse I = F*Δt = change in momentum Δp.",
            "Momentum is conserved in all collisions; kinetic energy is conserved only in elastic collisions."
          ],
          "flashcards": [
            {
              "q": "State Newton's Second Law mathematically.",
              "a": "F = ma (Force = mass * acceleration)."
            },
            {
              "q": "What is an elastic collision?",
              "a": "A collision where both momentum and kinetic energy are conserved."
            },
            {
              "q": "What is the unit of impulse?",
              "a": "N*s or kg*m/s."
            }
          ],
          "assignment": {
            "title": "Newton's Laws & Momentum Problem Set",
            "instructions": "Show full formulas and unit calculations.",
            "tasks": [
              "A force of 50 N acts on an 8 kg mass initially at rest for 4 seconds. Calculate: a) acceleration, b) final momentum.",
              "A 1200 kg car travelling at 20 m/s collides with a stationary 800 kg car and they lock together. Calculate their common velocity after impact."
            ],
            "sampleAnswer": "1. a) a = F/m = 50/8 = 6.25 m/s². b) v = u + at = 0 + 6.25(4) = 25 m/s. Momentum p = mv = 8 * 25 = 200 kg*m/s.\n2. m1*u1 + m2*u2 = (m1+m2)V => 1200(20) + 0 = 2000*V => 24000 = 2000*V => V = 12 m/s.",
            "rubric": "10 marks. 5 pts per calculation with clear momentum balance."
          },
          "quiz": [
            {
              "question": "A net force of 20 N acts on a 4 kg mass. What is its acceleration?",
              "options": [
                "2 m/s²",
                "5 m/s²",
                "10 m/s²",
                "80 m/s²"
              ],
              "answer": 1,
              "explanation": "a = F / m = 20 / 4 = 5 m/s²."
            },
            {
              "question": "The property of a body to resist changes in its state of rest or uniform motion is:",
              "options": [
                "Velocity",
                "Inertia",
                "Friction",
                "Density"
              ],
              "answer": 1,
              "explanation": "Inertia is the natural tendency of mass to resist acceleration (Newton's 1st Law)."
            },
            {
              "question": "When a gun recoils backwards upon firing a bullet forward, it illustrates:",
              "options": [
                "Newton's First Law",
                "Newton's Second Law",
                "Newton's Third Law",
                "Hooke's Law"
              ],
              "answer": 2,
              "explanation": "Action (bullet fired forward) has an equal and opposite reaction (gun recoils backward)."
            },
            {
              "question": "Impulse is equal to the change in:",
              "options": [
                "Velocity",
                "Kinetic energy",
                "Linear momentum",
                "Potential energy"
              ],
              "answer": 2,
              "explanation": "Impulse I = F*Δt = Δp (change in momentum)."
            }
          ]
        },
        {
          "id": "phy-sss1-t2-1",
          "title": "Thermal Physics: Expansion & Specific Heat Capacity",
          "term": "Second Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Distinguish between heat energy (Joules) and temperature (Kelvin/Celsius).",
            "Calculate linear expansivity (α), area expansivity (β), and volume expansivity (γ).",
            "Define Specific Heat Capacity (c) and Heat Capacity (C).",
            "Solve thermal equilibrium problems using the Method of Mixtures."
          ],
          "notes": "\n### 1. Thermal Expansion of Solids\n* **Linear Expansivity ($\\alpha$):** Fractional increase in length per degree temperature rise:\n  $$\\alpha = \\frac{\\Delta L}{L_1 \\Delta \\theta} \\implies L_2 = L_1 (1 + \\alpha \\Delta \\theta)$$\n* **Area Expansivity ($\\beta$):** $\\beta \\approx 2\\alpha$.\n* **Cubic (Volume) Expansivity ($\\gamma$):** $\\gamma \\approx 3\\alpha$.\n* **Applications:** Bimetallic strips in thermostats/fire alarms, expansion gaps in railway tracks, sagging of overhead power cables.\n\n### 2. Specific Heat Capacity ($c$)\nQuantity of heat required to raise the temperature of a unit mass ($1 \\text{ kg}$) of a substance by $1 \\text{ K}$ or $1^\\circ\\text{C}$:\n$$Q = mc\\Delta \\theta \\quad (\\text{Unit: J/(kg}\\cdot\\text{K)})$$\n\n### 3. Method of Mixtures (Conservation of Heat)\nIn an insulated calorimeter:\n$$\\text{Heat lost by hot substance} = \\text{Heat gained by cold substance and calorimeter}$$\n$$m_h c_h (\\theta_h - \\theta) = m_c c_c (\\theta - \\theta_c) + m_{\\text{cal}} c_{\\text{cal}} (\\theta - \\theta_c)$$\n          ",
          "summary": [
            "Linear expansivity α = ΔL / (L1 * Δθ); Area β = 2α; Volume γ = 3α.",
            "Heat quantity Q = mcΔθ; Heat capacity C = mc.",
            "Principle of conservation of heat: Heat lost = Heat gained."
          ],
          "flashcards": [
            {
              "q": "What is the relationship between linear (α) and volume (γ) expansivity?",
              "a": "γ = 3α."
            },
            {
              "q": "Why does water make an excellent engine coolant?",
              "a": "Because it has an exceptionally high specific heat capacity (4200 J/kg·K)."
            },
            {
              "q": "How does a bimetallic strip bend when heated?",
              "a": "It bends towards the metal with the lower coefficient of linear expansion."
            }
          ],
          "assignment": {
            "title": "Thermal Expansivity & Calorimetry",
            "instructions": "Show equations and step-by-step numbers.",
            "tasks": [
              "A brass rod is 2.0 m long at 20°C. Calculate its length at 120°C if the linear expansivity of brass is 1.9 × 10⁻⁵ K⁻¹.",
              "A 0.5 kg copper block at 100°C is placed in 1.0 kg of water at 20°C. Neglecting heat losses, find the final equilibrium temperature. (c_water = 4200 J/kg·K, c_copper = 400 J/kg·K)."
            ],
            "sampleAnswer": "1. ΔL = L1*α*Δθ = 2.0 * (1.9*10^-5) * 100 = 0.0038 m. L2 = 2.0038 m.\n2. Heat lost = 0.5 * 400 * (100 - T) = 200(100 - T) = 20000 - 200T. Heat gained = 1.0 * 4200 * (T - 20) = 4200T - 84000. 20000 - 200T = 4200T - 84000 => 4400T = 104000 => T = 23.64°C.",
            "rubric": "10 marks. 5 pts each with clear heat balance equations."
          },
          "quiz": [
            {
              "question": "The ratio of cubic expansivity (γ) to linear expansivity (α) of a solid is:",
              "options": [
                "1:1",
                "2:1",
                "3:1",
                "1:3"
              ],
              "answer": 2,
              "explanation": "Volume expansivity is three times linear expansivity: γ = 3α."
            },
            {
              "question": "The SI unit of specific heat capacity is:",
              "options": [
                "Joule",
                "J / kg",
                "J / (kg·K)",
                "Watt"
              ],
              "answer": 2,
              "explanation": "Specific heat capacity is measured in Joules per kilogram per Kelvin (J/(kg·K))."
            },
            {
              "question": "Why are gaps left between successive railway tracks?",
              "options": [
                "To save metal costs",
                "To allow for thermal expansion during hot weather and prevent buckling",
                "To reduce train noise",
                "To drain rainwater"
              ],
              "answer": 1,
              "explanation": "Gaps allow rails to expand in summer heat without buckling."
            },
            {
              "question": "Calculate the heat required to raise 2 kg of water from 25°C to 75°C (c = 4200 J/kg·K):",
              "options": [
                "210 kJ",
                "420 kJ",
                "840 kJ",
                "100 kJ"
              ],
              "answer": 1,
              "explanation": "Q = mcΔθ = 2 * 4200 * 50 = 420,000 J = 420 kJ."
            }
          ]
        },
        {
          "id": "phy-sss1-t2-2",
          "title": "Wave Motion & Light: Reflection and Refraction",
          "term": "Second Term • Week 4-6",
          "readTime": "10 min read",
          "objectives": [
            "Distinguish between mechanical and electromagnetic waves, transverse and longitudinal waves.",
            "Apply the general wave equation: v = fλ.",
            "State the laws of reflection and refraction of light.",
            "Apply Snell's law (n = sin i / sin r) and determine the critical angle and total internal reflection."
          ],
          "notes": "\n### 1. General Wave Equation\n$$v = f \\lambda = \\frac{\\lambda}{T}$$\nWhere $v = \\text{wave speed (m/s)}$, $f = \\text{frequency (Hz)}$, $\\lambda = \\text{wavelength (m)}$, $T = \\text{period (s)}$.\n* **Transverse Waves:** Particles vibrate perpendicular to wave propagation (e.g., Light, water ripples).\n* **Longitudinal Waves:** Particles vibrate parallel to wave propagation (e.g., Sound waves, ultrasound).\n\n### 2. Reflection & Refraction of Light\n* **First Law of Refraction:** The incident ray, refracted ray, and normal at the point of incidence all lie in the same plane.\n* **Second Law (Snell's Law):**\n  $$n = \\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2} = \\frac{\\text{Real Depth}}{\\text{Apparent Depth}}$$\n* **Critical Angle ($c$) & Total Internal Reflection:**\n  When light passes from an optically denser medium into a rarer medium at an angle greater than the critical angle, all light is reflected internally:\n  $$\\sin c = \\frac{1}{n}$$\n* **Applications:** Fiber optic cables for high-speed internet, periscopes, mirages in deserts.\n          ",
          "summary": [
            "Wave speed v = fλ.",
            "Snell's law: n = sin(i) / sin(r) = Real depth / Apparent depth.",
            "Total internal reflection occurs when angle of incidence in denser medium exceeds critical angle (sin c = 1/n)."
          ],
          "flashcards": [
            {
              "q": "What is the wave equation?",
              "a": "v = f * λ (Speed = frequency * wavelength)."
            },
            {
              "q": "What are the two conditions for Total Internal Reflection?",
              "a": "1. Light must travel from a denser to a rarer medium. 2. Angle of incidence must exceed critical angle."
            },
            {
              "q": "Are sound waves transverse or longitudinal?",
              "a": "Longitudinal mechanical waves."
            }
          ],
          "assignment": {
            "title": "Optics & Wave Calculations",
            "instructions": "Show refractive index and ray formulas.",
            "tasks": [
              "A radio wave has frequency 100 MHz (10⁸ Hz) and travels at 3 × 10⁸ m/s. Find its wavelength.",
              "A ray of light traveling in air enters glass (n = 1.5) at an angle of incidence of 30°. Calculate the angle of refraction and the critical angle for glass."
            ],
            "sampleAnswer": "1. λ = v / f = (3*10^8) / (10^8) = 3 meters.\n2. sin(r) = sin(30°) / 1.5 = 0.5 / 1.5 = 0.3333 => r = 19.47°. Critical angle: sin(c) = 1/n = 1/1.5 = 0.6667 => c = 41.81°.",
            "rubric": "10 marks. 5 pts per optics problem with proper trigonometric functions."
          },
          "quiz": [
            {
              "question": "A wave has frequency 50 Hz and wavelength 4 m. Its speed is:",
              "options": [
                "12.5 m/s",
                "200 m/s",
                "54 m/s",
                "0.08 m/s"
              ],
              "answer": 1,
              "explanation": "v = f * λ = 50 * 4 = 200 m/s."
            },
            {
              "question": "Sound waves CANNOT travel through:",
              "options": [
                "Water",
                "Steel rails",
                "A vacuum",
                "Air"
              ],
              "answer": 2,
              "explanation": "Sound is a mechanical wave that requires a material medium and cannot propagate in a vacuum."
            },
            {
              "question": "If the refractive index of diamond is 2.42, what is its critical angle?",
              "options": [
                "24.4°",
                "45.0°",
                "60.0°",
                "90.0°"
              ],
              "answer": 0,
              "explanation": "sin(c) = 1/n = 1/2.42 = 0.4132 => c = 24.4°."
            },
            {
              "question": "Fiber optic cables transmit data through glass strands based on the principle of:",
              "options": [
                "Dispersion",
                "Total Internal Reflection",
                "Diffraction",
                "Polarization"
              ],
              "answer": 1,
              "explanation": "Fiber optics rely on total internal reflection to transmit optical signals without loss."
            }
          ]
        },
        {
          "id": "phy-sss1-t3-1",
          "title": "Current Electricity: Ohm's Law & Circuit Analysis",
          "term": "Third Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Define electric current, potential difference, and electromotive force (e.m.f.).",
            "State and apply Ohm's Law (V = IR).",
            "Calculate equivalent resistance for resistors in series and parallel.",
            "Determine electric power (P = IV = I²R = V²/R) and electrical energy consumption."
          ],
          "notes": "\n### 1. Fundamental Electrical Definitions\n* **Current ($I$):** Rate of flow of electric charge: $I = Q / t$ (unit: Amperes, $\\text{A}$).\n* **Potential Difference ($V$):** Work done per unit charge in moving charge between two points: $V = W / Q$ (unit: Volts, $\\text{V}$).\n\n### 2. Ohm's Law\n> *\"The current flowing through a metallic conductor is directly proportional to the potential difference across its ends, provided temperature and other physical conditions remain constant.\"*\n$$V = IR$$\n\n### 3. Resistors in Series and Parallel\n* **Series Connection:** Current is the same through all resistors; voltages add up:\n  $$R_{\\text{eq}} = R_1 + R_2 + R_3$$\n* **Parallel Connection:** Voltage is the same across all branches; currents add up:\n  $$\\frac{1}{R_{\\text{eq}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$$\n\n### 4. Electrical Power & Energy\n* Power: $P = IV = I^2 R = \\frac{V^2}{R} \\quad (\\text{Watts, W})$\n* Energy: $E = Pt = IVt \\quad (\\text{Joules or kilowatt-hours, kWh})$\n          ",
          "summary": [
            "Ohm's Law: V = IR for ohmic conductors at constant temperature.",
            "Series: R_total = R1 + R2; Parallel: 1/R_total = 1/R1 + 1/R2.",
            "Electrical power P = IV = I²R = V²/R."
          ],
          "flashcards": [
            {
              "q": "What does Ohm's Law state?",
              "a": "V = IR (Voltage is proportional to current at constant temperature)."
            },
            {
              "q": "Two 6Ω resistors in parallel have an equivalent resistance of:",
              "a": "(6 * 6) / (6 + 6) = 36 / 12 = 3Ω."
            },
            {
              "q": "What is an ammeter and how is it connected?",
              "a": "An instrument measuring electric current, connected in SERIES with the circuit."
            }
          ],
          "assignment": {
            "title": "DC Circuit & Power Calculations",
            "instructions": "Show circuit reductions and step-by-step numbers.",
            "tasks": [
              "Three resistors of 4Ω, 6Ω, and 12Ω are connected in parallel across a 12V battery. Find: a) equivalent resistance, b) total current supplied by the battery.",
              "A 60W electric lamp operates on 240V mains for 5 hours daily for 30 days. Calculate the electrical energy consumed in kilowatt-hours (kWh)."
            ],
            "sampleAnswer": "1. 1/R = 1/4 + 1/6 + 1/12 = (3+2+1)/12 = 6/12 = 1/2 => R = 2Ω. Total current I = V/R = 12/2 = 6 A.\n2. Total hours = 5 * 30 = 150 hours. Energy = (60 W * 150 h) / 1000 = 9000 / 1000 = 9 kWh.",
            "rubric": "10 marks. 5 pts per circuit and energy calculation."
          },
          "quiz": [
            {
              "question": "Three 3Ω resistors connected in series have a combined resistance of:",
              "options": [
                "1Ω",
                "3Ω",
                "6Ω",
                "9Ω"
              ],
              "answer": 3,
              "explanation": "R_series = 3 + 3 + 3 = 9Ω."
            },
            {
              "question": "Which instrument is used to measure potential difference and is connected in PARALLEL?",
              "options": [
                "Ammeter",
                "Voltmeter",
                "Galvanometer",
                "Rheostat"
              ],
              "answer": 1,
              "explanation": "A voltmeter has high resistance and must be connected in parallel."
            },
            {
              "question": "An electric heater draws 5A from a 220V source. What is its power rating?",
              "options": [
                "44 W",
                "1100 W",
                "225 W",
                "110 W"
              ],
              "answer": 1,
              "explanation": "P = IV = 5 * 220 = 1100 W."
            },
            {
              "question": "If a wire's length is DOUBLED while its cross-sectional area remains unchanged, its resistance will:",
              "options": [
                "Halve",
                "Double",
                "Quadruple",
                "Remain constant"
              ],
              "answer": 1,
              "explanation": "Resistance is directly proportional to length (R = ρL/A), so doubling length doubles resistance."
            }
          ]
        },
        {
          "id": "phy-sss1-t3-2",
          "title": "Magnetism, Electromagnetic Induction & Transformers",
          "term": "Third Term • Week 4-6",
          "readTime": "11 min read",
          "objectives": [
            "Explain magnetic fields, field lines, and magnetic domains.",
            "State Faraday's Law of Electromagnetic Induction and Lenz's Law.",
            "Analyze the structure and operation of electric generators and transformers.",
            "Apply the transformer equation: Vp/Vs = Np/Ns = Is/Ip."
          ],
          "notes": "\n### 1. Magnetic Fields & Magnetic Induction\nA magnetic field is the region around a magnet or current-carrying conductor where magnetic forces can be detected. Magnetic field lines emerge from the North pole and enter the South pole.\n\n### 2. Faraday's & Lenz's Laws of Induction\n* **Faraday's Law:** An electromotive force (e.m.f.) is induced in a conductor whenever there is a change in the magnetic flux linking the conductor, and the magnitude of the induced e.m.f. is directly proportional to the rate of change of magnetic flux:\n  $$\\mathcal{E} = -N \\frac{\\Delta \\Phi}{\\Delta t}$$\n* **Lenz's Law:** The direction of the induced current is always such as to oppose the change producing it (indicated by the negative sign in Faraday's equation).\n\n### 3. Electrical Transformers\nA device that steps up or steps down alternating voltage (a.c.) through mutual induction:\n$$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$$\n* **Step-Up Transformer:** $N_s > N_p \\implies V_s > V_p$ (Voltage increases, current decreases).\n* **Step-Down Transformer:** $N_s < N_p \\implies V_s < V_p$ (Voltage decreases, current increases).\n* **Efficiency ($\\eta$):** $\\eta = \\frac{\\text{Power Output}}{\\text{Power Input}} \\times 100\\% = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.\n\n> **🔬 Pioneer Spotlight: Michael Faraday (1791–1867)**\n> Discovered electromagnetic induction in 1831 by moving a magnet through a coil of wire, inventing the fundamental operating principle of all modern power generators, turbines, and transformers!\n          ",
          "summary": [
            "Faraday's Law: Induced emf = rate of change of magnetic flux linkage.",
            "Lenz's Law: Induced current opposes the change causing it.",
            "Transformer formula: Vs/Vp = Ns/Np = Ip/Is.",
            "Step-up increases voltage (Ns > Np); step-down decreases voltage (Ns < Np)."
          ],
          "flashcards": [
            {
              "q": "What does a step-down transformer do?",
              "a": "Reduces voltage and increases current (Ns < Np)."
            },
            {
              "q": "Why do transformers operate only on alternating current (a.c.)?",
              "a": "Because a changing magnetic flux is required to induce voltage in the secondary coil."
            },
            {
              "q": "Who discovered electromagnetic induction?",
              "a": "Michael Faraday in 1831."
            }
          ],
          "assignment": {
            "title": "Electromagnetic Induction & Transformers",
            "instructions": "Show turns ratio formulas and power calculations.",
            "tasks": [
              "A transformer has 500 turns in the primary coil and 2500 turns in the secondary coil. If the primary voltage is 220V a.c., find the secondary voltage.",
              "An ideal transformer steps down 240V to 12V to operate a 24W radio. Find: a) secondary current, b) primary current."
            ],
            "sampleAnswer": "1. Vs / Vp = Ns / Np => Vs / 220 = 2500 / 500 = 5 => Vs = 220 * 5 = 1100 V (Step-up transformer).\n2. a) Is = P / Vs = 24 / 12 = 2 A. b) Ideal: Vp * Ip = Vs * Is => 240 * Ip = 24 => Ip = 24 / 240 = 0.1 A.",
            "rubric": "10 marks. 5 pts per transformer calculation."
          },
          "quiz": [
            {
              "question": "Lenz's Law is a consequence of the conservation of:",
              "options": [
                "Mass",
                "Charge",
                "Energy",
                "Linear momentum"
              ],
              "answer": 2,
              "explanation": "Lenz's Law ensures conservation of energy in electromagnetic induction."
            },
            {
              "question": "A transformer has Np = 200, Ns = 1000. It is a:",
              "options": [
                "Step-down transformer",
                "Step-up transformer",
                "Direct current rectifier",
                "Thermal radiator"
              ],
              "answer": 1,
              "explanation": "Since Ns > Np, it is a step-up transformer that raises secondary voltage."
            },
            {
              "question": "Why does a transformer core consist of laminated soft iron sheets?",
              "options": [
                "To prevent rust",
                "To reduce eddy current energy losses",
                "To make it lighter",
                "To stop electromagnetic induction"
              ],
              "answer": 1,
              "explanation": "Laminations break up circulating eddy currents, drastically reducing resistive heat loss."
            },
            {
              "question": "Transformers operate ONLY on:",
              "options": [
                "Direct current (d.c.)",
                "Alternating current (a.c.)",
                "Electrostatic charges",
                "Solar battery current"
              ],
              "answer": 1,
              "explanation": "Transformers require changing magnetic flux produced by alternating current."
            }
          ]
        }
      ]
    }
  },
  "Chemistry": {
    "icon": "🧪",
    "category": "science",
    "description": "Complete senior secondary chemistry: Atomic structure, periodic table, bonding, stoichiometry, acids/bases, energetics, equilibrium, redox, and organic chemistry.",
    "topics": {
      "SSS 1": [
        {
          "id": "chem-sss1-t1-1",
          "title": "Atomic Structure, Electronic Configuration & Isotopy",
          "term": "First Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Describe the fundamental subatomic particles (protons, neutrons, electrons).",
            "Calculate relative atomic mass (A_r) from isotopic abundance percentages.",
            "Write standard s, p, d, f electron configurations using the Aufbau principle.",
            "Relate electronic configuration to positions in the Modern Periodic Table."
          ],
          "notes": "\n### 1. Fundamental Subatomic Particles\n* **Proton ($p^+$):** Mass = 1, Charge = $+1$, located in the dense nucleus.\n* **Neutron ($n^0$):** Mass = 1, Charge = $0$, located in the nucleus.\n* **Electron ($e^-$):** Mass = $1/1840$, Charge = $-1$, orbits in quantum shells.\n\n### 2. Relative Atomic Mass ($A_r$)\n$$A_r = \\frac{(\\text{Mass}_1 \\times \\%_1) + (\\text{Mass}_2 \\times \\%_2)}{100}$$\n* *Example (Chlorine):* $^{35}_{17}\\text{Cl}$ ($75\\%$) and $^{37}_{17}\\text{Cl}$ ($25\\%$):\n  $$A_r = \\frac{(35 \\times 75) + (37 \\times 25)}{100} = \\frac{2625 + 925}{100} = 35.5$$\n\n### 3. Electronic Configuration Principles\n* **Aufbau Principle:** Orbitals fill in order of increasing energy: $1s < 2s < 2p < 3s < 3p < 4s < 3d$.\n* **Pauli Exclusion Principle:** Maximum of 2 electrons per orbital with opposite spins.\n* **Hund's Rule:** Degenerate orbitals are each occupied singly before pairing occurs.\n\n> **🔬 Pioneer Spotlight: Antoine Lavoisier (1743–1794)**\n> Known as the 'Father of Modern Chemistry', Lavoisier formulated the Law of Conservation of Mass: in a closed system, matter is neither created nor destroyed during chemical transformations!\n          ",
          "summary": [
            "Protons (+1) and neutrons (0) form the nucleus; electrons (-1) fill s, p, d, f orbitals.",
            "Aufbau principle fills lowest energy first: 4s fills before 3d.",
            "Relative atomic mass is the abundance-weighted average of isotopes relative to Carbon-12."
          ],
          "flashcards": [
            {
              "q": "What is the maximum number of electrons in a p-subshell?",
              "a": "6 electrons (3 orbitals * 2)."
            },
            {
              "q": "What is the electron configuration of Sodium (Z = 11)?",
              "a": "1s² 2s² 2p⁶ 3s¹."
            },
            {
              "q": "State the Aufbau Principle.",
              "a": "Electrons occupy orbitals of lowest energy first before higher energy levels."
            }
          ],
          "assignment": {
            "title": "Atomic Structure & Isotopy",
            "instructions": "Show electron shell configurations and mass calculations.",
            "tasks": [
              "Write the s, p, d, f electronic configuration for: a) Silicon (Z=14), b) Iron (Z=26), c) Fe³⁺ ion.",
              "Copper exists as Cu-63 (69.2%) and Cu-65 (30.8%). Calculate the relative atomic mass of copper to 2 decimal places."
            ],
            "sampleAnswer": "1. a) Si: 1s² 2s² 2p⁶ 3s² 3p². b) Fe: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶. c) Fe³⁺: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵ (loses two 4s and one 3d electron).\n2. A_r = (63*69.2 + 65*30.8)/100 = (4359.6 + 2002)/100 = 63.62.",
            "rubric": "10 marks. 5 pts for configurations, 5 pts for isotopic math."
          },
          "quiz": [
            {
              "question": "An element X has mass number 39 and atomic number 19. How many neutrons does its nucleus contain?",
              "options": [
                "19",
                "20",
                "39",
                "58"
              ],
              "answer": 1,
              "explanation": "Number of neutrons = A - Z = 39 - 19 = 20."
            },
            {
              "question": "What is the s, p, d, f configuration of Calcium (Z = 20)?",
              "options": [
                "1s² 2s² 2p⁶ 3s² 3p⁶ 3d²",
                "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
                "1s² 2s² 2p⁶ 3s² 3d⁸",
                "1s² 2s² 2p⁶ 3s⁴ 3p⁶"
              ],
              "answer": 1,
              "explanation": "4s is lower in energy than 3d and fills first: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s²."
            },
            {
              "question": "Isotopes of the same element share the same number of:",
              "options": [
                "Neutrons",
                "Mass number",
                "Protons and chemical properties",
                "Nuclear energy"
              ],
              "answer": 2,
              "explanation": "Isotopes have identical atomic numbers (protons and electrons), giving them identical chemical properties."
            },
            {
              "question": "The rule stating that degenerate orbitals fill singly before pairing is:",
              "options": [
                "Aufbau principle",
                "Hund's rule of maximum multiplicity",
                "Pauli exclusion principle",
                "Octet rule"
              ],
              "answer": 1,
              "explanation": "Hund's rule requires parallel singly occupied states before pairing occurs."
            }
          ]
        },
        {
          "id": "chem-sss1-t1-2",
          "title": "The Periodic Table & Chemical Bonding",
          "term": "First Term • Week 4-6",
          "readTime": "10 min read",
          "objectives": [
            "Explain periodic trends across periods and down groups (atomic radius, ionization energy, electronegativity).",
            "Differentiate between Ionic (Electrovalent), Covalent, and Metallic bonding.",
            "Describe dative (coordinate) covalent bonding and intermolecular forces.",
            "Relate bonding types to physical properties (melting point, electrical conductivity, solubility)."
          ],
          "notes": "\n### 1. Periodic Trends in the Modern Periodic Table\n* **Atomic Radius:** Decreases across a period (increasing nuclear charge pulls electron cloud closer); increases down a group (additional electron shells).\n* **Ionization Energy:** Energy required to remove the most loosely bound valence electron: Increases across a period; decreases down a group.\n* **Electronegativity:** The ability of an atom to attract a bonding pair of electrons in a covalent bond (Fluorine is highest: 4.0).\n\n### 2. Types of Chemical Bonding\n1. **Electrovalent (Ionic) Bonding:** Complete transfer of electrons from a metal (low ionization energy) to a non-metal (high electron affinity): e.g., $\\text{NaCl}, \\text{CaO}$. High melting points, soluble in water, conduct electricity in molten/aqueous states.\n2. **Covalent Bonding:** Sharing of electron pairs between non-metals: e.g., $\\text{CH}_4, \\text{H}_2\\text{O}$. Lower melting points, non-conductors of electricity.\n3. **Coordinate (Dative) Covalent Bonding:** A shared pair where both electrons are supplied by one atom (donor has a lone pair): e.g., Ammonium ion $\\text{NH}_4^+$, Hydroxonium ion $\\text{H}_3\\text{O}^+$.\n4. **Metallic Bonding:** Lattice of positive metal ions immersed in a delocalized \"sea of mobile electrons\".\n\n> **🔬 Pioneer Spotlight: Dmitri Mendeleev (1834–1907)**\n> Formulated the Periodic Law in 1869, arranging elements by atomic weight and leaving intentional gaps, accurately predicting the exact properties of undiscovered elements like Gallium and Germanium!\n          ",
          "summary": [
            "Atomic radius decreases across a period and increases down a group.",
            "Ionic bonds transfer electrons; covalent bonds share electrons; metallic bonds feature delocalized electrons.",
            "Coordinate bonding involves one atom donating both electrons in a shared pair."
          ],
          "flashcards": [
            {
              "q": "Which element has the highest electronegativity?",
              "a": "Fluorine (4.0 on Pauling scale)."
            },
            {
              "q": "Why do ionic compounds conduct electricity when molten but not as solid?",
              "a": "In molten or aqueous states, ions are free to move and carry electric charge; in solid state, ions are locked in a rigid crystal lattice."
            },
            {
              "q": "What is a dative covalent bond?",
              "a": "A covalent bond in which both shared electrons originate from the same donor atom."
            }
          ],
          "assignment": {
            "title": "Periodic Trends & Bonding Comparative Table",
            "instructions": "Construct a comparison table of bonding types.",
            "tasks": [
              "Compare Ionic vs Covalent compounds regarding melting point, conductivity, and water solubility.",
              "Draw the Lewis electron dot structure for: a) Ammonia (NH3), b) Ammonium ion (NH4+) showing the coordinate bond."
            ],
            "sampleAnswer": "1. Ionic: high melting point, conducts when molten/aqueous, water soluble. Covalent: low melting point, non-conductor, soluble in organic solvents.\n2. In NH3, Nitrogen has 3 single bonds to H and one lone pair. In NH4+, the lone pair is donated to H+ forming a coordinate bond [H3N -> H]+.",
            "rubric": "10 marks. 5 pts for table comparison, 5 pts for Lewis structures."
          },
          "quiz": [
            {
              "question": "Across a period from left to right, atomic radius generally:",
              "options": [
                "Increases",
                "Decreases",
                "Remains constant",
                "Doubles"
              ],
              "answer": 1,
              "explanation": "Increased positive nuclear charge pulls outer valence electrons closer."
            },
            {
              "question": "The bond formed between Sodium (Group 1 metal) and Chlorine (Group 7 non-metal) is:",
              "options": [
                "Non-polar covalent",
                "Ionic (Electrovalent)",
                "Metallic",
                "Hydrogen bond"
              ],
              "answer": 1,
              "explanation": "Metal and non-metal undergo complete electron transfer to form an ionic bond."
            },
            {
              "question": "Which of the following contains a coordinate (dative) covalent bond?",
              "options": [
                "CH4",
                "NH4+",
                "NaCl",
                "O2"
              ],
              "answer": 1,
              "explanation": "The ammonium ion (NH4+) contains a dative bond where nitrogen donates a lone pair to H+."
            },
            {
              "question": "The high electrical and thermal conductivity of metals is due to:",
              "options": [
                "Covalent sharing",
                "A sea of delocalized valence electrons",
                "Rigid ionic crystals",
                "Van der Waals forces"
              ],
              "answer": 1,
              "explanation": "Mobile delocalized electrons move freely through the metal lattice under a potential difference."
            }
          ]
        },
        {
          "id": "chem-sss1-t2-1",
          "title": "Stoichiometry, The Mole Concept & Chemical Equations",
          "term": "Second Term • Week 1-3",
          "readTime": "11 min read",
          "objectives": [
            "Define the Mole using Avogadro's constant (6.022 × 10²³ particles).",
            "Calculate molar masses, empirical formulas, and molecular formulas.",
            "Balance complex chemical equations using the conservation of mass.",
            "Solve stoichiometric mass-mass and mass-volume reacting calculations."
          ],
          "notes": "\n### 1. The Mole Concept\nOne mole of any substance contains Avogadro's number ($N_A = 6.022 \\times 10^{23}$) of formula units:\n$$n = \\frac{\\text{Mass } (m)}{\\text{Molar Mass } (M)} = \\frac{\\text{Volume at s.t.p. } (V)}{22.4 \\text{ dm}^3} = \\frac{\\text{Number of Particles}}{6.022 \\times 10^{23}}$$\n* **Molar Volume at s.t.p.:** $1 \\text{ mole of any gas} = 22.4 \\text{ dm}^3 = 22,400 \\text{ cm}^3$ at standard temperature ($273 \\text{ K}$) and pressure ($1 \\text{ atm}$).\n\n### 2. Empirical vs. Molecular Formula\n* **Empirical Formula:** Simplest whole-number ratio of atoms in a compound.\n* **Molecular Formula:** Actual number of atoms of each element in a molecule:\n  $$\\text{Molecular Formula} = (\\text{Empirical Formula})_n, \\quad \\text{where } n = \\frac{\\text{Molar Mass}}{\\text{Empirical Formula Mass}}$$\n\n### 3. Stoichiometric Calculations\n$$\\text{Balanced Reaction:} \\quad 2\\text{H}_2 + \\text{O}_2 \\longrightarrow 2\\text{H}_2\\text{O}$$\n* Ratio: $2 \\text{ moles of } \\text{H}_2$ react with $1 \\text{ mole of } \\text{O}_2$ to yield $2 \\text{ moles of } \\text{H}_2\\text{O}$.\n* Mass check: $2(2) + 32 = 36 \\text{ g} \\rightarrow 2(18) = 36 \\text{ g}$ (Law of Conservation of Mass).\n          ",
          "summary": [
            "Number of moles n = mass / molar mass = volume / 22.4 dm³ (at s.t.p.).",
            "Empirical formula is the simplest ratio; molecular formula = (empirical formula)_n.",
            "Coefficients in balanced equations give exact molar reacting ratios."
          ],
          "flashcards": [
            {
              "q": "What is Avogadro's constant?",
              "a": "6.022 × 10²³ particles per mole."
            },
            {
              "q": "What volume does 1 mole of an ideal gas occupy at s.t.p.?",
              "a": "22.4 dm³ (or 22,400 cm³)."
            },
            {
              "q": "How many moles are in 88 g of CO2 (Molar mass = 44 g/mol)?",
              "a": "n = 88 / 44 = 2 moles."
            }
          ],
          "assignment": {
            "title": "Stoichiometry & Molar Mass Calculations",
            "instructions": "Show step-by-step mathematical working with units.",
            "tasks": [
              "A compound contains 40.0% Carbon, 6.7% Hydrogen, and 53.3% Oxygen by mass. If its molar mass is 180 g/mol, find its empirical formula and molecular formula. (C=12, H=1, O=16).",
              "Calculate the mass of calcium carbonate (CaCO3) required to produce 11.2 dm³ of carbon dioxide (CO2) at s.t.p. on heating. [CaCO3 -> CaO + CO2]."
            ],
            "sampleAnswer": "1. Moles: C = 40/12 = 3.33; H = 6.7/1 = 6.7; O = 53.3/16 = 3.33. Ratio: 1:2:1 => Empirical formula = CH2O (Mass = 30). n = 180 / 30 = 6 => Molecular formula = C6H12O6 (Glucose).\n2. 1 mole CO2 at s.t.p. = 22.4 dm³. Moles CO2 = 11.2 / 22.4 = 0.5 mol. Ratio CaCO3 : CO2 is 1:1 => 0.5 mol CaCO3 needed. Mass = 0.5 * 100 g/mol = 50 g CaCO3.",
            "rubric": "10 marks. 5 pts per problem with clear molar conversions."
          },
          "quiz": [
            {
              "question": "How many moles are present in 18 g of water (H2O)? (H=1, O=16)",
              "options": [
                "0.5 mol",
                "1.0 mol",
                "2.0 mol",
                "18 mol"
              ],
              "answer": 1,
              "explanation": "Molar mass of H2O = 2(1) + 16 = 18 g/mol. n = 18 / 18 = 1.0 mol."
            },
            {
              "question": "What volume does 0.5 moles of Oxygen gas occupy at s.t.p.?",
              "options": [
                "5.6 dm³",
                "11.2 dm³",
                "22.4 dm³",
                "44.8 dm³"
              ],
              "answer": 1,
              "explanation": "V = n * 22.4 dm³ = 0.5 * 22.4 = 11.2 dm³."
            },
            {
              "question": "If a compound has empirical formula CH2 and molar mass 56 g/mol, what is its molecular formula?",
              "options": [
                "C2H4",
                "C3H6",
                "C4H8",
                "C5H10"
              ],
              "answer": 2,
              "explanation": "Empirical mass of CH2 = 12 + 2 = 14. n = 56 / 14 = 4 => (CH2)4 = C4H8."
            },
            {
              "question": "The constant 6.022 × 10²³ representing particles in 1 mole is named after:",
              "options": [
                "Dalton",
                "Avogadro",
                "Lavoisier",
                "Boyle"
              ],
              "answer": 1,
              "explanation": "Amedeo Avogadro, honoring his principle of equal gas volumes."
            }
          ]
        },
        {
          "id": "chem-sss1-t2-2",
          "title": "Acids, Bases, Salts & Volumetric Titration Analysis",
          "term": "Second Term • Week 4-6",
          "readTime": "11 min read",
          "objectives": [
            "Define acids and bases using Arrhenius and Brønsted-Lowry theories.",
            "Calculate pH, pOH, and hydrogen ion concentration [H⁺].",
            "Classify salts (normal, acid, basic, double, complex) and identify preparation methods.",
            "Apply the titration formula: (Ca * Va) / (Cb * Vb) = na / nb for volumetric analysis."
          ],
          "notes": "\n### 1. Acid-Base Definitions\n* **Arrhenius Theory:** Acid produces $\\text{H}^+$ (or $\\text{H}_3\\text{O}^+$) ions in aqueous solution; base produces $\\text{OH}^-$ ions.\n* **Brønsted-Lowry Theory:** Acid is a proton ($\\text{H}^+$) donor; base is a proton acceptor.\n* **pH Scale:** Measure of hydrogen ion concentration:\n  $$\\text{pH} = -\\log_{10}[\\text{H}^+], \\quad \\text{pOH} = -\\log_{10}[\\text{OH}^-], \\quad \\text{pH} + \\text{pOH} = 14$$\n\n### 2. Acid-Base Indicators\n| Indicator | Acid Color | Base Color | Working Range |\n| :--- | :--- | :--- | :--- |\n| **Methyl Orange** | Red / Pink | Yellow | pH 3.1 – 4.4 |\n| **Phenolphthalein** | Colorless | Pink | pH 8.3 – 10.0 |\n| **Litmus** | Red | Blue | pH 5.0 – 8.0 |\n\n### 3. Volumetric Titration Formula\n$$\\frac{C_a V_a}{C_b V_b} = \\frac{n_a}{n_b}$$\nWhere $C_a, C_b = \\text{molar concentration (mol/dm}^3)$, $V_a, V_b = \\text{titer volumes (cm}^3)$, $n_a, n_b = \\text{mole ratio from balanced equation}$.\n          ",
          "summary": [
            "Brønsted-Lowry: acids donate protons; bases accept protons.",
            "pH = -log[H+]; neutral pH = 7, acidic < 7, alkaline > 7.",
            "Titration equation: (Ca * Va) / (Cb * Vb) = na / nb."
          ],
          "flashcards": [
            {
              "q": "What is the pH of a 0.01 M HCl solution?",
              "a": "pH = -log10(10^-2) = 2."
            },
            {
              "q": "What color is phenolphthalein in an alkaline solution?",
              "a": "Pink (magenta)."
            },
            {
              "q": "Name a primary standard substance used in acid-base titration.",
              "a": "Anhydrous Sodium Carbonate (Na2CO3)."
            }
          ],
          "assignment": {
            "title": "Volumetric Titration Problem Set",
            "instructions": "Show balanced equations and full titration formulas.",
            "tasks": [
              "25.0 cm³ of 0.10 mol/dm³ NaOH neutralizes 20.0 cm³ of an unknown H2SO4 solution. [2NaOH + H2SO4 -> Na2SO4 + 2H2O]. Calculate the molarity of the acid solution.",
              "Calculate the pH of: a) 0.001 mol/dm³ HNO3, b) 0.01 mol/dm³ KOH."
            ],
            "sampleAnswer": "1. (Ca * Va) / (Cb * Vb) = na / nb => (Ca * 20.0) / (0.10 * 25.0) = 1 / 2 => 20 * Ca = 2.5 / 2 = 1.25 => Ca = 1.25 / 20 = 0.0625 mol/dm³.\n2. a) [H+] = 10^-3 => pH = 3. b) [OH-] = 10^-2 => pOH = 2 => pH = 14 - 2 = 12.",
            "rubric": "10 marks. 5 pts for titration equation, 5 pts for pH/pOH calculations."
          },
          "quiz": [
            {
              "question": "A solution with pH = 3 is:",
              "options": [
                "Strongly basic",
                "Weakly basic",
                "Acidic",
                "Neutral"
              ],
              "answer": 2,
              "explanation": "pH values below 7 indicate an acidic solution."
            },
            {
              "question": "Which indicator is best suited for titrating a strong acid against a weak base?",
              "options": [
                "Phenolphthalein",
                "Methyl Orange",
                "Universal indicator",
                "Starch solution"
              ],
              "answer": 1,
              "explanation": "Methyl orange changes color in the acidic pH range (3.1-4.4), matching the equivalence point of strong acid/weak base."
            },
            {
              "question": "According to Brønsted-Lowry, a base is a:",
              "options": [
                "Proton donor",
                "Proton acceptor",
                "Electron donor",
                "Hydroxide former only"
              ],
              "answer": 1,
              "explanation": "Brønsted-Lowry defines a base as a proton (H+) acceptor."
            },
            {
              "question": "A normal salt is formed when:",
              "options": [
                "All replaceable hydrogen ions of an acid are completely replaced by a metal",
                "Only part of the hydrogen ions are replaced",
                "An acid mixes with pure water",
                "A base is dissolved in ethanol"
              ],
              "answer": 0,
              "explanation": "Normal salts result from the complete neutralization of all replaceable acid hydrogen ions."
            }
          ]
        },
        {
          "id": "chem-sss1-t3-1",
          "title": "Redox Reactions, Oxidation Numbers & Electrolysis",
          "term": "Third Term • Week 1-3",
          "readTime": "11 min read",
          "objectives": [
            "Define oxidation and reduction in terms of oxygen, hydrogen, electron transfer, and oxidation numbers.",
            "Determine oxidation states of transition elements in complex ions.",
            "State Faraday's First and Second Laws of Electrolysis.",
            "Calculate mass of elements deposited during electrolysis: m = (M * I * t) / (n * F)."
          ],
          "notes": "\n### 1. Definitions of Redox\n* **Oxidation:** Loss of electrons (OIL: Oxidation Is Loss); increase in oxidation number; addition of oxygen.\n* **Reduction:** Gain of electrons (RIG: Reduction Is Gain); decrease in oxidation number; addition of hydrogen.\n* *Mnemonic:* **OIL RIG** (Oxidation Is Loss, Reduction Is Gain of electrons).\n\n### 2. Faraday's Laws of Electrolysis\n* **Faraday's First Law:** The mass ($m$) of a substance deposited or liberated at an electrode during electrolysis is directly proportional to the quantity of electricity ($Q = It$) that passes through the electrolyte:\n  $$m = Z Q = Z I t = \\frac{M \\times I \\times t}{n \\times F}$$\n  Where $M = \\text{molar mass}$, $I = \\text{current in amperes}$, $t = \\text{time in seconds}$, $n = \\text{charge / number of electrons transferred}$, $F = \\text{Faraday's constant} \\approx 96,500 \\text{ Coulombs/mol}$.\n\n> **🔬 Pioneer Spotlight: Michael Faraday (1791–1867)**\n> Faraday developed the fundamental terminology and mathematical laws of electrochemistry: Anode, Cathode, Electrode, Electrolyte, Ion, and the electrochemical equivalent!\n          ",
          "summary": [
            "OIL RIG: Oxidation Is Loss, Reduction Is Gain of electrons.",
            "Oxidation number increases in oxidation, decreases in reduction.",
            "Faraday's First Law: m = ZIt = (M * I * t) / (n * F), where F = 96,500 C/mol."
          ],
          "flashcards": [
            {
              "q": "What is the value of 1 Faraday?",
              "a": "96,500 Coulombs (the charge of 1 mole of electrons)."
            },
            {
              "q": "What is the oxidation number of Manganese in KMnO4?",
              "a": "+7 (K=+1, 4*O=-8 => Mn - 7 = 0 => Mn = +7)."
            },
            {
              "q": "At which electrode does reduction occur?",
              "a": "At the CATHODE (Red Cat: Reduction at Cathode)."
            }
          ],
          "assignment": {
            "title": "Redox & Quantitative Electrolysis",
            "instructions": "Show oxidation state equations and electrolysis substitutions.",
            "tasks": [
              "Determine the oxidation state of Chromium in: a) Cr2O7²⁻ (dichromate ion), b) CrO4²⁻.",
              "A steady current of 2.0 A is passed through a copper(II) sulfate (CuSO4) solution for 30 minutes. Calculate the mass of copper deposited at the cathode. (Cu = 64, 1 F = 96,500 C)."
            ],
            "sampleAnswer": "1. a) 2(Cr) + 7(-2) = -2 => 2Cr - 14 = -2 => 2Cr = 12 => Cr = +6. b) Cr + 4(-2) = -2 => Cr - 8 = -2 => Cr = +6.\n2. Cu²⁺ + 2e⁻ -> Cu (n = 2). t = 30 * 60 = 1800 s. Q = It = 2.0 * 1800 = 3600 C. m = (M * Q) / (n * F) = (64 * 3600) / (2 * 96500) = 230400 / 193000 = 1.19 g of Copper.",
            "rubric": "10 marks. 5 pts for oxidation numbers, 5 pts for Faraday's law calculation."
          },
          "quiz": [
            {
              "question": "In the reaction Zn + Cu²⁺ -> Zn²⁺ + Cu, which substance is OXIDIZED?",
              "options": [
                "Cu²⁺",
                "Zn",
                "Cu",
                "Zn²⁺"
              ],
              "answer": 1,
              "explanation": "Zinc loses 2 electrons (Zn -> Zn²⁺ + 2e⁻), so it is oxidized (OIL)."
            },
            {
              "question": "The charge of one mole of electrons is approximately:",
              "options": [
                "1.6 × 10⁻¹⁹ C",
                "96,500 C (1 Faraday)",
                "6.02 × 10²³ C",
                "22.4 C"
              ],
              "answer": 1,
              "explanation": "One Faraday = 96,500 Coulombs per mole of electrons."
            },
            {
              "question": "At the anode during electrolysis, the chemical process that occurs is:",
              "options": [
                "Reduction",
                "Oxidation",
                "Neutralization",
                "Polymerization"
              ],
              "answer": 1,
              "explanation": "Anode is the site of oxidation (An Ox: Anode = Oxidation; Red Cat: Reduction = Cathode)."
            },
            {
              "question": "What is the oxidation number of Sulfur in H2SO4?",
              "options": [
                "+2",
                "+4",
                "+6",
                "-2"
              ],
              "answer": 2,
              "explanation": "2(+1) + S + 4(-2) = 0 => 2 + S - 8 = 0 => S = +6."
            }
          ]
        },
        {
          "id": "chem-sss1-t3-2",
          "title": "Introduction to Organic Chemistry: Hydrocarbons (Alkanes, Alkenes & Alkynes)",
          "term": "Third Term • Week 4-6",
          "readTime": "11 min read",
          "objectives": [
            "Explain the unique catenation and tetravalency of carbon.",
            "Apply IUPAC nomenclature to alkanes, alkenes, and alkynes.",
            "Distinguish between saturated and unsaturated hydrocarbons.",
            "Describe structural isomerism and write balanced combustion/addition equations."
          ],
          "notes": "\n### 1. The Chemistry of Carbon\nCarbon forms millions of compounds due to:\n* **Tetravalency:** Carbon has 4 valence electrons and forms 4 stable covalent bonds.\n* **Catenation:** The unique ability of carbon atoms to form strong C-C covalent bonds in long chains, branched structures, and rings.\n\n### 2. Homologous Series of Hydrocarbons\n| Series | General Formula | Functional Group | Suffix | Example |\n| :--- | :--- | :--- | :--- | :--- |\n| **Alkanes** | $\\text{C}_n\\text{H}_{2n+2}$ | Single $\\text{C}-\\text{C}$ (Saturated) | *-ane* | Methane ($\\text{CH}_4$), Ethane ($\\text{C}_2\\text{H}_6$) |\n| **Alkenes** | $\\text{C}_n\\text{H}_{2n}$ | Double $\\text{C}=\\text{C}$ (Unsaturated) | *-ene* | Ethene ($\\text{C}_2\\text{H}_4$) |\n| **Alkynes** | $\\text{C}_n\\text{H}_{2n-2}$ | Triple $\\text{C}\\equiv\\text{C}$ (Unsaturated) | *-yne* | Ethyne ($\\text{C}_2\\text{H}_2$, Acetylene) |\n\n### 3. Chemical Reactions\n* **Combustion:** $\\text{CH}_4 + 2\\text{O}_2 \\longrightarrow \\text{CO}_2 + 2\\text{H}_2\\text{O} + \\text{Heat}$\n* **Substitution (Alkanes):** $\\text{CH}_4 + \\text{Cl}_2 \\xrightarrow{\\text{UV Light}} \\text{CH}_3\\text{Cl} + \\text{HCl}$\n* **Addition Reactions (Alkenes/Alkynes):** Ethene decolourizes reddish-brown Bromine water, turning it colorless:\n  $$\\text{CH}_2=\\text{CH}_2 + \\text{Br}_2 \\longrightarrow \\text{CH}_2\\text{Br}-\\text{CH}_2\\text{Br} \\quad (1,2-\\text{dibromoethane})$$\n          ",
          "summary": [
            "Alkanes (CnH2n+2) are saturated; Alkenes (CnH2n) and Alkynes (CnH2n-2) are unsaturated.",
            "Alkanes undergo substitution reactions; alkenes undergo rapid addition reactions.",
            "Bromine water test: Alkenes decolorize bromine water immediately; alkanes do not in the dark."
          ],
          "flashcards": [
            {
              "q": "What is the general formula of alkenes?",
              "a": "CnH2n."
            },
            {
              "q": "What chemical test distinguishes an alkane from an alkene?",
              "a": "Bromine water test: Alkenes decolourize bromine water from reddish-brown to colorless; alkanes do not."
            },
            {
              "q": "What is isomerism?",
              "a": "Compounds having the same molecular formula but different structural arrangements."
            }
          ],
          "assignment": {
            "title": "IUPAC Nomenclature & Hydrocarbons",
            "instructions": "Draw structural formulas and provide IUPAC names.",
            "tasks": [
              "Draw and name all structural isomers of butane (C4H10).",
              "Write the balanced equation for the complete combustion of propane (C3H8) in excess oxygen."
            ],
            "sampleAnswer": "1. Two isomers: n-butane (CH3-CH2-CH2-CH3) and 2-methylpropane / isobutane (CH3-CH(CH3)-CH3).\n2. C3H8 + 5O2 -> 3CO2 + 4H2O.",
            "rubric": "10 marks. 5 pts for structural isomers, 5 pts for combustion balance."
          },
          "quiz": [
            {
              "question": "What is the molecular formula of an alkane containing 5 carbon atoms?",
              "options": [
                "C5H10",
                "C5H12",
                "C5H8",
                "C5H14"
              ],
              "answer": 1,
              "explanation": "Alkanes follow CnH2n+2: For n = 5, H = 2(5) + 2 = 12 => C5H12 (Pentane)."
            },
            {
              "question": "The decolourization of reddish-brown bromine water by ethene is an example of a(n):",
              "options": [
                "Substitution reaction",
                "Addition reaction",
                "Esterification",
                "Neutralization"
              ],
              "answer": 1,
              "explanation": "Unsaturated double bonds undergo addition of halogens across the pi bond."
            },
            {
              "question": "The special property of carbon to bond with itself in long chains is called:",
              "options": [
                "Allotropy",
                "Catenation",
                "Hybridization",
                "Electronegativity"
              ],
              "answer": 1,
              "explanation": "Catenation is the linkage of atoms of the same element into longer chains."
            },
            {
              "question": "Which of the following hydrocarbons is SATURATED?",
              "options": [
                "Ethene",
                "Ethyne",
                "Propane",
                "Benzene"
              ],
              "answer": 2,
              "explanation": "Propane is an alkane possessing only single C-C and C-H sigma bonds."
            }
          ]
        }
      ]
    }
  },
  "Biology": {
    "icon": "🔬",
    "category": "science",
    "description": "Complete senior secondary biology: Cell biology, taxonomy, nutrition, transport, respiration, ecology, reproduction, genetics & evolution.",
    "topics": {
      "SSS 1": [
        {
          "id": "bio-sss1-t1-1",
          "title": "Cell Structure, Organelles & Organization of Life",
          "term": "First Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "State the Cell Theory formulated by Schleiden, Schwann, and Virchow.",
            "Compare plant vs. animal cells in structure and organelle composition.",
            "Analyze the specialized functions of cellular organelles (mitochondria, ribosomes, chloroplasts, lysosomes).",
            "Trace the five levels of organization of life."
          ],
          "notes": "\n### 1. The Classical Cell Theory\n1. All living organisms are composed of one or more cells.\n2. The cell is the structural and functional unit of life.\n3. All cells arise from pre-existing cells through cell division (*omnis cellula e cellula*).\n\n### 2. Comparison: Plant vs. Animal Cells\n* **Plant Cells:** Possess rigid cellulose cell wall, chloroplasts containing chlorophyll, large permanent central sap vacuole, store starch.\n* **Animal Cells:** Lack cell walls (plasma membrane only), lack chloroplasts, contain centrioles, small temporary vacuoles, store glycogen.\n\n### 3. Organelle Functions\n* **Mitochondria:** Powerhouse of the cell; site of aerobic cellular respiration generating ATP.\n* **Ribosomes:** Non-membrane-bound sites of protein synthesis (mRNA translation).\n* **Chloroplasts:** Sites of photosynthesis converting solar energy to chemical glucose.\n* **Lysosomes:** Suicide bags containing hydrolytic digestive enzymes.\n\n### 4. Hierarchical Levels of Organization\n$$\\text{Cell} \\longrightarrow \\text{Tissue} \\longrightarrow \\text{Organ} \\longrightarrow \\text{System} \\longrightarrow \\text{Organism}$$\n* *Example (Human):* Muscle cell $\\rightarrow$ Muscle tissue $\\rightarrow$ Heart $\\rightarrow$ Circulatory system $\\rightarrow$ Human.\n          ",
          "summary": [
            "Cell Theory: all life consists of cells derived from pre-existing cells.",
            "Plant cells have cellulose walls, chloroplasts, and large vacuoles; animal cells do not.",
            "Hierarchy: Cell -> Tissue -> Organ -> Organ System -> Organism."
          ],
          "flashcards": [
            {
              "q": "Why is the mitochondrion termed the powerhouse of the cell?",
              "a": "Because it generates cellular energy in the form of ATP via aerobic respiration."
            },
            {
              "q": "What carbohydrate forms the plant cell wall?",
              "a": "Cellulose."
            },
            {
              "q": "Name an example of an organ in plants.",
              "a": "A leaf, flower, stem, or root."
            }
          ],
          "assignment": {
            "title": "Cell Biology & Organization",
            "instructions": "Describe organelle mechanisms and tissue organization.",
            "tasks": [
              "Explain why an animal cell hemolyzes (bursts) in pure distilled water, while a plant cell becomes turgid.",
              "Outline the 5 levels of biological organization with botanical and zoological examples."
            ],
            "sampleAnswer": "1. Distilled water is hypotonic. Water enters via osmosis. Animal cells lack a cell wall and burst (lysis). Plant cells have a rigid cellulose cell wall that exerts wall pressure opposing turgor pressure, keeping the cell turgid without bursting.\n2. Plant: Guard cell -> Epidermal tissue -> Leaf -> Shoot system -> Tree. Animal: Neuron -> Nervous tissue -> Brain -> Nervous system -> Human.",
            "rubric": "10 marks. 5 pts for osmotic pressure explanation, 5 pts for biological hierarchy."
          },
          "quiz": [
            {
              "question": "Which organelle synthesizes ATP via cellular respiration?",
              "options": [
                "Ribosome",
                "Mitochondrion",
                "Lysosome",
                "Golgi apparatus"
              ],
              "answer": 1,
              "explanation": "Mitochondria produce ATP during aerobic cellular respiration."
            },
            {
              "question": "A plant cell placed in a hypotonic solution becomes:",
              "options": [
                "Plasmolyzed",
                "Flaccid",
                "Turgid",
                "Crenated"
              ],
              "answer": 2,
              "explanation": "Water enters the vacuole and the cellulose wall exerts wall pressure, making the plant cell turgid."
            },
            {
              "question": "Which of the following is an organ?",
              "options": [
                "Epithelium",
                "Neuron",
                "Kidney",
                "Blood"
              ],
              "answer": 2,
              "explanation": "The kidney is an organ made of multiple specialized tissues."
            },
            {
              "question": "Hydrolytic digestive enzymes are stored in:",
              "options": [
                "Centrioles",
                "Lysosomes",
                "Vacuoles",
                "Peroxisomes"
              ],
              "answer": 1,
              "explanation": "Lysosomes carry digestive hydrolytic enzymes."
            }
          ]
        },
        {
          "id": "bio-sss1-t1-2",
          "title": "Nutrition & Transport Systems in Living Organisms",
          "term": "First Term • Week 4-6",
          "readTime": "10 min read",
          "objectives": [
            "Differentiate between Autotrophic (Photosynthetic) and Heterotrophic nutrition.",
            "Write the overall balanced equation for photosynthesis.",
            "Compare xylem (water/minerals) and phloem (translocation of food) in vascular plants.",
            "Analyze the mammalian circulatory system: double circulation, heart chambers, and blood cells."
          ],
          "notes": "\n### 1. Autotrophic vs. Heterotrophic Nutrition\n* **Photosynthesis Equation:**\n  $$6\\text{CO}_2 + 6\\text{H}_2\\text{O} \\xrightarrow[\\text{Chlorophyll}]{\\text{Sunlight}} \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$\n* **Light Reaction (Granum):** Photolysis of water yielding $\\text{H}^+$, electrons, and releasing $\\text{O}_2$.\n* **Dark Reaction (Stroma):** Reduction of $\\text{CO}_2$ using ATP and NADPH into glucose (Calvin Cycle).\n\n### 2. Plant Vascular Transport\n* **Xylem:** Dead, hollow lignified vessels transporting water and dissolved mineral salts unidirectionally upwards from roots to leaves via transpiration pull, root pressure, and capillary action.\n* **Phloem:** Living sieve tubes and companion cells translocating manufactured sucrose and amino acids bidirectionally from source (leaves) to sinks (roots, fruits).\n\n### 3. Mammalian Circulatory System\n* **Double Circulation:** Blood passes through the 4-chambered heart twice during each complete circuit:\n  1. *Pulmonary Circulation:* Right ventricle $\\rightarrow$ Pulmonary artery $\\rightarrow$ Lungs $\\rightarrow$ Pulmonary veins $\\rightarrow$ Left atrium.\n  2. *Systemic Circulation:* Left ventricle $\\rightarrow$ Aorta $\\rightarrow$ Body tissues $\\rightarrow$ Vena cava $\\rightarrow$ Right atrium.\n          ",
          "summary": [
            "Photosynthesis converts CO2 and H2O into glucose and O2.",
            "Xylem carries water and minerals upwards; phloem translocates organic nutrients bidirectionally.",
            "Mammals have double circulation through a four-chambered heart."
          ],
          "flashcards": [
            {
              "q": "What vessel carries oxygenated blood from the lungs to the heart?",
              "a": "Pulmonary vein."
            },
            {
              "q": "What tissue conducts manufactured food in plants?",
              "a": "Phloem."
            },
            {
              "q": "What is photolysis of water?",
              "a": "The splitting of water molecules into hydrogen ions, electrons, and oxygen using light energy in the chloroplast grana."
            }
          ],
          "assignment": {
            "title": "Transport Mechanisms & Photosynthesis",
            "instructions": "Detail biological transport and circulation routes.",
            "tasks": [
              "Outline three structural differences between an artery and a vein.",
              "Trace the exact pathway of a red blood cell from the right ventricle until it reaches the brain."
            ],
            "sampleAnswer": "1. Arteries: thick muscular walls, narrow lumen, carry oxygenated blood away from heart under high pressure (no valves except semilunar). Veins: thin walls, wide lumen, carry deoxygenated blood to heart under low pressure with pocket valves.\n2. Right ventricle -> Pulmonary artery -> Lungs (oxygenated) -> Pulmonary veins -> Left atrium -> Left ventricle -> Aorta -> Carotid artery -> Brain capillaries.",
            "rubric": "10 marks. 5 pts for vessel table, 5 pts for circulatory pathway."
          },
          "quiz": [
            {
              "question": "The tissue responsible for transporting water and dissolved minerals from roots to leaves is:",
              "options": [
                "Phloem",
                "Xylem",
                "Cambium",
                "Cortex"
              ],
              "answer": 1,
              "explanation": "Xylem transports water and dissolved mineral salts."
            },
            {
              "question": "Oxygen released during photosynthesis originates from the splitting of:",
              "options": [
                "Carbon dioxide (CO2)",
                "Water (H2O)",
                "Glucose",
                "Chlorophyll"
              ],
              "answer": 1,
              "explanation": "Photolysis in the light reaction splits H2O molecules, liberating O2 gas."
            },
            {
              "question": "The chamber of the mammalian heart with the thickest muscular wall is the:",
              "options": [
                "Right atrium",
                "Right ventricle",
                "Left atrium",
                "Left ventricle"
              ],
              "answer": 3,
              "explanation": "The left ventricle pumps blood at high pressure throughout the entire systemic body circulation."
            },
            {
              "question": "Which blood vessels possess pocket valves to prevent the backflow of blood?",
              "options": [
                "Arteries",
                "Arterioles",
                "Veins",
                "Capillaries"
              ],
              "answer": 2,
              "explanation": "Veins contain valves to ensure unidirectional flow of blood under low pressure."
            }
          ]
        },
        {
          "id": "bio-sss1-t2-1",
          "title": "Respiration, Excretion & Homeostasis",
          "term": "Second Term • Week 1-3",
          "readTime": "11 min read",
          "objectives": [
            "Compare Aerobic and Anaerobic cellular respiration with energy yields.",
            "Analyze the structure and function of the mammalian nephron in the kidney.",
            "Explain ultrafiltration, selective reabsorption, and urine formation.",
            "Define homeostasis and examine thermoregulation by the mammalian skin."
          ],
          "notes": "\n### 1. Cellular Respiration\n* **Aerobic Respiration:** Complete breakdown of glucose in the presence of oxygen yielding 36-38 ATP:\n  $$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\longrightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + 38\\text{ ATP}$$\n  - *Glycolysis:* in cytoplasm (glucose $\\rightarrow$ pyruvate, 2 ATP).\n  - *Krebs Cycle & Electron Transport Chain:* inside mitochondria (36 ATP).\n* **Anaerobic Respiration (Fermentation):** In yeast: yields ethanol + $\\text{CO}_2$ + 2 ATP; In human muscles (during oxygen debt): yields lactic acid + 2 ATP.\n\n### 2. Excretion & The Kidney Nephron\nExcretion is the removal of metabolic waste products from the body.\n* **Ultrafiltration:** High hydrostatic pressure in the glomerulus forces water, glucose, urea, and salts through the Bowman's capsule into the renal tubule (plasma proteins and blood cells are retained).\n* **Selective Reabsorption:** In the Proximal Convoluted Tubule, 100% of glucose and amino acids, plus water and salts, are reabsorbed into blood capillaries by active transport and osmosis.\n* **Loop of Henle & Collecting Duct:** Osmoregulation controlled by Antidiuretic Hormone (ADH / Vasopressin).\n\n### 3. Homeostasis: Skin Thermoregulation\n* **In Hot Environments:** Vasodilation (arterioles dilate, blood flows close to skin surface releasing heat); sweating (evaporative cooling); hair lies flat.\n* **In Cold Environments:** Vasoconstriction (arterioles constrict, conserving core heat); shivering (rapid involuntary muscle contractions generate heat); goosebumps (hair erects trapping an insulating layer of still air).\n          ",
          "summary": [
            "Aerobic respiration generates 36-38 ATP in mitochondria; anaerobic yields 2 ATP.",
            "Kidney nephron functions by ultrafiltration in Bowman's capsule and selective reabsorption in renal tubules.",
            "Homeostasis maintains stable internal environment; skin regulates temperature via vasodilation, vasoconstriction, and sweating."
          ],
          "flashcards": [
            {
              "q": "What hormone regulates water reabsorption in the kidney collecting duct?",
              "a": "Antidiuretic Hormone (ADH / Vasopressin)."
            },
            {
              "q": "What substance is completely reabsorbed from glomerular filtrate in a healthy person?",
              "a": "Glucose."
            },
            {
              "q": "What is vasodilation?",
              "a": "The widening of subcutaneous skin arterioles to increase blood flow and heat loss through radiation."
            }
          ],
          "assignment": {
            "title": "Renal Function & Cellular Respiration",
            "instructions": "Detail kidney nephron mechanisms and respiration phases.",
            "tasks": [
              "Outline the three sequential steps of urine formation in the mammalian kidney.",
              "Why does the presence of glucose in the urine of a person indicate diabetes mellitus?"
            ],
            "sampleAnswer": "1. Ultrafiltration (glomerulus and Bowman's capsule), Selective Reabsorption (proximal convoluted tubule), Tubular Secretion/Osmoregulation (distal tubule and collecting duct).\n2. In diabetes mellitus, blood glucose exceeds the renal threshold capacity of the proximal tubule carrier proteins, so excess unreabsorbed glucose spills into urine.",
            "rubric": "10 marks. 5 pts for renal filtration steps, 5 pts for clinical diabetes explanation."
          },
          "quiz": [
            {
              "question": "Where in the eukaryotic cell does the Krebs cycle take place?",
              "options": [
                "Cytoplasm",
                "Mitochondrial matrix",
                "Ribosome",
                "Nucleolus"
              ],
              "answer": 1,
              "explanation": "The Krebs cycle occurs in the mitochondrial matrix."
            },
            {
              "question": "In a healthy human, which of the following is filtered out of the glomerulus but COMPLETELY reabsorbed?",
              "options": [
                "Urea",
                "Glucose",
                "Uric acid",
                "Red blood cells"
              ],
              "answer": 1,
              "explanation": "100% of glucose is selectively reabsorbed in the proximal convoluted tubule."
            },
            {
              "question": "The response of the skin to an excessively COLD environment includes:",
              "options": [
                "Vasodilation of arterioles",
                "Vasoconstriction and shivering",
                "Profuse sweating",
                "Lowering of body hairs"
              ],
              "answer": 1,
              "explanation": "Vasoconstriction shunts blood away from skin surface, while shivering generates metabolic heat."
            },
            {
              "question": "What is the net ATP yield of anaerobic glycolysis per glucose molecule?",
              "options": [
                "2 ATP",
                "4 ATP",
                "36 ATP",
                "38 ATP"
              ],
              "answer": 0,
              "explanation": "Anaerobic glycolysis yields a net of 2 ATP molecules."
            }
          ]
        },
        {
          "id": "bio-sss1-t2-2",
          "title": "Ecology: Ecosystem Dynamics & Energy Flow",
          "term": "Second Term • Week 4-6",
          "readTime": "10 min read",
          "objectives": [
            "Define ecological terms: Biosphere, Ecosystem, Habitat, Community, Population, and Niche.",
            "Construct terrestrial and aquatic Food Chains and Food Webs.",
            "Analyze trophic levels and the 10% ecological energy transfer rule.",
            "Describe the Carbon and Nitrogen biogeochemical nutrient cycles."
          ],
          "notes": "\n### 1. Ecological Hierarchy & Definitions\n* **Ecosystem:** A self-sustaining biological community of interacting organisms (biotic) and their physical non-living environment (abiotic).\n* **Ecological Niche:** The specific functional role and status of an organism within its community.\n\n### 2. Food Chains, Webs & Energy Pyramids\n* **Trophic Levels:**\n  $$\\text{Primary Producers (Plants)} \\longrightarrow \\text{Primary Consumers (Herbivores)} \\longrightarrow \\text{Secondary Consumers (Carnivores)} \\longrightarrow \\text{Tertiary Consumers (Apex Predators)}$$\n* **The 10% Energy Transfer Law:** Only about $10\\%$ of energy is transferred from one trophic level to the next; $90\\%$ is lost as metabolic heat, respiration, and excretion. This is why food chains rarely exceed 4-5 trophic levels.\n\n### 3. The Nitrogen Cycle\nAtmospheric nitrogen ($\\text{N}_2$, $78\\%$) cannot be used directly by plants:\n1. **Nitrogen Fixation:** Symbiotic bacteria (*Rhizobium* in root nodules of legumes) and free-living bacteria (*Azotobacter*) convert $\\text{N}_2$ into ammonium ($\\text{NH}_4^+$).\n2. **Nitrification:** *Nitrosomonas* converts ammonium to nitrites ($\\text{NO}_2^-$); *Nitrobacter* converts nitrites to nitrates ($\\text{NO}_3^-$) which plants absorb.\n3. **Denitrification:** *Pseudomonas denitrificans* converts soil nitrates back into atmospheric $\\text{N}_2$ gas under waterlogged anaerobic conditions.\n          ",
          "summary": [
            "Energy flows unidirectionally through food chains, with ~90% lost at each trophic level.",
            "Food webs show interconnected feeding relationships in an ecosystem.",
            "Nitrogen cycle relies on Rhizobium (fixation), Nitrosomonas/Nitrobacter (nitrification), and Pseudomonas (denitrification)."
          ],
          "flashcards": [
            {
              "q": "What percentage of energy transfers between consecutive trophic levels?",
              "a": "Approximately 10%."
            },
            {
              "q": "What bacteria convert nitrites to nitrates in soil?",
              "a": "Nitrobacter."
            },
            {
              "q": "What is an ecological niche?",
              "a": "The functional role, habitat, and resource utilization of an organism in an ecosystem."
            }
          ],
          "assignment": {
            "title": "Ecosystem Food Web & Nitrogen Cycle",
            "instructions": "Construct food webs and diagram nutrient cycles.",
            "tasks": [
              "Construct a 4-level food chain for a freshwater pond ecosystem and calculate the energy reaching the tertiary consumer if phytoplankton produces 10,000 kJ.",
              "Explain the role of Rhizobium bacteria in leguminous crop rotation in Nigerian agriculture."
            ],
            "sampleAnswer": "1. Phytoplankton (10,000 kJ) -> Zooplankton (1,000 kJ) -> Small fish (100 kJ) -> Tilapia / Kingfisher (10 kJ). Only 10 kJ reaches the tertiary consumer.\n2. Rhizobium in root nodules fixes atmospheric nitrogen into nitrates, naturally enriching soil fertility without expensive chemical fertilizers.",
            "rubric": "10 marks. 5 pts for energy calculation, 5 pts for Rhizobium agricultural significance."
          },
          "quiz": [
            {
              "question": "If producers synthesize 20,000 Joules of energy, how much energy is available to secondary consumers?",
              "options": [
                "20,000 J",
                "2,000 J",
                "200 J",
                "20 J"
              ],
              "answer": 2,
              "explanation": "Producers (20,000 J) -> Primary consumers (2,000 J) -> Secondary consumers (200 J)."
            },
            {
              "question": "The bacterium responsible for converting ammonia into nitrites in the soil is:",
              "options": [
                "Rhizobium",
                "Nitrosomonas",
                "Nitrobacter",
                "Azotobacter"
              ],
              "answer": 1,
              "explanation": "Nitrosomonas oxidizes ammonia into nitrites (NO2-)."
            },
            {
              "question": "Why do food chains rarely have more than five trophic levels?",
              "options": [
                "Predators eat all herbivores",
                "Excessive energy loss at each trophic level leaves insufficient energy",
                "Animals refuse to eat",
                "Oxygen runs out"
              ],
              "answer": 1,
              "explanation": "90% energy loss at each step leaves insufficient energy to sustain viable populations at higher levels."
            },
            {
              "question": "Decomposers (bacteria and fungi) in an ecosystem are essential because they:",
              "options": [
                "Compete with primary producers",
                "Recycle nutrients back into the soil and atmosphere",
                "Produce sunlight",
                "Stop food chains"
              ],
              "answer": 1,
              "explanation": "Decomposers break down dead organic matter, recycling vital carbon and nitrogen."
            }
          ]
        },
        {
          "id": "bio-sss1-t3-1",
          "title": "Genetics & Heredity: Mendelian Inheritance & Monohybrid Crosses",
          "term": "Third Term • Week 1-3",
          "readTime": "11 min read",
          "objectives": [
            "Define genetic terms: Gene, Allele, Genotype, Phenotype, Homozygous, Heterozygous.",
            "State Mendel's First Law (Law of Segregation).",
            "Perform monohybrid genetic crosses using Punnett Squares to predict phenotypic ratios.",
            "Analyze co-dominance and human ABO blood group inheritance."
          ],
          "notes": "\n### 1. Fundamental Genetic Terminology\n* **Gene:** Basic unit of heredity located on specific loci of chromosomes.\n* **Allele:** Alternative forms of the same gene (e.g., $T$ for tallness, $t$ for dwarfness).\n* **Genotype:** The genetic constitution of an organism ($TT, Tt, tt$).\n* **Phenotype:** Physical observable characteristics ($Tall, Dwarf$).\n* **Homozygous:** Having two identical alleles ($TT$ = homozygous dominant; $tt$ = homozygous recessive).\n* **Heterozygous:** Having two different alleles ($Tt$).\n\n### 2. Mendel's First Law (Law of Segregation)\n> *\"The characteristics of an organism are determined by pairs of alleles which segregate during gamete formation, so that each gamete carries only one allele of the pair.\"*\n* **Monohybrid Cross (Tall $\\times$ Dwarf):**\n  - Parents ($P_1$): $TT \\times tt \\implies$ Gametes: $T, T \\times t, t$.\n  - First Filial Generation ($F_1$): $100\\% \\text{ Tt}$ (All Phenotypically Tall).\n  - Selfing $F_1$ ($Tt \\times Tt$):\n    - Genotypic Ratio: $1 TT : 2 Tt : 1 tt$ ($1:2:1$).\n    - Phenotypic Ratio: $3 \\text{ Tall} : 1 \\text{ Dwarf}$ ($3:1$).\n\n### 3. Human ABO Blood Group Inheritance (Multiple Alleles & Co-dominance)\nGoverned by three alleles: $I^A, I^B, I^O$:\n* Blood Group A: $I^A I^A$ or $I^A I^O$\n* Blood Group B: $I^B I^B$ or $I^B I^O$\n* Blood Group AB: $I^A I^B$ (Co-dominant: both antigens expressed)\n* Blood Group O: $I^O I^O$ (Universal donor)\n\n> **🔬 Pioneer Spotlight: Gregor Johann Mendel (1822–1884)**\n> Known as the 'Father of Modern Genetics', Mendel discovered the laws of biological inheritance through painstaking cross-breeding experiments with 28,000 pea plants in his Austrian monastery garden!\n          ",
          "summary": [
            "Mendel's Law of Segregation: alleles separate during gamete formation.",
            "Monohybrid F2 phenotypic ratio is 3:1 (dominant to recessive); genotypic ratio is 1:2:1.",
            "ABO blood groups demonstrate multiple alleles and co-dominance (IA and IB)."
          ],
          "flashcards": [
            {
              "q": "What phenotypic ratio is obtained from an F1 monohybrid cross (Tt x Tt)?",
              "a": "3 : 1 (3 Dominant : 1 Recessive)."
            },
            {
              "q": "What blood group is the universal recipient?",
              "a": "Blood Group AB (has both A and B antigens, no antibodies)."
            },
            {
              "q": "Who is celebrated as the Father of Modern Genetics?",
              "a": "Gregor Johann Mendel."
            }
          ],
          "assignment": {
            "title": "Mendelian Cross & Pedigree Analysis",
            "instructions": "Show Punnett squares and percentage probabilities.",
            "tasks": [
              "A heterozygous normal man (Carrier for Albinism, Aa) marries an albino woman (aa). Use a Punnett square to determine the genotypic and phenotypic ratios of their children.",
              "A man with blood group A (IA IO) marries a woman with blood group B (IB IO). Show all possible blood groups their children can inherit."
            ],
            "sampleAnswer": "1. Punnett square (Aa x aa): Gametes A, a and a, a. Offspring: 2 Aa (heterozygous normal) and 2 aa (albino). Ratio: 1 Normal : 1 Albino (50% chance of an albino child).\n2. Gametes: IA, IO and IB, IO. Offspring: IA IB (Group AB), IA IO (Group A), IB IO (Group B), IO IO (Group O). All 4 blood groups are possible (25% each).",
            "rubric": "10 marks. 5 pts per Punnett square with complete genotypes."
          },
          "quiz": [
            {
              "question": "The observable physical expression of a gene is termed the:",
              "options": [
                "Genotype",
                "Phenotype",
                "Karyotype",
                "Allele"
              ],
              "answer": 1,
              "explanation": "Phenotype refers to physical observable traits resulting from genotype and environment."
            },
            {
              "question": "In a cross between two heterozygous tall pea plants (Tt × Tt), the percentage of dwarf plants is:",
              "options": [
                "0%",
                "25%",
                "50%",
                "75%"
              ],
              "answer": 1,
              "explanation": "Monohybrid cross produces 1 TT, 2 Tt, 1 tt => 1/4 (25%) are homozygous recessive dwarf (tt)."
            },
            {
              "question": "Which human blood group exemplifies co-dominance?",
              "options": [
                "Group A",
                "Group B",
                "Group AB",
                "Group O"
              ],
              "answer": 2,
              "explanation": "In Group AB, both IA and IB alleles are expressed equally without blending."
            },
            {
              "question": "An organism with two identical alleles for a particular trait is described as:",
              "options": [
                "Heterozygous",
                "Homozygous",
                "Hybrid",
                "Polygenic"
              ],
              "answer": 1,
              "explanation": "Homozygous denotes identical alleles (e.g., TT or tt)."
            }
          ]
        },
        {
          "id": "bio-sss1-t3-2",
          "title": "DNA Structure, Mutation & Theories of Evolution",
          "term": "Third Term • Week 4-6",
          "readTime": "11 min read",
          "objectives": [
            "Describe the Watson-Crick-Franklin double helix model of DNA.",
            "Apply Chargaff's base pairing rules: Adenine with Thymine (A=T), Guanine with Cytosine (G≡C).",
            "Differentiate between Gene mutations (Sickle cell anemia) and Chromosomal mutations (Down's syndrome).",
            "Compare Lamarck's and Darwin's theories of organic evolution."
          ],
          "notes": "\n### 1. Molecular Structure of DNA\nDNA (Deoxyribonucleic Acid) consists of two antiparallel polynucleotide chains wound into a double helix:\n* **Nucleotide Subunits:**\n  1. Deoxyribose sugar\n  2. Phosphate group\n  3. Nitrogenous bases:\n     - **Adenine ($A$)** pairs with **Thymine ($T$)** via 2 hydrogen bonds: $A = T$.\n     - **Guanine ($G$)** pairs with **Cytosine ($C$)** via 3 hydrogen bonds: $G \\equiv C$.\n\n### 2. Mutations\nA sudden, heritable change in the nucleotide sequence of DNA or chromosome number:\n* **Point (Gene) Mutation:** Substitution, insertion, or deletion of a single base pair. *Example:* Sickle Cell Anemia (glutamic acid replaced by valine in hemoglobin beta chain).\n* **Chromosomal Aberration:** Non-disjunction causing aneuploidy. *Example:* Down's Syndrome (Trisomy 21: 47 chromosomes instead of 46).\n\n### 3. Theories of Evolution\n* **Jean-Baptiste Lamarck (1809):** Theory of Use and Disuse, and Inheritance of Acquired Characteristics (disproven by Weismann's germplasm experiments).\n* **Charles Darwin (1859):** Theory of Evolution by **Natural Selection**:\n  1. Overproduction of offspring.\n  2. Struggle for existence due to limited resources.\n  3. Variations exist within species.\n  4. Survival of the fittest (favorable variations survive and reproduce).\n  5. Origin of new species through environmental adaptation.\n\n> **🔬 Pioneer Spotlight: Rosalind Franklin (1920–1958) & Charles Darwin (1809–1882)**\n> Franklin captured the critical X-ray diffraction Photo 51 proving DNA's double helix. Darwin published *On the Origin of Species*, establishing that all species have descended over time from common ancestors through natural selection!\n          ",
          "summary": [
            "DNA double helix has complementary base pairs: A=T (2 H-bonds) and G≡C (3 H-bonds).",
            "Sickle cell anemia is a point mutation in the hemoglobin gene; Down's syndrome is Trisomy 21.",
            "Darwinian evolution operates through variation, struggle for existence, and natural selection of favorable adaptations."
          ],
          "flashcards": [
            {
              "q": "What base pairs with Adenine in DNA?",
              "a": "Thymine (with 2 hydrogen bonds)."
            },
            {
              "q": "What is the genetic cause of sickle cell anemia?",
              "a": "A point mutation where valine replaces glutamic acid at position 6 of the beta-globin chain."
            },
            {
              "q": "Who proposed the Theory of Natural Selection?",
              "a": "Charles Darwin in 1859."
            }
          ],
          "assignment": {
            "title": "Molecular Genetics & Evolutionary Theories",
            "instructions": "Detail DNA base pairing and compare evolutionary theories.",
            "tasks": [
              "A DNA strand has the base sequence: 5'-A-T-G-C-C-A-T-T-G-3'. Write the complementary base sequence.",
              "Compare Lamarck's and Darwin's explanations for how the giraffe evolved a long neck."
            ],
            "sampleAnswer": "1. Complementary strand: 3'-T-A-C-G-G-T-A-A-C-5'.\n2. Lamarck: Ancestral short-necked giraffes stretched their necks to reach high tree foliage; this acquired elongation was passed to offspring. Darwin: Ancestral giraffes had natural variations in neck length; during food scarcity, longer-necked giraffes survived, reproduced, and passed the trait on, while short-necked giraffes died out.",
            "rubric": "10 marks. 5 pts for complementary base sequence, 5 pts for Lamarck vs. Darwin comparison."
          },
          "quiz": [
            {
              "question": "If a DNA sample contains 30% Adenine, what percentage of Cytosine does it contain?",
              "options": [
                "30%",
                "20%",
                "40%",
                "70%"
              ],
              "answer": 1,
              "explanation": "A = T = 30% (Total 60%). Remaining G + C = 40% => Cytosine = 20% (Chargaff's Rule)."
            },
            {
              "question": "The genetic disorder caused by Trisomy of chromosome 21 is:",
              "options": [
                "Hemophilia",
                "Down's syndrome",
                "Turner's syndrome",
                "Sickle cell anemia"
              ],
              "answer": 1,
              "explanation": "Down's syndrome is caused by an extra chromosome 21 (Trisomy 21)."
            },
            {
              "question": "Whose X-ray diffraction photograph 'Photo 51' was vital in determining the double helical structure of DNA?",
              "options": [
                "Gregor Mendel",
                "Rosalind Franklin",
                "Marie Curie",
                "Louis Pasteur"
              ],
              "answer": 1,
              "explanation": "Rosalind Franklin produced Photo 51 using X-ray crystallography."
            },
            {
              "question": "According to Charles Darwin, the primary driving force behind biological evolution is:",
              "options": [
                "Use and disuse of organs",
                "Natural selection of advantageous variations",
                "Spontaneous generation",
                "Divine intervention"
              ],
              "answer": 1,
              "explanation": "Natural selection favors individuals possessing traits best adapted to their environment."
            }
          ]
        }
      ]
    }
  },
  "Economics": {
    "icon": "📈",
    "category": "commercial",
    "description": "Microeconomics, consumer utility, demand/supply, elasticity, production costs, market structures, money/banking, inflation & national income.",
    "topics": {
      "SSS 1": [
        {
          "id": "econ-sss1-t1-1",
          "title": "Basic Concepts & Production Possibility Curve (PPC)",
          "term": "First Term • Week 1-3",
          "readTime": "8 min read",
          "objectives": [
            "Define economics using Lionel Robbins' classical definition.",
            "Explain scarcity, choice, scale of preference, and opportunity cost.",
            "Construct and interpret a Production Possibility Curve (PPC).",
            "Differentiate between money cost and real opportunity cost."
          ],
          "notes": "\n### 1. Scientific Definition of Economics\n> *\"Economics is the science which studies human behavior as a relationship between ends and scarce means which have alternative uses.\"* — **Lord Lionel Robbins (1932)**\n\n### 2. Core Economic Concepts\n* **Wants (Ends):** Unlimited human desires.\n* **Scarcity (Means):** Limited economic resources relative to insatiable wants.\n* **Choice:** Selecting among competing alternatives as a consequence of scarcity.\n* **Scale of Preference:** A list of unsatisfied wants arranged in descending order of priority.\n* **Opportunity Cost:** The next best alternative forgone or sacrificed when a choice is made.\n\n### 3. Production Possibility Curve (PPC)\nShows maximum combinations of two goods an economy can produce utilizing all resources and technology efficiently:\n* Points along the curve = full, efficient resource employment.\n* Points inside the curve = underemployment / inefficiency.\n* Points outside the curve = unattainable with current resources.\n          ",
          "summary": [
            "Scarcity creates the necessity of choice; a scale of preference orders wants by importance.",
            "Opportunity cost is the next best alternative sacrificed.",
            "PPC demonstrates efficiency (on curve), underemployment (inside), and scarcity (outside)."
          ],
          "flashcards": [
            {
              "q": "What is opportunity cost?",
              "a": "The real cost in terms of the next best alternative forgone."
            },
            {
              "q": "What does an inward shift of the PPC mean?",
              "a": "Economic contraction or destruction of productive resources."
            }
          ],
          "assignment": {
            "title": "Opportunity Cost & Scale of Preference",
            "instructions": "Construct a consumer budget and opportunity cost.",
            "tasks": [
              "A student with ₦15,000 wants: Textbooks (₦10,000), Shoes (₦8,000), Bag (₦5,000). Create an optimal scale of preference and determine the opportunity cost.",
              "Explain three differences between money cost and opportunity cost."
            ],
            "sampleAnswer": "1. Scale: 1. Textbooks (₦10k), 2. Bag (₦5k) = ₦15k spent. Opportunity cost is the Shoes (₦8,000) sacrificed.\n2. Money cost is the financial sum spent; opportunity cost is the alternative good surrendered. Money cost is uniform; opportunity cost depends on personal priorities.",
            "rubric": "10 marks. 5 pts per analysis."
          },
          "quiz": [
            {
              "question": "Lord Lionel Robbins defined economics as the science studying the relationship between:",
              "options": [
                "Unlimited wants and scarce resources with alternative uses",
                "Stock prices and gold reserves",
                "Government budgets",
                "Minimum wages"
              ],
              "answer": 0,
              "explanation": "Robbins defined economics around unlimited ends and scarce means."
            },
            {
              "question": "Opportunity cost is best defined as:",
              "options": [
                "Total price paid",
                "Next best alternative forgone",
                "Profit made",
                "Taxes owed"
              ],
              "answer": 1,
              "explanation": "Opportunity cost represents the alternative sacrificed."
            },
            {
              "question": "A point INSIDE the PPC indicates:",
              "options": [
                "Full employment",
                "Inefficient underutilization of resources",
                "Unattainable output",
                "Economic growth"
              ],
              "answer": 1,
              "explanation": "Points inside the PPC show unemployment or idle capacity."
            },
            {
              "question": "Why do rational consumers draw up a Scale of Preference?",
              "options": [
                "To rank wants by priority due to scarce funds",
                "To pay less tax",
                "To hoard goods",
                "To maximize prices"
              ],
              "answer": 0,
              "explanation": "A scale of preference orders wants to maximize utility with limited resources."
            }
          ]
        },
        {
          "id": "econ-sss1-t2-1",
          "title": "Theory of Demand, Supply & Market Equilibrium",
          "term": "Second Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "State the Law of Demand and the Law of Supply.",
            "Differentiate between a change in quantity demanded (movement along curve) and a change in demand (shift of curve).",
            "Calculate equilibrium price and quantity where Qd = Qs.",
            "Calculate and interpret Price Elasticity of Demand (Ped)."
          ],
          "notes": "\n### 1. Laws of Demand and Supply\n* **Law of Demand:** Quantity demanded of a commodity varies inversely with its price, *ceteris paribus* (all other things being equal).\n* **Law of Supply:** Quantity supplied varies directly with its price, *ceteris paribus*.\n\n### 2. Market Equilibrium\nEquilibrium occurs at the price where Quantity Demanded equals Quantity Supplied ($Q_d = Q_s$):\n$$\\text{If } Q_d = 50 - 2P \\quad \\text{and} \\quad Q_s = 10 + 2P$$\n$$50 - 2P = 10 + 2P \\implies 4P = 40 \\implies P_e = 10$$\n$$Q_e = 50 - 2(10) = 30 \\text{ units}$$\n\n### 3. Price Elasticity of Demand ($E_d$)\n$$E_d = \\frac{\\% \\text{ Change in Quantity Demanded}}{\\% \\text{ Change in Price}} = \\frac{\\Delta Q}{Q_1} \\times \\frac{P_1}{\\Delta P}$$\n* $|E_d| > 1$: Elastic (luxuries, many substitutes).\n* $|E_d| < 1$: Inelastic (necessities, staple food like garri/rice).\n* $|E_d| = 1$: Unitary elastic.\n          ",
          "summary": [
            "Demand curves slope downward; supply curves slope upward.",
            "Market equilibrium: Qd = Qs. Above equilibrium is surplus; below is shortage.",
            "Elasticity measures responsiveness of quantity to price changes."
          ],
          "flashcards": [
            {
              "q": "What does ceteris paribus mean?",
              "a": "All other factors remain constant."
            },
            {
              "q": "What causes a movement along a demand curve?",
              "a": "A change in the commodity's own price."
            },
            {
              "q": "What causes an outward shift of the demand curve?",
              "a": "Rise in consumer income, increase in population, favorable tastes."
            }
          ],
          "assignment": {
            "title": "Demand & Supply Mathematical Equilibrium",
            "instructions": "Show algebraic steps to solve for equilibrium.",
            "tasks": [
              "Given Qd = 100 - 4P and Qs = 20 + 4P. Calculate: a) equilibrium price, b) equilibrium quantity.",
              "If price increases from ₦50 to ₦60 and quantity demanded falls from 200 to 140 units, calculate the price elasticity of demand."
            ],
            "sampleAnswer": "1. 100 - 4P = 20 + 4P => 8P = 80 => P = ₦10. Q = 100 - 4(10) = 60 units.\n2. %ΔQ = (60/200)*100 = 30%. %ΔP = (10/50)*100 = 20%. Ed = 30/20 = 1.5 (Elastic).",
            "rubric": "10 marks. 5 pts per calculation."
          },
          "quiz": [
            {
              "question": "A normal demand curve slopes:",
              "options": [
                "Upward from left to right",
                "Downward from left to right",
                "Horizontally",
                "Vertically"
              ],
              "answer": 1,
              "explanation": "Demand curves slope downward due to the inverse price-quantity relationship."
            },
            {
              "question": "At market equilibrium:",
              "options": [
                "Quantity demanded equals quantity supplied",
                "There is a severe shortage",
                "Government fixes prices",
                "Supply exceeds demand"
              ],
              "answer": 0,
              "explanation": "Equilibrium is the point of market clearance where Qd = Qs."
            },
            {
              "question": "If demand for salt barely changes when its price doubles, its demand is:",
              "options": [
                "Price elastic",
                "Price inelastic",
                "Unitary elastic",
                "Perfectively elastic"
              ],
              "answer": 1,
              "explanation": "Staple necessities with few substitutes have price inelastic demand (|Ed| < 1)."
            },
            {
              "question": "A decrease in the cost of raw materials causes the supply curve to:",
              "options": [
                "Shift to the right (increase)",
                "Shift to the left (decrease)",
                "Remain unchanged",
                "Disappear"
              ],
              "answer": 0,
              "explanation": "Cheaper inputs lower production costs, shifting the supply curve rightward."
            }
          ]
        },
        {
          "id": "econ-sss1-t3-1",
          "title": "Money, Banking & Financial Institutions",
          "term": "Third Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Trace the evolution of money from the trade by barter system.",
            "List the four functions and six characteristics of good money.",
            "Compare commercial banks and the Central Bank of Nigeria (CBN).",
            "Explain monetary policy tools used by central banks to control inflation."
          ],
          "notes": "\n### 1. The Barter System & The Evolution of Money\n* **Barter System:** Direct exchange of goods for goods.\n* **Flaws of Barter:** Required double coincidence of wants, lacked a common measure of value, goods were non-divisible, and difficulty storing wealth.\n* **Money:** Anything universally accepted as a medium of exchange and settlement of debts.\n\n### 2. Four Functions of Money\n1. **Medium of Exchange:** Eliminates the double coincidence of wants.\n2. **Measure of Value (Unit of Account):** Standard pricing benchmark.\n3. **Store of Value:** Enables wealth accumulation over time.\n4. **Standard of Deferred Payment:** Facilitates credit transactions and future debt settlement.\n\n### 3. Commercial Banks vs. Central Bank of Nigeria (CBN)\n* **Commercial Banks:** Profit-motivated financial institutions accepting deposits, granting loans, and creating credit.\n* **Central Bank (CBN):** Apex regulatory financial institution, banker to the federal government, issuer of legal tender (Naira), and controller of money supply using monetary policy tools (Cash Reserve Ratio, Monetary Policy Rate, Open Market Operations).\n          ",
          "summary": [
            "Money overcame the double coincidence problem of barter.",
            "Four functions: Medium of exchange, Unit of account, Store of value, Standard of deferred payment.",
            "Central bank regulates commercial banks and manages national monetary policy."
          ],
          "flashcards": [
            {
              "q": "What is the primary flaw of barter trade?",
              "a": "Lack of double coincidence of wants."
            },
            {
              "q": "What is legal tender?",
              "a": "Money that by national law must be accepted for the payment of all debts."
            },
            {
              "q": "Name two monetary policy tools of the CBN.",
              "a": "Cash Reserve Ratio (CRR) and Open Market Operations (OMO)."
            }
          ],
          "assignment": {
            "title": "Financial Institutions Essay",
            "instructions": "Compare banking tiers and analyze monetary policy.",
            "tasks": [
              "Outline four differences between commercial banks and the Central Bank of Nigeria.",
              "Explain how the Central Bank uses Open Market Operations (OMO) to reduce inflation in the economy."
            ],
            "sampleAnswer": "1. Commercial banks are profit-driven, owned by shareholders, deal with the public, and clear checks. The CBN is non-profit, state-owned, banker to the government/banks, and sole issuer of currency.\n2. To reduce inflation (excess money supply), the CBN sells Treasury Bills in Open Market Operations. Buyers pay cash to the CBN, mopping up excess liquidity from commercial banks and curtailing inflationary spending.",
            "rubric": "10 marks. 5 pts per detailed explanation."
          },
          "quiz": [
            {
              "question": "Which of the following is a vital function of money?",
              "options": [
                "Causing inflation",
                "Medium of exchange",
                "Increasing national debt",
                "Promoting barter"
              ],
              "answer": 1,
              "explanation": "The primary function of money is to serve as a universally accepted medium of exchange."
            },
            {
              "question": "The sole authority to issue banknotes and coins in Nigeria is vested in:",
              "options": [
                "First Bank of Nigeria",
                "Central Bank of Nigeria (CBN)",
                "Federal Ministry of Finance",
                "Nigerian Stock Exchange"
              ],
              "answer": 1,
              "explanation": "The CBN has the statutory monopoly on currency issuance."
            },
            {
              "question": "What happens when the Central Bank RAISES the Cash Reserve Ratio?",
              "options": [
                "Commercial banks lend more money",
                "Commercial banks have less money to lend, reducing credit",
                "Inflation increases",
                "Interest rates plummet"
              ],
              "answer": 1,
              "explanation": "A higher reserve ratio locks up bank liquidity, contracting credit and reducing inflation."
            },
            {
              "question": "The major disadvantage of commodity barter trade was:",
              "options": [
                "Too much gold",
                "Difficulty in achieving double coincidence of wants",
                "Instant electronic payments",
                "Zero inflation"
              ],
              "answer": 1,
              "explanation": "Finding two parties with exactly matching complementary desires was difficult."
            }
          ]
        }
      ]
    }
  },
  "Civic Education": {
    "icon": "🏛️",
    "category": "core",
    "description": "Citizenship, national values, human rights, democracy, rule of law, constitutional governance & eradication of cultism.",
    "topics": {
      "SSS 1": [
        {
          "id": "civ-sss1-t1-1",
          "title": "Values: Types, Importance & Manifestation in Society",
          "term": "First Term • Week 1-3",
          "readTime": "7 min read",
          "objectives": [
            "Define values and state their importance in national development.",
            "Differentiate between personal, moral, civic, and social values.",
            "Explain how integrity and selflessness eradicate corruption.",
            "Analyze the consequences of value erosion in Nigerian youth."
          ],
          "notes": "\n### 1. Concept of Values\nValues are shared principles, beliefs, standards, and convictions that guide human conduct, choices, and social interactions within a community.\n\n### 2. Major Classes of Values\n1. **Moral Values:** Concepts of right versus wrong (Honesty, Integrity, Discipline, Truthfulness).\n2. **Civic / Patriotic Values:** Duties owed to the state (Respect for the Constitution and national symbols, tax payment, voting).\n3. **Social Values:** Principles promoting harmony (Tolerance, Hospitality, Empathy, Mutual respect).\n4. **Economic Values:** Principles regarding productivity (Hard work, Stewardship, Punctuality, Accountability).\n          ",
          "summary": [
            "Values guide right conduct and societal harmony.",
            "Moral, civic, social, and economic values underpin national progress.",
            "Integrity prevents examination fraud, corruption, and cybercrime."
          ],
          "flashcards": [
            {
              "q": "What is integrity?",
              "a": "The quality of adhering uncompromisingly to moral and ethical principles."
            },
            {
              "q": "Name two civic values.",
              "a": "Patriotism and obedience to the rule of law."
            }
          ],
          "assignment": {
            "title": "Civic Values & National Development",
            "instructions": "Write a short essay addressing civic orientation.",
            "tasks": [
              "Explain three factors that promote positive values in Nigerian communities.",
              "Discuss how honesty helps eliminate examination malpractice in secondary schools."
            ],
            "sampleAnswer": "1. Strong family upbringing, sound school civic instruction, and exemplary leadership.\n2. Honesty builds self-worth and genuine study habits, removing the desire to rely on illegal exam cheats.",
            "rubric": "10 marks. 5 pts per discussion."
          },
          "quiz": [
            {
              "question": "Values are best described as:",
              "options": [
                "Monetary prices",
                "Guiding beliefs and principles of upright conduct",
                "Police laws",
                "Religious decrees"
              ],
              "answer": 1,
              "explanation": "Values are the fundamental principles guiding moral behavior."
            },
            {
              "question": "A citizen who regularly pays taxes and obeys traffic laws displays:",
              "options": [
                "Religious bigotry",
                "Civic responsibility",
                "Political neutrality",
                "Nepotism"
              ],
              "answer": 1,
              "explanation": "These are primary duties of civic responsibility."
            },
            {
              "question": "The primary institution responsible for early value socialization is:",
              "options": [
                "The Family",
                "The Police",
                "Political Parties",
                "The Judiciary"
              ],
              "answer": 0,
              "explanation": "The family is the foundational agent of childhood socialization."
            },
            {
              "question": "Value erosion directly results in:",
              "options": [
                "Economic prosperity",
                "Widespread corruption and crime",
                "Higher literacy",
                "Technological advance"
              ],
              "answer": 1,
              "explanation": "Decay of moral and civic values fuels crime and corruption."
            }
          ]
        },
        {
          "id": "civ-sss1-t2-1",
          "title": "Human Rights & Universal Declaration of Human Rights (UDHR)",
          "term": "Second Term • Week 1-3",
          "readTime": "8 min read",
          "objectives": [
            "Define fundamental human rights and state their inalienable nature.",
            "Trace the historical origin of the UDHR adopted by the United Nations in 1948.",
            "Identify fundamental human rights entrenched in Chapter IV of the 1999 Nigerian Constitution.",
            "Explain limitations to human rights (state of emergency, quarantine, lawful imprisonment)."
          ],
          "notes": "\n### 1. Fundamental Human Rights\nBasic moral entitlements and freedoms that every human being possesses simply by virtue of being human. They are universal, inalienable, and indivisible.\n\n### 2. The UDHR (1948)\nAdopted by the United Nations General Assembly in Paris on December 10, 1948, following the horrors of World War II. Contains 30 articles outlining civic, political, economic, and social rights.\n\n### 3. Chapter IV Rights in Nigeria's 1999 Constitution\n* Right to Life (Section 33)\n* Right to Dignity of Human Person (Section 34)\n* Right to Personal Liberty (Section 35)\n* Right to Fair Hearing (Section 36)\n* Right to Private and Family Life (Section 37)\n* Right to Freedom of Thought, Conscience and Religion (Section 38)\n* Right to Freedom of Expression and the Press (Section 39)\n          ",
          "summary": [
            "Human rights are inalienable, universal entitlements.",
            "UDHR was adopted by the UN in 1948.",
            "Entrenched in Chapter IV of the 1999 Constitution with legal limitations."
          ],
          "flashcards": [
            {
              "q": "When was the UDHR adopted?",
              "a": "December 10, 1948 by the United Nations."
            },
            {
              "q": "Which chapter of the Nigerian Constitution contains fundamental human rights?",
              "a": "Chapter IV."
            }
          ],
          "assignment": {
            "title": "Human Rights Analysis",
            "instructions": "Evaluate rights and legal limitations.",
            "tasks": [
              "Explain three conditions under which a citizen's right to personal liberty may be lawfully restricted in Nigeria."
            ],
            "sampleAnswer": "Execution of a court prison sentence upon conviction, lawful detention upon reasonable suspicion of having committed a crime, and public health quarantine during dangerous infectious epidemics.",
            "rubric": "10 marks. Clear legal justifications."
          },
          "quiz": [
            {
              "question": "The Universal Declaration of Human Rights was adopted in:",
              "options": [
                "1914",
                "1945",
                "1948",
                "1960"
              ],
              "answer": 2,
              "explanation": "The UN adopted the UDHR on December 10, 1948."
            },
            {
              "question": "A citizen's right to movement can be lawfully curtailed during a:",
              "options": [
                "School exam",
                "Declared State of Emergency or curfew",
                "Religious holiday",
                "Political rally"
              ],
              "answer": 1,
              "explanation": "Public safety during states of emergency legally curtails free movement."
            },
            {
              "question": "Chapter IV of the 1999 Constitution of Nigeria guarantees:",
              "options": [
                "Military salaries",
                "Fundamental Human Rights",
                "Bank profits",
                "Local government boundaries"
              ],
              "answer": 1,
              "explanation": "Chapter IV protects fundamental rights of all citizens."
            },
            {
              "question": "Human rights are described as 'inalienable' because they:",
              "options": [
                "Can be purchased with money",
                "Cannot be taken away or surrendered",
                "Belong only to politicians",
                "Expire at age 65"
              ],
              "answer": 1,
              "explanation": "Inalienable rights belong inherently to every human being from birth."
            }
          ]
        },
        {
          "id": "civ-sss1-t3-1",
          "title": "Democracy, Rule of Law & Eradication of Cultism",
          "term": "Third Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Define representative democracy and its key pillars.",
            "Explain A. V. Dicey's three principles of the Rule of Law.",
            "Identify the origin, dangers, and consequences of secret cults in schools.",
            "Suggest proactive solutions to eradicate cultism and drug abuse."
          ],
          "notes": "\n### 1. Representative Democracy\nA system of government where the supreme power is vested in the people and exercised by them through periodic, free, and fair elections:\n* Pillars: Popular sovereignty, separation of powers, periodic elections, multi-party system, independent judiciary, free press.\n\n### 2. A. V. Dicey's Three Principles of the Rule of Law (1885)\n1. **Supremacy of Regular Law:** Absolute predominance of ordinary law over arbitrary power; no man can be punished except for a distinct breach of written law.\n2. **Equality Before the Law:** Every citizen, regardless of status, wealth, or office, is subject to the same ordinary courts.\n3. **Predominance of the Legal Spirit:** Fundamental human rights are secured through judicial decisions and enforcement.\n\n### 3. Dangers of Secret Cults\nSecret cults foster violence, extortion, murder, drug abuse, and destruction of academic careers. Eradication requires stiff legislation, vigilant parenting, school guidance counseling, and immediate expulsion of cultists.\n          ",
          "summary": [
            "Democracy is government by the people through elected representatives.",
            "Rule of Law: Supremacy of law, equality before the law, protection of human rights (A.V. Dicey).",
            "Cultism destroys youth potential and must be eradicated through law enforcement and moral education."
          ],
          "flashcards": [
            {
              "q": "Who formulated the three principles of the Rule of Law?",
              "a": "Professor A. V. Dicey in 1885."
            },
            {
              "q": "What does equality before the law mean?",
              "a": "That the law applies equally to all persons without regard to wealth, rank, or position."
            }
          ],
          "assignment": {
            "title": "Rule of Law & Cultism Eradication",
            "instructions": "Provide critical socio-political analysis.",
            "tasks": [
              "Explain how an independent judiciary safeguards the Rule of Law in Nigeria.",
              "Outline three consequences of cultism on Nigerian educational institutions."
            ],
            "sampleAnswer": "1. An independent judiciary ensures judges rule impartially without executive interference, defending constitutional supremacy.\n2. Disruption of academic calendars, loss of innocent student lives, and destruction of campus facilities.",
            "rubric": "10 marks. 5 pts per discussion."
          },
          "quiz": [
            {
              "question": "The principle that regular law is supreme over arbitrary authority was articulated by:",
              "options": [
                "Karl Marx",
                "A. V. Dicey",
                "Thomas Hobbes",
                "Jean Bodin"
              ],
              "answer": 1,
              "explanation": "British jurist A. V. Dicey formulated the Rule of Law doctrine."
            },
            {
              "question": "Which of the following is a key requirement of a democratic system?",
              "options": [
                "Military decrees",
                "Periodic free and fair elections",
                "Hereditary monarchy",
                "One-party dictatorship"
              ],
              "answer": 1,
              "explanation": "Periodic free elections are essential to democratic legitimacy."
            },
            {
              "question": "Secret cultism in institutions of learning leads directly to:",
              "options": [
                "Academic excellence",
                "Violence, insecurity, and loss of life",
                "Civic responsibility",
                "Free tuition"
              ],
              "answer": 1,
              "explanation": "Cultism generates criminal violence and disrupts education."
            },
            {
              "question": "Equality before the law means that:",
              "options": [
                "Only poor people are prosecuted",
                "All citizens regardless of office are subject to the same laws",
                "Politicians have immunity from all laws forever",
                "Police can arrest anyone without evidence"
              ],
              "answer": 1,
              "explanation": "The law treats all persons equally without discrimination."
            }
          ]
        }
      ]
    }
  },
  "Computer Studies & Data Processing": {
    "icon": "💻",
    "category": "vocational",
    "description": "Computer architecture, history, binary conversions, operating systems, networking, internet safety, and programming.",
    "topics": {
      "SSS 1": [
        {
          "id": "cs-sss1-t1-1",
          "title": "Computer Generations & Von Neumann Architecture",
          "term": "First Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Trace the five generations of digital computers and their key electronic components.",
            "Analyze the Von Neumann architecture (CPU, ALU, Control Unit, Registers, RAM/ROM).",
            "Differentiate between System Software and Application Software.",
            "Convert numbers between Binary, Decimal, and Hexadecimal."
          ],
          "notes": "\n### 1. Five Generations of Computers\n1. **1st Gen (1940-1956):** Vacuum tubes; magnetic drums; machine language (ENIAC).\n2. **2nd Gen (1956-1963):** Transistors; assembly language & early FORTRAN.\n3. **3rd Gen (1964-1971):** Integrated Circuits (ICs); keyboards, monitors, operating systems.\n4. **4th Gen (1971-Present):** Microprocessors (VLSI/ULSI); personal computers, internet.\n5. **5th Gen (Present & Future):** Artificial Intelligence, parallel processing, quantum computing.\n\n### 2. Von Neumann Architecture\n* **CPU:** Control Unit (CU) coordinates Fetch-Decode-Execute cycle; Arithmetic Logic Unit (ALU) performs math and logic; Registers provide ultra-fast internal storage.\n* **Memory:** RAM is volatile working memory; ROM is non-volatile BIOS firmware.\n\n> **🔬 Pioneer Spotlight: Dr. Philip Emeagwali (1954–Present) & Ada Lovelace (1815–1852)**\n> Ada Lovelace wrote the world's first computer algorithm in 1843. Nigerian scientist Dr. Philip Emeagwali won the Gordon Bell Prize in 1989 by using 65,536 microprocessors to perform 3.1 billion calculations per second, revolutionizing supercomputing!\n          ",
          "summary": [
            "Generations: Vacuum tubes -> Transistors -> ICs -> Microprocessors -> AI.",
            "Von Neumann model features CPU (ALU, CU, Registers), memory, and system buses.",
            "RAM is volatile working memory; ROM is permanent firmware."
          ],
          "flashcards": [
            {
              "q": "What active electronic component powered 2nd generation computers?",
              "a": "Transistors."
            },
            {
              "q": "Who was the world's first computer programmer?",
              "a": "Ada Lovelace (1843)."
            },
            {
              "q": "What was Dr. Philip Emeagwali's major supercomputing breakthrough?",
              "a": "Using 65,536 microprocessors in parallel to perform 3.1 billion calculations per second."
            }
          ],
          "assignment": {
            "title": "Computer Systems & Number Base Conversion",
            "instructions": "Show binary conversion arithmetic.",
            "tasks": [
              "Convert decimal 149 into Binary and Hexadecimal.",
              "Explain the three steps of the CPU instruction cycle (Fetch, Decode, Execute)."
            ],
            "sampleAnswer": "1. 149 in binary = 10010101_2. 149 in hex = 95_16.\n2. Fetch: CU retrieves instruction from RAM into instruction register. Decode: CU decodes opcode. Execute: ALU carries out arithmetic or logic and stores result.",
            "rubric": "10 marks. 5 pts per problem."
          },
          "quiz": [
            {
              "question": "The electronic component that characterized First Generation computers was the:",
              "options": [
                "Transistor",
                "Vacuum tube",
                "Microprocessor",
                "Silicon chip"
              ],
              "answer": 1,
              "explanation": "First generation computers relied on vacuum tubes."
            },
            {
              "question": "Convert the binary number 1101 to decimal (base 10):",
              "options": [
                "11",
                "13",
                "15",
                "9"
              ],
              "answer": 1,
              "explanation": "1*(8) + 1*(4) + 0*(2) + 1*(1) = 8 + 4 + 1 = 13."
            },
            {
              "question": "The part of the CPU that executes calculations and boolean logic is the:",
              "options": [
                "Control Unit",
                "ALU",
                "ROM",
                "BIOS"
              ],
              "answer": 1,
              "explanation": "The Arithmetic Logic Unit (ALU) performs all math and logic operations."
            },
            {
              "question": "RAM is termed 'volatile' memory because it:",
              "options": [
                "Is very explosive",
                "Loses all data when electrical power is switched off",
                "Cannot be written to",
                "Stores permanent boot code"
              ],
              "answer": 1,
              "explanation": "Volatile memory requires continuous electrical power to retain contents."
            }
          ]
        },
        {
          "id": "cs-sss1-t2-1",
          "title": "Operating Systems & Application Software",
          "term": "Second Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Define an Operating System and explain its core resource management functions.",
            "Compare Command Line Interfaces (CLI) vs. Graphical User Interfaces (GUI).",
            "Analyze file directory systems and storage management.",
            "Evaluate word processors, spreadsheets, and database management systems (DBMS)."
          ],
          "notes": "\n### 1. What is an Operating System (OS)?\nSystem software acting as an intermediary bridge between computer hardware, application software, and the human user:\n* **Core Functions:**\n  1. *Processor Management:* Multi-tasking, scheduling CPU time.\n  2. *Memory Management:* Allocating RAM and swapping to virtual memory.\n  3. *File Management:* Organizing files into directory trees (folders).\n  4. *Device Management:* Interfacing with hardware peripherals via device drivers.\n  5. *Security:* User authentication, access controls, permissions.\n\n### 2. User Interfaces\n* **CLI (Command Line Interface):** Text commands typed by user (e.g., MS-DOS, Linux Bash). Fast, lightweight, but requires memorizing syntax.\n* **GUI (Graphical User Interface):** WIMP environment (Windows, Icons, Menus, Pointers). Intuitive, user-friendly, visually driven (e.g., Windows 11, macOS, Android).\n          ",
          "summary": [
            "OS manages CPU, memory, devices, and file systems.",
            "CLI uses text commands; GUI uses WIMP (Windows, Icons, Menus, Pointers).",
            "Applications run on top of the OS to perform user tasks."
          ],
          "flashcards": [
            {
              "q": "What does WIMP stand for in GUI interfaces?",
              "a": "Windows, Icons, Menus, Pointers."
            },
            {
              "q": "Give two examples of operating systems.",
              "a": "Microsoft Windows 11 and Linux Ubuntu."
            }
          ],
          "assignment": {
            "title": "Operating Systems Comparative Analysis",
            "instructions": "Compare operating system interfaces.",
            "tasks": [
              "Outline three advantages and three disadvantages of a Graphical User Interface (GUI) compared to a Command Line Interface (CLI)."
            ],
            "sampleAnswer": "Advantages: User-friendly, visual feedback, no need to memorize syntax, easy multi-tasking. Disadvantages: Consumes more RAM and CPU processing power, slower execution for expert scripts, larger storage footprint.",
            "rubric": "10 marks. Detailed comparative criteria."
          },
          "quiz": [
            {
              "question": "Which of the following is an Operating System?",
              "options": [
                "Microsoft Word",
                "Google Chrome",
                "Linux Ubuntu",
                "Adobe Photoshop"
              ],
              "answer": 2,
              "explanation": "Linux Ubuntu is an operating system; the others are application programs."
            },
            {
              "question": "The component of a GUI interface that represents files and programs visually is called an:",
              "options": [
                "Icon",
                "Algorithm",
                "Compiler",
                "Assembler"
              ],
              "answer": 0,
              "explanation": "An icon is a small graphical representation of a file or program."
            },
            {
              "question": "Device drivers are required by the OS to:",
              "options": [
                "Cool the CPU",
                "Communicate with hardware peripherals like printers and scanners",
                "Play audio files",
                "Format spreadsheets"
              ],
              "answer": 1,
              "explanation": "Drivers translate OS commands into specific peripheral hardware signals."
            },
            {
              "question": "Virtual memory is created on the:",
              "options": [
                "Hard disk / SSD to simulate extra RAM",
                "CPU cache only",
                "ROM chip",
                "Floppy disk"
              ],
              "answer": 0,
              "explanation": "Virtual memory uses secondary storage space as an overflow extension of physical RAM."
            }
          ]
        },
        {
          "id": "cs-sss1-t3-1",
          "title": "Computer Networks, The Internet & Cybersecurity",
          "term": "Third Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Classify networks by scale: PAN, LAN, MAN, WAN.",
            "Compare network topologies: Star, Bus, Ring, Mesh.",
            "Explain Internet protocols: TCP/IP, HTTP, HTTPS, DNS.",
            "Identify cybersecurity threats (phishing, malware) and prevention practices."
          ],
          "notes": "\n### 1. Classification of Networks by Scale\n* **PAN (Personal Area Network):** Bluetooth connection around a person (< 10 m).\n* **LAN (Local Area Network):** High-speed network within a single room, school, or building (Ethernet, Wi-Fi).\n* **MAN (Metropolitan Area Network):** Covers a city or metropolis (e.g., municipal cable TV network).\n* **WAN (Wide Area Network):** Global or countrywide network (the Internet).\n\n### 2. Network Topologies\n* **Star Topology:** All nodes connect to a central switch/hub. Easy to install and troubleshoot; if one cable breaks, only that node fails. Central switch failure halts the network.\n* **Bus Topology:** Single central backbone cable with terminators. Cheap, but cable break stops entire network.\n\n### 3. Cybersecurity & Internet Safety\n* **Malware:** Viruses, worms, trojans, ransomware.\n* **Phishing:** Fraudulent emails masquerading as reputable organizations to steal login credentials.\n* **HTTPS:** Encrypted communication using SSL/TLS protocols to secure data transmission.\n          ",
          "summary": [
            "Networks range from PAN to LAN, MAN, and WAN (Internet).",
            "Star topology is standard for modern LANs with central switches.",
            "Cybersecurity requires strong passwords, two-factor authentication (2FA), and HTTPS encryption."
          ],
          "flashcards": [
            {
              "q": "What topology uses a central switch?",
              "a": "Star topology."
            },
            {
              "q": "What does the 'S' in HTTPS stand for?",
              "a": "Secure (uses SSL/TLS encryption)."
            },
            {
              "q": "What is phishing?",
              "a": "A cyber social engineering attack designed to trick victims into revealing sensitive passwords or financial details."
            }
          ],
          "assignment": {
            "title": "Network Design & Cybersecurity",
            "instructions": "Design a school network and specify cybersecurity protocols.",
            "tasks": [
              "Recommend a network topology for a school computer laboratory with 40 PCs. Justify your choice with two advantages.",
              "State three essential safety measures to protect students from cyber threats and identity theft."
            ],
            "sampleAnswer": "1. Star topology with a gigabit switch. Advantages: High reliability (one cable fault does not bring down other PCs), easy expansion and maintenance.\n2. Use strong unique passwords with 2FA, never click suspicious links in unsolicited emails, and verify HTTPS padlocks on websites.",
            "rubric": "10 marks. 5 pts for topology recommendation, 5 pts for cyber safety."
          },
          "quiz": [
            {
              "question": "The largest Wide Area Network (WAN) in existence is:",
              "options": [
                "A campus intranet",
                "The global Internet",
                "A municipal cable network",
                "Bluetooth PAN"
              ],
              "answer": 1,
              "explanation": "The global Internet is the preeminent example of a WAN."
            },
            {
              "question": "In a Star network topology, all client computers connect directly to a:",
              "options": [
                "Central hub or switch",
                "Single shared terminator",
                "Next neighbor only",
                "Satellite dish"
              ],
              "answer": 0,
              "explanation": "Star networks route all node connections through a central switch."
            },
            {
              "question": "Which protocol secures and encrypts web browser communications?",
              "options": [
                "HTTP",
                "FTP",
                "HTTPS",
                "SMTP"
              ],
              "answer": 2,
              "explanation": "HTTPS encrypts communications using SSL/TLS."
            },
            {
              "question": "A malicious program that disguises itself as legitimate software is called a:",
              "options": [
                "Trojan horse",
                "Firewall",
                "Compiler",
                "Driver"
              ],
              "answer": 0,
              "explanation": "A Trojan horse conceals harmful code inside an apparently benign program."
            }
          ]
        }
      ]
    }
  },
  "Government": {
    "icon": "⚖️",
    "category": "arts",
    "description": "Political theory, arms of government, constitutions, federalism, political parties, and Nigerian political history.",
    "topics": {
      "SSS 1": [
        {
          "id": "gov-sss1-t1-1",
          "title": "The State, Sovereignty, Power & Authority",
          "term": "First Term • Week 1-3",
          "readTime": "8 min read",
          "objectives": [
            "Define a State and identify its four essential characteristics (Population, Territory, Government, Sovereignty).",
            "Differentiate between power and legitimate authority.",
            "Explain Max Weber's three types of authority (Traditional, Charismatic, Legal-Rational).",
            "Analyze limitations to sovereignty in modern international relations."
          ],
          "notes": "\n### 1. The State & Its Four Attributes\nA State is a politically organized body of people occupying a defined geographic territory, possessing an organized government, and having sovereignty independent of external control.\n1. **Population:** Human community residing within the borders.\n2. **Defined Territory:** Recognized geographic borders on land, sea, and airspace.\n3. **Government:** The administrative machinery through which the will of the state is formulated and executed.\n4. **Sovereignty:** The supreme legal authority of the State.\n\n### 2. Max Weber's Classification of Authority\n* **Traditional Authority:** Based on ancient customs and royal succession (Obas, Emirs, Obis).\n* **Charismatic Authority:** Based on exceptional personal magnetism and oratory of a leader (Mandela, Azikiwe).\n* **Legal-Rational Authority:** Derives from constitutional offices and written laws (The President, Governors, Judges).\n          ",
          "summary": [
            "A state has population, territory, government, and sovereignty.",
            "Authority is legitimate power accepted by citizens.",
            "Weber identified Traditional, Charismatic, and Legal-Rational authority."
          ],
          "flashcards": [
            {
              "q": "What are the four essential attributes of a state?",
              "a": "Population, Defined Territory, Government, and Sovereignty."
            },
            {
              "q": "What is sovereignty?",
              "a": "The supreme, absolute legal authority of a state over its affairs."
            }
          ],
          "assignment": {
            "title": "Statehood & Authority Analysis",
            "instructions": "Write full explanations of political science concepts.",
            "tasks": [
              "Examine whether an individual state in Nigeria (e.g. Lagos State) is a sovereign State. Justify using the four attributes.",
              "Compare traditional authority with legal-rational authority."
            ],
            "sampleAnswer": "1. No, Lagos State is not a sovereign State because it lacks external and supreme sovereignty, which resides exclusively in the Federal Republic of Nigeria.\n2. Traditional authority rests on custom and hereditary birth (e.g., an Oba), while legal-rational authority derives from statutory constitutional election/appointment (e.g., the State Governor).",
            "rubric": "10 marks. 5 pts per analysis."
          },
          "quiz": [
            {
              "question": "Which of the following is NOT an essential characteristic of a State?",
              "options": [
                "Sovereignty",
                "Universal religious uniformity",
                "Defined territory",
                "Government"
              ],
              "answer": 1,
              "explanation": "Religious uniformity is not required for statehood."
            },
            {
              "question": "Authority is transformed from raw coercive power when it acquires:",
              "options": [
                "Brute force",
                "Legitimacy and popular acceptance",
                "Foreign economic aid",
                "Police weapons"
              ],
              "answer": 1,
              "explanation": "Legitimacy transforms raw power into institutional authority."
            },
            {
              "question": "The authority exercised by an Emir in Northern Nigeria is classified as:",
              "options": [
                "Charismatic",
                "Traditional",
                "Legal-rational",
                "Bureaucratic"
              ],
              "answer": 1,
              "explanation": "Royal hereditary rulership is traditional authority."
            },
            {
              "question": "The concept of modern sovereignty was introduced by:",
              "options": [
                "Jean Bodin",
                "Karl Marx",
                "Plato",
                "Niccolò Machiavelli"
              ],
              "answer": 0,
              "explanation": "Jean Bodin formulated modern sovereignty in 1576."
            }
          ]
        },
        {
          "id": "gov-sss1-t2-1",
          "title": "Organs of Government: Separation of Powers & Checks/Balances",
          "term": "Second Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Analyze the functions of the Legislature, Executive, and Judiciary.",
            "Explain Baron de Montesquieu's doctrine of Separation of Powers.",
            "Illustrate how Checks and Balances operate in the Nigerian Presidential System.",
            "Evaluate the independence of the judiciary."
          ],
          "notes": "\n### 1. The Three Arms of Government\n* **The Legislature (National Assembly):** Law-making body (Senate and House of Representatives in Nigeria). Approves national budgets, vets ministerial appointments, and carries out oversight functions.\n* **The Executive (President & Cabinet):** Law-enforcing and policy-implementing organ. Administers ministries, departments, agencies, and foreign policy.\n* **The Judiciary (Courts of Law):** Law-interpreting and dispute-adjudicating organ (Supreme Court, Court of Appeal, High Courts). Safeguards constitutional rights.\n\n### 2. Separation of Powers & Checks and Balances\nFormulated by Baron de Montesquieu in *The Spirit of the Laws* (1748):\n* To prevent tyranny, the three powers must be held by distinct bodies.\n* **Checks and Balances:** Each organ has constitutional powers to check and limit the actions of the other two:\n  - The Executive can veto bills passed by the Legislature.\n  - The Legislature can override an executive veto by a two-thirds majority, and can impeach the President.\n  - The Judiciary can declare legislative acts or executive orders unconstitutional through Judicial Review.\n          ",
          "summary": [
            "Legislature makes laws; Executive enforces laws; Judiciary interprets laws.",
            "Separation of powers prevents autocratic tyranny.",
            "Checks and balances ensure no single arm exceeds its constitutional bounds."
          ],
          "flashcards": [
            {
              "q": "Who originated the doctrine of Separation of Powers?",
              "a": "Baron de Montesquieu in 1748."
            },
            {
              "q": "What is Judicial Review?",
              "a": "The power of courts to declare laws or executive actions null and void if they violate the constitution."
            }
          ],
          "assignment": {
            "title": "Separation of Powers Case Study",
            "instructions": "Detail constitutional checks and balances.",
            "tasks": [
              "Explain two ways the Legislature checks the Executive, and two ways the Judiciary checks the Legislature."
            ],
            "sampleAnswer": "Legislature checks Executive: budget approval and power of impeachment. Judiciary checks Legislature: judicial review to strike down unconstitutional bills and declaring parliamentary excesses invalid.",
            "rubric": "10 marks. 5 pts per arm analysis."
          },
          "quiz": [
            {
              "question": "The power of the judiciary to declare an act of parliament unconstitutional is termed:",
              "options": [
                "Veto power",
                "Judicial Review",
                "Prerogative of mercy",
                "Filibuster"
              ],
              "answer": 1,
              "explanation": "Judicial Review enables courts to annul unconstitutional laws."
            },
            {
              "question": "The doctrine of Separation of Powers was formulated to:",
              "options": [
                "Create military rule",
                "Prevent dictatorship and protect liberty",
                "Abolish parliament",
                "Enrich judges"
              ],
              "answer": 1,
              "explanation": "Montesquieu proposed separation of powers to safeguard citizen liberty against tyranny."
            },
            {
              "question": "In Nigeria's bicameral National Assembly, the two chambers are:",
              "options": [
                "Senate and House of Representatives",
                "Supreme Court and Appeal Court",
                "Cabinet and Council of State",
                "Police and Military"
              ],
              "answer": 0,
              "explanation": "The Senate and House of Representatives comprise Nigeria's bicameral legislature."
            },
            {
              "question": "Which organ of government is charged with executing and implementing statutory laws?",
              "options": [
                "The Legislature",
                "The Executive",
                "The Judiciary",
                "Electoral Commission"
              ],
              "answer": 1,
              "explanation": "The Executive enforces and implements laws."
            }
          ]
        },
        {
          "id": "gov-sss1-t3-1",
          "title": "Political Parties, Pressure Groups & Electoral Systems",
          "term": "Third Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Define a political party and outline its functions in a democracy.",
            "Differentiate between political parties and pressure groups.",
            "Compare electoral systems: First-Past-The-Post (FPTP) vs. Proportional Representation.",
            "Analyze the role of the Independent National Electoral Commission (INEC)."
          ],
          "notes": "\n### 1. Political Parties vs. Pressure Groups\n* **Political Party:** An organized association of citizens seeking to capture political power and form a government through democratic elections (e.g., APC, PDP, LP).\n* **Pressure (Interest) Group:** An organization of individuals with shared economic or social interests seeking to influence government policy without aspiring to capture political power themselves (e.g., ASUU, NLC, NBA, NMA).\n\n### 2. Electoral Systems\n* **First-Past-The-Post (Simple Plurality):** The candidate with the highest number of votes wins the single-member constituency, even if under 50%. Simple and decisive, but can lead to disproportionate representation.\n* **Proportional Representation (PR):** Parties win seats in direct proportion to their percentage of the total national vote. Highly representative of minorities.\n          ",
          "summary": [
            "Political parties contest elections to control government; pressure groups lobby to influence policy.",
            "Electoral systems include First-Past-The-Post and Proportional Representation.",
            "INEC is the constitutional body conducting federal and state elections in Nigeria."
          ],
          "flashcards": [
            {
              "q": "What is the primary difference between a political party and a pressure group?",
              "a": "A political party aims to capture political power and form government; a pressure group only seeks to influence policy."
            },
            {
              "q": "What is an election?",
              "a": "The formal constitutional process by which citizens choose their representatives."
            }
          ],
          "assignment": {
            "title": "Pressure Groups & Democracy",
            "instructions": "Contrast interest groups and party politics.",
            "tasks": [
              "Outline four methods used by pressure groups to influence government decisions in Nigeria."
            ],
            "sampleAnswer": "Lobbying legislators, peaceful industrial strikes (e.g. NLC), mass media campaigns, and submitting memoranda to public commissions.",
            "rubric": "10 marks. Clear explanatory methods."
          },
          "quiz": [
            {
              "question": "The primary aim of a political party is to:",
              "options": [
                "Influence policy without holding office",
                "Contest elections and capture government power",
                "Organize labor strikes",
                "Publish newspapers"
              ],
              "answer": 1,
              "explanation": "Political parties exist to contest elections and win state power."
            },
            {
              "question": "The Nigeria Labour Congress (NLC) is an example of a(n):",
              "options": [
                "Political party",
                "Pressure group (Trade Union)",
                "Organ of government",
                "Religious cult"
              ],
              "answer": 1,
              "explanation": "NLC is a national trade union and pressure group."
            },
            {
              "question": "An electoral system where seats in parliament correspond directly to the percentage of total votes cast is called:",
              "options": [
                "First-Past-The-Post",
                "Proportional Representation",
                "Second ballot",
                "Gerrymandering"
              ],
              "answer": 1,
              "explanation": "Proportional Representation allocates legislative seats based on party vote share."
            },
            {
              "question": "The constitutional body responsible for organizing national elections in Nigeria is:",
              "options": [
                "INEC",
                "EFCC",
                "ICPC",
                "NPC"
              ],
              "answer": 0,
              "explanation": "The Independent National Electoral Commission (INEC) conducts national and state elections."
            }
          ]
        }
      ]
    }
  },
  "Financial Accounting": {
    "icon": "💰",
    "category": "commercial",
    "description": "Bookkeeping, double-entry, trial balance, final accounts, balance sheets, bank reconciliation and accounting ratios.",
    "topics": {
      "SSS 1": [
        {
          "id": "acc-sss1-t1-1",
          "title": "Double-Entry Bookkeeping & The Accounting Equation",
          "term": "First Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "State and apply the Accounting Equation: Assets = Liabilities + Capital.",
            "Master the golden rules of Debit (Dr) and Credit (Cr).",
            "Record basic transactions in T-accounts.",
            "Extract a balanced Trial Balance."
          ],
          "notes": "\n### 1. The Fundamental Accounting Equation\n$$\\text{Assets} = \\text{Liabilities} + \\text{Capital}$$\n* **Assets:** Resources owned by the business (Cash, Equipment, Inventory, Debtors).\n* **Liabilities:** Debts owed to third parties (Bank loans, Creditors).\n* **Capital (Equity):** Owner's financial investment in the enterprise: $\\text{Capital} = \\text{Assets} - \\text{Liabilities}$.\n\n### 2. Double-Entry Rule (DEAD CLIC)\nFor every debit entry, there must be an equal corresponding credit entry:\n* **DEBIT (Dr):** Increase in **E**xpenses, **A**ssets, **D**rawings.\n* **CREDIT (Cr):** Increase in **L**iabilities, **I**ncome, **C**apital.\n          ",
          "summary": [
            "Assets = Liabilities + Capital.",
            "Debit increases Assets and Expenses; Credit increases Liabilities, Income, and Capital (DEAD CLIC).",
            "A Trial Balance tests arithmetical equality of ledger accounts."
          ],
          "flashcards": [
            {
              "q": "What is the accounting equation?",
              "a": "Assets = Liabilities + Owner's Capital."
            },
            {
              "q": "What side is an increase in cash recorded on?",
              "a": "The Debit (Dr) side."
            }
          ],
          "assignment": {
            "title": "Double-Entry Ledger Postings",
            "instructions": "Identify accounts to debit and credit.",
            "tasks": [
              "Started business with ₦200,000 in bank.",
              "Purchased office furniture for ₦40,000 by cheque.",
              "Bought goods on credit from T. Audu for ₦30,000."
            ],
            "sampleAnswer": "1. Dr Bank ₦200,000; Cr Capital ₦200,000.\n2. Dr Office Furniture ₦40,000; Cr Bank ₦40,000.\n3. Dr Purchases ₦30,000; Cr Creditor (T. Audu) ₦30,000.",
            "rubric": "10 marks. Accurate debit/credit pairings."
          },
          "quiz": [
            {
              "question": "An increase in an asset is recorded as a:",
              "options": [
                "Debit entry",
                "Credit entry",
                "Contra entry",
                "Liability"
              ],
              "answer": 0,
              "explanation": "Increases in assets are entered on the debit side."
            },
            {
              "question": "If Assets are ₦800,000 and Liabilities are ₦300,000, what is Capital?",
              "options": [
                "₦1,100,000",
                "₦500,000",
                "₦300,000",
                "₦800,000"
              ],
              "answer": 1,
              "explanation": "Capital = Assets - Liabilities = ₦800,000 - ₦300,000 = ₦500,000."
            },
            {
              "question": "Which of the following carries a CREDIT balance in a trial balance?",
              "options": [
                "Plant and Machinery",
                "Sales Revenue",
                "Purchases",
                "Drawings"
              ],
              "answer": 1,
              "explanation": "Sales revenue represents income and carries a credit balance."
            },
            {
              "question": "The primary purpose of preparing a Trial Balance is to:",
              "options": [
                "Calculate net profit",
                "Verify the arithmetical accuracy of ledger postings",
                "Determine tax",
                "Audit management"
              ],
              "answer": 1,
              "explanation": "Trial balance verifies that total debits equal total credits."
            }
          ]
        },
        {
          "id": "acc-sss1-t2-1",
          "title": "Trading, Profit & Loss Account (Income Statement)",
          "term": "Second Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Compute Cost of Goods Sold (COGS) and Gross Profit.",
            "Prepare a Trading Account to determine Gross Profit/Loss.",
            "Prepare a Profit and Loss Account to determine Net Profit/Loss.",
            "Understand adjustments for prepayments and accruals."
          ],
          "notes": "\n### 1. The Trading Account (Gross Profit)\n$$\\text{Cost of Goods Sold (COGS)} = \\text{Opening Stock} + \\text{Purchases} + \\text{Carriage Inwards} - \\text{Closing Stock}$$\n$$\\text{Gross Profit} = \\text{Net Sales} - \\text{COGS}$$\n* Net Sales = Gross Sales - Returns Inwards (Sales Returns).\n* Net Purchases = Gross Purchases - Returns Outwards (Purchases Returns).\n\n### 2. Profit and Loss Account (Net Profit)\n$$\\text{Net Profit} = \\text{Gross Profit} + \\text{Other Income} - \\text{Operating Expenses}$$\n* Operating expenses: Rent, salaries, insurance, electricity, depreciation, bad debts.\n          ",
          "summary": [
            "Gross Profit = Sales - Cost of Goods Sold.",
            "COGS = Opening Stock + Net Purchases - Closing Stock.",
            "Net Profit = Gross Profit + Discount Received - Operating Expenses."
          ],
          "flashcards": [
            {
              "q": "How is Cost of Goods Sold calculated?",
              "a": "Opening Stock + Purchases - Closing Stock."
            },
            {
              "q": "What is Net Profit?",
              "a": "Gross profit minus all operational running expenses."
            }
          ],
          "assignment": {
            "title": "Income Statement Calculation",
            "instructions": "Calculate financial performance metrics.",
            "tasks": [
              "Given: Sales ₦500,000, Opening Stock ₦80,000, Purchases ₦320,000, Closing Stock ₦60,000, Operating Expenses ₦90,000. Calculate Gross Profit and Net Profit."
            ],
            "sampleAnswer": "COGS = ₦80k + ₦320k - ₦60k = ₦340,000. Gross Profit = ₦500,000 - ₦340,000 = ₦160,000. Net Profit = ₦160,000 - ₦90,000 = ₦70,000.",
            "rubric": "10 marks. 5 pts for Gross Profit, 5 pts for Net Profit."
          },
          "quiz": [
            {
              "question": "Gross profit is determined by deducting:",
              "options": [
                "Expenses from sales",
                "Cost of goods sold from net sales",
                "Taxes from gross revenue",
                "Liabilities from assets"
              ],
              "answer": 1,
              "explanation": "Gross Profit = Net Sales - Cost of Goods Sold."
            },
            {
              "question": "Closing stock appears in which section of the financial statements?",
              "options": [
                "Trading account and Balance Sheet as a current asset",
                "Profit and loss account only",
                "Liabilities only",
                "Trial balance only"
              ],
              "answer": 0,
              "explanation": "Closing stock is deducted in the Trading Account and listed as a Current Asset on the Balance Sheet."
            },
            {
              "question": "Carriage Inwards is:",
              "options": [
                "Added to purchases in the trading account",
                "Deducted from sales",
                "Treated as a non-current liability",
                "Ignored"
              ],
              "answer": 0,
              "explanation": "Carriage inwards is the transport cost to bring goods to premises, added to purchases."
            },
            {
              "question": "Salaries and wages paid to administrative staff are debited to:",
              "options": [
                "Trading Account",
                "Profit and Loss Account",
                "Balance Sheet",
                "Capital Account"
              ],
              "answer": 1,
              "explanation": "Operational administrative overheads belong in the Profit and Loss Account."
            }
          ]
        },
        {
          "id": "acc-sss1-t3-1",
          "title": "Bank Reconciliation Statements & Cash Book Adjustments",
          "term": "Third Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Explain reasons for discrepancies between the Bank column of the Cash Book and the Bank Statement.",
            "Identify uncredited lodgments (deposits in transit) and unpresented cheques.",
            "Update the Adjusted Cash Book for direct debits, bank charges, and standing orders.",
            "Prepare a Bank Reconciliation Statement."
          ],
          "notes": "\n### 1. Causes of Discrepancies\n* **Items in Bank Statement but NOT in Cash Book:**\n  - Bank charges and interest charges (deductions).\n  - Standing orders and direct debits (deductions).\n  - Direct credit transfers from debtors (additions).\n  - Dishonored cheques.\n* **Items in Cash Book but NOT yet in Bank Statement:**\n  - **Unpresented Cheques:** Cheques issued to creditors not yet cashed at the bank.\n  - **Uncredited Lodgments (Deposits in Transit):** Cash or cheques deposited by the firm not yet credited on the bank statement.\n\n### 2. Reconciliation Procedure\n1. Step 1: Update Cash Book with bank charges, interest, and direct transfers.\n2. Step 2: Use Adjusted Cash Book balance to reconcile with Bank Statement balance:\n   $$\\text{Adjusted Cash Book Balance} + \\text{Unpresented Cheques} - \\text{Uncredited Lodgments} = \\text{Bank Statement Balance}$$\n          ",
          "summary": [
            "Unpresented cheques are added to bank balance; uncredited lodgments are deducted.",
            "Always adjust the Cash Book first for items recorded only on the bank statement.",
            "Bank reconciliation safeguards against fraud, omissions, and errors."
          ],
          "flashcards": [
            {
              "q": "What is an unpresented cheque?",
              "a": "A cheque written and issued to a payee that has not yet been presented to the bank for payment."
            },
            {
              "q": "What is an uncredited lodgment?",
              "a": "A deposit made by a firm that the bank has not yet recorded on the bank statement."
            }
          ],
          "assignment": {
            "title": "Bank Reconciliation Practical",
            "instructions": "Prepare Adjusted Cash Book and Bank Reconciliation.",
            "tasks": [
              "A business has Cash Book balance of ₦45,000. Bank statement shows bank charges of ₦2,000 and direct credit of ₦8,000. Unpresented cheques total ₦12,000; uncredited lodgments total ₦7,000. Find the adjusted cash book balance and bank statement balance."
            ],
            "sampleAnswer": "Adjusted Cash Book = ₦45,000 + ₦8,000 (direct credit) - ₦2,000 (charges) = ₦51,000. Bank Statement balance = ₦51,000 - ₦12,000 (unpresented) + ₦7,000 (uncredited) = ₦46,000.",
            "rubric": "10 marks. 5 pts for adjusted cash book, 5 pts for reconciliation."
          },
          "quiz": [
            {
              "question": "An unpresented cheque is one that has been:",
              "options": [
                "Entered in the cash book but not yet presented at the bank for payment",
                "Rejected by the bank",
                "Lost by the accountant",
                "Paid twice"
              ],
              "answer": 0,
              "explanation": "Unpresented cheques have been recorded in the cash book but not yet presented to the bank."
            },
            {
              "question": "Bank charges appearing on the bank statement must be:",
              "options": [
                "Debited to Adjusted Cash Book",
                "Credited to Adjusted Cash Book (reducing cash balance)",
                "Ignored",
                "Added to capital"
              ],
              "answer": 1,
              "explanation": "Bank charges are an expense and reduce bank balance, credited in the Cash Book."
            },
            {
              "question": "A standing order is an instruction given by an account holder to:",
              "options": [
                "The bank to pay a fixed regular sum to a specified party",
                "The police to stop fraud",
                "Customers to buy goods",
                "Suppliers to increase prices"
              ],
              "answer": 0,
              "explanation": "A standing order instructs the bank to make regular fixed payments automatically."
            },
            {
              "question": "The document issued periodically by a bank showing deposits, withdrawals, and balance is a:",
              "options": [
                "Bank Statement",
                "Trial Balance",
                "Credit Note",
                "Debit Voucher"
              ],
              "answer": 0,
              "explanation": "A bank statement lists all account transactions over a specific period."
            }
          ]
        }
      ]
    }
  },
  "Further Mathematics": {
    "icon": "♾️",
    "category": "science",
    "description": "Advanced mathematics: Surds, matrices, 2D/3D vectors, coordinate geometry, differential and integral calculus.",
    "topics": {
      "SSS 1": [
        {
          "id": "fmath-sss1-t1-1",
          "title": "Surds, Radical Operations & Conjugate Rationalization",
          "term": "First Term • Week 1-3",
          "readTime": "9 min read",
          "objectives": [
            "Define surds as irrational roots of rational numbers.",
            "Perform arithmetic operations (addition, subtraction, multiplication) on surds.",
            "Rationalize binomial surd denominators using conjugate pairs.",
            "Solve equations involving radical terms."
          ],
          "notes": "\n### 1. Properties of Surds\nA **surd** is an irrational number of the form $\\sqrt{a}$ where $a$ is not a perfect square.\n* $\\sqrt{ab} = \\sqrt{a} \\times \\sqrt{b}$\n* $\\sqrt{a/b} = \\sqrt{a} / \\sqrt{b}$\n* $(\\sqrt{a})^2 = a$\n\n### 2. Conjugate Denominator Rationalization\nThe conjugate of $(a + \\sqrt{b})$ is $(a - \\sqrt{b})$.\nBy difference of two squares:\n$$(a + \\sqrt{b})(a - \\sqrt{b}) = a^2 - b$$\n*Example:* Rationalize $\\frac{4}{3 - \\sqrt{5}}$:\n$$\\frac{4(3 + \\sqrt{5})}{(3 - \\sqrt{5})(3 + \\sqrt{5})} = \\frac{12 + 4\\sqrt{5}}{9 - 5} = \\frac{12 + 4\\sqrt{5}}{4} = 3 + \\sqrt{5}$$\n          ",
          "summary": [
            "Surds are irrational radicals.",
            "Rationalize binomial denominators by multiplying numerator and denominator by the conjugate.",
            "(a + √b)(a - √b) = a² - b eliminates square roots in denominators."
          ],
          "flashcards": [
            {
              "q": "What is the conjugate of (2 + √3)?",
              "a": "(2 - √3)."
            },
            {
              "q": "Simplify √75 in simplest surd form.",
              "a": "√(25 * 3) = 5√3."
            }
          ],
          "assignment": {
            "title": "Surd Conjugates & Equations",
            "instructions": "Show exact surd solutions.",
            "tasks": [
              "Simplify: 2√50 + 3√32 - √98.",
              "Rationalize and simplify: (3√2 + 2) / (3√2 - 2)."
            ],
            "sampleAnswer": "1. 2(5√2) + 3(4√2) - 7√2 = 10√2 + 12√2 - 7√2 = 15√2.\n2. (3√2 + 2)² / ((3√2)² - 2²) = (18 + 12√2 + 4) / (18 - 4) = (22 + 12√2) / 14 = (11 + 6√2) / 7.",
            "rubric": "10 marks. 5 pts per exact surd simplification."
          },
          "quiz": [
            {
              "question": "Simplify √48:",
              "options": [
                "2√12",
                "4√3",
                "3√4",
                "16√3"
              ],
              "answer": 1,
              "explanation": "√48 = √(16 * 3) = 4√3."
            },
            {
              "question": "The conjugate of (5 - √2) is:",
              "options": [
                "-5 - √2",
                "5 + √2",
                "√2 - 5",
                "1/(5 - √2)"
              ],
              "answer": 1,
              "explanation": "Conjugate reverses the sign of the radical term: (5 + √2)."
            },
            {
              "question": "Evaluate (√7 + √3)(√7 - √3):",
              "options": [
                "4",
                "10",
                "√21",
                "7"
              ],
              "answer": 0,
              "explanation": "(√7)² - (√3)² = 7 - 3 = 4."
            },
            {
              "question": "Rationalize 6 / √3:",
              "options": [
                "2√3",
                "3√3",
                "6√3",
                "2"
              ],
              "answer": 0,
              "explanation": "(6 * √3) / 3 = 2√3."
            }
          ]
        },
        {
          "id": "fmath-sss1-t2-1",
          "title": "Matrices & Determinants (2x2 and 3x3 Systems)",
          "term": "Second Term • Week 1-3",
          "readTime": "10 min read",
          "objectives": [
            "Perform matrix addition, scalar multiplication, and matrix multiplication.",
            "Calculate determinants of 2x2 and 3x3 matrices.",
            "Determine the inverse of a non-singular 2x2 matrix.",
            "Solve systems of simultaneous linear equations using Cramer's Rule."
          ],
          "notes": "\n### 1. Determinant of a 2x2 Matrix\n$$A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\implies \\det(A) = |A| = ad - bc$$\n* If $\\det(A) = 0$, the matrix is **singular** and has no inverse.\n\n### 2. Inverse of a 2x2 Matrix\n$$A^{-1} = \\frac{1}{|A|} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$$\n\n### 3. Solving Linear Systems via Cramer's Rule\n$$\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases} \\implies x = \\frac{|A_x|}{|A|}, \\quad y = \\frac{|A_y|}{|A|}$$\n          ",
          "summary": [
            "Determinant of [a b; c d] is ad - bc.",
            "Inverse exists only if det(A) ≠ 0 (non-singular).",
            "Cramer's rule provides an exact determinant method for solving linear equations."
          ],
          "flashcards": [
            {
              "q": "What is a singular matrix?",
              "a": "A matrix with determinant equal to zero (|A| = 0), having no inverse."
            },
            {
              "q": "What is the determinant of [3 2; 1 4]?",
              "a": "3*4 - 2*1 = 12 - 2 = 10."
            }
          ],
          "assignment": {
            "title": "Matrix Inversion & Cramer's Rule",
            "instructions": "Show matrix determinants and inversion.",
            "tasks": [
              "Find the inverse of A = [4 3; 2 2].",
              "Use Cramer's Rule to solve: 3x + 2y = 12 and 5x - y = 7."
            ],
            "sampleAnswer": "1. det(A) = 8 - 6 = 2. A^-1 = 1/2 * [2 -3; -2 4] = [1 -1.5; -1 2].\n2. D = 3(-1) - 2(5) = -13. Dx = 12(-1) - 2(7) = -26. Dy = 3(7) - 12(5) = -39. x = -26/-13 = 2, y = -39/-13 = 3.",
            "rubric": "10 marks. 5 pts per problem."
          },
          "quiz": [
            {
              "question": "The determinant of matrix [5 3; 2 4] is:",
              "options": [
                "14",
                "26",
                "20",
                "7"
              ],
              "answer": 0,
              "explanation": "5*4 - 3*2 = 20 - 6 = 14."
            },
            {
              "question": "A matrix with determinant equal to zero is called:",
              "options": [
                "Singular",
                "Non-singular",
                "Identity",
                "Diagonal"
              ],
              "answer": 0,
              "explanation": "Singular matrices have det = 0 and cannot be inverted."
            },
            {
              "question": "Matrix multiplication AB is possible only when:",
              "options": [
                "Columns of A equal rows of B",
                "A and B are both square",
                "Rows of A equal columns of B",
                "Determinants are equal"
              ],
              "answer": 0,
              "explanation": "Matrix multiplication requires inner dimensions to match (cols of A = rows of B)."
            },
            {
              "question": "If A = [2 0; 0 2], then A is a:",
              "options": [
                "Scalar matrix",
                "Null matrix",
                "Singular matrix",
                "Row matrix"
              ],
              "answer": 0,
              "explanation": "A scalar matrix is a diagonal matrix where all diagonal entries are equal."
            }
          ]
        },
        {
          "id": "fmath-sss1-t3-1",
          "title": "Differential Calculus: First Principles & Differentiation Rules",
          "term": "Third Term • Week 1-3",
          "readTime": "11 min read",
          "objectives": [
            "Derive derivatives of basic polynomials from first principles: dy/dx = lim(h->0) [f(x+h) - f(x)] / h.",
            "Apply the Power Rule: d/dx(x^n) = n*x^(n-1).",
            "Apply Product, Quotient, and Chain Rules of differentiation.",
            "Apply derivatives to find gradients of tangents, normals, velocity, and acceleration."
          ],
          "notes": "\n### 1. Definition from First Principles\nThe derivative represents the instantaneous rate of change or gradient of a function:\n$$\\frac{dy}{dx} = f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$$\n* *Example:* For $f(x) = x^2$:\n  $$\\frac{(x+h)^2 - x^2}{h} = \\frac{2xh + h^2}{h} = 2x + h \\xrightarrow{h \\to 0} 2x$$\n\n### 2. Standard Differentiation Rules\n* **Power Rule:** $\\frac{d}{dx}(a x^n) = a n x^{n-1}$\n* **Product Rule:** $\\frac{d}{dx}(uv) = u \\frac{dv}{dx} + v \\frac{du}{dx}$\n* **Quotient Rule:** $\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{v \\frac{du}{dx} - u \\frac{dv}{dx}}{v^2}$\n* **Chain Rule:** $\\frac{dy}{dx} = \\frac{dy}{du} \\times \\frac{du}{dx}$\n\n### 3. Kinematic Applications\n* Displacement $s(t) \\implies$ Velocity $v(t) = \\frac{ds}{dt} \\implies$ Acceleration $a(t) = \\frac{dv}{dt} = \\frac{d^2 s}{dt^2}$.\n\n> **🔬 Pioneer Spotlight: Prof. Chike Obi (1921–2008)**\n> Cambridge PhD in 1950; first Nigerian mathematics professor and world-renowned pioneer in non-linear ordinary differential equations and boundary value problems!\n          ",
          "summary": [
            "Derivative is instantaneous rate of change; power rule gives d/dx(x^n) = n*x^(n-1).",
            "Product rule: d(uv) = u*dv + v*du; Quotient rule: d(u/v) = (v*du - u*dv)/v².",
            "Velocity is the first derivative of displacement; acceleration is the second derivative."
          ],
          "flashcards": [
            {
              "q": "What is the derivative of 5x³?",
              "a": "15x²."
            },
            {
              "q": "What is the derivative of a constant?",
              "a": "0."
            },
            {
              "q": "If s = 3t² - 4t, what is velocity v at t = 2?",
              "a": "v = ds/dt = 6t - 4 => at t=2: 6(2) - 4 = 8 m/s."
            }
          ],
          "assignment": {
            "title": "Calculus Differentiation Set",
            "instructions": "Show algebraic working and derivative rules.",
            "tasks": [
              "Differentiate y = (3x² - 2)(2x + 1) using the Product Rule.",
              "A particle moves such that its displacement is s = 2t³ - 9t² + 12t. Find: a) velocity function, b) times when the particle is momentarily at rest."
            ],
            "sampleAnswer": "1. u = 3x²-2, v = 2x+1. dy/dx = (3x²-2)(2) + (2x+1)(6x) = 6x² - 4 + 12x² + 6x = 18x² + 6x - 4.\n2. v = ds/dt = 6t² - 18t + 12. Rest => v = 0 => 6(t² - 3t + 2) = 0 => (t - 1)(t - 2) = 0 => t = 1 s and t = 2 s.",
            "rubric": "10 marks. 5 pts per problem with clear derivatives."
          },
          "quiz": [
            {
              "question": "Differentiate y = 4x⁵ with respect to x:",
              "options": [
                "20x⁴",
                "4x⁴",
                "20x⁵",
                "5x⁴"
              ],
              "answer": 0,
              "explanation": "dy/dx = 4 * 5 * x^(5-1) = 20x⁴."
            },
            {
              "question": "The gradient of the tangent to the curve y = x² - 3x at x = 4 is:",
              "options": [
                "5",
                "8",
                "1",
                "4"
              ],
              "answer": 0,
              "explanation": "dy/dx = 2x - 3. At x = 4: 2(4) - 3 = 5."
            },
            {
              "question": "If displacement s = 5t², the acceleration is:",
              "options": [
                "5",
                "10",
                "10t",
                "25"
              ],
              "answer": 1,
              "explanation": "v = ds/dt = 10t; a = dv/dt = 10."
            },
            {
              "question": "The derivative of sin(x) with respect to x is:",
              "options": [
                "-cos(x)",
                "cos(x)",
                "tan(x)",
                "-sin(x)"
              ],
              "answer": 1,
              "explanation": "d/dx(sin x) = cos x."
            }
          ]
        }
      ]
    }
  }
};

/**
 * Universal dynamic curriculum synthesizer:
 * Returns topics for any class/subject, with optional Term Filtering ('all', 'First Term', 'Second Term', 'Third Term').
 * Automatically guarantees complete 3-term coverage for all subjects.
 */

// ================= 2026/2027 NIGERIAN MASTER SCHEME OF WORK =================
const MASTER_SCHEME_OF_WORK = {
  nursery: {
    "Language & Literacy": {
      firstTerm: ["Listening and speaking","Greetings and polite expressions","Alphabet recognition","Letter sounds","Picture reading","Vocabulary building","Rhymes and songs","Storytelling","Name recognition","Pre-writing patterns","Simple word formation","Simple sentence expression"],
      secondTerm: ["Listening and speaking (Advanced)","Polite requests & classroom expressions","Vowel and consonant letter recognition","CVC word sounds","Picture story sequencing","Everyday objects vocabulary","Action rhymes and songs","Retelling simple stories","Writing own name","Fine motor pencil control","Two-letter word blending","Constructing simple phrases"],
      thirdTerm: ["Speech presentation & show-and-tell","Conversational greetings in culture","Upper and lower case matching","Beginning and ending sounds","Independent picture reading","Synonyms & descriptive words","Poetry recitation","Role-playing stories","Sight words recognition","Forming legible letters","Three-letter word reading","Simple reading sentences"]
    },
    "Numeracy": {
      firstTerm: ["Number recognition","Counting objects","Matching numbers and quantities","Sorting","Shapes","Colours","Patterns","Comparing sizes","Position and direction","Simple addition","Simple subtraction","Number writing"],
      secondTerm: ["Numbers 1 to 20 identification","Counting forward and backward","Grouping quantities into sets","Sorting by colour, shape and size","2D shapes (Circle, Square, Triangle, Rectangle)","Primary and secondary colours","Creating repeating patterns","Comparing weight and length (Heavy/Light, Long/Short)","Spatial concepts (Inside/Outside, Above/Below)","Addition with concrete counters","Subtraction with pictorial objects","Writing numerals 1 to 20 cleanly"],
      thirdTerm: ["Numbers 1 to 50 recognition","Skip counting in 2s and 10s","Number bonds and pairs","Venn diagram sorting basics","3D solid shapes (Sphere, Cube, Cylinder)","Colour mixing experiments","Complex ABAC patterns","Capacity and volume exploration","Directional navigation (Left, Right, Turn)","Story problem addition up to 10","Story problem subtraction up to 10","Number writing and missing number drills"]
    },
    "Basic Science & Environment": {
      firstTerm: ["My body","Five senses","Healthy habits","Food","Animals","Plants","Weather","Water","Air","Home and school environment","Safety","Cleanliness"],
      secondTerm: ["Body parts and functions","Sight, sound, taste, touch & smell experiments","Handwashing and dental care","Healthy vs junk food groups","Domestic animals and their sounds","Parts of a plant (Root, stem, leaf)","Sunny, rainy, cloudy & windy days","Sources and uses of water","Properties of air and wind","Mapping rooms at home and school","Playground and road safety rules","Waste disposal and clean surroundings"],
      thirdTerm: ["Caring for our organs","Sensory discrimination games","Disease prevention and hygiene","Origin of food: crops and livestock","Wild animals and their habitats","Germination and caring for seedlings","Harmattan, dry and rainy seasons","Water conservation and purification","Air resistance and flying objects","Community safety landmarks","First aid awareness for toddlers","Environmental sustainability and trees"]
    },
    "Creative Arts": {
      firstTerm: ["Lines and shapes","Colouring","Drawing","Paper work","Cutting and pasting","Clay/play dough","Printing","Music","Rhythm","Drama","Craft","Art exhibition"],
      secondTerm: ["Geometric line patterns","Crayon and paint blending","Drawing family and pets","Origami folding basics","Collage creation with scrap materials","Clay sculpture and pottery modelling","Leaf and thumb printing techniques","Singing traditional folksongs","Clapping and percussion rhythms","Puppet drama and character play","Paper mache and bead threading","Classroom art showcase"],
      thirdTerm: ["Freeform expressive drawing","Watercolour exploration","Drawing community vehicles and landmarks","Paper weaving and 3D paper crafts","Decoupage and mosaic art","Clay modelling of fruits and utensils","Object and stencil printmaking","Musical instrument identification","Dance movement and musical tempo","Role playing everyday heroes","Indigenous Nigerian crafts","End-of-year creative art gallery"]
    },
    "Physical & Health Education": {
      firstTerm: ["Body movement","Walking and running","Jumping","Balancing","Throwing and catching","Simple games","Personal hygiene","Healthy food","Rest and sleep","Safety","Posture","Exercise"],
      secondTerm: ["Coordination and agility drills","Sprinting and jogging form","High and broad jumping techniques","Static and dynamic balancing on beams","Underarm and overarm ball handling","Tag and relay team games","Bathing, hair grooming and nail care","Balanced diet for growing children","Benefits of restful sleep for recovery","Safety during physical education","Proper sitting and standing posture","Aerobic warm-ups and cool-downs"],
      thirdTerm: ["Complex locomotor transitions","Track fun games and hurdles","Hopscotch and rope jumping","Gymnastics tumbling and balance","Target throwing and catching skills","Traditional Nigerian playground games","Sanitation and germ prevention","Water hydration and nutritious snacks","Daily health routines and sleep hygiene","Emergency drills and field safety","Spinal health and ergonomic posture","Cardiovascular obstacle courses"]
    },
    "Social & Moral Development": {
      firstTerm: ["Myself","My family","My school","Friends","Respect","Sharing","Helping others","Rules","Good manners","Community helpers","National symbols","Peace"],
      secondTerm: ["Self-identity and uniqueness","Roles of family members","School rules and staff appreciation","Making and keeping good friends","Showing respect to elders and peers","Sharing toys and turn-taking in games","Acts of kindness in classroom","Why we have laws and guidelines","Magic words: Please, Thank you, Excuse me","Doctors, teachers, police and farmers","The Nigerian flag, anthem and pledge","Living in harmony and conflict resolution"],
      thirdTerm: ["Personal strengths and self-confidence","Extended family and cultural heritage","Our school community and values","Inclusivity and helping new classmates","Courtesy in public places","Teamwork and collaborative tasks","Civic responsibility for youngsters","Honesty and truthfulness","Table manners and public etiquette","Emergency services and community heroes","National identity, unity and diversity","Peacemaking and empathetic communication"]
    }
  },

  primary_jss: {
    "English Studies": {
      firstTerm: ["Listening and speaking","Phonics and word sounds","Vocabulary development","Reading comprehension","Guided reading and fluency","Grammar: Nouns (types & usage)","Grammar: Verbs and action words","Grammar: Adjectives and descriptors","Sentence construction","Punctuation (capitals, periods, commas)","Spelling rules & orthography","Writing composition: Narrative & descriptive"],
      secondTerm: ["Oral English & pronunciation (vowels/consonants)","Reading fluency and intonation","Vocabulary in contextual reading","Pronouns (personal, possessive, relative)","Tenses (Present, Past, Future continuous)","Conjunctions and connecting ideas","Prepositions of time, place and direction","Direct and indirect speech fundamentals","Letter writing (informal & formal structures)","Creative story writing & character plot","Summary skills & identifying main ideas","Term revision and assessment prep"],
      thirdTerm: ["Public speaking & presentation skills","Phonics: diphthongs and silent letters","Advanced lexical expansion & antonyms","Expository reading comprehension","Critical guided reading & inference","Grammar: Adverbs of manner, time & degree","Grammar: Subject-verb agreement (Concord)","Active and passive voice constructions","Complex and compound sentence building","Advanced punctuation (apostrophes, quotes)","Spelling bee drills and word origins","Writing composition: Expository & argumentative"]
    },
    "Mathematics": {
      firstTerm: ["Whole numbers: Place value and ordering","Counting, expanded notation & indices","Addition of large whole numbers with regrouping","Subtraction with borrowing across place values","Multiplication algorithms and multi-digit tables","Long and short division with remainders","Fractions: Proper, improper and mixed numbers","Decimals: Conversion, addition and subtraction","Money: Currency calculation, profit and loss","Measurement: Length, perimeter and mass units","Time: Clock reading, elapsed time and calendars","2D and 3D geometric shapes and properties"],
      secondTerm: ["Perimeter of regular and composite figures","Area calculation of squares, rectangles & triangles","Angles: Acute, obtuse, right and reflex angles","Graphs, pictograms and bar charts interpretation","Number patterns, sequences and series rules","Ratio, proportion and direct variation","Percentages: Conversion, discounts and interest","Word problems: Multi-step practical calculations","Algebraic thinking: Variables, terms and balancing","Data handling: Mean, median, mode and frequency","Probability basics: Likelihood and sample spaces","Comprehensive revision and problem solving"],
      thirdTerm: ["Integers: Positive and negative number operations","Fractions: Multiplication, division and BODMAS","Decimals and percentages real-world applications","Volume and capacity of cubes, cuboids and cylinders","Angles in parallel lines and triangle angle sum","Symmetry, tessellations and coordinate grid basics","Speed, distance and time rate calculations","Simple interest, tax and financial transactions","Algebra: Linear equations and substitution","Cumulative data presentation and pie charts","Experimental probability and chance trials","Full session examination preparation"]
    },
    "Basic Science and Technology": {
      firstTerm: ["Living and non-living things classification","Human body systems and major organs","Plant structure, photosynthesis and types","Animal classification: Vertebrates & Invertebrates","States of matter (Solids, Liquids, Gases)","Water cycle, properties and purification","Air composition, pressure and atmospheric layers","Weather instruments, forecasts and seasons","Energy forms, transformations and conservation","Light: Reflection, refraction and shadows","Sound: Production, propagation and pitch","Simple machines: Levers, pulleys and inclined planes"],
      secondTerm: ["Technology at home, school and modern industry","Safety procedures in workshops and labs","Soil types, composition, texture and fertility","Environmental pollution: Causes, effects and controls","Health, hygiene and communicable disease control","Nutrition: Food nutrients, deficiency diseases","Reproduction in flowering plants (Pollination & seed dispersal)","Forces: Gravity, friction, magnetic and upthrust","Electricity basics: Circuits, conductors and insulators","Materials science: Wood, metals, plastics and glass","Waste management, recycling and environmental care","Mid-session review and experimental practicals"],
      thirdTerm: ["Ecosystems, food chains and ecological balance","Skeletal and muscular systems in humans","Adaptations of plants and animals to habitats","Chemical changes vs physical changes","Clean water access and sanitation engineering","Renewable energy: Solar, wind and hydropower","Sound wave acoustics and hearing protection","Light optics: Lenses, prisms and the rainbow","Complex machines: Wheel and axle, gears and screws","Digital technology and microcontrollers introduction","Climate change, deforestation and conservation","Practical science exhibition and assessment"]
    },
    "Social Studies": {
      firstTerm: ["The family: Nuclear, extended and contemporary roles","School community: Organization, rights and duties","Friendship, peer pressure and positive relationships","Culture: Material and non-material heritage in Nigeria","Societal values: Honesty, discipline and integrity","Rules and regulations at home, school and highway","Leadership and followership in communities","Community helpers and essential public services","Transportation systems: Road, rail, water and air","Communication: Traditional and modern telecommunications","Environmental quality and sanitation practices","Natural and mineral resources of Nigeria"],
      secondTerm: ["Peoples of Nigeria: Ethnic diversity and traditions","National unity: Symbols, unity in diversity, NYSC","Conflict resolution and peacebuilding strategies","Population: Census, distribution and migration patterns","Economic activities: Primary, secondary & tertiary","Consumer education: Consumer rights, fake products, NAFDAC","Citizenship: Acquisition, duties and patriotism","Democracy basics: Free speech, voting and representation","Social cooperation and community self-help projects","Social problems: Cultism, substance abuse, vandalism","Responsible behaviour in the digital and public sphere","Term review and civic engagement case studies"],
      thirdTerm: ["Family challenges: Divorce, poverty and child rights","Cultural preservation and national festivals","National consciousness and national heroes/heroines","Global interdependence and international diplomacy","Gender equality and women in leadership","Road safety guidelines (FRSC) and hazard awareness","Governance structures: Federal, state and local tiers","Banking, currency and saving for the future","Combating corruption and promoting accountability","Disaster management (NEMA) and emergency relief","Sustainable development and green communities","Final examination revision and project work"]
    },
    "Civic Education": {
      firstTerm: ["Meaning, goals and importance of civic education","Values: Justice, fairness, tolerance and courage","Rights and duties of citizens under the Constitution","Rules and laws: Importance and consequences of disobedience","Personal and civic responsibility","Honesty and truth-telling in governance and society","Integrity and moral uprightness in daily life","Respect for constituted authority and elders","National identity: Pride in Nigeria and national heritage","National symbols: Flag, coat of arms, pledge, currency","Democracy: Principles, democratic institutions and rule","Community leadership and traditional institutions"],
      secondTerm: ["The Nigerian Constitution: Meaning and basic features","Rule of law: Equality before the law and due process","Fundamental human rights and protection agencies","Good citizenship: Participation, tax payment and voting","Community service, volunteerism and civic pride","Peace and national harmony across diverse groups","Tolerance and inter-ethnic coexistence","Corruption awareness: EFCC, ICPC and anti-graft drives","Security awareness and reporting suspicious activities","Electoral process: INEC, voting steps and ballot integrity","National unity and factors that promote solidarity","Term review, civic drills and assessment"],
      thirdTerm: ["Public administration and the three arms of government","The Judiciary: Courts, justice and legal protections","Civil society organizations and grassroots advocacy","Youth empowerment and national development","Combating crime: Drug trafficking, kidnapping, fraud","National values vs negative social values","International human rights charters (UN, AU)","Traffic laws and civic safety on expressways","Consumer protection and standards enforcement (SON)","Environmental civic duty: Anti-littering and tree planting","Patriotic dedication and service to the motherland","Comprehensive revision and mock examination"]
    },
    "Computer Studies / ICT": {
      firstTerm: ["What is a computer? History and definitions","Parts of a computer: Hardware, software and peopleware","Input devices: Keyboards, mouse, scanners, microphones","Output devices: Monitors, printers, speakers, projectors","Storage devices: Hard drives, SSDs, flash drives, cloud","Keyboard skills: Home row typing and shortcut keys","Mouse skills: Pointing, clicking, drag-and-drop","Operating systems: Windows, macOS, Linux, Android","Desktop interface, windows navigation and file management","Word processing: Microsoft Word & Google Docs interface","Formatting text: Fonts, colours, styles and spacing","Tables, headers, footers and page layouts in documents"],
      secondTerm: ["Presentations: Creating PowerPoint and Google Slides","Internet basics: World Wide Web, browsers and URLs","Online safety, password protection and avoiding phishing","Digital citizenship, cyberbullying and online ethics","Email basics: Composing, attaching files and sending","Search skills: Using search engines and verifying sources","Coding concepts: Sequencing, loops and conditionals","Algorithms: Step-by-step problem solving instructions","Flowcharts: Symbols, process mapping and logic flow","Scratch programming: Sprites, blocks and simple games","Data vs information: Collection, processing and output","Technology in society: Impact on healthcare, banks & schools"],
      thirdTerm: ["Spreadsheet fundamentals: Excel cells, rows and columns","Formulas in spreadsheets: SUM, AVERAGE, MIN, MAX","Data visualization: Creating pie, bar and line charts","Computer networking: LAN, WAN, Wi-Fi and Bluetooth","The Internet of Things (IoT) and smart devices","Robotics and automation: Basic sensors and motors","Cybersecurity: Viruses, malware, firewalls and backups","Digital art and graphic design tools (Canva, Paint)","Web design basics: HTML tags, links and images","Artificial Intelligence: Voice assistants, search and ethics","ICT career pathways: Developers, designers, analysts","Practical computing project and typing proficiency test"]
    },
    "Physical and Health Education": {
      firstTerm: ["Physical fitness: Components, stamina and flexibility","Locomotor skills: Walking, sprinting, galloping, sliding","Non-locomotor skills: Bending, twisting, stretching, swinging","Manipulative skills: Throwing, catching, kicking, striking","Athletics (Track & Field): 100m, relays and long jump","Football: Ball control, passing, dribbling and shooting","Basketball: Dribbling, chest pass, bounce pass and layups","Volleyball: Serving, setting, bumping and rotation rules","Gymnastics: Floor exercises, forward rolls and balances","Dance and rhythmic gymnastics to music","Nutrition for athletes: Hydration, carbohydrates and proteins","Personal hygiene: Dental, skin, hair and footwear care"],
      secondTerm: ["First aid awareness: ABCs, treating cuts, sprains and burns","Safety measures in physical activities and playground sports","Posture: Lordosis, kyphosis, scoliosis and corrective exercises","Respiratory and circulatory health during aerobic exercise","Healthy lifestyle: Avoiding smoking, alcohol and drugs","Recreation: Outdoor games, camping and mental well-being","Teamwork, cooperation and group strategy in team sports","Sportsmanship: Fair play, respecting referees and opponents","Rules and regulations of major racket sports (Table Tennis, Badminton)","Training principles: Warm-up, overload, progression and cool-down","Fitness assessment: Beep test, sit-ups, push-ups and BMI","Mid-year sports tournament review and fitness tracking"],
      thirdTerm: ["Traditional Nigerian sports: Ayo, Kokawa, Dambe basics","Swimming: Water safety, flutter kick, freestyle stroke","Field events: Shot put, javelin and high jump techniques","Handball: Rules, dribbling, catching and goal shots","Communicable vs non-communicable diseases prevention","Environmental health: Vector control (mosquitoes, rodents)","Mental and emotional health in growing adolescents","Puberty and reproductive health education","Drug education: Prescriptions vs illegal substances","Sports management, officiating and tournament fixtures","First aid emergency simulation (CPR and fracture splints)","Annual sports day preparation and fitness exam"]
    },
    "Agricultural Science": {
      firstTerm: ["Meaning, branches and historical origin of agriculture","Importance of agriculture to individuals, industries and Nigeria","Simple farm tools: Cutlass, hoe, spade, rake and wheelbarrow","Farm safety and tool maintenance (sharpening, greasing, storage)","Soil: Meaning, components (mineral, organic, air, water)","Soil fertility: Compost, green manure and inorganic fertilizers","Crop production: Classification of crops by life cycle and use","Seeds: Selection, testing viability and dormancy breaking","Planting methods: Direct seeding, nursery beds and transplanting","Crop maintenance: Weeding, thinning, mulching and watering","Harvesting: Timing, indicators of maturity and techniques","Crop storage: Silos, cribs, rhumbus and refrigeration"],
      secondTerm: ["Crop pests: Insects, rodents and birds (identification & damage)","Crop diseases: Fungal, bacterial and viral infections","Livestock classification: Cattle, sheep, goats, pigs and rabbits","Animal feeds and feeding: Roughages, concentrates and minerals","Animal housing: Pens, paddocks, cages and hygiene standards","Fish farming (Aquaculture): Pond construction, stocking & feed","Poultry management: Broilers, layers, brooding and egg production","Farm records and accounts: Farm diary, cash book and profit/loss","Agricultural marketing: Channels, packaging and export crops","Agricultural resources: Forests, wildlife and water conservation","Environmental care: Preventing bush burning, erosion and desertification","Comprehensive term review and school farm practicals"],
      thirdTerm: ["Agricultural mechanization: Tractors, planters and harvesters","Soil conservation techniques: Terracing, contouring, windbreaks","Irrigation systems: Drip, sprinkler, surface and canal methods","Animal health: Vaccines, deworming and veterinary care","Pasture and forage management for grazing animals","Horticulture: Ornamental flowers, landscaping and vegetable gardens","Agricultural cooperatives and government micro-credit schemes","Agro-processing: Processing cassava, oil palm, cocoa and grains","Biotechnology and genetically improved crop varieties in Africa","Career opportunities in modern agriculture and agribusiness","Setting up a profitable school farm enterprise","Final session agricultural exhibition and assessment"]
    },
    "Creative Arts / Cultural and Creative Arts": {
      firstTerm: ["Elements of art: Line, shape, form, colour, texture, space, value","Principles of design: Balance, contrast, emphasis, movement, pattern","Drawing: Still life, nature drawing and shading techniques","Painting: Colour wheel, primary, secondary and tertiary hues","Collage and mosaic: Using fabric, seeds, paper and shells","Printmaking: Relief, potato, leaf and linoleum printing","Clay and pottery: Pinch, coil and slab methods","Lettering and calligraphy: Block letters and roman alphabets","Sculpture: Modelling, carving and construction with wire/paper","Traditional Nigerian crafts: Tie-dye (Adire), calabash carving","Art history: Nok culture, Igbo-Ukwu, Ife and Benin bronzes","Exhibition: Mounting, framing and presenting art pieces"],
      secondTerm: ["Music: Definition, origins and importance in African society","Rhythm and beat: Time signatures (2/4, 3/4, 4/4) and tempo","Melody: Treble staff, bass staff, musical notes and rests","Singing: Pitch control, breathing techniques and choral harmony","Musical instruments: Idiophones, membranophones, chordophones, aerophones","Nigerian traditional musical instruments: Talking drum, Ogene, Kakaki","Drama: Definition, elements (Plot, character, dialogue, setting)","Playwriting and script creation for school theatre","Dance: Functions, traditional dance steps of Nigerian ethnic groups","Costumes, makeup and stage design in theatre productions","Art appreciation: Critiquing aesthetic works constructively","Mid-year performing arts recital and review"],
      thirdTerm: ["Graphic design: Posters, book covers, logos and greeting cards","Textile design: Batik, screen printing and fabric decoration","Photography: Framing, lighting and digital mobile photography","Animation basics: Stop-motion and flipbook animation","Folktales, myths and legends dramatization","Contemporary Nigerian music and dance genres (Afrobeats, Highlife)","Puppetry and shadow theatre performance","Community art projects: Murals and public sculptures","Cultural heritage preservation and museum management","Careers in the creative economy (Fashion, animation, film, music)","Staging a full school musical drama production","Final creative arts portfolio review and grading"]
    },
    "Religious Studies": {
      firstTerm: ["God the Creator: The universe, nature and human life","Good character, moral virtues and spiritual uprightness","Family values: Love, mutual respect, discipline and support","Obedience to divine commandments, parents and civil authority","Kindness, charity and caring for the needy and vulnerable","Honesty, truthfulness and living without deception","Forgiveness and reconciliation in times of conflict","Service to God and humanity through sacrificial giving","Respect for human life, dignity and sacred places","Love of neighbour: Breaking ethnic and tribal barriers","Peacebuilding: Living peacefully with people of all faiths","Personal and corporate responsibility in society"],
      secondTerm: ["Faith: Meaning, heroes of faith and unwavering trust in God","Prayer: Meaning, types (Thanksgiving, petition, intercession)","Community worship: Fellowship, reverence and holy days","Moral choices: Resisting peer pressure and moral dilemmas","Leadership: Qualities of righteous and accountable leaders","Helping others: The Good Samaritan and philanthropic giving","Justice and fairness: Defending the rights of the oppressed","Self-control, temperance and emotional discipline","Gratitude and contentment vs greed and materialism","Compassion, empathy and comforting the bereaved","Scriptural teachings on stewardship and the environment","Term review and ethical case study assessments"],
      thirdTerm: ["Sacred scriptures: Structure, messages and historical context","Prophets and apostles: Calls, missions and divine revelations","Living out virtues: Humility, patience, perseverance and hope","Social justice: Combating oppression, poverty and corruption","Interfaith dialogue and religious tolerance in Nigeria","Covenant keeping: Faithfulness in promises and contracts","The sanctity of marriage, sexual purity and adolescent guidance","Facing adversity and trials with faith and courage","Wisdom literature: Proverbs, parables and moral philosophy","The role of religious institutions in national development","Final session spiritual reflection and character assessment","Comprehensive examination revision"]
    },
    "Yoruba Language": {
      firstTerm: ["Gbigbọ ati sisọ (Listening and speaking skills)","Awọn ikini ni ile Yoruba (Greetings according to time and gender)","Alfabẹti Yoruba (25 letters: 7 vowels, 18 consonants)","Fawẹli Yoruba (Ami ohun: Do, Re, Mi; Fawẹli aranmu ati airanmu)","Kọńsónántì Yoruba (Pipin ati pipe wọn ni ọna to tọ)","Awọn ọrọ ojoojumọ (Everyday vocabulary at home and school)","Kika ọrọ ati gbolohun kukuru (Reading short words and sentences)","Kikọ lẹta ati ọrọ ni ọna to afinju (Legible letter and word writing)","Awọn orukọ nkan: Eranko, igi, ati ohun elo ile","Awọn iṣe (Verbs and simple action words)","Awọn awọ ni ede Yoruba (Funfun, dudu, pupa, awo ewe)","Awọn nọmba lati oókan de ogún (Numbers 1 to 20)"],
      secondTerm: ["Ìdílé ni ile Yoruba: Baba, iya, aburo, ẹgbọn, baale ile","Ile-iwe: Awọn ohun elo ati awọn eniyan ile-iwe","Ọjà ni ile Yoruba: Titaja, rira nkan ati iṣowo","Owe Yoruba ati itumọ wọn fun iwa rere","Àlọ pipa: Àlọ apamo ati àlọ apagbe","Ewi Yoruba: Kika ati itupalẹ ewi ọmọde","Aṣa Yoruba: Aṣọ wiwọ (Agbada, iro ati buba, fila, gele)","Orin ibilẹ: Orin ere ọmọde ati orin iṣẹ","Ibaraẹnisọrọ: Biba agbalagba ati ẹlẹgbẹ sọrọ pẹlu ọwọ","Kikọ gbolohun: Ọrọ orukọ, ọrọ iṣe ati afikun","Kika ọrọ: Àkàwé ati idanwo oye kukuru","Atunwo gbogbo ẹkọ sáà keji"],
      thirdTerm: ["Isọmọlorukọ ni ile Yoruba: Oruko amutorunwa, abiso ati oriki","Igbeyawo ni ile Yoruba: Idana, alarina ati ayẹyẹ","Eto idajọ ati ijọba ibilẹ: Ọba, Baalẹ ati awọn Oloye","Oúnjẹ ilẹ Yoruba: Iyan, amala, eba, ewedu ati gbegiri","Iṣẹ abinibi: Awọn alagbedẹ, awon aranmọ, awon apeja","Ami ohun to peye: Fifi ami ohun si ori ọrọ","Gbolohun alalaye, ibeere ati aṣẹ","Itumọ ede: Yiyipada ọrọ lati Gẹẹsi si Yoruba","Kikọ arokọ: Ìtàn kukuru tabi arokọ asapejuwe","Ere idaraya ibilẹ: Ayo olopon, eke, bojúbojú","Iwa ọmọluwabi: Itumọ, pataki ati abuda rẹ","Idanwo ipari ọdun ati igbelewọn"]
    }
  },

  senior_secondary: {
    "English Language": {
      firstTerm: ["Comprehension: Identifying topic sentences, main ideas and inferences","Vocabulary development: Synonyms, antonyms and specialized registers","Grammar: Advanced parts of speech in functional contexts","Grammar: Structural nouns, count vs non-count, collective nouns","Tenses: Present perfect, past perfect, conditionals (Zero, 1st, 2nd, 3rd)","Concord: Rules of subject-verb agreement (Proximity, intervening phrases)","Clauses: Independent, subordinate, relative and adverbial clauses","Phrases: Noun phrases, adjectival phrases, prepositional phrases","Sentence structure: Simple, compound, complex, compound-complex sentences","Punctuation mastery: Semicolons, colons, dashes, hyphens, apostrophes","Summary writing: Step-by-step techniques for WAEC/NECO questions","Letter writing: Formal letters of application, petitions, official queries"],
      secondTerm: ["Continuous writing: Narrative essays with vivid characterization and plot","Argumentative writing: Constructing thesis statements, refutations and evidence","Expository essays: Process analysis, cause and effect, problem-solution","Descriptive essays: Sensory imagery, descriptive diction and spatial order","Report writing: Eye-witness reports, committee reports, laboratory reports","Speech writing: Welcome addresses, valedictory speeches, debate presentations","Oral English: Vowels (Monophthongs & Diphthongs), silent letters","Oral English: Consonant clusters, plosives, fricatives and affricates","Stress and intonation: Syllable stress, sentence stress and emphatic stress","Figures of speech: Metaphor, simile, irony, hyperbole, personification","Literary appreciation: Analysis of unseen poems and prose excerpts","Comprehensive examination practice: WAEC past papers review"],
      thirdTerm: ["Advanced summary skills: Condensing multi-paragraph passages into exact word limits","Lexis and structure: Collocations, idioms, phrasal verbs and prepositional idioms","Grammar: Inversion, subjunctive mood, nominalization and ellipsis","Active vs Passive voice: Transforming passive academic prose to active voice","Direct and indirect speech: Reporting questions, commands and past statements","Vocabulary registers: Law, medicine, commerce, agriculture, government, ICT","Article writing: Features for national dailies and youth magazines","Creative writing: Developing plot tension, dialogue and resolution","Oral English: Rhyme schemes, homophones and contrastive stress","Comprehension: Distinguishing facts from opinions and authorial tone","Chief Examiners' pitfalls: Common structural errors and spellings in WASSCE","Final examination simulation and timed objective & theory drills"]
    },
    "Mathematics": {
      firstTerm: ["Number bases: Conversion between base 10, binary, octal and base n; operations","Modular arithmetic: Addition, subtraction, multiplication in modulo systems","Indices: Laws of indices, exponential equations and fractional powers","Logarithms: Laws of logarithms, change of base, characteristic and mantissa","Surds: Simplification, rationalization of binomial surds and conjugate surds","Sets: Universal set, union, intersection, complement, Venn diagrams (2 and 3 sets)","Algebra: Factorization of quadratic expressions, expansion and algebraic fractions","Quadratic equations: Factorization, completing the square, quadratic formula","Simultaneous equations: Linear-linear and linear-quadratic simultaneous systems","Sequences and series: Arithmetic Progression (nth term, sum of first n terms)","Geometric Progression: nth term, sum of terms, sum to infinity","Variation: Direct, inverse, joint and partial variation with real-world problems"],
      secondTerm: ["Trigonometry: Sine, cosine and tangent ratios in right triangles; special angles","Trigonometric rules: Sine rule and Cosine rule for non-right triangles","Bearings and distances: Compass bearings, three-figure bearings and elevations","Mensuration: Perimeter and area of plane shapes (Triangles, sectors, segments)","Mensuration of solids: Surface area and volume of cylinders, cones, pyramids, spheres","Circle theorems: Angle at centre, angles in same segment, cyclic quadrilaterals","Tangents to circles: Alternate segment theorem, radii-tangent perpendicularity","Coordinate geometry: Distance between points, midpoint, gradient, line equations","Vectors in a plane: Vector addition, scalar multiplication and magnitude","Statistics: Frequency distribution tables, histograms, frequency polygons","Measures of central tendency: Mean, median and mode for grouped data","Probability: Addition and multiplication laws, independent & mutually exclusive events"],
      thirdTerm: ["Differentiation: First principles, power rule, product, quotient and chain rules","Applications of derivatives: Gradients of curves, tangents, normals, max/min points","Integration: Anti-derivatives, standard integrals and definite integrals","Applications of integration: Area under a curve and kinematics calculations","Matrices: Order, matrix addition, scalar multiplication, 2x2 determinants & inverses","Linear programming: Graphing inequalities, feasible regions and optimization","Financial mathematics: Simple and compound interest, depreciation, annuities","Logical reasoning: Truth tables, implications, negations, converse and contrapositive","Constructions: Bisection of lines and angles, constructing triangles and loci","Measures of dispersion: Range, mean deviation, variance and standard deviation","Cumulative frequency curves (Ogive): Median, quartiles, percentiles and interquartile range","Comprehensive WAEC/NECO/JAMB past paper masterclass and mock exams"]
    },
    "Biology": {
      firstTerm: ["Living organisms: Characteristics, levels of organization (Cell, tissue, organ, system)","Cell structure and functions: Plant vs animal cells, organelles (Mitochondria, nucleus, chloroplast)","Cell physiology: Diffusion, osmosis, plasmolysis, turgidity and active transport","Nutrition in living organisms: Autotrophic (Photosynthesis) vs Heterotrophic nutrition","Digestive systems: Human alimentary canal, enzymes, ingestion, digestion, absorption","Transport systems in animals: Blood composition, vessels, human heart and circulation","Transport in plants: Xylem and phloem mechanisms, transpiration stream, potometer","Respiratory systems: Aerobic vs anaerobic respiration, glycolysis, gaseous exchange in lungs/gills","Excretory systems: Kidney structure, nephron function, urine formation, skin, liver, lungs","Support and movement: Human skeleton (Axial & appendicular), joints, muscles, locomotion","Coordination: Nervous system, brain, spinal cord, reflex arc, eye, ear sensory organs","Endocrine system: Hormones of pituitary, thyroid, adrenal, pancreas and gonads"],
      secondTerm: ["Ecology: Ecosystem components, biotic and abiotic factors, habitats (Aquatic & Terrestrial)","Energy flow in ecosystems: Food chains, food webs, trophic levels, ecological pyramids","Nutrient cycling: Carbon cycle, nitrogen cycle, water cycle, oxygen cycle","Population studies: Sampling methods (Quadrats, transects), density, carrying capacity","Microorganisms: Bacteria, viruses, fungi, protozoa (Beneficial vs pathogenic roles)","Health and disease: Transmission, vectors (Mosquitoes, tsetse fly), immunity, vaccines","Plant physiology: Mineral requirements, water uptake, plant growth hormones (Auxins)","Animal physiology: Homeostasis, thermoregulation, osmoregulation, blood sugar control","Genetics: Mendelian inheritance (Monohybrid & dihybrid crosses), alleles, dominant/recessive","Chromosomes and DNA: Structure of DNA, RNA, sex determination, sex-linked traits (Haemophilia)","Variation: Continuous (Height, weight) vs Discontinuous variation (Blood groups, fingerprints)","Evolution: Lamarck's and Darwin's theories, natural selection, evidence of evolution"],
      thirdTerm: ["Reproduction in plants: Floral structure, pollination mechanisms, fertilization, seed development","Reproduction in animals: Male and female reproductive organs, gametogenesis, menstrual cycle","Fertilization and embryology in mammals: Gestation, placenta, birth, parental care","Adaptation for survival: Morphological, physiological and behavioural adaptations","Behavioral biology: Innate behaviour, taxis, kinesis, learned behaviour, conditioning","Conservation of natural resources: Wildlife, forests, water, mineral reserves, game reserves","Pollution: Air, water, soil and noise pollution (Causes, impacts, global warming, control)","Pest and disease control in agriculture: Biological, chemical and integrated methods","Applied biology and biotechnology: Genetic engineering, cloning, tissue culture, forensics","Practical biology skills: Food tests (Starch, glucose, protein, lipids), microscope calibration","Biological drawing: Conventions, magnification calculation, labeling accuracy for WAEC","Final WASSCE biology practical and theory intensive revision"]
    },
    "Chemistry": {
      firstTerm: ["Matter and particulate nature: Atoms, molecules, ions, physical vs chemical changes","Atomic structure: Subatomic particles, isotopes, mass number, Bohr model, electronic configuration (s, p, d, f)","The Periodic Table: Periodic law, groups, periods, trends in ionization energy, electronegativity, atomic radius","Chemical bonding: Electrovalent (ionic), covalent, coordinate, metallic and hydrogen bonding","The Mole Concept: Avogadro's number, molar mass, molar volume of gases at s.t.p.","Stoichiometry: Empirical and molecular formulas, percentage composition, balancing redox equations","States of matter and kinetic theory: Gas laws (Boyle's, Charles', Gay-Lussac's, Ideal Gas equation PV=nRT)","Gas laws: Graham's law of diffusion, Dalton's law of partial pressures","Energetics: Exothermic and endothermic reactions, enthalpy of neutralization, combustion, formation, Hess's Law","Rates of chemical reactions: Factors affecting rates (Concentration, temperature, surface area, catalysts)","Chemical equilibrium: Le Chatelier's principle, equilibrium constant Kc, Haber process, Contact process","Acids, bases and salts: Arrhenius, Bronsted-Lowry, Lewis theories, pH scale, buffers, indicators, titrations"],
      secondTerm: ["Salts: Types (Normal, acid, basic, double, complex), preparation, solubility rules, deliquescence, efflorescence","Redox reactions: Oxidation numbers, oxidizing/reducing agents, balancing half-cell equations","Electrochemistry: Electrolysis, Faraday's first and second laws (m=ZIt), extraction of Aluminium (Hall-Heroult)","Electrochemical cells: Galvanic cells, standard electrode potentials, Daniel cell, batteries, corrosion prevention","Organic chemistry introduction: Uniqueness of carbon, hybridisation (sp3, sp2, sp), homologous series","Hydrocarbons: Alkanes (Methane, fractional distillation of petroleum, cracking, reforming)","Alkenes & Alkynes: Ethene, ethyne, addition reactions, Markovnikov's rule, polymerization","Alkanols (Alcohols): Ethanol manufacture (Fermentation, hydration of ethene), oxidation, esterification","Alkanoic acids & Esters: Acetic acid, saponification, fats and oils, soaps vs detergents","Macromolecules: Carbohydrates, proteins, synthetic polymers (Nylon, polythene, plastics, vulcanized rubber)","Metals and metallurgy: Reactivity series, extraction of Iron (Blast furnace), Copper, alloys (Steel, bronze, brass)","Non-metals: Oxygen, Hydrogen, Nitrogen, Sulphur, Halogens and their compounds (Ammonia, H2SO4, HNO3, HCl)"],
      thirdTerm: ["Qualitative analysis: Systematic cation identification (Fe2+, Fe3+, Cu2+, Pb2+, Al3+, Zn2+, Ca2+, NH4+)","Qualitative analysis: Anion identification (CO3^2-, SO4^2-, SO3^2-, Cl-, NO3-, S^2-)","Volumetric analysis (Acid-base titrations): Standardization, calculations of molarity, purity, water of crystallization","Redox titrations: Potassium permanganate (KMnO4) and Iodine-thiosulphate titrations","Nuclear chemistry: Radioactivity (Alpha, beta, gamma emissions), half-life calculations, nuclear fission/fusion","Environmental chemistry: Green chemistry, ozone depletion, acid rain, greenhouse effect, heavy metal pollution","Water treatment: Municipal water purification, hardness of water (Temporary vs permanent, softening methods)","Industrial chemistry: Chemical plants, raw materials, pollution control and petrochemicals in Nigeria","Nanotechnology and advanced materials: Carbon nanotubes, fullerenes, graphene overview","Chief Examiner's common pitfalls in WASSCE Chemistry Paper 2 (Theory) and Paper 3 (Practicals)","Comprehensive calculation workshop: Mole, gas laws, electrolysis and enthalpy problems","Full timed WASSCE Chemistry mock examination and marking scheme breakdown"]
    },
    "Physics": {
      firstTerm: ["Measurements and units: Fundamental vs derived quantities, dimensional analysis, vernier calipers, micrometer screw gauge","Scalars and vectors: Vector resolution, resultant of vectors, vector addition (Parallelogram & triangle laws)","Motion: Rectilinear motion, distance-time & velocity-time graphs, equations of uniformly accelerated motion","Projectiles: Trajectory, time of flight, maximum height, horizontal range","Forces and dynamics: Newton's laws of motion, inertia, momentum, impulse, conservation of linear momentum","Work, energy and power: Work done by constant and variable forces, kinetic energy, potential energy, efficiency","Friction: Static and dynamic friction, coefficient of friction, advantages, disadvantages and reduction","Circular motion: Angular velocity, centripetal acceleration, centripetal force, banked roads, centrifuges","Simple Harmonic Motion (SHM): Period, frequency, amplitude, simple pendulum, loaded spring, resonance","Gravitation: Newton's universal law of gravitation, gravitational field strength, satellite orbital speed, escape velocity","Fluids at rest and in motion: Density, relative density, pressure in liquids, Archimedes' principle, flotation, Bernoulli's principle","Surface tension and viscosity: Capillarity, cohesive/adhesive forces, terminal velocity, Poiseuille's flow"],
      secondTerm: ["Heat energy and temperature: Thermometers, thermal expansion of solids, liquids (Anomalous expansion of water), bimetallic strips","Heat transfer: Conduction, convection, radiation, thermal conductivity, vacuum flask, greenhouse effect","Specific heat capacity: Method of mixtures, electrical method, cooling law, latent heat of fusion and vaporization","Gas laws: Boyle's law, Charles's law, pressure law, absolute zero of temperature, kinetic theory of gases","Waves: Mechanical vs electromagnetic waves, transverse and longitudinal waves, wave equation (v=fλ)","Wave properties: Reflection, refraction, diffraction, interference, polarization, superposition principle","Sound waves: Production, propagation, speed in media, echoes, reverberation, resonance in air columns, Doppler effect","Light reflection: Plane mirrors, curved mirrors (Concave & convex), mirror formula (1/f = 1/u + 1/v), magnification","Light refraction: Snell's law, refractive index, critical angle, total internal reflection, optical fibres, prisms","Lenses and optical instruments: Convex/concave lenses, lens formula, simple & compound microscope, telescope, human eye defects","Electrostatics: Coulomb's law, electric field intensity, electric potential, capacitors, capacitance in series & parallel","Current electricity: Ohm's law, resistivity, conductivity, EMF vs terminal PD, internal resistance, Kirchhoff's laws"],
      thirdTerm: ["Electrical energy and power: Heating effect (Joule's law), cost of electrical energy, fuses, wiring systems","Magnetic fields: Magnetic poles, field patterns of bar magnets, Earth's magnetic field (Angle of dip & declination)","Electromagnetism: Field due to straight conductor, solenoid, Fleming's left-hand rule, electric motor, galvanometer","Electromagnetic induction: Faraday's and Lenz's laws, induction coil, AC/DC generators, transformers (Vs/Vp = Ns/Np = Ip/Is)","Alternating current (AC) circuits: Peak and RMS values, resistance, inductance (XL), capacitance (XC), RLC series resonance","Atomic models: Thomson, Rutherford, Bohr models, atomic spectra, energy levels of hydrogen","Photoelectric effect: Quantum theory, photons, work function, Einstein's photoelectric equation (hf = W0 + KEmax), photocells","X-rays: Production, properties, hard vs soft X-rays, Bragg's law, medical and industrial applications","Wave-particle duality: De Broglie wavelength (λ = h/p), Heisenberg's uncertainty principle","Radioactivity: Decay law, half-life (N = N0 e^-λt), carbon dating, nuclear reactions (Fission & fusion), mass defect (E = mc^2)","Electronics: P-N junction diodes, rectification (Half-wave & full-wave), transistors as switches and amplifiers","Comprehensive WAEC/NECO practicals: Mechanics, optics and electricity experiment techniques and error analysis"]
    },
    "Economics": {
      firstTerm: ["Basic concepts of economics: Scarcity, choice, scale of preference, opportunity cost, production possibility curve (PPC)","Economic systems: Capitalism, socialism, mixed economy (Features, advantages, disadvantages)","Basic tools of economic analysis: Tables, graphs, charts, measures of central tendency (Mean, median, mode)","Theory of consumer behaviour: Utility, total utility, marginal utility, law of diminishing marginal utility","Theory of demand: Meaning, demand schedule, demand curve, law of demand, factors affecting demand","Theory of supply: Meaning, supply schedule, supply curve, law of supply, factors affecting supply","Equilibrium price determination: Market equilibrium, shifts vs movements along curves, price controls (Floors & ceilings)","Elasticity of demand: Price, income and cross elasticity of demand (Calculations, degrees and determinants)","Elasticity of supply: Price elasticity of supply (Calculations, degrees and factors influencing elasticity)","Theory of production: Meaning, stages of production, factors of production (Land, labour, capital, entrepreneur)","Division of labour and specialization: Advantages, disadvantages, limitations","Cost concepts: Fixed, variable, total, average, marginal costs, short-run vs long-run cost curves"],
      secondTerm: ["Revenue concepts: Total, average, marginal revenue; profit maximization rule (MR = MC)","Market structures: Perfect competition (Assumptions, short-run/long-run equilibrium)","Imperfect competition: Monopoly, oligopoly, monopolistic competition, duopoly (Price discrimination, regulation)","Business organizations: Sole proprietorship, partnership, private/public limited liability companies, public corporations","Population and labour supply: Malthusian population theory, demographic transition theory, census, dependency ratio","National income accounting: GDP, GNP, NNP, NNI, methods of measuring national income (Output, income, expenditure)","National income equilibrium: Circular flow of income, consumption function, saving, investment, multiplier effect","Money and financial systems: Functions of money, characteristics, value of money, quantity theory of money (Fisher's equation)","Banking: Central Bank (CBN) functions and monetary policy tools; Commercial banks and credit creation process","Non-bank financial institutions: Microfinance banks, insurance companies, stock exchange, SEC","Inflation and deflation: Types (Demand-pull, cost-push), causes, effects on society, fiscal/monetary control measures","Public finance: Government revenue, taxation (Direct vs indirect, progressive/regressive), government expenditure, budgets"],
      thirdTerm: ["International trade: Domestic vs international trade, basis for trade, comparative cost advantage (David Ricardo)","Trade restrictions: Tariffs, quotas, subsidies, embargoes (Arguments for and against protectionism)","Balance of payments: Current account, capital account, balance of trade, BOP disequilibrium, remedies (Devaluation, reserves)","International economic organizations: ECOWAS, AfCFTA, African Development Bank, IMF, World Bank, WTO","Economic development and planning: Underdevelopment characteristics, development plans in Nigeria, sustainable growth","Petroleum and the Nigerian economy: History of oil exploration, contribution to revenue, Dutch disease, diversification","Agriculture in Nigeria: Subsistence vs commercial farming, food security, credit schemes, government interventions","Industrialization in Nigeria: Import substitution vs export promotion, SMEs, challenges of power and infrastructure","Current economic reforms: Fuel subsidy removal, foreign exchange unification, digital economy, taxation reforms","Data interpretation: Solving WASSCE/NECO quantitative economics questions (Elasticity, national income, costs)","Essay writing techniques for Economics: Structuring points, drawing accurate graphs and analytical clarity","Full WASSCE/JAMB Economics past question simulation and exam revision"]
    },
    "Government": {
      firstTerm: ["Meaning, nature and scope of government; government as an institution of the state, art of governing, academic field","Basic concepts: Power, authority, legitimacy, sovereignty, democracy, political culture, political socialization","State and nation: Definition, characteristics of a state, relationship between state and government","Constitutions and constitutionalism: Meaning, sources, types (Written, unwritten, rigid, flexible), constitutional supremacy","Rule of law: Meaning, principles (Equality, impartiality, fundamental human rights), limitations in practice","Separation of powers and checks and balances: Montesquieu's theory, applications in presidential vs parliamentary systems","Citizenship: Acquisition (Birth, descent, registration, naturalization), rights, duties, revocation of citizenship","Political parties: Definition, types (Cadre, mass, broker), functions, party systems (One-party, two-party, multi-party)","Elections: Purpose, franchise (Suffrage qualifications), types of elections, electoral systems (Plurality, PR, runoff)","Electoral Commission: Composition, functions, independence and challenges of conducting free and fair elections (INEC)","Pressure groups: Definition, types (Economic, professional, promotional), techniques, comparison with political parties","Public opinion: Meaning, formation, measurement, importance; Mass media roles and press freedom"],
      secondTerm: ["Civil Service: Meaning, characteristics (Permanence, neutrality, anonymity, meritocracy), structure, functions, challenges","Public Corporations: Meaning, reasons for establishment, organizational structure, problems, privatization/commercialization","Local Government: Evolution, functions, sources of revenue, autonomy issues, state-local joint account controversies","Federalism: Meaning, reasons for adoption in Nigeria, features, sharing of powers (Exclusive, concurrent, residual lists)","Pre-colonial political systems in Nigeria: Hausa-Fulani (Caliphate emirate system, role of Emir, Waziri)","Pre-colonial political systems: Yoruba (Oyo Empire, checks on the Alaafin by the Oyomesi, Ogboni, Bashorun)","Pre-colonial political systems: Igbo (Segmentary, acephalous society, council of elders, age grades, Ozo title holders)","Colonial administration in Nigeria: Indirect Rule (Lord Lugard, reasons for adoption, operation in North, West, East, flaws)","Constitutional development in Nigeria: Clifford Constitution (1922) and elective principle; Richards Constitution (1946)","Constitutional development: Macpherson Constitution (1951), Lyttelton Constitution (1954) and the birth of Nigerian federalism","Independence Constitution (1960) and Republican Constitution (1963): Provisions, parliamentary model, Queen vs President","Second, Third and Fourth Republic Constitutions: 1979 Presidential Constitution, 1999 Constitution (as amended)"],
      thirdTerm: ["Military rule in Nigeria: Causes of military coups (1966-1999), structure of military regimes, consequences on democracy","Nigeria's foreign policy: Meaning, objectives, principles (Afrocentric focus, non-alignment, sovereign equality)","Nigeria in international organizations: United Nations (UN), African Union (AU), Commonwealth of Nations, ECOWAS, OPEC","Nationalism in Nigeria: Major nationalist leaders (Macaulay, Azikiwe, Awolowo, Bello), newspapers, student unions","Political crises in Nigeria: Western Region crisis (1962), Census crisis (1962/63), Federal election (1964), Civil War (1967-1970)","June 12, 1993 presidential election crisis and the transition to the Fourth Republic (1999)","Inter-governmental relations and fiscal federalism in Nigeria: Resource control, derivation principle, revenue allocation","Combating corruption in governance: The Code of Conduct Bureau, ICPC, EFCC, public accountability mechanisms","Electoral fraud and violence: Causes, consequences, technological innovations (BVAS, IReV) and future of Nigerian democracy","Answering WAEC/NECO Government essay questions: Conceptual definitions, historical accuracy, structured argumentation","Objective test speed drills: 50 JAMB/WAEC questions in 40 minutes strategy","Final session revision and mock examination"]
    },
    "Computer Science / ICT": {
      firstTerm: ["Computer fundamentals: Evolution of computing, Von Neumann architecture, computer generations (1st to 5th gen)","Data representation: Number systems (Binary, Octal, Decimal, Hexadecimal), conversions, binary addition and subtraction","Computer arithmetic: 1's and 2's complement, binary coded decimal (BCD), ASCII and Unicode character encoding","Logic gates: Fundamental gates (AND, OR, NOT), derived gates (NAND, NOR, XOR, XNOR), truth tables and Boolean expressions","Logic circuits: Combining gates, half-adders, full-adders, Karnaugh maps (2 and 3 variables) simplification","Computer hardware: CPU components (ALU, CU, registers, cache), motherboard, buses (Address, data, control buses)","Memory systems: Primary memory (RAM, ROM, SRAM, DRAM), secondary storage (HDD, SSD, NVMe, optical media, cloud storage)","Operating systems: Functions, types (Batch, time-sharing, distributed, real-time), process scheduling and memory management","File organizations: Sequential, direct, indexed-sequential; directory structures and file allocation tables (FAT, NTFS, ext4)","Word processing mastery: Advanced styling, mail merge, citation formatting, macros and document security","Spreadsheet modelling: Complex formulas (VLOOKUP, INDEX-MATCH, IF-ELSE logic), pivot tables and scenario managers","Database management systems (DBMS): Relational database concepts, entity-relationship diagrams (ERD), normalization (1NF, 2NF, 3NF)"],
      secondTerm: ["Structured Query Language (SQL): DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), JOIN operations","Computer networks: Network topologies (Star, bus, ring, mesh), network hardware (Routers, switches, modems, NIC)","Network models: OSI 7-layer model vs TCP/IP model, protocols (HTTP, HTTPS, FTP, DNS, DHCP, IP addressing IPv4 vs IPv6)","The Internet and Web development: HTML5 semantic structure, CSS3 styling, responsive layouts with Flexbox and CSS Grid","Programming concepts: High-level vs low-level languages, compilers vs interpreters, software development life cycle (SDLC)","Algorithms and problem solving: Pseudo-code, flowcharts, sorting algorithms (Bubble sort, Insertion sort), searching (Linear, Binary)","Programming in Python/JavaScript: Variables, data types, arithmetic/logical operators, input/output operations","Control structures: Conditional statements (if-elif-else), loops (for, while), loop control (break, continue)","Functions and modularity: Function definitions, arguments, return values, scope (Local vs global), recursion basics","Data structures in programming: Lists, arrays, tuples, dictionaries/maps, stacks and queues","Cybersecurity and threats: Malware (Viruses, worms, trojans, ransomware), phishing, DDoS attacks, social engineering","Cyber defense: Cryptography basics (Symmetric vs Asymmetric, AES, RSA), hashing, digital signatures, firewalls, zero trust"],
      thirdTerm: ["Artificial Intelligence and Machine Learning: Definition, supervised vs unsupervised learning, neural networks, computer vision, NLP","Ethics in AI: Algorithmic bias, deepfakes, intellectual property, automation and the future of work","Cloud computing: IaaS, PaaS, SaaS, virtualization, cloud security and major providers (AWS, Azure, Google Cloud)","Internet of Things (IoT) and embedded systems: Microcontrollers (Arduino, Raspberry Pi), sensors, actuators, smart cities","Mobile computing and app development: Native vs hybrid mobile apps, responsive design, app deployment guidelines","E-commerce and financial technology: Payment gateways, blockchain, cryptocurrencies, smart contracts, fintech revolution in Nigeria","Software project management: Agile, Scrum, Kanban, version control with Git and GitHub repository workflows","Digital forensics and cyber law: Nigerian Cybercrimes Act (2015), data privacy regulations (NDPR, GDPR), digital footprint","ICT entrepreneurship: Developing a tech startup in Nigeria, pitching tech products, monetization strategies","WAEC/NECO Data Processing & Computer Studies practical workshops: Database queries, spreadsheets and web design tasks","Common examination pitfalls: Algorithm design errors, hardware confusion and precision in technical definitions","Final WASSCE mock examination and coding project showcase"]
    }
  },

  university: {
    "Computer Science": {
      firstSemester: ["CSC 101: Introduction to Computer Science & Computing History","CSC 102: Structured Programming in Python/C++","CSC 103: Discrete Mathematics & Set Theory for Computing","CSC 104: Computer Architecture & Digital Logic Design","CSC 105: Introduction to Operating Systems Architecture","CSC 106: Data Structures (Arrays, Linked Lists, Stacks, Queues)","CSC 107: Object-Oriented Analysis and Design (Java)","CSC 108: Database Systems & Relational Algebra (PostgreSQL)","CSC 109: Computer Networks & Internet Protocols","CSC 110: Algorithm Design & Analysis (Big O, Divide and Conquer)","CSC 111: Software Engineering Methodologies & Agile","CSC 112: First Semester Examination & Capstone Programming Project"],
      secondSemester: ["CSC 201: Advanced Data Structures & Graph Algorithms","CSC 202: Web Engineering & Full-Stack Development (React/Node)","CSC 203: Systems Programming & Unix Environment","CSC 204: Artificial Intelligence & Machine Learning Fundamentals","CSC 205: Cybersecurity & Cryptographic Protocols","CSC 206: Mobile Application Engineering (Flutter/Kotlin)","CSC 207: Cloud Computing & Distributed Systems (Docker, Kubernetes)","CSC 208: Theory of Computation & Automata Theory","CSC 209: Human-Computer Interaction & UX Design","CSC 210: Big Data Analytics & Distributed Databases","CSC 211: Research Methodology & Technical Writing in Computing","CSC 212: Final Year Research Project Seminar & Evaluation"]
    },
    "Accounting": {
      firstSemester: ["ACC 101: Principles of Accounting I (Debit, Credit & Accounting Cycle)","ACC 102: Financial Accounting I (Preparation of Final Accounts)","ACC 103: Business Law & Commercial Regulations in Nigeria","ACC 104: Microeconomic Principles for Business","ACC 105: Business Mathematics & Quantitative Techniques","ACC 106: Introduction to Cost Accounting (Materials, Labour, Overheads)","ACC 107: Accounting Information Systems & ERP Platforms","ACC 108: Partnership Accounts & Dissolution Accounting","ACC 109: Taxation I: Personal Income Tax & PAYE Administration","ACC 110: Auditing Principles & Internal Control Standards","ACC 111: Ethics in the Accounting Profession & ICAN Standards","ACC 112: First Semester Comprehensive Examination & Case Studies"],
      secondSemester: ["ACC 201: Financial Accounting II (IFRS Standards & Group Accounts)","ACC 202: Management Accounting (Marginal Costing & CVP Analysis)","ACC 203: Public Sector Accounting & IPSAS Framework in Nigeria","ACC 204: Company Law & Corporate Governance Regulations","ACC 205: Corporate Financial Management & Capital Budgeting","ACC 206: Taxation II: Companies Income Tax (CIT) & Petroleum Profits Tax","ACC 207: Forensic Accounting & Fraud Investigation Methodologies","ACC 208: International Financial Reporting Standards (IFRS Practical Application)","ACC 209: Strategic Financial Management & Valuation","ACC 210: Applied Auditing & Assurance Engagements","ACC 211: Research Methodology in Accounting & Finance","ACC 212: Undergraduate Dissertation Defense & Assessment"]
    },
    "Engineering": {
      firstSemester: ["ENG 101: Engineering Mathematics I (Calculus, Differential Equations)","ENG 102: Applied Engineering Physics (Mechanics, Wave Optics)","ENG 103: General Engineering Chemistry & Materials Science","ENG 104: Engineering Drawing & Descriptive Geometry (AutoCAD)","ENG 105: Fundamentals of Electrical Engineering & Circuits","ENG 106: Engineering Mechanics: Statics (Forces, Equilibrium, Trusses)","ENG 107: Workshop Practice: Machine Shop, Welding & Fabrication","ENG 108: Computer-Aided Design (CAD) & Solid Modelling","ENG 109: Fluid Mechanics I (Hydrostatics, Continuity & Bernoulli)","ENG 110: Thermodynamics I (First and Second Laws, Heat Engines)","ENG 111: Engineering Ethics, Safety Standards & Environmental Impact","ENG 112: First Semester Examination & Laboratory Practical Exams"],
      secondSemester: ["ENG 201: Engineering Mathematics II (Linear Algebra, Laplace Transforms)","ENG 202: Engineering Mechanics: Dynamics (Kinematics, Kinetics)","ENG 203: Strength of Materials & Stress-Strain Analysis","ENG 204: Electrical Machines & Electromechanical Energy Conversion","ENG 205: Control Systems Engineering (Transfer Functions, PID Controllers)","ENG 206: Heat & Mass Transfer Engineering","ENG 207: Engineering Materials Testing & Metallography","ENG 208: Instrumentation, Measurements & Sensor Systems","ENG 209: Engineering Economics, Cost Estimation & Project Management","ENG 210: Numerical Methods & Computational Engineering (MATLAB)","ENG 211: Research Methodology & Engineering Design Methodology","ENG 212: Final Year Engineering Design Project & Defense"]
    },
    "Medicine / Health Sciences": {
      firstSemester: ["MED 101: Human Gross Anatomy: Upper & Lower Limbs, Thorax","MED 102: Medical Embryology & Congenital Anomalies","MED 103: Medical Histology: Cell Types, Epithelial & Connective Tissues","MED 104: Medical Physiology I: Cell Physiology & Hematology","MED 105: Medical Biochemistry: Biomolecules, Enzymes & Kinetics","MED 106: Medical Microbiology I: Bacteriology & Virology Fundamentals","MED 107: General Pathology: Cellular Injury, Inflammation & Healing","MED 108: Basic Pharmacology: Pharmacokinetics & Pharmacodynamics","MED 109: Community Medicine: Epidemiology & Biostatistics","MED 110: Medical Genetics & Molecular Biology","MED 111: Medical Ethics, Professionalism & Doctor-Patient Communication","MED 112: First Professional MB;BS Examinations (Anatomy, Physiology, Biochemistry)"],
      secondSemester: ["MED 201: Systemic Anatomy: Head and Neck, Neuroanatomy, Abdomen","MED 202: Systemic Physiology: Cardiovascular, Respiratory, Renal Systems","MED 203: Systemic Biochemistry: Metabolism, Hormones, Nutrition","MED 204: Systemic Pathology: Organ System Pathophysiology & Neoplasia","MED 205: Systemic Pharmacology: Autonomic, Cardiovascular & CNS Drugs","MED 206: Medical Parasitology, Mycology & Immunology","MED 207: Clinical Skills: History Taking & Physical Examination","MED 208: Public Health, Health Systems Management & Primary Healthcare","MED 209: Laboratory Medicine & Chemical Pathology Diagnostics","MED 210: Forensic Medicine, Medical Jurisprudence & Toxicology","MED 211: Health Research Methodology & Clinical Audit","MED 212: Clinical Ward Rotations, OSCE & Longitudinal Project"]
    },
    "Economics": {
      firstSemester: ["ECO 101: Microeconomic Theory I (Consumer Preference, Production & Cost)","ECO 102: Macroeconomic Theory I (Aggregate Demand, IS-LM Framework)","ECO 103: Mathematics for Economists (Matrix Algebra, Optimisation)","ECO 104: Economic Statistics I (Probability Distributions, Hypothesis Testing)","ECO 105: Structure of the Nigerian Economy (Oil, Agriculture, Industry)","ECO 106: History of Economic Thought (Classical, Marxist, Keynesian)","ECO 107: Introduction to Econometrics (Simple Linear Regression Model)","ECO 108: Monetary Economics: Money Supply, Interest Rates, Inflation","ECO 109: Public Finance: Tax Incidence, Public Goods, Fiscal Policy","ECO 110: Labour Economics: Wages, Employment, Human Capital Theory","ECO 111: Environmental & Resource Economics","ECO 112: First Semester Examination & Policy Brief Presentations"],
      secondSemester: ["ECO 201: Advanced Microeconomics (Game Theory, General Equilibrium)","ECO 202: Advanced Macroeconomics (Growth Models, Solow, Endogenous)","ECO 203: Applied Econometrics (Multiple Regression, Time Series, EViews/Stata)","ECO 204: International Economics: Pure Theory of Trade & Trade Policy","ECO 205: International Finance & Open-Economy Macroeconomics","ECO 206: Development Economics: Poverty, Inequality, Foreign Aid","ECO 207: Financial Economics: Portfolio Theory, Capital Asset Pricing (CAPM)","ECO 208: Health Economics & Social Protection Policies","ECO 209: Industrial Economics: Market Conduct, Regulation, Antitrust","ECO 210: Urban & Regional Economics in Developing Nations","ECO 211: Research Methods in Economics & Empirical Data Analysis","ECO 212: Final Year Research Dissertation Presentation & Oral Defense"]
    },
    "Law": {
      firstSemester: ["LAW 101: Legal Method I: Sources of Nigerian Law & Judicial Precedent","LAW 102: Constitutional Law I: Separation of Powers, Fundamental Rights","LAW 103: Law of Contract I: Offer, Acceptance, Consideration, Intention","LAW 104: Criminal Law I: Elements of Crime (Actus Reus, Mens Rea), Homicide","LAW 105: Law of Torts I: Negligence, Defamation, Nuisance, Strict Liability","LAW 106: Nigerian Legal System I: Court Structure, Jurisdiction, Customary Law","LAW 107: Commercial Law: Sale of Goods, Agency, Hire Purchase","LAW 108: Land Law I: Customary Land Tenure, Land Use Act (1978)","LAW 109: Human Rights Law: National, Regional & International Charters","LAW 110: Legal Writing, Research & Moot Court Advocacy Basics","LAW 111: Jurisprudence & Legal Theory (Natural Law, Positivism, Realism)","LAW 112: First Semester Law Examinations & Moot Appellate Submissions"],
      secondSemester: ["LAW 201: Legal Method II: Statutory Interpretation & Legal Reasoning","LAW 202: Constitutional Law II: Federalism, Citizenship, Judicial Review","LAW 203: Law of Contract II: Vitiating Elements, Remedies for Breach","LAW 204: Criminal Law II: Offences Against Property, Theft, Fraud, Defences","LAW 205: Law of Torts II: Vicarious Liability, Economic Torts, Remedies","LAW 206: Company Law: Formation, Corporate Personality, Directors' Duties","LAW 207: Law of Evidence: Admissibility, Burden of Proof, Hearsay, Electronic Evidence","LAW 208: Equity and Trusts: Equitable Maxims, Express and Resulting Trusts","LAW 209: Public International Law: Treaties, Statehood, Diplomatic Immunity","LAW 210: Environmental Law & Petroleum Law in Nigeria","LAW 211: Legal Ethics, Professional Conduct & Bar Preparation Guidelines","LAW 212: Final Year LL.B Long Essay / Dissertation Defense"]
    }
  }
};



function generateTopicsFromMasterScheme(schemeGroup, subjectKey, className, country) {
  const subjectData = schemeGroup[subjectKey];
  if (!subjectData) return null;

  const topics = [];
  const cleanId = subjectKey.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const isUniversity = !!(subjectData.firstSemester && subjectData.secondSemester);

  if (isUniversity) {
    const sem1 = subjectData.firstSemester || [];
    const sem2 = subjectData.secondSemester || [];

    sem1.forEach((topicName, idx) => {
      const weekNum = idx + 1;
      topics.push({
        id: cleanId + "-" + className.toLowerCase().replace(/[^a-z0-9]/g, "-") + "-s1-w" + weekNum,
        title: "Week " + weekNum + ": " + topicName,
        term: "First Semester • Week " + weekNum,
        readTime: "12 min read",
        objectives: [
          "Master advanced theoretical framework for " + topicName + ".",
          "Conduct critical literature review and empirical evaluation.",
          "Apply principles to contemporary industry benchmarks in Nigeria and globally."
        ],
        notes: "### " + topicName + "\n\n**Course Module Overview**\nThis representative course module for **" + className + "** (" + country + ") develops mastery in **" + topicName + "** through rigorous lectures, guided literature reading, and structured academic assignments.\n\n**Core Theoretical Concepts**\n- Systematic analysis and foundational axioms of " + topicName + ".\n- Current research paradigms and industrial frameworks.\n- Case studies and problem-solving methodologies.\n\n**Laboratory & Tutorial Focus**\n- Practical exercises, simulation, programming or analytical computation.\n- Group seminars and empirical problem presentations.\n\n> **Academic Guideline:** All work must reference accredited peer-reviewed literature and adhere strictly to university standards.",
        summary: [
          topicName + " forms an essential pillar of undergraduate studies in " + subjectKey + ".",
          "Students are expected to combine conceptual theory with practical seminars and independent research."
        ],
        flashcards: [
          { q: "What is the primary focus of " + topicName + "?", a: "Lectures, guided reading, tutorials, and practical implementation." }
        ],
        assignment: {
          title: topicName + " Seminar & Practical Task",
          instructions: "Submit an academic seminar paper or laboratory write-up (approx. 500 words).",
          tasks: [
            "Examine the theoretical underpinnings of " + topicName + " in modern practice.",
            "Propose an applied solution to a real-world institutional or industrial challenge in Nigeria."
          ],
          sampleAnswer: "Structured analysis demonstrating methodology, data collection, findings and critical recommendations.",
          rubric: "20 marks: 10 marks for methodology, 10 marks for critical analysis."
        },
        quiz: [
          {
            question: "Which pedagogical approach best describes the weekly study of " + topicName + "?",
            options: [
              "Integrated lectures, guided reading and guided application",
              "Rote memorization with no practicals",
              "Skipping core literature",
              "Unofficial opinions only"
            ],
            answer: 0,
            explanation: "University curriculum frameworks emphasize lecture engagement, guided literature reading, and practical application."
          }
        ]
      });
    });

    sem2.forEach((topicName, idx) => {
      const weekNum = idx + 1;
      topics.push({
        id: cleanId + "-" + className.toLowerCase().replace(/[^a-z0-9]/g, "-") + "-s2-w" + weekNum,
        title: "Week " + weekNum + ": " + topicName,
        term: "Second Semester • Week " + weekNum,
        readTime: "12 min read",
        objectives: [
          "Synthesize advanced applications for " + topicName + ".",
          "Prepare for departmental research seminars and capstone project defenses."
        ],
        notes: "### " + topicName + "\n\n**Second Semester Module Focus**\nIn this advanced semester, students evaluate complex problem domains, design robust models, and prepare for comprehensive degree assessments.\n\n**Methodological Core**\n- In-depth exploration of " + topicName + ".\n- Seminar presentations and peer defense.\n- Practical projects and final examinations preparation.",
        summary: [
          "Advanced semester coursework consolidates specialized professional competencies."
        ],
        flashcards: [
          { q: "What is required for successful completion of " + topicName + "?", a: "Active participation in tutorials, project deliverables, and end-of-semester examinations." }
        ],
        assignment: {
          title: topicName + " Research Problem",
          instructions: "Deliver a research critique and solution framework.",
          tasks: [
            "Critique current literature regarding " + topicName + ".",
            "Formulate a research hypothesis and testing methodology."
          ],
          sampleAnswer: "Comprehensive literature review with verifiable references and analytical data interpretation.",
          rubric: "20 marks: 10 pts for literature synthesis, 10 pts for experimental design."
        },
        quiz: [
          {
            question: "In Nigerian university degree programmes, the second semester culminates in:",
            options: [
              "Comprehensive examinations, practical projects, and research defense",
              "A holiday with no assessment",
              "Informal verbal review only",
              "Cancellation of prior credits"
            ],
            answer: 0,
            explanation: "Undergraduate frameworks require structured examinations and project defense for degree credit award."
          }
        ]
      });
    });

    return topics;
  }

  // Standard 3-Term School System (Nursery, Primary, JSS, SSS)
  const terms = [
    { name: "First Term", list: subjectData.firstTerm || [] },
    { name: "Second Term", list: subjectData.secondTerm || [] },
    { name: "Third Term", list: subjectData.thirdTerm || [] }
  ];

  terms.forEach(termObj => {
    termObj.list.forEach((topicName, idx) => {
      const weekNum = idx + 1;

      topics.push({
        id: cleanId + "-" + className.toLowerCase().replace(/[^a-z0-9]/g, "-") + "-" + termObj.name.toLowerCase().replace(/[^a-z0-9]/g, "-") + "-w" + weekNum,
        title: "Week " + weekNum + ": " + topicName,
        term: termObj.name + " • Week " + weekNum,
        readTime: "8 min read",
        objectives: [
          "Understand the core concepts of " + topicName + " based on the Nigerian 2026/2027 Master Scheme of Work.",
          "Examine worked examples and practical applications in " + country + ".",
          "Practice national standard examination questions (WAEC/NECO/BECE/CBT) for " + className + "."
        ],
        notes: "### " + termObj.name + " — Week " + weekNum + ": " + topicName + "\n\n**Scheme of Work Overview**\nIn alignment with the official **2026/2027 Session Master Scheme of Work** for **" + className + "** in " + country + ", this lesson focuses on concept development, guided examples, and rigorous application of **" + topicName + "**.\n\n**1. Key Concepts & Definitions**\n- **Definition & Scope:** Essential principles, rules and definitions governing " + topicName + ".\n- **Practical Significance:** How " + topicName + " operates in real-world contexts and modern industry.\n- **Common Candidate Pitfalls:** Mistakes frequently reported by WAEC/NECO Chief Examiners and how to avoid them.\n\n**2. Worked Model Examples**\n* **Example 1:** Standard application problem illustrating stepwise breakdown and calculation.\n* **Example 2:** Problem-solving under examination conditions with units and assumptions.\n\n> **💡 Master Examination Tip:**\n> Always present step-by-step working clearly. In theoretical and calculation assessments, method marks are awarded for each logical step, not merely the final answer.",
        summary: [
          topicName + " is a foundational component of the " + termObj.name + " syllabus for " + className + ".",
          "Mastering definitions, formulas, and step-by-step methods guarantees peak performance in exams."
        ],
        flashcards: [
          { q: "What is the central focus of " + topicName + " in " + termObj.name + "?", a: "Concept development, step-by-step examples, and guided practice." },
          { q: "Why is showing full working crucial for " + topicName + "?", a: "Examiners award specific method marks (M1, A1, B1) for systematic presentation and correct units." }
        ],
        assignment: {
          title: topicName + " Weekly Assignment (Week " + weekNum + ")",
          instructions: "Answer all tasks completely in your notebook or online submission box.",
          tasks: [
            "Define " + topicName + " and explain two real-world applications in Nigeria.",
            "Solve a standard " + className + " examination problem related to " + topicName + ", stating all formulas and units clearly."
          ],
          sampleAnswer: "1. Definition: " + topicName + " represents a key conceptual framework in " + subjectKey + ".\n2. Application: Enhances systematic problem solving and analytical reasoning in national development.",
          rubric: "10 Marks: 5 marks for conceptual accuracy, 5 marks for step-by-step working and units."
        },
        quiz: [
          {
            question: "According to the 2026/2027 Scheme of Work, " + topicName + " emphasizes:",
            options: [
              "Concept development, examples and guided practice",
              "Rote memorization without understanding",
              "Skipping foundational rules",
              "Guessing during examination"
            ],
            answer: 0,
            explanation: "The official curriculum framework structures " + topicName + " around concept development, guided examples and structured practice."
          },
          {
            question: "When answering examination questions on " + topicName + ", students should:",
            options: [
              "Show complete intermediate working and state units clearly",
              "Write only the final answer without steps",
              "Omit key definitions",
              "Use colloquial slang"
            ],
            answer: 0,
            explanation: "National examination bodies award full marks when intermediate steps, governing formulas, and units are properly stated."
          }
        ]
      });
    });
  });

  return topics;
}


function getSubjectCurriculum(country, level, className, subjectName, termFilter = "all") {
  let result = null;

  // Check if subject exists in catalog
  const catalogEntry = SUBJECT_CATALOG[subjectName];
  if (catalogEntry && catalogEntry.topics && catalogEntry.topics[className] && catalogEntry.topics[className].length > 0) {
    result = {
      icon: catalogEntry.icon,
      category: catalogEntry.category,
      description: catalogEntry.description,
      topics: catalogEntry.topics[className]
    };
  }

  // Check 2026/2027 NIGERIAN MASTER SCHEME OF WORK
  if (!result && typeof MASTER_SCHEME_OF_WORK !== "undefined") {
    let schemeGroup = null;
    const lvlLower = (level || "").toLowerCase();
    const clsLower = (className || "").toLowerCase();

    if (lvlLower.includes("nursery") || clsLower.includes("nursery")) {
      schemeGroup = MASTER_SCHEME_OF_WORK.nursery;
    } else if (lvlLower.includes("primary") || lvlLower.includes("junior") || clsLower.includes("primary") || clsLower.includes("jss")) {
      schemeGroup = MASTER_SCHEME_OF_WORK.primary_jss;
    } else if (lvlLower.includes("senior") || clsLower.includes("sss") || clsLower.includes("ss ")) {
      schemeGroup = MASTER_SCHEME_OF_WORK.senior_secondary;
    } else if (lvlLower.includes("university") || lvlLower.includes("tertiary") || clsLower.includes("level") || clsLower.includes("year")) {
      schemeGroup = MASTER_SCHEME_OF_WORK.university;
    }

    if (schemeGroup) {
      const matchKey = Object.keys(schemeGroup).find(k => {
        const kLow = k.toLowerCase();
        const sLow = subjectName.toLowerCase();
        return sLow.includes(kLow) || kLow.includes(sLow);
      });

      if (matchKey) {
        const generatedTopics = generateTopicsFromMasterScheme(schemeGroup, matchKey, className, country);
        if (generatedTopics && generatedTopics.length > 0) {
          result = {
            icon: getSubjectIcon(subjectName),
            category: getSubjectCategory(subjectName),
            description: "2026/2027 Session Master Scheme of Work for " + subjectName + " in " + className + " (" + country + ") with full-year weekly notes, assignments and CBT quizzes.",
            topics: generatedTopics
          };
        }
      }
    }
  } else if (catalogEntry && catalogEntry.topics) {
    const existingClasses = Object.keys(catalogEntry.topics);
    if (existingClasses.length > 0) {
      const baseTopics = catalogEntry.topics[existingClasses[0]];
      const adaptedTopics = baseTopics.map((topic, idx) => ({
        ...topic,
        id: `${subjectName.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${className.toLowerCase().replace(/[^a-z0-9]/g, "-")}-${idx + 1}`,
        title: `${topic.title} (${className} Syllabus)`,
        term: topic.term || `Term ${((idx % 3) + 1)} • Module ${idx + 1}`
      }));

      result = {
        icon: catalogEntry.icon,
        category: catalogEntry.category,
        description: catalogEntry.description,
        topics: adaptedTopics
      };
    }
  }

  // Synthesize realistic rich 3-term curriculum for any subject not explicitly cataloged
  if (!result) {
    const cleanId = subjectName.toLowerCase().replace(/[^a-z0-9]/g, "-");
    const icon = getSubjectIcon(subjectName);
    const category = getSubjectCategory(subjectName);

    result = {
      icon: icon,
      category: category,
      description: `Complete all-year (3-Term) curriculum, notes, assignments and exam practice for ${subjectName} in ${className} (${country}).`,
      topics: [
        {
          id: `${cleanId}-${className}-t1`,
          title: `Foundations & Core Principles of ${subjectName}`,
          term: "First Term • Weeks 1-6",
          readTime: "8 min read",
          objectives: [
            `Understand fundamental definitions, scopes, and key terms in ${subjectName}.`,
            `Analyze practical methodologies and modern applications in ${country}.`,
            `Develop problem-solving techniques aligned with ${className} examination standards.`,
            `Evaluate real-world scenarios and case studies.`
          ],
          notes: `
### 1. Introduction to ${subjectName}
Welcome to the First Term of **${subjectName}** for ${className}. In this academic term, students build foundational concepts, mastering analytical skills, terminology, and practical applications.

### 2. Theoretical Framework & Principles
* **Core Principles:** Foundational rules and concepts governing ${subjectName}.
* **Key Terminology:** Standard disciplinary vocabulary, notations, and conventions.
* **Methodology:** Step-by-step frameworks for assignments, practicals, and examinations.

> **💡 Examination Tip:**
> Always define key terms with technical precision and cite relevant examples in your working.
          `,
          summary: [
            `Fundamental mastery of core principles in ${subjectName} is essential for academic advancement.`,
            `Systematic problem-solving strategies ensure success in assessments and national examinations.`
          ],
          flashcards: [
            { q: `What is the focus of First Term in ${subjectName}?`, a: `Building foundational principles and conceptual understanding.` }
          ],
          assignment: {
            title: `${subjectName} First Term Foundational Assignment`,
            instructions: `Answer assessment questions in full sentences with relevant examples.`,
            tasks: [
              `Define the primary scope of ${subjectName} and explain two ways it contributes to national development in ${country}.`,
              `Analyze a major practical problem that experts in ${subjectName} solve today.`
            ],
            sampleAnswer: `1. ${subjectName} drives innovation and critical problem solving in ${country}.\n2. Specialists utilize analytical frameworks to optimize solutions and improve efficiency.`,
            rubric: "10 points: 5 pts for definition and context, 5 pts for practical analysis."
          },
          quiz: [
            {
              question: `What is the primary objective of studying ${subjectName} at ${className} level?`,
              options: [
                "Memorizing without understanding",
                "Acquiring foundational knowledge, analytical thinking, and exam readiness",
                "Avoiding real-world problems",
                "Replacing all practical coursework"
              ],
              answer: 1,
              explanation: "Core curriculum objectives focus on conceptual comprehension and analytical competence."
            },
            {
              question: "Systematic problem solving in assessments requires:",
              options: [
                "Guesswork without notes",
                "Following clear methodologies and showing full working",
                "Submitting blank papers",
                "Skipping explanations"
              ],
              answer: 1,
              explanation: "Clear methodology ensures accuracy and full marks."
            }
          ]
        },
        {
          id: `${cleanId}-${className}-t2`,
          title: `Intermediate Applications & Analytical Methods in ${subjectName}`,
          term: "Second Term • Weeks 1-6",
          readTime: "9 min read",
          objectives: [
            `Deepen conceptual understanding of intermediate topics in ${subjectName}.`,
            `Analyze comparative data, structures, and applied methodologies.`,
            `Prepare for mid-term assessments and laboratory/field practicals.`
          ],
          notes: `
### 1. Second Term Applied Framework
Building upon First Term principles, this term explores intermediate theories, computational techniques, and applied models in **${subjectName}**.

### 2. Analytical Breakdown
1. **Critical Review:** Deconstructing complex case problems into manageable components.
2. **Applied Scenarios:** How these concepts appear in WAEC, GCSE, or national examination papers.
3. **Common Pitfalls:** Frequent mistakes made by candidates and strategies to avoid them.
          `,
          summary: [
            "Intermediate topics require structured analytical thinking and attention to detail.",
            "Connecting theoretical models to real-world examples improves retention and scores."
          ],
          flashcards: [
            { q: `What is the focus of Second Term in ${subjectName}?`, a: `Applied methodologies, comparative analysis, and problem solving.` }
          ],
          assignment: {
            title: `${subjectName} Second Term Analytical Task`,
            instructions: `Analyze the case problem and write your solutions clearly.`,
            tasks: [
              `Discuss how the intermediate concepts in this term expand upon preliminary principles.`,
              `Formulate a real-world scenario where these concepts are directly applied in ${country}.`
            ],
            sampleAnswer: "Intermediate concepts introduce multi-variable constraints, enabling professionals to model intricate real-world conditions effectively.",
            rubric: "10 marks. 5 pts for conceptual depth, 5 pts for practical application."
          },
          quiz: [
            {
              question: `What distinguishes intermediate analysis from introductory review in ${subjectName}?`,
              options: [
                "Integrating interconnected concepts to solve multi-faceted problems",
                "Using fewer facts",
                "Relying strictly on historical trivia",
                "There is no difference"
              ],
              answer: 0,
              explanation: "Higher-level coursework synthesizes diverse concepts to tackle complex problems."
            },
            {
              question: "When preparing for national examinations, students should:",
              options: [
                "Practice past questions and review marking schemes regularly",
                "Rely on luck on the exam morning",
                "Avoid writing notes",
                "Skip revision"
              ],
              answer: 0,
              explanation: "Practicing past questions and understanding rubrics consistently boosts examination performance."
            }
          ]
        },
        {
          id: `${cleanId}-${className}-t3`,
          title: `Advanced Synthesis, Examination Revision & Mastery in ${subjectName}`,
          term: "Third Term • Weeks 1-6",
          readTime: "10 min read",
          objectives: [
            `Synthesize all-year concepts across First, Second, and Third terms in ${subjectName}.`,
            `Master national examination questions and scoring techniques.`,
            `Apply critical evaluation to complex multi-topic scenarios.`
          ],
          notes: `
### 1. Third Term All-Year Synthesis & Examination Readiness
In this final term of ${className}, students consolidate all syllabus modules covered across the academic year to achieve comprehensive mastery in **${subjectName}**.

### 2. Comprehensive Examination Blueprint
* **Theory Section:** Structuring essays, deriving equations, and presenting arguments logically.
* **Objective Section:** Time management and analytical elimination of distractors in multiple-choice questions.
* **Practical / Applied Assessment:** Data presentation, error avoidance, and precision.
          `,
          summary: [
            "Third term synthesizes the entire year's scheme of work into exam mastery.",
            "Active recall, past question drills, and timed practice ensure top grades."
          ],
          flashcards: [
            { q: `What is the primary objective of Third Term in ${subjectName}?`, a: `Comprehensive all-year syllabus synthesis, revision, and national exam mastery.` }
          ],
          assignment: {
            title: `${subjectName} Comprehensive Third Term Capstone`,
            instructions: `Provide complete solutions demonstrating all-year synthesis.`,
            tasks: [
              `Summarize the three most critical concepts learned across this academic year in ${subjectName}.`,
              `Explain how these concepts prepare you for advanced studies and real-world careers.`
            ],
            sampleAnswer: "Mastery of foundational theory, intermediate analysis, and practical problem solving provides a complete springboard for university studies and professional competence.",
            rubric: "10 marks. Comprehensive synthesis of the academic year."
          },
          quiz: [
            {
              question: `What is the most effective strategy for Third Term examination preparation in ${subjectName}?`,
              options: [
                "Reviewing all term notes, solving past papers, and clarifying doubts",
                "Cramming the night before",
                "Skipping past questions",
                "Guessing without formulas"
              ],
              answer: 0,
              explanation: "Spaced review of past questions and notes guarantees peak examination performance."
            },
            {
              question: "In national examinations, marks in calculation and theory questions are awarded for:",
              options: [
                "Clear formulas, intermediate working steps, and correct units",
                "Handwriting speed only",
                "Final answer only without steps",
                "Length of paper filled"
              ],
              answer: 0,
              explanation: "Examiners award step-by-step method marks for correct formulas, working, and units."
            }
          ]
        }
      ]
    };
  }

  // Apply Term Filter if specified
  if (termFilter && termFilter !== "all") {
    const filterLower = termFilter.toLowerCase();
    const filteredTopics = result.topics.filter(t => {
      const termLower = (t.term || "").toLowerCase();
      if (filterLower.includes("first") || filterLower === "1st" || filterLower === "t1") {
        return termLower.includes("first");
      }
      if (filterLower.includes("second") || filterLower === "2nd" || filterLower === "t2") {
        return termLower.includes("second");
      }
      if (filterLower.includes("third") || filterLower === "3rd" || filterLower === "t3") {
        return termLower.includes("third");
      }
      return true;
    });

    return {
      ...result,
      topics: filteredTopics.length > 0 ? filteredTopics : result.topics
    };
  }

  return result;
}

function getSubjectIcon(name) {
  const map = {
    english: "📖",
    math: "📐",
    science: "🔬",
    biology: "🌿",
    chemistry: "🧪",
    physics: "⚡",
    history: "📜",
    geography: "🌍",
    economic: "📈",
    government: "⚖️",
    civic: "🏛️",
    accounting: "💰",
    commerce: "💼",
    computer: "💻",
    ict: "🖥️",
    tech: "⚙️",
    music: "🎵",
    art: "🎨",
    agric: "🌱",
    literature: "🎭",
    french: "🗣️",
    kiswahili: "🇰🇪",
    yoruba: "🇳🇬",
    igbo: "🇳🇬",
    hausa: "🇳🇬"
  };
  const lower = name.toLowerCase();
  for (const [key, icon] of Object.entries(map)) {
    if (lower.includes(key)) return icon;
  }
  return "📘";
}

function getSubjectCategory(name) {
  const lower = name.toLowerCase();
  if (lower.includes("math") || lower.includes("english") || lower.includes("civic") || lower.includes("integrated")) return "core";
  if (lower.includes("bio") || lower.includes("chem") || lower.includes("phys") || lower.includes("science")) return "science";
  if (lower.includes("econo") || lower.includes("account") || lower.includes("commer") || lower.includes("business")) return "commercial";
  if (lower.includes("gov") || lower.includes("lit") || lower.includes("hist") || lower.includes("arts") || lower.includes("social")) return "arts";
  return "vocational";
}

function getSciencePioneers(category = "all") {
  if (!category || category === "all") return SCIENCE_PIONEERS;
  return SCIENCE_PIONEERS.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

function getPioneersForSubject(subjectName) {
  const lower = subjectName.toLowerCase();
  if (lower.includes("phys")) return getSciencePioneers("physics");
  if (lower.includes("chem")) return getSciencePioneers("chemistry");
  if (lower.includes("bio")) return getSciencePioneers("biology");
  if (lower.includes("math")) return getSciencePioneers("math");
  if (lower.includes("computer") || lower.includes("ict")) return getSciencePioneers("computer");
  return SCIENCE_PIONEERS;
}
