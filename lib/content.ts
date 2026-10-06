export const profile = {
  name: "Dishant Rathi", role: "Technical Associate", company: "GSK", location: "Bengaluru, India", joined: "26 August 2024",
  email: "rathidishant39@gmail.com",
  linkedin: "", // Add your LinkedIn profile URL.
  github: "", // Add your GitHub profile URL.
  resume: "", // Add PDF to /public and set its path, e.g. /dishant-rathi-resume.pdf.
};

export const projects = [
  { number: "01", name: "India Tech Pulse", type: "Research · Data product concept", summary: "A clearer view of India’s technology job market, starting with layoff signals and the context behind them.", stage: "Concept in development", challenge: "[ADD THE SPECIFIC PROBLEM OR USER NEED YOU WANT TO SOLVE]", approach: "[ADD SOURCES, INGESTION APPROACH, REVIEW PROCESS AND PRODUCT EXPERIENCE]", architecture: "Python · React · TypeScript · [ADD DATA / AI STACK]", role: "[ADD YOUR ROLE AND WHAT YOU HAVE BUILT]", outcome: "[ADD VALIDATED OUTCOME OR LEAVE AS IN PROGRESS]" },
  { number: "02", name: "Everyday Ledger", type: "Personal finance · Product concept", summary: "An exploration of how daily transactions across bank accounts and UPI apps could become one consistent, useful record.", stage: "Exploration", challenge: "[ADD THE SPECIFIC TRANSACTION TRACKING PAIN POINT]", approach: "[ADD DATA COLLECTION, NORMALIZATION AND PRIVACY APPROACH]", architecture: "[ADD CONFIRMED TECHNOLOGIES]", role: "[ADD YOUR ROLE AND WHAT YOU HAVE BUILT]", outcome: "[ADD OUTCOME WHEN MEASURED]" },
  { number: "03", name: "It Happens Only in Bangalore", type: "City culture · Media brand", summary: "A content brand concept for the everyday stories, weather, events and oddities that make Bangalore Bangalore.", stage: "Brand exploration", challenge: "[ADD THE AUDIENCE OR CONTENT GAP]", approach: "[ADD CHANNELS, EDITORIAL FORMAT AND PUBLISHING PLAN]", architecture: "Instagram · [ADD CREATOR / ANALYTICS TOOLS IF USED]", role: "[ADD YOUR ROLE, COLLABORATORS AND COMMERCIAL MODEL]", outcome: "[ADD AUDIENCE OR PARTNERSHIP RESULTS WHEN AVAILABLE]" },
];

export const skillGroups = [
  {
    label: "AI & applied intelligence",
    items: ["AI engineering", "Generative AI", "Agentic AI", "Retrieval-Augmented Generation (RAG)", "Model Context Protocol (MCP)", "Prompt engineering", "Claude API integration", "AI-assisted code review", "AI code generation", "CI/CD-triggered AI review"],
  },
  {
    label: "Data engineering",
    items: ["Python", "SQL", "PySpark", "Apache Spark", "Azure Databricks", "Azure Data Factory", "Azure Data Lake", "Unity Catalog", "ETL / ELT", "Streaming & data pipelines"],
  },
  {
    label: "Problem solving",
    items: ["Analytical thinking", "Root-cause analysis", "Systems thinking"],
  },
  {
    label: "Product & leadership",
    items: ["Product thinking", "Business & commercial thinking", "Leadership & stakeholder alignment", "Sponsorship & partnership development", "Event marketing & execution"],
  },
];
