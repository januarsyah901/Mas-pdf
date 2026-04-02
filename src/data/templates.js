export const templates = [
  {
    id: 'blank',
    label: 'Blank Document',
    description: 'Start fresh with an empty canvas',
    content: ''
  },
  {
    id: 'readme',
    label: 'Project README',
    description: 'Comprehensive structure for open-source or enterprise projects',
    content: `# 🚀 Project Title

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)

> A brief, powerful description of what this project does and why it exists.

## 📑 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)

## ✨ Features
- ⚡️ **High Performance:** Optimized for speed and scalability.
- 🔒 **Secure:** Built-in authentication and authorization.
- 📱 **Responsive:** Mobile-first approach using Tailwind CSS.

## 💻 Tech Stack
- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Node.js, Prisma ORM
- **Infrastructure:** Docker, CapRover

## 🚀 Getting Started
### Prerequisites
- Node.js >= 18.x
- Docker

### Installation
\`\`\`bash
# Clone the repository
git clone https://github.com/januarsyah901/project-name.git

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`
`
  },
  {
    id: 'blog',
    label: 'Technical Blog Post',
    description: 'SEO-optimized article layout with frontmatter',
    content: `

# Mastering Modern Web Development

## Introduction
Grab the reader's attention immediately. State the problem you're solving and what they will learn by reading this article.

## The Core Concept
Explain the technical details clearly. Use code blocks to demonstrate your points.

\`\`\`javascript
// Example implementation
const optimize = (data) => {
  return data.filter(Boolean).map(item => item.value);
};
\`\`\`

### Key Takeaways
1. **Architecture matters:** Plan before you code.
2. **Tooling:** Use the right tools for the job (e.g., Docker for consistency).

> "Good code is its own best documentation." - Steve McConnell

## Conclusion
Summarize the main points. What's the next step for the reader?

---
*Enjoyed this post? Check out more on my portfolio at [github.com/januarsyah901](https://github.com/januarsyah901).*
`
  },
  {
    id: 'resume',
    label: 'Developer Resume',
    description: 'ATS-friendly, clean professional CV format',
    content: `# Januarsyah Akbar
**Software Developer**

📍 Yogyakarta, Indonesia | 🐙 [github.com/januarsyah901](https://github.com/januarsyah901)

---

## 👨‍💻 Summary
A passionate software developer with expertise in modern web technologies and a strong focus on building scalable, user-centric applications. Experienced in leading development teams and managing end-to-end project lifecycles.

## 💼 Experience

### Lead Developer | AutoService Web Panel
*March 2026 – Present*
- Architected and developed a comprehensive web panel for digitizing auto service workshop inventory and operations.
- Implemented robust database structures using Prisma and Next.js.

### VR Developer | Perioperative Simulation
*Early 2026*
- Engineered a VR simulation for the Faculty of Nursing using Oculus Quest.
- Collaborated with cross-functional teams to define Product Requirement Documents (PRD).

## 🛠 Technical Skills
- **Languages:** JavaScript, TypeScript
- **Frontend:** Next.js, React, Tailwind CSS
- **Backend & DB:** Node.js, Prisma
- **DevOps & Tools:** Docker, CapRover, Git

## 🎓 Education
**Universitas Gadjah Mada (UGM)**
*Sekolah Vokasi*
`
  },
  {
    id: 'meeting',
    label: 'Engineering Sync Notes',
    description: 'Structured format for technical meetings and standups',
    content: `# 📅 Engineering Sync: [Project Name]
**Date:** 2026-04-02
**Facilitator:** Januarsyah Akbar
**Attendees:** [List names]

---

## 🎯 Objectives
- Unblock frontend integration.
- Finalize database schema migration.

## 🗣 Discussion Points
1. **API Integration:** Encountered CORS issues on the staging environment.
2. **Performance:** Need to optimize image loading on the dashboard.

## 📌 Decisions Made
- We will migrate to the new Prisma schema by Friday.
- Docker containers will be used for all local environments to ensure consistency.

## ✅ Action Items
- [ ] **[Name]:** Update Nginx config on CapRover to fix CORS.
- [ ] **[Name]:** Implement lazy loading for images.
- [ ] **[Name]:** Schedule code review for the VR module.
`
  },
  {
    id: 'technical',
    label: 'Architecture Document',
    description: 'High-level system design and API documentation',
    content: `# 🏗 System Architecture & API Reference

## 1. System Overview
Provide a high-level description of the system. What business problem does it solve?

## 2. Infrastructure Diagram
\`\`\`mermaid
graph TD;
    Client-->|HTTPS| LoadBalancer;
    LoadBalancer-->NextJS_App;
    NextJS_App-->Node_API;
    Node_API-->PostgreSQL;
\`\`\`

## 3. Technology Stack
- **Client:** Next.js
- **API:** REST / GraphQL
- **Database:** PostgreSQL (via Prisma)
- **Deployment:** Docker on CapRover

## 4. API Documentation

### \`GET /api/v1/resource\`
Fetches a list of resources.

**Headers:**
| Key | Value | Required |
|---|---|---|
| \`Authorization\` | \`Bearer <token>\` | Yes |

**Response (200 OK):**
\`\`\`json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "name": "Example"
    }
  ]
}
\`\`\`
`
  }
];