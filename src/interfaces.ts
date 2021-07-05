import { Request, Response } from 'express';
import { ResultSetHeader } from 'mysql2';

export interface DBOperationResult {
  code: number;
  content: string;
}

export interface UpdateStringHelper {
  (req: Request): string;
}

export interface WorkWithDB {
  (req: Request): Promise<DBOperationResult>;
}

export interface AskToWorkWithDB {
  (req: Request, res: Response): Promise<void>;
}

export interface ShowResult {
  (res: ResultSetHeader[]): void;
}
