import { Check, Code, TrendingUp, Database, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface MonthlyContent {
    month: string;
    theme: string;
    topics: string[];
    project: string;
}

const educationPrograms = [
    {
        name: 'AI for Business & Marketing',
        price: 3299,
        duration: '7 Months',
        icon: TrendingUp,
        color: 'from-blue-600 to-blue-800',
        overview: 'In this program, you will embark on an exciting journey to explore how AI is transforming the marketing industry. Whether you\'re a marketer looking to future-proof your skills, a business owner aiming to scale through automation, or a creative interested in the potential of tools like ChatGPT and Midjourney. This course will give you both foundational knowledge and hands-on project experience.',
        programHighlights: [
            '7-Month Program',
            '6 Hands-on Projects',
            '1 Industry Client Project',
            'AI Portfolio + Certificate of Completion'
        ],
        expectedResults: [
            'The fundamentals of AI and Python with marketing applications.',
            'How to use tools like ChatGPT, Midjourney, and Canva AI to create content and ideas.',
            'How to extract insights from customer feedback using sentiment analysis and social listening.',
            'How to segment customers, forecast trends, and build AI-powered analytics.',
            'How to automate workflows, create chatbots, and integrate APIs using low-code tools.',
            'How to collaborate on a real project with a marketing agency or NGO.',
            'How to build and present a compelling AI marketing portfolio.',
            'How to apply AI tools to content creation, lead generation, customer service, and campaign strategy.',
            'How to speak confidently about AI in interviews and client pitches.'
        ],
        monthlyPlan: [
            {
                month: 'Month 1–2',
                theme: 'Intro to AI, Python Basics, ChatGPT, Midjourney, Canva AI',
                topics: [
                    'What is AI? Overview of Generative AI, Machine Learning, and LLMs',
                    'Introduction to Python: Variables, lists, loops, functions, and simple data handling',
                    'Prompt Engineering with ChatGPT',
                    'Creating branded content with Canva AI (Magic Write, Magic Design)',
                    'Using Midjourney for visual storytelling and campaign graphics',
                    'Ethical considerations and responsible use of AI tools'
                ],
                project: 'Build a Brand Assistant using ChatGPT – Design a smart assistant that generates content, replies to customers, and maintains brand tone.'
            },
            {
                month: 'Month 3',
                theme: 'NLP for Social Listening, Sentiment Analysis, Prompting',
                topics: [
                    'Introduction to Natural Language Processing (NLP)',
                    'Sentiment Analysis with VADER and TextBlob',
                    'Keyword extraction and topic modeling',
                    'Social listening from Instagram, Twitter, and reviews',
                    'Prompting for summaries, insights, and reports',
                    'Visualizing and reporting insights for brand managers'
                ],
                project: 'Analyse a Local Brand\'s Social Media – Identify key customer sentiments, complaints, and themes from real audience data.'
            },
            {
                month: 'Month 4',
                theme: 'AI Analytics – Forecasting & Customer Clustering',
                topics: [
                    'Time Series Forecasting using Facebook Prophet',
                    'Customer Segmentation using K-Means clustering',
                    'Introduction to Scikit-learn (ML library)',
                    'Creating marketing personas from cluster data',
                    'Building a lead scoring model based on behavior',
                    'Visual storytelling with dashboards (Streamlit/Canva)'
                ],
                project: 'Build a Lead Scoring or Segmentation Tool – Group customers based on data and predict high-value leads.'
            },
            {
                month: 'Month 5',
                theme: 'Automation Tools – Zapier, Make, Chatbots, APIs',
                topics: [
                    'No-code automation: Zapier, Make (Integromat)',
                    'APIs 101: What they are and how marketers use them',
                    'Connecting tools like ChatGPT, Google Sheets, Notion, Instagram',
                    'Chatbot design: ManyChat, Flowise, Landbot',
                    'Smart DM responders, automated lead capture, and data syncing',
                    'Writing and testing chatbot flows'
                ],
                project: 'Deploy an Instagram DM Bot – Build a smart chatbot that interacts with users, collects info, and delivers value on autopilot.'
            },
            {
                month: 'Month 6',
                theme: 'Real Industry Project (Marketing Agency or NGO)',
                topics: [
                    'Working with a real client brief',
                    'Defining the problem and AI use case',
                    'Building and iterating your solution',
                    'Communicating with stakeholders',
                    'Presenting impact and results'
                ],
                project: 'Client Solution Presentation – Collaborate with an NGO or agency to build a live AI-powered marketing solution.'
            },
            {
                month: 'Month 7',
                theme: 'Personal Brand Project + Final Showcase',
                topics: [
                    'Crafting your AI portfolio (Notion, Wix, Webflow)',
                    'Recording demos and writing case studies',
                    'LinkedIn positioning and storytelling',
                    'How to pitch your AI skills to employers and clients',
                    'Freelance profile building and career pathways',
                    'Final showcase and certification'
                ],
                project: 'AI Marketing Portfolio + Presentation – Submit a full showcase of your best work and present it to a review panel.'
            }
        ]
    },
    {
        name: 'AI for Programming',
        price: 3299,
        duration: '7 Months',
        icon: Code,
        color: 'from-purple-600 to-purple-800',
        overview: 'In this program, you’ll explore how artificial intelligence is enhancing and transforming software development. Designed for aspiring developers, CS students, or experienced coders looking to integrate AI into their workflow, this course blends core programming knowledge with modern AI tools and frameworks.',
        programHighlights: [
            '7-Month Program',
            '6 Hands-on Projects',
            '1 Real Industry Client Project',
            'AI Portfolio + Certificate of Completion'
        ],
        expectedResults: [
            'Understand AI and Python fundamentals for software development',
            'Use AI code assistants like GitHub Copilot and ChatGPT for coding tasks',
            'Build intelligent code generators and documentation tools',
            'Leverage NLP for analyzing code, logs, and software documentation',
            'Train models for code completion and bug prediction',
            'Automate testing, documentation, and issue triaging',
            'Build real projects with AI-assisted software development',
            'Showcase your skills with a technical AI project portfolio'
        ],
        monthlyPlan: [
            {
                month: 'Month 1–2',
                theme: 'Intro to AI, Python, and Coding Tools',
                topics: [
                    'What is AI? ML, Deep Learning, and LLMs',
                    'Python refresher: data types, functions, file handling, OOP',
                    'Using Jupyter and VS Code for development',
                    'Prompt engineering basics with ChatGPT',
                    'Using GitHub Copilot and Replit Ghostwriter',
                    'Ethical considerations in AI-assisted development'
                ],
                project: 'AI Code Helper – Build a personal AI assistant that explains code, writes comments, and suggests improvements.'
            },
            {
                month: 'Month 3',
                theme: 'NLP for Code Understanding and Documentation',
                topics: [
                    'NLP fundamentals applied to source code',
                    'Code summarization using LLMs',
                    'Comment generation and docstring auto-fill',
                    'Analyzing error messages and logs with AI',
                    'Creating intelligent README generators'
                ],
                project: 'Code Summariser Tool – Develop a tool that takes source code files and outputs summaries, documentation, and usage instructions.'
            },
            {
                month: 'Month 4',
                theme: 'Code Generation and Bug Detection with AI',
                topics: [
                    'Intro to transformer models for code generation (Codex, StarCoder, CodeT5)',
                    'Fine-tuning models for custom code style',
                    'Bug detection using ML models and static analysis',
                    'Auto-repairing simple code bugs via prompts',
                    'Evaluating AI-generated code'
                ],
                project: 'Bug Fixer Bot – Build a tool that flags simple errors in Python code and suggests fixes using AI.'
            },
            {
                month: 'Month 5',
                theme: 'Automating Dev Workflows',
                topics: [
                    'Using APIs and tools to automate tests and builds',
                    'ChatOps: Integrating AI into Slack, GitHub, Jira',
                    'Auto-generating tests with ChatGPT/Copilot',
                    'AI for project management and issue triage',
                    'CI/CD automation with GitHub Actions'
                ],
                project: 'Dev Workflow Optimizer – Create a pipeline that uses AI to generate test cases, assign issues, and document releases.'
            },
            {
                month: 'Month 6',
                theme: 'Real Industry Project (Tech Firm or Startup)',
                topics: [
                    'Working with a real software project or team',
                    'Identifying inefficiencies or opportunities for AI integration',
                    'Developing custom AI tools or models',
                    'Testing and deployment in a real environment',
                    'Reporting on impact and outcomes'
                ],
                project: 'AI Dev Tool in Practice – Partner with a company or simulate a startup project that integrates AI into the dev cycle.'
            },
            {
                month: 'Month 7',
                theme: 'Personal Project + Final Showcase',
                topics: [
                    'Build your developer portfolio with AI-powered tools',
                    'Record demos, write blog posts, and publish on GitHub',
                    'Contribute to open-source AI tools or libraries',
                    'Career paths: prompt engineer, ML dev, tools engineer',
                    'Pitch your value in interviews and client proposals'
                ],
                project: 'AI Developer Portfolio – Showcase your best tools, scripts, and AI-enhanced projects to a panel or portfolio site.'
            }
        ]
    },
    {
        name: 'AI for Data Science',
        price: 3299,
        duration: '7 Months',
        icon: Database,
        color: 'from-green-600 to-green-800',
        overview: 'In this program, you will explore how artificial intelligence enhances data science workflows and enables smarter decision-making. Ideal for aspiring data scientists, analysts, and researchers, this course combines core AI techniques with practical applications in data analysis, modeling, and communication.',
        programHighlights: [
            '7-Month Program',
            '6 Hands-on Projects',
            '1 Real Industry Client Project',
            'AI Portfolio + Certificate of Completion'
        ],
        expectedResults: [
            'Master Python for data analysis and machine learning',
            'Use AI tools to explore, visualize, and model data',
            'Work with real-world datasets to extract insights and predictions',
            'Understand and apply ML models such as regression, classification, clustering, and forecasting',
            'Automate EDA, report generation, and dashboard creation with AI tools',
            'Collaborate on data-driven projects with real-world impact',
            'Build an AI-powered data science portfolio for jobs or freelancing',
            'Communicate data-driven decisions using storytelling and visual tools'
        ],
        monthlyPlan: [
            {
                month: 'Month 1–2',
                theme: 'Intro to AI, Python, and Data Science Basics',
                topics: [
                    'What is AI? ML, deep learning, and data-centric AI',
                    'Python for data science: NumPy, Pandas, Matplotlib, Seaborn',
                    'Data types, data cleaning, data wrangling',
                    'Intro to Jupyter, Colab, and notebooks for data work',
                    'ChatGPT and Copilot for code help and explanations',
                    'Exploring datasets and building hypotheses'
                ],
                project: 'Data Explorer Assistant – Build a ChatGPT-based tool that helps users understand and summarize datasets.'
            },
            {
                month: 'Month 3',
                theme: 'EDA and Data Visualization with AI Tools',
                topics: [
                    'Automated EDA with Sweetviz, Pandas Profiling, DataPrep',
                    'Visualizing data with Matplotlib, Seaborn, and Plotly',
                    'Storytelling with dashboards: Streamlit, Power BI, Tableau',
                    'Detecting outliers, correlations, and trends',
                    'Generating charts and reports with ChatGPT and Canva AI'
                ],
                project: 'Insight Dashboard – Create a dashboard that visualizes key metrics and trends from a real-world dataset.'
            },
            {
                month: 'Month 4',
                theme: 'Machine Learning Models for Prediction',
                topics: [
                    'Intro to supervised learning: regression and classification',
                    'Scikit-learn basics and workflows',
                    'Splitting data, training models, and evaluating performance',
                    'Hyperparameter tuning and cross-validation',
                    'ML model explainability with SHAP and LIME'
                ],
                project: 'Prediction Model – Train and evaluate a model to predict outcomes such as house prices, sales, or churn.'
            },
            {
                month: 'Month 5',
                theme: 'Clustering, Forecasting, and Recommenders',
                topics: [
                    'Unsupervised learning: K-Means, DBSCAN, Hierarchical Clustering',
                    'Time series forecasting using ARIMA, Prophet',
                    'Building recommender systems (collaborative filtering, content-based)',
                    'Dimensionality reduction with PCA and t-SNE'
                ],
                project: 'Segmentation & Forecasting Project – Segment users or forecast future values using real datasets.'
            },
            {
                month: 'Month 6',
                theme: 'Real Industry Project (Data-Driven NGO or Business)',
                topics: [
                    'Work with a real organization or simulate a business scenario',
                    'Frame the problem and identify relevant datasets',
                    'Clean, analyze, and model the data',
                    'Present insights and actionable outcomes'
                ],
                project: 'Client Analytics Project – Deliver a complete analysis and prediction report for an external partner or internal case study.'
            },
            {
                month: 'Month 7',
                theme: 'Final Portfolio + Presentation',
                topics: [
                    'Compile and publish your portfolio (GitHub, Notion, or Webflow)',
                    'Document projects with notebooks, visuals, and business value',
                    'Practice storytelling and presentations with AI tools',
                    'Career tracks: data scientist, analyst, AI researcher',
                    'Prepare for interviews and freelance gigs'
                ],
                project: 'AI Data Science Portfolio – Showcase your top data projects and present your workflow to a panel.'
            }
        ]
    },
    {
        name: 'AI for Cyber Security',
        price: 3299,
        duration: '7 Months',
        icon: Shield,
        color: 'from-red-600 to-red-800',
        overview: 'In this hands-on program, you\'ll explore how AI is reshaping the field of cybersecurity. Whether you\'re an aspiring cybersecurity analyst, a tech enthusiast, or an IT professional seeking to level up with AI, this course will provide you with both technical skills and practical experience.',
        programHighlights: [
            '7-Month Program',
            '6 Hands-on Projects',
            '1 Real Industry Client Project',
            'AI Portfolio + Certificate of Completion'
        ],
        expectedResults: [
            'Understand the fundamentals of AI and Python with cybersecurity applications',
            'Learn how to use AI for threat detection, intrusion prevention, and vulnerability analysis',
            'Gain experience using NLP for phishing email detection and log analysis',
            'Build predictive models to classify malware and assess risks',
            'Use automation tools and APIs to streamline incident response',
            'Collaborate on a real cybersecurity challenge from a business or NGO',
            'Build a cybersecurity-focused AI project portfolio',
            'Speak confidently about AI\'s role in modern cybersecurity'
        ],
        monthlyPlan: [
            {
                month: 'Month 1–2',
                theme: 'Intro to AI, Python, and Cybersecurity Basics',
                topics: [
                    'What is AI? Overview of ML, Deep Learning, and Generative AI',
                    'Cybersecurity 101: Threat types, vectors, and vulnerabilities',
                    'Python basics: variables, loops, lists, functions, file handling',
                    'Introduction to common security libraries (e.g., scapy, hashlib)',
                    'Introduction to Jupyter Notebooks and data workflows',
                    'Responsible use of AI in security contexts'
                ],
                project: 'Threat Intelligence Bot – Use ChatGPT to build a bot that summarizes daily security news and alerts relevant to specific industries.'
            },
            {
                month: 'Month 3',
                theme: 'NLP for Email Security, Logs, and Phishing Detection',
                topics: [
                    'Introduction to NLP with Python',
                    'Detecting phishing emails with keyword detection and ML classification',
                    'Log file analysis: extracting patterns from syslogs and SIEM data',
                    'Tokenization, named entity recognition, vectorization',
                    'Using BERT and LLMs to classify suspicious content',
                    'Visualizing frequency and anomalies in log patterns'
                ],
                project: 'Phishing Email Classifier – Train a model to detect phishing emails using NLP and real-world datasets.'
            },
            {
                month: 'Month 4',
                theme: 'Threat Detection & Anomaly Detection with AI',
                topics: [
                    'Anomaly detection with Isolation Forest, One-Class SVM',
                    'Network intrusion detection systems (NIDS) and dataset exploration (e.g., KDD, CICIDS)',
                    'Time series for behavioral analysis',
                    'Statistical vs. ML-based detection approaches',
                    'Visualizing attacks over time with Streamlit or Dash'
                ],
                project: 'Network Intrusion Detector – Build an AI model that flags anomalies in simulated network traffic.'
            },
            {
                month: 'Month 5',
                theme: 'Malware Classification and Risk Prediction',
                topics: [
                    'Supervised learning with Scikit-learn: Random Forest, SVM, XGBoost',
                    'Working with malware datasets (e.g., EMBER, VirusShare samples)',
                    'Feature extraction from binary files or API call traces',
                    'Risk scoring models for user or device behavior',
                    'Data augmentation and handling class imbalance'
                ],
                project: 'Malware Classifier – Develop an ML model that distinguishes between malware and benign files.'
            },
            {
                month: 'Month 6',
                theme: 'Real Industry Project (Security Firm or NGO)',
                topics: [
                    'Work with an external organization or simulate a company\'s environment',
                    'Define the cybersecurity problem and identify AI/ML solutions',
                    'Gather and prepare relevant data',
                    'Test and iterate on your solution',
                    'Present the solution and impact to stakeholders'
                ],
                project: 'Client-Focused Cybersecurity Solution – Build and present an AI-powered solution addressing a specific security problem.'
            },
            {
                month: 'Month 7',
                theme: 'Portfolio Project + Final Showcase',
                topics: [
                    'Curate your AI security projects into a Notion or personal website portfolio',
                    'Record short demos and walkthroughs of your tools',
                    'Write case studies with impact summaries',
                    'Optimize your LinkedIn and GitHub for cybersecurity recruiters',
                    'Learn how to present your skills in interviews and proposals',
                    'Final live demo session and graduation'
                ],
                project: 'AI for Cybersecurity Portfolio – Present your top 3 projects in a personal portfolio with documented case studies.'
            }
        ]
    }
];

export default function Education() {
    const [activeTab, setActiveTab] = useState<{ [key: number]: string }>({});

    const getActiveTab = (index: number) => activeTab[index] || 'overview';
    const setTab = (index: number, tab: string) => {
        setActiveTab(prev => ({ ...prev, [index]: tab }));
    };

    return (
        <section id="education" className="bg-[#000] py-20">
            <div className="container mx-auto px-4 text-center">
                <span className="inline-block mb-4 px-4 py-1 rounded-lg bg-black/10 backdrop-blur-md text-white opacity-70 text-sm font-medium shadow-md border border-white/20">
                    Education
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-4">
                    AI Education Programs
                </h2>
                <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
                    Transform your career with our comprehensive 7-month AI specialization programs. All programs are €3,299 and include real-world projects.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    {educationPrograms.map((program, index) => {
                        const IconComponent = program.icon;
                        const currentTab = getActiveTab(index);

                        return (
                            <div
                                key={index}
                                className="relative bg-[#1A1A1A] rounded-2xl overflow-hidden transition-all duration-300 border border-white/10"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="p-6 md:p-8">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-full bg-gradient-to-br ${program.color}`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{program.name}</h3>
                                        <div className="text-right">
                                            <span className="text-3xl font-bold text-white">€{program.price}</span>
                                            <p className="text-gray-400 text-sm">{program.duration}</p>
                                        </div>
                                    </div>

                                    {/* Tabs */}
                                    <div className="flex gap-2 mb-6 border-b border-white/10">
                                        <button
                                            onClick={() => setTab(index, 'overview')}
                                            className={`px-4 py-2 text-sm font-medium transition-colors ${currentTab === 'overview'
                                                ? 'text-white border-b-2 border-[#1e3a8a]'
                                                : 'text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Overview
                                        </button>
                                        <button
                                            onClick={() => setTab(index, 'results')}
                                            className={`px-4 py-2 text-sm font-medium transition-colors ${currentTab === 'results'
                                                ? 'text-white border-b-2 border-[#1e3a8a]'
                                                : 'text-gray-400 hover:text-white'
                                                }`}
                                        >
                                            Expected Results
                                        </button>
                                        {program.monthlyPlan && (
                                            <button
                                                onClick={() => setTab(index, 'curriculum')}
                                                className={`px-4 py-2 text-sm font-medium transition-colors ${currentTab === 'curriculum'
                                                    ? 'text-white border-b-2 border-[#1e3a8a]'
                                                    : 'text-gray-400 hover:text-white'
                                                    }`}
                                            >
                                                Monthly Plan
                                            </button>
                                        )}
                                    </div>

                                    {/* Tab Content */}
                                    <div className="min-h-[400px] max-h-[500px] overflow-y-auto pr-2 mb-6">
                                        {/* Overview Tab */}
                                        {currentTab === 'overview' && (
                                            <div className="space-y-4">
                                                <p className="text-gray-300 text-left text-sm leading-relaxed">
                                                    {program.overview}
                                                </p>
                                                <div>
                                                    <h4 className="text-white font-semibold mb-3 text-left">Program Highlights:</h4>
                                                    <ul className="space-y-2 text-left">
                                                        {program.programHighlights.map((highlight, idx) => (
                                                            <li key={idx} className="flex items-start text-gray-300">
                                                                <Check className="w-4 h-4 text-[#1e3a8a] mr-2 mt-0.5 flex-shrink-0" />
                                                                <span className="text-sm">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        )}

                                        {/* Expected Results Tab */}
                                        {currentTab === 'results' && (
                                            <div>
                                                <h4 className="text-white font-semibold mb-3 text-left">By the end of this program, you will learn:</h4>
                                                <ul className="space-y-2 text-left">
                                                    {program.expectedResults.map((result, idx) => (
                                                        <li key={idx} className="flex items-start text-gray-300">
                                                            <Check className="w-4 h-4 text-[#1e3a8a] mr-2 mt-0.5 flex-shrink-0" />
                                                            <span className="text-sm">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {/* Monthly Plan Tab */}
                                        {currentTab === 'curriculum' && program.monthlyPlan && (
                                            <div className="space-y-4">
                                                {program.monthlyPlan.map((month: MonthlyContent, idx: number) => (
                                                    <div key={idx} className="bg-white/5 rounded-lg p-4">
                                                        <h5 className="text-white font-bold text-left mb-1">{month.month}</h5>
                                                        <p className="text-[#1e3a8a] text-sm font-semibold text-left mb-3">
                                                            {month.theme}
                                                        </p>
                                                        <ul className="space-y-1 mb-3 text-left">
                                                            {month.topics.map((topic, topicIdx) => (
                                                                <li key={topicIdx} className="flex items-start text-gray-300">
                                                                    <span className="text-[#1e3a8a] mr-2">•</span>
                                                                    <span className="text-xs">{topic}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        <div className="bg-[#1e3a8a]/10 border-l-2 border-[#1e3a8a] pl-3 py-2">
                                                            <p className="text-xs text-gray-300">
                                                                <span className="font-semibold text-white">Project: </span>
                                                                {month.project}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Enroll Button */}
                                    <button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-[#1e3a8a] to-[#1d4ed8] text-white hover:shadow-lg hover:shadow-blue-500/25">
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}