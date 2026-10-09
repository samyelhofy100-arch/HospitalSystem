namespace HospitalSystem.Controllers
{
    public class AppointmentsController : Controller
    {
        private readonly HospitalSystemDbContext _context =
            new HospitalSystemDbContext();

        [HttpGet]
        public IActionResult Create(int doctorId)
        {
            var doctor = _context.Doctors
                .FirstOrDefault(d => d.Id == doctorId);

            if (doctor == null)
                return NotFound();

            ViewBag.Doctor = doctor;

            var appointment = new Appointment
            {
                DoctorId = doctorId
            };

            return View(appointment);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Appointment appointment)
        {
            if (!ModelState.IsValid)
            {
                ViewBag.Doctor = _context.Doctors
                    .Find(appointment.DoctorId);

                return View(appointment);
            }

            _context.Appointments.Add(appointment);

            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        public IActionResult Index()
        {
            var appointments = _context.Appointments
                .Include(a => a.Doctor)
                .ToList();

            return View(appointments);
        }
    }
}