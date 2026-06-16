export const projects = [
  {
    title: 'PinHaoYun',
    subtitle: 'Cloud media automation platform',
    problem:
      'Internal teams needed a secure way to upload, store, and manage critical media assets without repetitive manual handling.',
    solution:
      'Built a serverless upload and lifecycle workflow using AWS services, automated storage policies, and operational monitoring.',
    impact:
      'Reduced manual handling by 80% while keeping storage cost and system behavior predictable.',
    stack: ['AWS Lambda', 'S3', 'DynamoDB', 'API Gateway', 'CloudWatch'],
    features: ['Serverless uploads', 'Lifecycle policies', 'Operational logging', 'Secure asset access'],
    link: 'https://main.dfajjdq9ocxzi.amplifyapp.com/',
    linkLabel: 'Live Demo',
  },
  {
    title: 'RipOffRoo',
    subtitle: 'ML-assisted scam insight workflow',
    problem:
      'Senior Australians and support partners needed a clearer way to recognize scam patterns and report likely fraud.',
    solution:
      'Delivered a Vue and Node.js reporting experience supported by a custom ML classifier for scam pattern triage.',
    impact:
      'Created a more trusted reporting and triage channel, helping partner teams move from slow manual review toward faster prioritization.',
    stack: ['Vue', 'Node.js', 'Express', 'ML Pipeline', 'MongoDB'],
    features: ['Scam report intake', 'Pattern classification', 'Partner triage flow', 'Accessible UX'],
    link: 'https://github.com/hassan-akbar/FIT5120',
    linkLabel: 'GitHub',
  },
  {
    title: 'PlaySquad',
    subtitle: 'Campus coordination app',
    problem:
      'Students needed a simple way to publish, discover, and join campus sport and social activities.',
    solution:
      'Built a native Android app with event publishing, discovery, RSVP flows, real-time updates, and Firebase-backed data.',
    impact:
      'Supported a pilot-style launch experience for student event coordination with a mobile-first workflow.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'REST APIs'],
    features: ['Event discovery', 'RSVP workflows', 'Realtime updates', 'Mobile notifications'],
    link: 'https://github.com/Jake177/PlaySquad',
    linkLabel: 'GitHub',
  },
  {
    title: 'Machine Learning Experiments',
    subtitle: 'Automation-ready AI prototypes',
    problem:
      'Different operational ideas needed quick proof-of-concept models before investing in larger product builds.',
    solution:
      'Built lightweight ML prototypes across computer vision, spam filtering, and game outcome prediction using Python tooling.',
    impact:
      'Validated model-assisted workflows that can integrate into existing tools without large platform changes.',
    stack: ['Python', 'OpenCV', 'scikit-learn', 'Pandas'],
    features: ['Vision detection', 'Text classification', 'Predictive modeling', 'Notebook analysis'],
    link: 'https://github.com/Jake177/Machine-Learning',
    linkLabel: 'GitHub',
  },
  {
    title: 'Agora Classroom',
    subtitle: 'Realtime learning rooms',
    problem:
      'Remote classes needed low-latency collaboration across live video, whiteboarding, and chat.',
    solution:
      'Built a web classroom prototype using Agora SDK and realtime collaboration patterns.',
    impact:
      'Explored a practical realtime collaboration model for multi-track remote learning sessions.',
    stack: ['Agora SDK', 'HTML', 'CSS', 'Socket.io'],
    features: ['Live video rooms', 'Collaborative chat', 'Whiteboard workflow', 'Realtime updates'],
    link: 'https://github.com/Jake177/Agora-Classroom',
    linkLabel: 'GitHub',
  },
]

export const caseStudies = [
  {
    title: 'Cloud media workflow automation',
    project: 'PinHaoYun',
    problem: 'Manual media handling created delays, inconsistent storage decisions, and limited operational visibility.',
    solution:
      'A serverless workflow handled uploads, metadata, storage lifecycle rules, and monitoring with AWS-native services.',
    impact:
      'The workflow reduced manual handling and made operating costs easier to reason about.',
    stack: ['AWS Lambda', 'S3', 'DynamoDB', 'API Gateway'],
  },
  {
    title: 'ML-assisted reporting workflow',
    project: 'RipOffRoo',
    problem: 'Fraud reports were hard to triage quickly because scam signals were scattered across free-form user input.',
    solution:
      'A web reporting flow paired user-friendly intake with ML-assisted classification for partner review.',
    impact:
      'The project demonstrated how AI can support human reviewers without hiding the decision process.',
    stack: ['Vue', 'Node.js', 'Express', 'MongoDB', 'ML Pipeline'],
  },
  {
    title: 'Realtime coordination tool',
    project: 'PlaySquad',
    problem: 'Campus activities needed a mobile workflow for discovery, signups, and timely updates.',
    solution:
      'A Firebase-backed Android app coordinated event publishing, RSVP state, and user-facing updates.',
    impact:
      'The tool turned an informal coordination process into a structured product workflow.',
    stack: ['Kotlin', 'Jetpack Compose', 'Firebase', 'REST APIs'],
  },
]
