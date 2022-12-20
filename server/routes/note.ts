import { Router } from 'express';
import {
  createNote,
  getNote,
  getNotes,
  updateNote,
  deleteNote,
} from '../controllers/note';

const router = Router();

router.get('/', getNotes);
router.get('/:id', getNote);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

export default router;
