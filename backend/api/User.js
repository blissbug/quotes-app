import { Router} from "express";
import getHome from "../controllers/getHome.js";
import addNewQuote from "../controllers/addNew.js";
import getThatQuote from "../controllers/getThatQuote.js";

const router = Router();

router.get('/all',getHome)

//router.get('/add',);

router.post('/add',addNewQuote);
router.get('/quote/:id',getThatQuote);

export default router;