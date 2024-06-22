
const blogs=[
   {
      id:"Introduction-To-React",
    title:"Introduction To React",
    content:"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. We'll get to the funny XML-like tags soon. We use components to tell React what we want to see on the screen.",
    author:{
     name: "Berad Teaswi",
     avatar:"data:image/jpeg;base64,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"
    },
    date:"Dec 20, 2004",
    categories:["React","Javascript","Frontend"],

   },
   {
      id:"Introduction-To-Javascript",
      title:"Introduction To Javascript",
      content:"JavaScript is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich. JavaScript is versatile and beginner-friendly. With more experience, you'll be able to create games, animated 2D and 3D graphics, comprehensive database-driven apps, and much more",
      author:{
       name: "Kanchan Gund",
       avatar:"data:image/jpeg;base64,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"
      },
      date:"Feb 5, 2000",
      categories:["Javascript","Web Development"],  
   },
   {
      id:"Introduction-To-HTML",
      title:"Introduction To HTML",
      content:"HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
      author:{
       name: "Santosh",
       avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTynrLLxsPd1hSYm6JyxbCvhclfop5UVHBg&s"
      },
      date:"Oct 11, 2002",
      categories:["HTML","Web Development"],  
   },
   {
      id:"Introduction-To-CSS",
      title:"Introduction To CSS",
      content:"Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).",
      author:{
       name: "Swati",
       avatar:"data:image/jpeg;base64,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"
      },
      date:"Jan 21, 2010",
      categories:["CSS","Web Development"],  
   },
   {
      id:"Introduction-To-Python",
      title:"Introduction To Python",
      content:"Python is a general-purpose language, used to create a range of applications, including data science, software and web development, automation, and improving the ease of everyday tasks.",
      author:{
       name: "Mayur",
       avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCgJWZshddNJra-RNsWtVNA5PZVrp7JoSWKQ&s"
      },
      date:"mar 29, 2015",
      categories:["Python","Programming"],  
   },
   {
      id:"Introduction-To-Java",
      title:"Introduction To Java",
      content:"Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is intended to let application developers write once, and run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need for recompilation. Java was first released in 1995 and is widely used for developing applications for desktop, web, and mobile devices. Java is known for its simplicity, robustness, and security features, making it a popular choice for enterprise-level applications.",
      author:{
       name: "Divya",
       avatar:"https://i.pravatar.cc/150?img=20"
      },
      date:"jan 4, 2024",
      categories:["Java","Programming"],  
   }
   
]

export default blogs