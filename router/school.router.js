import express from 'express';
import { createSchool, getAllSchools } from '../controller/school.controller.js';

const router = express.Router();

router.post('/', createSchool);
router.get('/', getAllSchools);

export default router;