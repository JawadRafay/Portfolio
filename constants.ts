
import { Experience, Project, Testimonial } from './types';

export const SOCIAL_LINKS = {
  linkedin: "http://www.linkedin.com/in/muhammad-rafay-a17b7b292",
  email: "rafay@flowveo.com",
  calendly: "https://calendly.com/muhammadrafayjawad/30min",
  upwork: "https://www.upwork.com/freelancers/~019ad472da22a6897e",
  github: "#"
};

export const SERVICES = [
  {
    title: "Software Integration",
    description: "Seamlessly connect AI-powered apps and tools with your business for seamless data flow across all your operations.",
    icon: "Blocks"
  },
  {
    title: "Process Automation",
    description: "Eliminate task repetition with powerful automation services to enhance efficiency, save time, and reduce the chances of errors.",
    icon: "Workflow"
  },
  {
    title: "AI Integration",
    description: "Get complete assistance for your business operations with our AI integration services to make smarter decisions, personalize experiences, and scale innovation.",
    icon: "BrainCircuit"
  },
  {
    title: "Data Strategy",
    description: "We can turn your raw data into actionable insights with our Data Strategy services to help you make smarter business decisions with precision.",
    icon: "BarChart3"
  },
  {
    title: "Document Automation",
    description: "No need to work manually on spreadsheets and documents, now you can seamlessly automate contracts, invoices, and reports with precision.",
    icon: "FileText"
  },
  {
    title: "No-code Development",
    description: "No-code? No problem! We can help you build powerful digital solutions that are fast, flexible, and tailored to your business needs in a matter of clicks.",
    icon: "LayoutTemplate"
  }
];

export const TECH_STACK = [
  { 
    name: "n8n", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77sBhCY-sQXiQo1Z45yH13HWSs9bKlC3FKQ&s",
    bg: "bg-white"
  },
  { 
    name: "Zapier", 
    logo: "https://cdn.worldvectorlogo.com/logos/zapier.svg",
    bg: "bg-[#ffe0d6]"
  },
  { 
    name: "Make", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJYTi4s9Ms3snq_LpSvp6DD1zGYvqxduaWOw&s",
    bg: "bg-white"
  },
  { 
    name: "GoHighLevel", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK7gEUVwo-3DpjwB5X4IQvpGoR5i0YgiRDdQ&s",
    bg: "bg-white"
  },
  { 
    name: "VAPI", 
    logo: "https://telecomtalk.info/wp-content/uploads/2024/12/vapi-raises-usd20million-scale-voice-ai-solutions.jpg",
    bg: "bg-white"
  },
  { 
    name: "Airtable", 
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAk382J9m-Djdnq0P-Lx7oB-ShqRN-Juef8g&s",
    bg: "bg-white"
  }
];

export const TRUSTED_BRANDS = [
  "https://flowveo.com/wp-content/uploads/2025/03/flowveo-logo.webp",
  "https://upandsocial.com/wp-content/uploads/2025/01/up-and-social-logo.webp",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRamHEWgPEIFbyeChVuTQMyalqUU850DsQASg&s",
  "https://pbs.twimg.com/profile_images/1445944701526454273/qiTuSizK_400x400.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSFKXXMP7dCnzVPg1gQrGBf-JkpabkRRfsA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYEj9Yxs309g5T3x-rkyvGPqvLWI3DA9PL1Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNxmEiKNRMd2KK3Evde1_kXQT0AUcH4_fuCQ&s"
];

export const RESUME_CONTENT = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Muhammad Rafay - CV</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
        body { 
            font-family: 'Inter', sans-serif; 
            line-height: 1.5; 
            color: #1f2937; 
            max-width: 850px; 
            margin: 0 auto; 
            padding: 40px; 
            background: #fff;
        }
        .header { 
            text-align: center; 
            margin-bottom: 30px; 
            border-bottom: 2px solid #f3f4f6; 
            padding-bottom: 20px; 
        }
        h1 { 
            font-size: 28px; 
            margin-bottom: 8px; 
            color: #111; 
            text-transform: uppercase; 
            letter-spacing: 1px;
        }
        .contact-info { 
            font-size: 0.9em; 
            color: #4b5563; 
        }
        .contact-info a { 
            color: #059669; 
            text-decoration: none; 
        }
        h2 { 
            font-size: 16px; 
            color: #059669; 
            border-bottom: 1px solid #e5e7eb; 
            padding-bottom: 6px; 
            margin-top: 25px; 
            margin-bottom: 15px; 
            text-transform: uppercase; 
            letter-spacing: 1.2px;
        }
        .job { 
            margin-bottom: 20px; 
        }
        .job-header { 
            display: flex; 
            justify-content: space-between; 
            align-items: baseline; 
            margin-bottom: 4px;
        }
        .company { 
            font-weight: 700; 
            font-size: 1.05em; 
            color: #111; 
        }
        .location {
            font-weight: 400;
            color: #6b7280;
            font-size: 0.9em;
        }
        .role { 
            font-weight: 600; 
            font-style: italic; 
            color: #374151; 
            margin-bottom: 6px;
        }
        .date { 
            font-size: 0.9em; 
            color: #6b7280; 
            font-weight: 500;
        }
        ul { 
            margin: 0; 
            padding-left: 18px; 
        }
        li { 
            margin-bottom: 4px; 
            font-size: 0.95em; 
            color: #374151;
        }
        .project-item {
            margin-bottom: 12px;
        }
        .project-title {
            font-weight: 700;
            color: #1f2937;
        }
        .skills-p {
            font-size: 0.95em;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Muhammad Rafay</h1>
        <div class="contact-info">
            Mobile: +92-313-8108954 | Email: <a href="mailto:rafayj4@gmail.com">rafayj4@gmail.com</a><br>
            LinkedIn: <a href="http://www.linkedin.com/in/muhammad-rafay-a17b7b292">linkedin.com/in/muhammad-rafay-a17b7b292</a>
        </div>
    </div>

    <h2>Professional Experience</h2>

    <div class="job">
        <div class="job-header">
            <span class="company">Flow Veo <span class="location">- Faisalabad, PK</span></span>
            <span class="date">7 Mo – Present</span>
        </div>
        <div class="role">Project Manager & Automation Expert (Full-Time)</div>
        <ul>
            <li>Managing Zapier Automation for Tier Clients at Flow Veo, optimizing workflows and enhancing operational efficiency.</li>
            <li>Managing all projects coming through Upwork and Lead Gen. Interacting with clients to provide optimized solutions.</li>
            <li>Creating rules and automations in ClickUp for peak optimization.</li>
            <li>Manage cross-application integrations through APIs and Webhooks on Zapier, Make, GHL (Go High Level).</li>
            <li>Design optimal workflows for service-based HVAC companies in the US.</li>
            <li>Collaborating closely with clients to understand requirements and deliver seamless integrations across platforms.</li>
        </ul>
    </div>

    <div class="job">
        <div class="job-header">
            <span class="company">Vision Automated <span class="location">- USA (Remote)</span></span>
            <span class="date">6 Mo – Present</span>
        </div>
        <div class="role">Prompt & AI Engineer / N8n Expert (Part-Time)</div>
        <ul>
            <li>Design and deploy advanced AI agents leveraging n8n workflows alongside integration platforms such as Azure, Anthropic, Perplexity, OpenAI, and DeepSeek.</li>
            <li>Engineer robust prompt solutions to optimize AI agent performance across diverse platforms (Close Bot, n8n, Botpress).</li>
            <li>Seamlessly integrate AI agents with websites, sales funnels, and the GHL ecosystem.</li>
            <li>Develop and implement voice AI agents using VAPI and Synthflow to create dynamic user experiences.</li>
        </ul>
    </div>

    <div class="job">
        <div class="job-header">
            <span class="company">VA Hub Pro <span class="location">- Canada (Remote)</span></span>
            <span class="date">6 Months</span>
        </div>
        <div class="role">GHL & Close Bot Automation Expert (Part-Time)</div>
        <ul>
            <li>Leverage Go High Level’s comprehensive suite (CRM, Marketing, Funnels) to design and deploy customized automation solutions.</li>
            <li>Architect and implement seamless automation workflows within the GHL ecosystem to optimize efficiency.</li>
            <li>Develop and deploy multiple custom bots in Close Bot to enhance lead nurturing and automate customer interactions.</li>
        </ul>
    </div>

    <div class="job">
        <div class="job-header">
            <span class="company">Nifty Code <span class="location">- Faisalabad, PK</span></span>
            <span class="date">1yr 3 Months</span>
        </div>
        <div class="role">Automation Expert | Email Marketing Expert</div>
        <ul>
            <li>Designing and developing funnels, pipelines, and forms in GHL.</li>
            <li>Designed and implemented over 500+ automations across Zapier, Make, Airtable, and GHL.</li>
            <li>Integrated 100+ apps to optimize workflows and enhance productivity.</li>
            <li>Managing a team to deliver automated solutions that exceed client expectations.</li>
        </ul>
    </div>

    <div class="job">
        <div class="job-header">
            <span class="company">UpTree Developers <span class="location">- Faisalabad, PK</span></span>
            <span class="date">1yr 5 Months</span>
        </div>
        <div class="role">Android Developer (Internship + Job)</div>
        <ul>
            <li>Developed and maintained Android applications using Java and Android SDK.</li>
            <li>Collaborated with teams to design intuitive UI/UX elements using XML.</li>
            <li>Integrated RESTful APIs and handled JSON parsing for dynamic data interaction.</li>
        </ul>
    </div>

    <h2>Recent Projects</h2>
    <ul>
        <li class="project-item"><strong>Setting up GHL as a CRM:</strong> Engineered a comprehensive GHL system for a Psychologist & Therapist that captures leads through bookings, funnels them to CRM, automates follow-ups, and handles payments/signatures.</li>
        <li class="project-item"><strong>WhatsApp Chatbot (Dance Attitude):</strong> Developed an intelligent WhatsApp chatbot using Make and Pinecone Database to address parent inquiries and automate reminders.</li>
        <li class="project-item"><strong>Golf Cart of ATX:</strong> Designed a 7-app integrated workflow in Zapier for quick custom golf cart estimation (WooCommerce, Zoho Books, Mailchimp, Twilio).</li>
        <li class="project-item"><strong>Outbound Calling Agent (VAPI Agent Lucy):</strong> Developed a fully automated outbound calling system integrated within GHL funnel. Lucy calls new leads, schedules appointments, and closes deals.</li>
        <li class="project-item"><strong>Lead Scoring Systems:</strong> Designed a lead scoring system on Zapier based on lead quality to optimize CRM workflows.</li>
    </ul>

    <h2>Education</h2>
    <div class="job">
        <div class="job-header">
            <span class="company">Riphah International University, Faisalabad</span>
        </div>
        <div>Bachelor of Science in Computer Science (BSCS) | CGPA: 3.87/4</div>
    </div>
    <div class="job">
        <div class="job-header">
            <span class="company">Punjab Group of Colleges</span>
        </div>
        <div>Intermediate, ICS | Marks: 781</div>
    </div>

    <h2>Certifications</h2>
    <ul>
        <li>Zapier Expert Certification</li>
        <li>Make Expert & Intermediate Certification</li>
        <li>ClickUp Expert Certification</li>
        <li>Airtable Builder & Admin Certification</li>
        <li>CS50 Online Course</li>
    </ul>

    <h2>Skills & Tools</h2>
    <p class="skills-p">
        Zapier, Go High Level, Airtable, Marketing Automation, Pipedrive, HubSpot, ClickUp, API Integration, Google Sheets Automation, CRM, Asana, Active Campaign, Instantly, Sales Handy, Close.io, Calendly, Make.com, GitHub, Java, Android Studio, Firebase, SQL Lite, Kotlin.
    </p>
</body>
</html>
`;

export const ABOUT_CONTENT = {
  title: "Building the Future of Business Automation",
  paragraphs: [
    "Hey! I'm Muhammad Rafay, a No-Code Automation Expert and Business Partner at FlowVeo. With over 4 years of experience and 500+ successful automations under my belt, I've helped businesses across the globe eliminate manual work and scale operations without hiring.",
    "My journey started as an Android Developer, but I quickly realized my true passion was solving business problems through intelligent automation. I discovered that with the right no-code tools, any business could achieve 10x efficiency without writing a single line of code.",
    "Today, I specialize in building AI-powered agents with n8n, complete CRM automation with GoHighLevel, and seamless integrations that connect your entire business ecosystem. I hold official certifications in Make, ClickUp, and Airtable, and I bring a strategic, ROI-focused approach to every project."
  ]
};

export const EXPERIENCES: Experience[] = [
  {
    company: "FlowVeo",
    role: "Business Partner & Lead Automation Architect",
    period: "2023 - Present",
    location: "Remote",
    description: [
      "Spearheading the development of custom AI automation solutions for enterprise clients.",
      "Architecting complex CRM workflows in GoHighLevel to optimize sales pipelines.",
      "Leading a team of automation engineers and managing project delivery lifecycles."
    ]
  },
  {
    company: "Upwork & Direct Clients",
    role: "Senior Automation Specialist",
    period: "2021 - 2023",
    location: "Remote",
    description: [
      "Delivered 100+ successful automation projects for e-commerce and agency clients.",
      "Specialized in connecting disparate SaaS tools using Make.com and Zapier.",
      "Built custom chatbots and lead nurturing systems that increased client revenue."
    ]
  },
  {
    company: "Tech Solutions",
    role: "Android Developer",
    period: "2019 - 2021",
    location: "Hybrid",
    description: [
      "Developed native Android applications using Java and Kotlin.",
      "Collaborated with backend teams to integrate RESTful APIs.",
      "Identified opportunities for process improvement, leading to a transition into automation."
    ]
  }
];

export const HIGHLIGHT_PROJECTS: Project[] = [
  {
    title: "VAPI Agent Lucy (Outbound Calling)",
    category: "AI Voice Agent",
    description: "Developed a fully automated outbound calling system integrated within GHL. Lucy immediately calls new sign-ups, schedules appointments, and closes deals, effectively replacing manual call centers.",
    tech: ["VAPI", "n8n", "GoHighLevel", "Make"]
  },
  {
    title: "Psychologist CRM System",
    category: "GHL Architecture",
    description: "Engineered a comprehensive GHL system capturing leads through bookings, funneling them into CRM, automating follow-ups, and managing payment tracking and document signatures.",
    tech: ["GoHighLevel", "Stripe", "Automation"]
  },
  {
    title: "WhatsApp Chatbot & Reminder System",
    category: "Chatbot",
    description: "Created an intelligent WhatsApp chatbot using Make and Pinecone Database to address parent inquiries for a school, automating payment and holiday reminders.",
    tech: ["Make.com", "Pinecone", "WhatsApp API", "Google Sheets"]
  },
  {
    title: "Golf Cart Estimation Workflow",
    category: "Complex Logic",
    description: "Designed a 7-app integrated workflow in Zapier for quick custom golf cart estimation, connecting WooCommerce, Zoho Books, Mailchimp, and Twilio.",
    tech: ["Zapier", "Zoho", "WooCommerce", "Twilio"]
  }
];

export const SKILLS = [
  "n8n", "Zapier", "Make.com", "GoHighLevel", "Airtable", "ClickUp", 
  "Python", "JavaScript", "API Integration", "OpenAI API", "VAPI", 
  "Salesforce", "Pipedrive", "HubSpot", "SQL"
];

export const CERTIFICATIONS = [
  "Zapier Expert Certification",
  "Make Expert Certification",
  "ClickUp Expert Certification",
  "Airtable Builder Certification"
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "John Davis",
    role: "SaaS Founder",
    content: "Rafay built an entire lead qualification system that saves our team 25+ hours per week. Our conversion rate jumped 35% in the first month. Best investment we made this year.",
    initials: "JD"
  },
  {
    name: "Sarah Kim",
    role: "Agency Owner",
    content: "The n8n automation Rafay created transformed our entire operation. We went from chaotic manual processes to a smooth, automated machine. He's not just technical—he understands business.",
    initials: "SK"
  },
  {
    name: "Michael Anderson",
    role: "E-commerce Director",
    content: "The GHL automation handles everything—from lead capture to booking to follow-up. It's like having 3 extra employees working 24/7. ROI was positive within the first month.",
    initials: "MA"
  },
  {
    name: "Lisa Patel",
    role: "Marketing Director",
    content: "Rafay doesn't just build automations—he solves business problems. Every workflow he creates actually drives revenue. Our lead nurturing is now completely automated and converting better than ever.",
    initials: "LP"
  },
  {
    name: "Robert Johnson",
    role: "Operations Manager",
    content: "We were drowning in manual tasks. Rafay mapped our entire process, identified bottlenecks, and built automations that saved us 40+ hours weekly. Game changer for our team.",
    initials: "RJ"
  },
  {
    name: "Emma Chen",
    role: "CEO, Tech Startup",
    content: "The AI agents Rafay built for us handle customer inquiries, qualify leads, and route to sales—all automatically. It's like having an entire support team that never sleeps.",
    initials: "EC"
  },
  {
    name: "David Thompson",
    role: "Real Estate Broker",
    content: "Saved us from a data nightmare. Migrated 50k records from HubSpot to GHL without a hitch. The new automations save my agents 2 hours every single day.",
    initials: "DT"
  },
  {
    name: "Sophie Martinez",
    role: "Customer Support Lead",
    content: "The chatbot Rafay built handles 80% of our support tickets now. We were able to scale our support without hiring 5 new agents. Incredible work.",
    initials: "SM"
  },
  {
    name: "James Peterson",
    role: "CTO",
    content: "Complex Zapier webhooks were breaking constantly until Rafay fixed the architecture. It's been rock solid for 3 months now. Highly recommended expert.",
    initials: "JP"
  },
  {
    name: "Alex Rivera",
    role: "Digital Agency Owner",
    content: "Fastest delivery I've seen on Upwork. The n8n workflow was ready in 2 days and performed exactly as described. He really knows his stuff.",
    initials: "AR"
  },
  {
    name: "Chris Bennett",
    role: "Marketing Consultant",
    content: "Highly recommended for anything GHL related. He knows the platform inside out and built a snapshot that I can resell to my own clients.",
    initials: "CB"
  },
  {
    name: "Natalie Wong",
    role: "Finance Manager",
    content: "Automated our entire invoicing process with Make.com. We save 10 hours a month just on that one workflow. Rafay is a true professional.",
    initials: "NW"
  }
];
