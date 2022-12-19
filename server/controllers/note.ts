import Note from '../models/note';

//Users can see a list of all notes created on the application
export const getNotes = async (req: any, res: any) => {
  const notes = await Note.findAll();
  res.json(notes);
};

//Users can see a single note by its ID
export const getNote = async (req: any, res: any) => {
  const { id } = req.params;
  const note = await Note.findByPk(id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};

//Users can create a new note
export const createNote = async (req: any, res: any) => {
  const { title, content } = req.body;
  const note = await Note.create({
    title,
    content,
  });
  res.json(note);
};

//Users can update a note by its ID
export const updateNote = async (req: any, res: any) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const note = (await Note.findByPk(id))?.toJSON();
  if (note) {
    note.title = title;
    note.content = content;
    await note.save();
    res.json(note);
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};

//Users can delete a note by its ID
export const deleteNote = async (req: any, res: any) => {
  const { id } = req.params;
  const note = await Note.findByPk(id);
  if (note) {
    await note.destroy();
    res.json({ message: 'Note deleted' });
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
};