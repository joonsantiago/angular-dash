import { Upload } from "./Upload";

export interface People {
    /**
     * Model people
     */
    
    id: number;
    name: string;
    lastUpdated: Date;
    uploads: Upload[];
}