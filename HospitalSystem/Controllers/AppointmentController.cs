using HospitalSystem.Data;
using Microsoft.AspNetCore.Mvc;

namespace HospitalSystem.Controllers
{
    public class AppointmentsController : Controller
    {
        private readonly HospitalSystemDbContext _context = new HospitalSystemDbContext();

        public IActionResult Create(int doctorId)
        {
            var doctor = _context.Doctors
                .FirstOrDefault(d => d.Id == doctorId);

            if (doctor == null)
            {
                return NotFound();
            }

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
            if (ModelState.IsValid)
            {
                _context.Appointments.Add(appointment);
                _context.SaveChanges();

                return RedirectToAction("Index");
            }

            var doctor = _context.Doctors
                .FirstOrDefault(d => d.Id == appointment.DoctorId);

            ViewBag.Doctor = doctor;

            return View(appointment);
        }

        public IActionResult Index()
        {
            var appointments = _context.Appointments.ToList();

            return View(appointments);
        }
    }
}