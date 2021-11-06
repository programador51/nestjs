export interface ITask{

    /**
     * Id of the task on the database
     */
    id?:number,

    /**
     * Title of the task
     */
    title:string,

    /**
     * Indicates more detailed information of the task to do
     */
    description:string,

    /**
     * Indicates if the task it's already complete
     */
    isDone:boolean
}