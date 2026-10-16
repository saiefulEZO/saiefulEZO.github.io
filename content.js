/* ==================================================================
   MY WEBSITE CONTENT
   Edit this file, save it, then refresh the page in your browser.
   ==================================================================

   Open this file with a plain text editor:
     Windows ... right-click > Open with > Notepad (do not double-click
                 it: Windows would try to run it instead of opening it)
     Mac ....... TextEdit, after Format > Make Plain Text, and with
                 Edit > Substitutions > Smart Quotes turned off
     or VS Code (free), on either; it underlines mistakes in red.
   Always type straight quotes " ", never curly ones “ ”.

   Everything written on the site comes from this file. Each thing on
   the site (a paper, a job, a link, a hobby, a photo) is one object:
   a block between { and }, with named fields like  title: "..."

   HOW TO
   - Change text ......... edit what is between the "quotes". Keep the quotes.
   - Hide something ...... make it empty: ""   e.g.  status: "",
   - Add a paper, job,
     link or photo ....... copy a whole block from { to }, (with its comma),
                           paste it where you want it in the list, then
                           change the text. The site shows lists in the
                           order you write them, so put the newest first.
                           If the block has an id line, delete that line
                           in your copy (or give it a new id): two entries
                           must never share an id.
   - Remove one .......... delete its whole block, from { to },
   - Add to a list of
     words or paragraphs . like ["one", "two"]: add  , "three"  before the ]
   - Add an image ........ put the file in the images folder, then write
                           its path, e.g.  image: "images/my-car.jpg",
                           Write the name exactly as the file is named:
                           online, My-Car.JPG and my-car.jpg are different.

   Inside any text you can write:
     **bold**    *italic*    [link text](https://example.com)    \n = new line

   A " inside text must be written as \"   (an apostrophe ' is fine as is).
   Lines starting with // are notes for you; the site ignores them.

   If the page shows a red box about content.js, the file has a typo.
   Until you fix it, the page shows the content it was first built with
   (your changes are not lost: they are still in this file). Online, the
   box names the line; it is almost always a missing comma, quote or
   bracket. On your own computer, press F12 (Mac: Cmd+Option+J) and the
   red line in Console ends with content.js:LINE. There, a yellow box may
   also list smaller problems, such as an image name that does not exist
   or a misspelt field name. Visitors never see the yellow box.

   Online, a change can take a minute or two to show up.
   ================================================================== */

window.SITE = {

  /* ---------------- ABOUT ME: the top of the CV page ---------------- */
  profile: {
    name: "Nor Saiful Azam bin Nor Azmi",
    nameJapanese: "ノーサイフルアザムビンノーアズミ",   // "" hides the Japanese line
    shortName: "Nor Saiful Azam",                     // browser tab of the CV page, footer of the personal page
    logo: "saiful.azam",                              // top-left corner of every page

    title: "Researcher",                              // your job title, above your name (also update the About text and facts, and the job list)
    workplace: "Kitami Institute of Technology",
    location: "Hokkaido, Japan",
    status: "Open to research roles",                 // the green badge; "" hides it

    intro: "I'm an AI researcher working on how machines understand language and images, and how that understanding can help make online spaces safer.",
    introHighlight: "language and images",            // words from the intro to highlight; "" for none

    photo: "images/photo.jpg",                        // the CV page and the career map (the personal page has its own: personal.photo)
    photoAlt: "Nor Saiful Azam in a dark suit, smiling, outside on campus",   // a few words describing the photo

    // the words that scroll across the strip under the top section
    keywords: ["multimodal machine learning", "hateful meme detection", "cyberbullying detection", "transformers",
               "vision-language models", "explainable AI", "part-of-speech fusion", "content moderation", "NLP"],
  },

  /* ---------------- LAYER_01 · ABOUT ---------------- */
  about: {
    lead: "I'm a researcher at the Kitami Institute of Technology, specializing in natural language processing and artificial intelligence.",
    paragraphs: [
      "My research centers on multimodal content analysis and AI-driven content moderation. I work with transformer and vision-language architectures to detect harmful online content and cyberbullying, from models that read text alone to multimodal frameworks that combine language and vision, such as the ones needed to understand hateful memes.",
      "I did my Ph.D. in the Text Information Processing Laboratory (TiP Lab) under Professor Michal Ptaszynski.",
    ],
    // the small list beside the text
    facts: [
      { label: "Now",      text: "Researcher, Kitami Institute of Technology" },
      { label: "Ph.D.",    text: "Co-Creative Engineering, 2026" },
      { label: "Lab",      text: "[TiP Lab](https://kit-tiplab.github.io/), Prof. Michal Ptaszynski" },
      { label: "Based in", text: "Kitami, Hokkaido, Japan" },
    ],
  },

  /* ---------------- LAYER_02 · RESEARCH ---------------- */
  // (the model diagram stays as it is; it uses images/meme.jpg, so keep that file. These are the cards under it.)
  research: {
    themes: [
      {
        tag: "TEXT",
        title: "Cyberbullying detection",
        text: "Pretraining transformers on tokens fused with part-of-speech information, and applying them to automatic cyberbullying detection.",
        link: "#pub-pos",                             // "#" + the id of a paper below, or a web address
        linkText: "Natural Language Processing Journal, 2025",
      },
      {
        tag: "TEXT + IMAGE",
        title: "Hateful meme detection",
        text: "Memes mix words and pictures, so I compare language models, vision models and vision-language models on spotting hateful ones.",
        link: "#pub-meme",
        linkText: "Machine Learning and Knowledge Extraction, 2026",
      },
      {
        tag: "XAI",
        title: "Explainable decisions",
        text: "Looking inside these models to show why they flag content as hateful, so their decisions can be checked by people.",
        link: "#publications",
        linkText: "Why So Meme? and Seems Like Hate",
      },
    ],
    alsoInterestedIn: ["multimodal machine learning", "natural language processing", "human-computer interaction"],
  },

  /* ---------------- LAYER_03 · PUBLICATIONS ---------------- */
  // Newest first. To add a paper: copy one block, paste it at the top of the list, edit it.
  //   id ........ a short name with no spaces, used for links like "#pub-meme". New papers do not need one:
  //               when you copy a paper, delete its id line (two papers must never share an id).
  //   type ...... Journal, Conference, Workshop, Report, Preprint, Thesis ... (anything you like)
  //   when ...... shown exactly as you write it, e.g. "Feb 2026" or "Apr 2023 · Poznań"
  //   link ...... optional web address (DOI, PDF, publisher page). linkText is what the link says.
  //   featured .. true shows it as the big banner above the other papers (your thesis)
  //   image ..... optional picture for the card or banner, e.g. "images/my-figure.png"
  // Your own name (authorName) is printed in bold in every author list.
  authorName: "Nor Saiful Azam Bin Nor Azmi",
  publications: [
    {
      id: "pub-thesis",
      featured: true,
      type: "Doctoral dissertation",
      title: "Multifaceted Feature Fusion in Transformer Models With Application to Hateful Content Detection",
      authors: "Nor Saiful Azam Bin Nor Azmi",
      venue: "Kitami Institute of Technology",
      when: "Sep 2026",
    },
    {
      id: "pub-meme",
      type: "Journal",
      title: "Why So Meme? A Comparative and Explainable Analysis of Multimodal Hateful Meme Detection",
      authors: "Nor Saiful Azam Bin Nor Azmi, Michal Ptaszynski, Fumito Masui, Abu Nowhash Chowdhury",
      venue: "Machine Learning and Knowledge Extraction (MDPI)",
      when: "Feb 2026",
      link: "https://doi.org/10.3390/make8020050",
      linkText: "doi:10.3390/make8020050",
    },
    {
      id: "pub-pos",
      type: "Journal",
      title: "Token and Part-of-Speech Fusion for Pretraining of Transformers with Application in Automatic Cyberbullying Detection",
      authors: "Nor Saiful Azam Bin Nor Azmi, Michal Ptaszynski, Fumito Masui, Juuso Eronen, Karol Nowakowski",
      venue: "Natural Language Processing Journal (Elsevier)",
      when: "Feb 2025",
      link: "https://doi.org/10.1016/j.nlp.2025.100132",
      linkText: "doi:10.1016/j.nlp.2025.100132",
    },
    {
      id: "pub-seems",
      type: "Report",
      title: "Seems Like Hate: An Explainable Comparison of Language Model, Vision Model and VLM on Hateful Memes",
      authors: "Nor Saiful Azam Bin Nor Azmi, Michal Ptaszynski, Fumito Masui",
      venue: "言語獲得と理解研究会報告 (Report of the Research Group on Language Acquisition and Comprehension), Future University Hakodate",
      when: "Hakodate · n.d.",                       // TODO: add the date when you have it
    },
    {
      id: "pub-edo",
      type: "Workshop",
      title: "Token and Part-of-Speech Fusion for Pretraining of Transformers with Application in Automatic Cyberbullying Detection",
      authors: "Nor Saiful Azam Bin Nor Azmi, Michal Ptaszynski, Juuso Eronen, Karol Nowakowski, Fumito Masui",
      venue: "EDO 2023 at the 10th Language & Technology Conference, Poznań, Poland, pp. 201–205",
      when: "Apr 2023 · Poznań",
    },
  ],

  /* ---------------- LAYER_04 · PATH ---------------- */
  // Newest first. current: true marks the job you have now; to un-mark one, delete  current: true,
  // As with papers: when you copy a line, delete its  id: "...",  part.
  experience: [
    { id: "job-researcher", current: true, when: "Sep 2026 – present",  role: "Researcher",                        where: "Kitami Institute of Technology · Contract" },
    { id: "job-ra",                        when: "Oct 2023 – Sep 2026", role: "Research Assistant",                where: "Kitami Institute of Technology · Part-time" },
    { id: "job-ta",                        when: "Oct 2023 – Sep 2026", role: "Teaching Assistant",                where: "Kitami Institute of Technology · Part-time" },
    { id: "job-intern",                    when: "2019",                role: "Software Support Engineer, Intern", where: "Dagang Net Technologies · Malaysia" },
  ],
  education: [
    {
      id: "edu-phd",
      when: "Oct 2023 – Sep 2026",
      degree: "Ph.D., Co-Creative Engineering",
      school: "Kitami Institute of Technology",
      thesis: "Multifaceted Feature Fusion in Transformer Models With Application to Hateful Content Detection",   // optional
    },
    { id: "edu-meng", when: "Oct 2021 – Sep 2023", degree: "M.Eng., Information and Communication Engineering", school: "Kitami Institute of Technology" },
    { id: "edu-bsc",  when: "Apr 2015 – Mar 2020", degree: "Bachelor of Computer Science (Hons), Software Engineering", school: "Multimedia University, Malaysia" },
  ],

  /* ---------------- LAYER_05 · OFF THE CLOCK (the card on the CV page) ---------------- */
  // Written by hand: when you add or remove a hobby on the personal page, update these too.
  offTheClock: {
    heading: "Guitar, cars, snowboarding\nand Malaysian food.",
    tags: ["guitar", "drives", "DIY upgrades", "sim racing", "snowboarding", "cooking", "YouTube", "Twitch"],
  },

  /* ---------------- LAYER_06 · CONTACT ---------------- */
  contact: {
    heading: "Let's talk research.",
    text: "I'm open to research roles and collaborations on multimodal NLP and content moderation.",
    email: "",                                        // e.g. "name@example.com"; "" hides the email row
    languages: [
      { name: "English",  level: "professional" },
      { name: "Japanese", level: "limited working" },
    ],
    links: [
      { name: "Google Scholar", url: "https://scholar.google.com/citations?user=FKObmgIAAAAJ&hl=en" },
      { name: "LinkedIn",       url: "https://www.linkedin.com/in/nor-saiful-azam-nor-azmi/", note: "nor-saiful-azam-nor-azmi" },
      { name: "ResearchGate",   url: "https://www.researchgate.net/profile/Nor-Saiful-Azam-Bin-Nor-Azmi" },
      { name: "GitHub",         url: "https://github.com/saiefulEZO", note: "saiefulEZO" },
    ],
    address: "TiP Lab · 165 Koen-cho, Kitami, Hokkaido 090-8507",   // shown in the footer
  },

  /* ================= THE PERSONAL PAGE (personal.html) ================= */
  personal: {
    heading: "Off the\n*clock.*",
    intro: "Outside the lab I play guitar, spend a lot of time around cars, go snowboarding and cook Malaysian food. I also stream and post videos, just for fun.",
    corner: "Kitami, Hokkaido · winter",              // small text in the top corner of the banner
    banner: "images/banner.jpg",                      // the wide background picture (also behind the Off the clock card on the CV page); "" keeps the default one
    photo: "images/photo.jpg",                        // the round photo on the personal page (can be the same file)
    photoAlt: "Portrait of Saiful",

    channels: [
      { site: "YouTube", url: "https://www.youtube.com/@saiefulEZO", name: "SaiefulEZO", handle: "@saiefulEZO",
        quote: "I post things for fun~ Its a memory throughout my journey of LIFE. :D" },
      { site: "Twitch",  url: "https://www.twitch.tv/saiefulezo",    name: "saiefulEZO", handle: "twitch.tv",
        quote: "Play for fun. No stress. Hope you enjoy!" },
    ],

    // Each hobby is one panel, shown in this order.
    //   kind ... "guitar", "cars" and "snowboarding" keep their playable toys; "cooking" keeps its steam.
    //            Any other kind (e.g. "photography") makes a plain panel with your text and photos.
    //            Remove a hobby's block and its panel disappears.
    //            (The career map on the CV page keeps its own fixed hobby points: adding or removing a hobby here does not change them.)
    //   slots .. the squares under the text. An empty one shows a dashed "+" placeholder.
    //            Give it an image to show your photo there, and a link to make it clickable
    //            (e.g. a YouTube clip). label is the caption; hint is the small grey text on an empty square.
    hobbies: [
      {
        kind: "guitar",
        title: "Guitar",
        text: "Playing guitar is one of my favourite ways to unwind.",
        slots: [
          { label: "Clip",    hint: "a song you play",   image: "", link: "" },
          { label: "Photo",   hint: "your guitar",       image: "", link: "" },
          { label: "Artists", hint: "who you listen to", image: "", link: "" },
        ],
      },
      {
        kind: "cars",
        title: "Car culture",
        text: "I love cars from every angle: going for drives, doing DIY upgrades myself, and sim racing.",
        tags: ["drives", "DIY upgrades", "sim racing"],
        circuitPrompt: "Pick a circuit: one in Malaysia, one in Japan.",
        slots: [
          { label: "My car",    hint: "a photo",          image: "", link: "" },
          { label: "Build log", hint: "upgrades so far",  image: "", link: "" },
          { label: "Sim rig",   hint: "your setup",       image: "", link: "" },
        ],
      },
      {
        kind: "snowboarding",
        title: "Snowboarding",
        text: "Winter in Hokkaido means snow, and I like to go snowboarding.",
        slots: [
          { label: "Photo", hint: "on the slopes",    image: "", link: "" },
          { label: "Clip",  hint: "a favourite run",  image: "", link: "" },
          { label: "Spot",  hint: "where you ride",   image: "", link: "" },
        ],
      },
      {
        kind: "cooking",
        title: "Cooking",
        text: "I like cooking traditional Malaysian food, here in Hokkaido.",
        slots: [
          { label: "Dish",   hint: "photo and name",       image: "", link: "" },
          { label: "Dish",   hint: "photo and name",       image: "", link: "" },
          { label: "Recipe", hint: "one you're proud of",  image: "", link: "" },
        ],
      },
    ],
  },
};
