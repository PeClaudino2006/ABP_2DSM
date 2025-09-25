import { Router } from "express";
import { exportToCSV } from "../controllers/exportController";

const router = Router();

router.get("/export/csv", exportToCSV);

router.get("/:tabela/export/csv", exportToCSV);

export default router;
