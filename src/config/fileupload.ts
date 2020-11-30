import { diskStorage } from 'multer';
import { editFileName } from 'src/common/utils/file-upload.utils';

export const fileUploadConfig = (filter) => ({
  storage: diskStorage({
    destination: './upload',
    filename: editFileName,
  }),
  fileFilter: filter,
})