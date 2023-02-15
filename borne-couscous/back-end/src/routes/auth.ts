import * as express from "express";

const router = express.Router();

router.post("/auth", async(req, res) => {
    res.json({status: 200, data:"ok"})
})

export default router