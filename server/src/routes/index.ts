import express from "express";
import balcar from "./balcar";
import furnas from "./furnas";
import sima from "./sima";
import exportRoutes from "./exportRoutes";

const router = express.Router();

router.use("/balcar", balcar);
router.use("/furnas", furnas);
router.use("/sima", sima);
router.use("/", exportRoutes);

export default router;
