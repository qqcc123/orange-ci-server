import mongoose from "mongoose"

type taskDocument = mongoose.Document & {
    commitId: string;
}

const taskSchema = new mongoose.Schema<taskDocument>({
    commitId: String,
})

export const TaskModel : mongoose.Model<taskDocument> = mongoose.model<taskDocument>("task", taskSchema);