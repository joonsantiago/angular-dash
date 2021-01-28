export interface Upload {
    /**
     * Model upload
     */
    
    id: number;
    total: number;
    success: number;
    fail: number;
    awaiting: number;
    createdAt: Date;
    updatedAt?: Date;
    deletedAte?: Date;
}