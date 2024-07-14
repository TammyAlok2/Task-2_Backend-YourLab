

import {Router } from "express"
import { bookRegister, getAllBooks } from "../Controllers/Book.Controllers.js"


const router = Router()

router.post("/register",bookRegister)
router.get("/",getAllBooks)


export default router