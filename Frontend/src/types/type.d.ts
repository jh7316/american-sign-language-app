interface CourseContent {
    title: string
    elements: string[]
}

interface Course {
    title: string
    imageUrl: string
    bgColor: string
    lineColor: string
    contents: CourseContent[]
}

interface Benefit {
    img: string
    title: string
    description: string
}

interface CourseItem {
    name: string
    link?: string
}

interface CourseList {
    title: string
    items: CourseItem[]
}

declare const COURSES: Course[]
declare const BENEFITS: Benefit[]