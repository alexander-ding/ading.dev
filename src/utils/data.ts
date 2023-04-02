import { ProjectProps } from '../components/Project'
import { PublicationProps } from '../components/Publication'

// projects

const surrealistCloth = {
  title: 'Surrealist Cloth',
  description:
    'Create a surrealist scene with ray & path tracing, mesh rendering, and cloth simulation',
  links: [
    {
      name: 'Demo',
      url: 'https://www.youtube.com/watch?v=H0h28vbtt4U',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/surrealist-cloth/surrealist-cloth',
    },
    {
      name: 'CSCI 1230',
      url: 'http://cs.brown.edu/courses/csci1230/',
    },
  ],
}

const counterPointer = {
  title: 'CounterPointer',
  description:
    'Interactive editor that checks your species counterpoints for mistakes and dynamically generates examples',
  links: [
    {
      name: 'Web',
      url: 'https://www.counterpointer.app/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/counter-pointer/counterpointer',
    },
    {
      name: 'CSCI 0320',
      url: 'https://cs.brown.edu/courses/cs0320/',
    },
  ],
}

const neuralNetFlowchart = {
  title: 'Neural Net Flowchart',
  description:
    'Define and train simple neural networks with a drag-and-drop web UI',
  links: [
    {
      name: 'Web',
      url: 'https://alexding.me/nn-flowchart/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/nn-flowchart',
    },
    {
      name: 'CS 4',
      url: 'https://www.commschool.org/academics/curriculum/academic-departments-courses/computer-science',
    },
  ],
}

const colorize = {
  title: 'Colorize',
  description: 'Use deep learning to colorize black & white images',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/colorize',
    },
    {
      name: 'Brown Visual Computing',
      url: 'https://visual.cs.brown.edu/',
    },
  ],
}

const cipherBusters = {
  title: 'CipherBusters',
  description:
    'Bust classical ciphers with encoder-decoder LSTMs and transformers',
  links: [
    {
      name: 'DevPost',
      url: 'https://devpost.com/software/cipherbusters',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/cipherbusters/cipherbusters',
    },
    {
      name: 'CSCI 1470',
      url: 'http://www.cs.brown.edu/courses/csci1470/',
    },
  ],
}

const piazzaGate = {
  title: 'PiazzaGate',
  description:
    'Analysis of demographic patterns of COVID-19 misinformation on Twitter',
  links: [
    {
      name: 'Presentation',
      url: 'https://docs.google.com/presentation/d/1mq5sDhdYaTe4qr7WaXNCOcT2Y2MKqfTtdP9UMnaHw0I',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/piazzagate/piazzagate',
    },
    {
      name: 'CSCI 1951A',
      url: 'http://www.cs.brown.edu/courses/csci1951-a/',
    },
  ],
}

const yeetBot = {
  title: 'YeetBot',
  description:
    'Meme-y Discord bot to overlay custom stickers on detected faces in images',
  links: [
    {
      name: 'Discord',
      url: 'https://top.gg/bot/563019457367375882',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/yeet-bot/',
    },
  ],
}

const plymi = {
  title: 'Python Like You Mean It (Chinese)',
  description:
    'Chinese translation of an awesome free resource for learning Python and NumPy',
  links: [
    {
      name: 'Web',
      url: 'https://cn.pythonlikeyoumeanit.com/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/Learning_Python',
    },
  ],
}

const lostInTranslation = {
  title: 'Lost in Translation',
  description:
    "Explore what's lost in translation by passing the same text through Google Translate many times",
  links: [
    {
      name: 'Web',
      url: 'https://alexding.me/lost-in-translation',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/lost-in-translation',
    },
  ],
}

const play24 = {
  title: '24',
  description: 'Play a game of 24 online!',
  links: [
    {
      name: 'Web',
      url: 'https://alexding.me/24/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/24',
    },
  ],
}

const satSolver = {
  title: 'SAT Solver',
  description: 'Solve boolean satisfiability problems using BCP and CDCL',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/sat-solver',
    },
    {
      name: 'CSCI 2951O',
      url: 'http://cs.brown.edu/courses/csci2951-o/',
    },
  ],
}

const dotFiles = {
  title: '.dotfiles',
  description: 'Replicate my dev environment in one command',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/.dotfiles',
    },
  ],
}

const vehicleRouting = {
  title: 'Vehicle Routing',
  description:
    'Solve vehicle routing problems with local search and simulated annealing',
  links: [
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/vehicle-routing/',
    },
    {
      name: 'CSCI 2951O',
      url: 'http://cs.brown.edu/courses/csci2951-o/',
    },
  ],
}

const commontime = {
  title: 'Commontime',
  description:
    'Schedule rooms, announce meetings, and check course schedules for Commonwealth School',
  links: [
    {
      name: 'Web',
      url: 'https://time.commschool.org/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/commontime',
    },
  ],
}

const qotw = {
  title: 'Quote of the Week',
  description: 'View and vote on the Quote of the Week at Commonwealth School',
  links: [
    {
      name: 'Web',
      url: 'https://app.qotw.net/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/alexander-ding/qotw',
    },
  ],
}

const theCriticalReview = {
  title: 'The Critical Review',
  description:
    'Read, write, and publish student reviews for courses at Brown University, since 1976',
  links: [
    {
      name: 'Web',
      url: 'https://thecriticalreview.org/',
    },
  ],
  isManaged: true,
}

const hours = {
  title: 'Hours',
  description: "Brown University's office hour management system",
  links: [
    {
      name: 'Web',
      url: 'https://hours.cs.brown.edu/',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/fullstackatbrown/hours-frontend',
    },
  ],
  isManaged: true,
}

const brownLabMatch = {
  title: 'Brown Lab Match',
  description: "Find a research group at Brown that's a match for you",
  links: [
    {
      name: 'Web',
      url: 'http://www.brownlabmatch.com/',
    },
  ],
}

// publications

const deepLearningForGastricLocation = {
  title:
    'Deep Learning for Gastric Location Classification: An Analysis of Location Boundaries and Improvements through Attention and Contrastive Learning',
  authors: [
    'Chenxi Zhang',
    'Alex Ding',
    'Zhehong Fu',
    'Jing Ni',
    'Qilei Chen',
    'Zinan Xiong',
    'Benyuan Liu',
    'Yu Cao',
    'Shujiao Chen',
    'Xiaowei Liu',
  ],
  venue:
    'Special Issue for the ACM International Conference on Connected Health: Applications, Systems and Engineering Technologies, 2023',
  inReview: false,
  abstract:
    'Gastrointestinal diseases, such as gastric cancer, are a major cause of deaths and economic losses. One common diagnostic procedure for detecting these diseases is esophagogastroduodenoscopy (EGD), in which a flexible tube with a camera is inserted into the upper gastrointestinal system to examine it. However, the movement of the gastrointestinal tract and the skill of the physician can sometimes result in blind spots, where potential abnormalities may be missed. To address this issue, we develop a deep learning-based system that tracks the camera’s location during EGD to help doctors avoid potential blind spots. Our system can classify twelve different parts of the upper gastrointestinal system, including the background, with an accuracy of 87.22%. Our analysis showed that most misclassifications occurred between adjacent areas, and we explore two methods, attention block and MoCo pre-training, that can improve the classification accuracy by about 2%. When evaluated on annotated EGD surgery videos, our model achieves a precision of 89.6% and a recall of 88.2%. This system has the potential to improve the accuracy of EGD diagnoses and ultimately reduce the impact of gastrointestinal diseases.',
  links: [
    {
      url: 'https://www.sciencedirect.com/science/article/pii/S2352648323000223',
      name: 'Paper',
    },
  ],
}

const learningBodyAware = {
  title: 'Learning Body-Aware 3D Shape Generative Models',
  authors: [
    'Bryce Blinn',
    'Alex Ding',
    'R. Kenny Jones',
    'Manolis Savva',
    'Srinath Sridhar',
    'Daniel Ritchie',
  ],
  venue: '',
  inReview: false,
  abstract:
    'The shape of many objects in the built environment is dictated by their relationships to the human body: how will a person interact with this object? Existing data-driven generative models of 3D shapes produce plausible objects but do not reason about the relationship of those objects to the human body. In this paper, we learn body-aware generative models of 3D shapes. Specifically, we train generative models of chairs, an ubiquitous shape category, which can be conditioned on a given body shape or sitting pose. The body-shape-conditioned models produce chairs which will be comfortable for a person with the given body shape; the pose-conditioned models produce chairs which accommodate the given sitting pose. To train these models, we define a "sitting pose matching" metric and a novel "sitting comfort" metric. Calculating these metrics requires an expensive optimization to sit the body into the chair, which is too slow to be used as a loss function for training a generative model. Thus, we train neural networks to efficiently approximate these metrics. We use our approach to train three body-aware generative shape models: a structured part-based generator, a point cloud generator, and an implicit surface generator. In all cases, our approach produces models which adapt their output chair shapes to input human body specifications.',
  links: [
    {
      url: 'https://arxiv.org/abs/2112.07022',
      name: 'Paper',
    },
  ],
}

const detectionOfEndoscope = {
  title: 'Detection of Endoscope Withdrawal Time in Colonoscopy Videos',
  authors: ['Ying Li', 'Alex Ding', 'Yu Cao', 'Benyuan Liu', 'Shujiao Chen'],
  venue:
    'IEEE International Conference on Machine Learning and Applications (Pasedena, California), December 2021',
  inReview: false,
  abstract:
    'A colonoscopy is an endoscopic examination that visualizes the colon by inserting a camera, attached to a long, flexible tube, into the patient’s anus and up the rectum. One significant landmark of a colonoscopy is when the endoscope begins to withdraw after reaching the farthest point in its path, the cecum. In this paper, we demonstrate that the withdrawal point is closely related to the sighting of local anatomical features in the cecum, specifically the ileocecal valve. The withdrawal point allows us to determine the amount of time the endoscope spends withdrawing, which is an important indicator of the quality of a colonoscopy. In this paper, we present a colonoscopy video processing system that detects the withdrawal point in real time by using a convolutional neural network to classify between ileocecal valves and other images. The system then processes the raw classifier output to determine the withdrawal point. We collect a novel dataset of colonoscopy images and videos to train and evaluate the classifier, as well as to evaluate the video processing system. We explore a range of state-of-the-art classifier architectures, and our best model achieves 99.6% accuracy on the image-level dataset. Then, we provide human-readable insight into our classifier using class activation mapping and principle component analysis. Using this classifier and optimized parameters, our video processing system achieves 70.5% accuracy (± 10s) on the video-level dataset.',
  links: [
    {
      url: 'https://ieeexplore.ieee.org/document/9680199',
      name: 'Paper',
    },
  ],
}

const gastricLocationClassification = {
  title:
    'Gastric Location Classification During Esophagogastroduodenoscopy Using Deep Neural Networks',
  authors: [
    'Alex Ding',
    'Ying Li',
    'Qilei Chen',
    'Yu Cao',
    'Benyuan Liu',
    'Shujiao Chen',
    'Xiaowei Liu',
  ],
  venue:
    'IEEE Symposium on Bioinformatics and Bioengineering (Kragujevac, Serbia), October 2021',
  inReview: false,
  abstract:
    "Esophagogastroduodenoscopy (EGD) is a common procedure that visualizes the esophagus, stomach, and the duodenum by inserting a camera, attached to a long flexible tube, into the patient's mouth and down the stomach. A comprehensive EGD needs to examine all gastric locations, but since the camera is controlled manually, it is easy to miss some surface area and create diagnostic blind spots, which often result in life-costing oversights of early gastric cancer and other serious illnesses. In order to address this problem, we train a convolutional neural network to classify gastric locations based on the camera feed during an EGD, and based on the classifier and a triggering algorithm we propose, we build a video processing system that checks off each location as visited, allowing human operators to keep track of which locations they have visited and which they have not. Based on collected clinical patient reports, we consider six gastric locations, and we add a background class to our classifier to accomodate for the frames in EGD videos that do not resemble the six defined classes (including when the camera is outside of the patient body). Our best classifier achieves 98 % accuracy within the six gastric locations and 88 % accuracy including the background class, and our video processing system clearly checks off gastric locations in an expected order when being tested on recorded EGD videos. Lastly, we use class activation mapping to provide human-readable insight into how our trained classifier works.",
  links: [
    {
      url: 'https://ieeexplore.ieee.org/document/9635273',
      name: 'Paper',
    },
  ],
}

const retinopathyOfPrematurity = {
  title:
    'Retinopathy of Prematurity Stage Diagnosis Using Object Segmentation and Convolutional Neural Networks',
  authors: ['Alex Ding', 'Qilei Chen', 'Yu Cao', 'Benyuan Liu'],
  venue:
    'International Joint Conference on Neural Networks (Glasgow, United Kingdom), July 2020',
  inReview: false,
  abstract:
    'Retinopathy of Prematurity (ROP) is an eye disorder primarily affecting premature infants with lower weights. It causes proliferation of vessels in the retina and could result in vision loss and, eventually, retinal detachment, leading to blindness. While human experts can easily identify severe stages of ROP, the diagnosis of earlier stages, which are the most relevant to determining treatment choice, are much more affected by variability in subjective interpretations of human experts. In recent years, there has been a significant effort to automate the diagnosis using deep learning. This paper builds upon the success of previous models and develops a novel architecture, which combines object segmentation and convolutional neural networks (CNN) to construct an effective classifier of ROP stages 1-3 based on neonatal retinal images. Motivated by the fact that the formation and shape of a demarcation line in the retina is the distinguishing feature between earlier ROP stages, our proposed system first trains an object segmentation model to identify the demarcation line at a pixel level and adds the resulting mask as an additional "color" channel in the original image. Then, the system trains a CNN classifier based on the processed images to leverage information from both the original image and the mask, which helps direct the model\'s attention to the demarcation line. In a number of careful experiments comparing its performance to previous object segmentation systems and CNN-only systems trained on our dataset, our novel architecture significantly outperforms previous systems in accuracy, demonstrating the effectiveness of our proposed pipeline.',
  links: [
    {
      url: 'https://ieeexplore.ieee.org/document/9207288',
      name: 'Paper',
    },
  ],
}

const anEvaluationOf = {
  title:
    'An Evaluation of UPC++ by Porting Shared-Memory Parallel Graph Algorithms',
  authors: ['Alex Ding', 'Yan Gu'],
  venue: 'Fall MIT PRIMES Conference (Cambridge, Massachusetts), October 2019',
  inReview: false,
  abstract:
    "Unified Parallel C++ (UPC++), a C++ library, attempts to address the programming difficulty introduced by distributed parallel systems and still take advantage of the model's high scalability by exposing an API that represents the distributed memory as a contiguous global address space, similar to that of a sharedmemory parallel system. Though previous work, including the various benchmarks by UPC++ developers, has demonstrated the library's effectiveness in simple tasks and in porting distributed-memory parallel algorithms that are often implemented in OpenMPI, there lacks an assessment of the ease and effectiveness of porting shared-memory parallel algorithms into UPC++. We implement a number of graph algorithms in OpenMP, a common shared-memory parallel library, and port them into UPC++ in a locality-aware, communication-averse manner to evaluate the convenience, scalability, and robustness of UPC++. Tests on both a single-node, multicore system and the NERSC supercomputer (a multi-node system), with a plethora of real and random input graphs, demonstrate a number of prerequisites for high scalability in our UPC++ implementation: large input graphs, dense input graphs, and dense operations. Similar tests on our OpenMP implementation function as control, proving the algorithms' performance in shared-memory systems. Despite the relatively straightforward and naive porting from OpenMP, we still achieve competitive performance and scalability in dense algorithms on large inputs. The porting demonstrates UPC++'s ease of usage and good porting potential, especially when compared with other distributed libraries like OpenMPI. Finally, we extrapolate a distributed graph processing system on UPC++, optimized with a hybrid top-down/bottom-up approach, to simplify future distributed graph algorithm implementations.",
  links: [
    {
      url: 'https://math.mit.edu/research/highschool/primes/materials/2019/Ding.pdf',
      name: 'Technical Report',
    },
    {
      url: 'https://math.mit.edu/research/highschool/primes/program.php',
      name: 'About MIT PRIMES',
    },
  ],
}

// listings

const PROJECTS: ProjectProps[] = [
  dotFiles,
  satSolver,
  vehicleRouting,
  surrealistCloth,
  counterPointer,
  lostInTranslation,
  play24,
  neuralNetFlowchart,
  plymi,
  theCriticalReview,
  hours,
  yeetBot,
  colorize,
  cipherBusters,
  piazzaGate,
  brownLabMatch,
  commontime,
  qotw,
]

const PUBLICATIONS: PublicationProps[] = [
  deepLearningForGastricLocation,
  learningBodyAware,
  detectionOfEndoscope,
  gastricLocationClassification,
  retinopathyOfPrematurity,
  anEvaluationOf,
]

export { PROJECTS, PUBLICATIONS }
