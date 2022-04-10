export interface CourseModel {
    title: string,
    user_progress: number,
    is_completed: boolean,
    number_of_lessons: number,
    description: string,
    current_user?: string,
    id?: number,
}