namespace HospitalSystem.Controllers
{
    public class DoctorsController : Controller
    {
        private readonly HospitalSystemDbContext _context =
            new HospitalSystemDbContext();

        public IActionResult Index(
            int page = 1,
            string name = "",
            string specialization = "")
        {
            int pageSize = 4;

            var doctors = _context.Doctors.AsQueryable();

            // Filter by Doctor Name
            if (!string.IsNullOrEmpty(name))
            {
                doctors = doctors.Where(d =>
                    d.Name.Contains(name));
            }

            // Filter by Specialization
            if (!string.IsNullOrEmpty(specialization))
            {
                doctors = doctors.Where(d =>
                    d.Specialization.Contains(specialization));
            }

            // Count doctors after filtering
            var totalDoctors = doctors.Count();

            // Pagination
            var doctorList = doctors
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            ViewBag.CurrentPage = page;

            ViewBag.TotalPages = (int)Math.Ceiling(
                totalDoctors / (double)pageSize
            );

            // Keep filter values
            ViewBag.Name = name;
            ViewBag.Specialization = specialization;

            return View(doctorList);
        }
    }
}
