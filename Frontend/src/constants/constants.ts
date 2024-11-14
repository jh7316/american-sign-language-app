import { basic, intermediate, advanced } from "../assets/courses"
import {image1,image2,image3,image4} from '../assets/benefits'

const COURSES: Course[] = [
    {
        title: 'BASIC',
        imageUrl: basic,
        bgColor: '#C3ECCE',
        lineColor:'#4ED072',
        contents:[
            {
                title: 'ASL Basics',
                elements: [
                    'Introduction to ASL and Deaf Culture',
                    'The ASL Alphabet',
                    'Basic Greetings',
                    'Numbers 1-10',
                ]
            },
            {
                title: 'Basic Vocabulary',
                elements: [
                    'Family Signs',
                    'Common Everyday Words',
                    'Pronouns and Basic Grammar',
                ]
            },
            {
                title: 'Basic Phrases and Expressions',
                elements: [
                    'Introducing Yourself',
                    'Asking Simple Questions',
                    'Basic Yes/No Questions',
                    'Expressing Needs and Preferences'
                ]
            }
        ]
    },
    {
        title: 'INTERMEDIATE',
        imageUrl: intermediate,
        bgColor: '#FFE388',
        lineColor:'#FFB81D',
        contents:[
            {
                title: 'Building Conversations',
                elements: [
                    'Occupations, Hobbies, and Interests',
                    'People, Places, and Things',
                    'Verbs and Action Words',
                    'Sentence Structure and Grammar',
                ]
            },
            {
                title: 'Everyday Conversations',
                elements: [
                    'Time and Dates',
                    'Asking for Directions',
                    'Talking About Weather',
                    'Making Plans and Arrangements',
                ]
            },
            {
                title: 'Expressing Emotions and Opinions',
                elements: [
                    'Feelings',
                    'Expressing Preferences',
                    'Giving and Receiving Compliments',
                    'Polite Conversation and Social Etiquette in ASL'
                ]
            }
        ]
    },
    {
        title: 'ADVANCED',
        imageUrl: advanced,
        bgColor: '#FFCFC7',
        lineColor:'#FF6A50',
        contents:[
            {
                title: 'Advanced Vocabulary and Concepts',
                elements: [
                    'Health, Technology, Education',
                    'Numbers and Money',
                    'Describing Situations and Events',
                ]
            },
            {
                title: 'Storytelling and Narratives',
                elements: [
                    'Telling Short Stories',
                    'Using Facial Expressions and Body Language',
                    'Poetry and Visual Vernacular',
                    'Conversational Strategies',
                ]
            },
            {
                title: 'Deaf Culture and History',
                elements: [
                    'Understanding Deaf Culture and Community',
                    'Key Moments in Deaf History',
                    'Etiquette and Social Norms in the Deaf Community',
                ]
            }
        ]
    }
]

const BENEFITS: Benefit[] = [
    {
        img: image1,
        title: 'Boosts Brain Health and Cognitive Function',
        description: 'Learning ASL strengthens memory, mental agility, and brain function, keeping your mind sharp as you age.'
    },
    {
        img: image2,
        title: 'Enhances Communication and Social Interaction',
        description: 'ASL opens new ways to connect with both Deaf and hearing individuals, helping build meaningful relationships.'
    },
    {
        img: image3,
        title: 'Fosters Inclusivity and Lifelong Learning',
        description: 'ASL promotes understanding of the Deaf community, encouraging inclusivity and continuing intellectual growth at any age.'
    },
    {
        img: image4,
        title: 'Builds Confidence and New Skills',
        description: 'Mastering ASL helps develop valuable language skills while boosting your confidence through hands-on learning.'
    },
]

const COURSE_CONTENTS = [
    {
        name: "Beginner",
        color: "78, 208, 114",
        courses: [
            {
                title: 'ASL Basics',
                items: [
                    {
                        name: 'Introduction to ASL and Deaf Culture',
                    },
                    {
                        name: 'The ASL Alphabet',
                        link: 'http://localhost:3000/',
                    },
                    {
                        name: 'Basic Greetings',
                    },
                    {
                        name: 'Numbers 1-10',
                    },
                ]
            },
            {
                title: 'Basic Vocabulary',
                items: [
                    {
                        name: 'Family Signs',
                    },
                    {
                        name: 'Common Everyday Words',
                    },
                    {
                        name: 'Pronouns and Basic Grammar',
                    },
                ]
            },
            {
                title: 'Basic Phrases and Expressions',
                items: [
                    {
                        name: 'Introducing Yourself',
                    },
                    {
                        name: 'Asking Simple Questions',
                    },
                    {
                        name: 'Basic Yes/No Questions',
                    },
                    {
                        name: 'Expressing Needs and Preferences',
                    },
                ]
            },
        
        ]

    },
    {
        name: "Intermediate",
        color: "255, 184, 29",
        courses: [
            {
                title: 'Building Conversations',
                items: [
                    {
                        name: 'Introduction to ASL and Deaf Culture',
                    },
                    {
                        name: 'People, Places, and Things',
                    },
                    {
                        name: 'Verbs and Action Words',
                    },
                    {
                        name: 'Sentence Structure and Grammar',
                    },
                ]
            },
            {
                title: 'Everyday Conversations',
                items: [
                    {
                        name: 'Time and Dates',
                    },
                    {
                        name: 'Asking for Directions',
                    },
                    {
                        name: 'Talking About Weather',
                    },
                    {
                        name: 'Making Plans and Arrangements',
                    },
                ]
            },
            {
                title: 'Basic Phrases and Expressions',
                items: [
                    {
                        name: 'Feelings',
                    },
                    {
                        name: 'Expressing Preferences',
                    },
                    {
                        name: 'Giving and Receiving Compliments',
                    },
                    {
                        name: 'Polite Conversation and Social Etiquette in ASL',
                    },
                ]
            },
        
        ]

    },
    {
        name: "Advanced",
        color: "255, 106, 80",
        courses: [
            {
                title: 'Advanced Vocabulary and concepts ',
                items: [
                    {
                        name: 'Health, Technology, Education',
                    },
                    {
                        name: 'Numbers and Money',
                    },
                    {
                        name: 'Describing Situations and Events',
                    },
                ]
            },
            {
                title: 'Storytelling and Narratives',
                items: [
                    {
                        name: 'Telling Short Stories',
                    },
                    {
                        name: 'Using Facial Expressions and Body Language',
                    },
                    {
                        name: 'Poetry and Visual Vernacular',
                    },
                    {
                        name: 'Conversational Strategies',
                    },
                ]
            },
            {
                title: 'Deaf Culture and History',
                items: [
                    {
                        name: 'Understanding Deaf Culture and Community',
                    },
                    {
                        name: 'Key Moments in Deaf History',
                    },
                    {
                        name: 'Etiquette and Social Norms in the Deaf Community',
                    },
                ]
            },
        
        ]

    },
]

export {
    COURSES,
    BENEFITS,
    COURSE_CONTENTS
}