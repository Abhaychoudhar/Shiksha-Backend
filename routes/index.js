import express from "express" ;
const router = express.Router() ;
import loginRoutes from "./loginRoutes.js"
import adminRoutes from "./adminRoutes.js"
import moderatorRoutes from "./moderatorRoutes.js"
import teacherRoutes from "./teacherRoutes.js"
import attendanceRoutes from "./attendanceRoutes.js"
//routes
router.use("/", loginRoutes)
router.use("/admins", adminRoutes)
router.use("/moderators", moderatorRoutes)
router.use("/teachers", teacherRoutes)
router.use("/attendance", attendanceRoutes)
export default router